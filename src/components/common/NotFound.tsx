import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 text-center bg-white">
      <div className="relative mb-8">
        <h1 className="text-9xl font-extrabold text-[#7FB1E9] opacity-20 select-none md:text-[12rem]">
          404
        </h1>
        <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-800 md:text-4xl">
          Oops! Page Lost
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 mb-3 md:text-2xl">
          Looking for something?
        </h2>
        <p className="text-gray-500 mb-8 text-sm md:text-base px-2">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to={ROUTES.HOME}
            className="w-full sm:w-auto bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all active:scale-95 shadow-lg shadow-gray-200"
          >
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto border-2 border-gray-100 text-gray-600 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all active:scale-95"
          >
            Go Back
          </button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-4 opacity-10 grayscale">
        <div className="h-12 w-12 bg-[#7FB1E9] rounded-2xl rotate-12"></div>
        <div className="h-12 w-12 bg-purple-400 rounded-2xl -rotate-12"></div>
        <div className="h-12 w-12 bg-yellow-400 rounded-2xl rotate-6"></div>
      </div>
    </div>
  );
};

export default NotFound;
