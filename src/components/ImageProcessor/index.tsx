import { useBodyPixModel, useImageProcessing } from "../../hooks";
import {
  RenderError,
  RenderImageUploader,
  RenderLoader,
  RenderProcessing,
  RenderResultImage,
  RenderSourceImage,
} from "./modules";

export function ImageProcessor() {
  const { model, error: modelError, isModelLoading } = useBodyPixModel();
  const {
    sourceImage,
    resultImage,
    isProcessing,
    error: processingError,
    canvasRef,
    handleImageUpload,
    downloadResult,
  } = useImageProcessing({ model });

  const error = modelError || processingError;

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">AI Background Remover</h1>
        <p className="text-gray-600">
          Upload an image to remove its background using AI
        </p>
      </div>

      {isModelLoading ? (
        <RenderLoader />
      ) : (
        <RenderImageUploader {...{ handleImageUpload, isProcessing }} />
      )}

      {error && <RenderError {...{ error }} />}

      {isProcessing && <RenderProcessing />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sourceImage && <RenderSourceImage {...{ sourceImage }} />}

        {resultImage && (
          <RenderResultImage {...{ resultImage, downloadResult }} />
        )}
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
