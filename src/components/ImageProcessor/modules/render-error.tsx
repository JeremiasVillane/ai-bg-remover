export function RenderError({ error }: { error: string }) {
  return (
    <div className="mb-8 p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>
  );
}
