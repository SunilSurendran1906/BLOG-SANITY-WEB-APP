import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl">
          Car blogs
        </h1>
        <button>
          <Link to="/blog" className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-block transition-all duration-500 hover:text-black font-bold">React More to Car Posts</Link>
        </button>
      </section>
    </div>
  );
}
