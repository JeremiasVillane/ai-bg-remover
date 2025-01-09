import { ImageMinus } from "lucide-react";
import { ImageProcessor } from "./components/ImageProcessor";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2">
          <ImageMinus className="text-blue-500" />
          <span className="font-semibold text-xl">AI Background Remover</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <ImageProcessor />
      </main>

      <footer className="mt-auto py-6 text-center text-gray-600">
        <p>Powered by TensorFlow.js and BodyPix</p>
        <p className="text-sm italic border-t border-gray-300 pt-1 mt-2 w-48 self-center mx-auto">
          Author:{" "}
          <a
            href="https://github.com/JeremiasVillane"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-medium hover:underline"
          >
            Jeremias Villane
          </a>
        </p>
      </footer>
    </div>
  );
}
