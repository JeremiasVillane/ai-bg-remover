export function Footer() {
  return (
    <footer className="mt-auto py-6 text-center text-sm text-gray-600 flex md:flex-row flex-col gap-1 md:gap-3 items-center justify-center absolute bottom-0 w-full bg-white border-t border-gray-300">
      <p>
        Powered by <span className="font-medium">TensorFlow.js</span> and{" "}
        <span className="font-medium">BodyPix</span>
      </p>
      <p className="md:border-l border-none pl-0 md:pl-3 border-gray-300">
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
  );
}
