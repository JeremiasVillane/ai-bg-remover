import { Loader2, Upload } from "lucide-react";
import { useBodyPixModel, useImageProcessing } from "../hooks";

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
        <div className="flex items-center justify-center gap-2 mb-8">
          <Loader2 className="animate-spin" />
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
            <Upload className="mx-auto mb-4 text-gray-400" size={48} />
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
          <Loader2 className="animate-spin" />
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
}
