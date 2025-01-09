import type { BodyPix } from "@tensorflow-models/body-pix";
import { useRef, useState } from "react";
import { processImageWithBodyPix } from "../utils/image-processing";

interface UseImageProcessingProps {
  model: BodyPix | null;
}

export const useImageProcessing = ({ model }: UseImageProcessingProps) => {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const processImage = async (imageElement: HTMLImageElement) => {
    if (!model || !canvasRef.current) return;

    try {
      const processedImageUrl = await processImageWithBodyPix({
        model,
        imageElement,
        canvas: canvasRef.current,
      });
      setResultImage(processedImageUrl);
    } catch (err) {
      setError("Failed to process image. Please try again.");
      console.error("Error processing image:", err);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    setError(null);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      setSourceImage(dataUrl);

      const img = new Image();
      img.onload = () => {
        processImage(img).finally(() => setIsProcessing(false));
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  };

  const downloadResult = () => {
    if (!resultImage) return;

    const link = document.createElement("a");
    link.download = "removed-background.png";
    link.href = resultImage;
    link.click();
  };

  return {
    sourceImage,
    resultImage,
    isProcessing,
    error,
    canvasRef,
    handleImageUpload,
    downloadResult,
  };
};
