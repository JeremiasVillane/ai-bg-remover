import { Upload } from "lucide-react";

export function RenderImageUploader({
  handleImageUpload,
  isProcessing,
}: {
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isProcessing: boolean;
}) {
  return (
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
  );
}
