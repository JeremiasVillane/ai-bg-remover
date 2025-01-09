import React, { useRef, useState, useEffect } from "react";
import * as bodyPix from "@tensorflow-models/body-pix";
import * as tf from "@tensorflow/tfjs";

export const ImageProcessor = () => {
  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [model, setModel] = useState<bodyPix.BodyPix | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModelLoading, setIsModelLoading] = useState(true);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        setIsModelLoading(true);
        await tf.ready();
        await tf.setBackend("webgl");

        const loadedModel = await bodyPix.load({
          architecture: "MobileNetV1",
          outputStride: 16,
          multiplier: 0.75,
          quantBytes: 2,
        });
        setModel(loadedModel);
        setIsModelLoading(false);
      } catch (err) {
        setError("Failed to load AI model. Please try again later.");
        setIsModelLoading(false);
        console.error("Error loading model:", err);
      }
    };

    loadModel();

    return () => {
      if (model) {
        model.dispose();
      }
    };
  }, []);

  const processImage = async (imageElement: HTMLImageElement) => {
    if (!model || !canvasRef.current) return;

    try {
      const segmentation = await model.segmentPerson(imageElement);

      const canvas = canvasRef.current;
      canvas.width = imageElement.width;
      canvas.height = imageElement.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(imageElement, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      for (let i = 0; i < segmentation.data.length; i++) {
        const isBackground = !segmentation.data[i];
        if (isBackground) {
          pixels[i * 4 + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      const resultDataUrl = canvas.toDataURL("image/png");
      setResultImage(resultDataUrl);
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

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">AI Background Remover</h1>
        <p className="text-gray-600">
          Upload an image to remove its background using AI
        </p>
      </div>

      {isModelLoading ? (
        <div className="flex items-center justify-center gap-2 mb-8">
          <span>Loading AI model...</span>
        </div>
      ) : (
        <div className="mb-8">
          <label className="block w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={isProcessing}
            />
            <p className="text-gray-600">
              {isProcessing
                ? "Processing..."
                : "Click or drag image here to upload"}
            </p>
          </label>
        </div>
      )}

      {error && (
        <div className="mb-8 p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      {isProcessing && (
        <div className="flex items-center justify-center gap-2 mb-8">
          <span>Processing image...</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sourceImage && (
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Original Image</h2>
            <img
              src={sourceImage}
              alt="Original"
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}

        {resultImage && (
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Result</h2>
            <img
              src={resultImage}
              alt="Result"
              className="w-full h-auto rounded-lg bg-gray-100"
            />
            <button
              onClick={downloadResult}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Download Result
            </button>
          </div>
        )}
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};
