export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2">
          <span className="font-semibold text-xl">AI Background Remover</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <>ImageProcessor</>
      </main>

      <footer className="mt-auto py-6 text-center text-gray-600">
        <p>Powered by TensorFlow.js and BodyPix</p>
      </footer>
    </div>
  );
}
