export function RenderSourceImage({
  sourceImage,
}: {
  sourceImage: string;
}) {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Original Image</h2>
      <img
        src={sourceImage}
        alt="Original"
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
}
