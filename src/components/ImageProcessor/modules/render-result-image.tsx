export function RenderResultImage({
  resultImage,
  downloadResult,
}: {
  resultImage: string;
  downloadResult: () => void;
}) {
  return (
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
  );
}
