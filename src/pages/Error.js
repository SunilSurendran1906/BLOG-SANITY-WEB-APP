import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div>
        <section className="flex flex-col items-center justify-center h-screen">
          <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl">
            Error 404 | page is not Found
          </h1>
          <button>
            <Link
              to="/"
              className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-block transition-all duration-500 hover:text-black font-bold"
            >
              You Wanna Back to Home Page
            </Link>
          </button>
        </section>
      </div>
    </>
  );
}
