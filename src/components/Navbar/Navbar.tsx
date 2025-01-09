import { AlignRight, ImageMinus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { renderMenuItems } from "./modules";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b fixed top-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <ImageMinus className="text-blue-500 size-8" />
              <span className="font-bold text-xl text-gray-900">
                BackgroundAI
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              {renderMenuItems()}
              <Link
                to="/app"
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>

            <div className="relative md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <AlignRight className="block size-6" />
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div
              className="md:hidden absolute top-16 shadow-md right-0 bg-white"
              id="mobile-menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {renderMenuItems(true)}
                <Link
                  to="/app"
                  className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
