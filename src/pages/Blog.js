import { useState, useEffect } from "react";
import React from "react";
import client from "../client"; // Make sure this is stable and not re-initialized
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Ensure that the client is not re-creating a new instance on each render
    client
      .fetch(
        `*[_type=="post"] {
          title,
          slug,
          body,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []); // Empty dependency array means this runs only once

  console.log(posts);

  return (
    <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
      <h1 className="font-bold text-4xl mt-5 mb-5 tracking-widest text-center md:text-6xl lg:text-8xl">
        Blog Page
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug.current}>
            <img src={post.mainImage.asset.url} alt={post.title} />
            <h4 className="text-xl mt-2">{post.title}</h4>
            <button className="mt-5 mb-10">
              <Link
                to={`/blog/${post.slug.current}`}
                className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-block transition-all duration-500 hover:text-black font-bold"
              >
                Read Full Article
              </Link>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
