import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import React from "react";
import client from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          body,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => {
        setSinglePost(data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching single post:", error);
        setIsLoading(false);
      });
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">
          Loading...
        </h1>
      ) : (
        <section className="px-5 xl:max-w-6xl xl:mx-auto pb-10 ">
          <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl text-center mt-5">
            {singlePost.title}
          </h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.mainImage.alt || singlePost.title}
              title={singlePost.title}
              className="blog__image rounded-t content"
            />
          )}
          <p>by Sunil Surendran</p>
          <h2 className="uppercase font-bold text-xl tracking-wide  md:text-xl lg:text-2xl">
            {singlePost.title}
          </h2>
          <div className="block__content">
            <BlockContent
              blocks={singlePost.body}
              projectId="ho68atya"
              dataset="production"
            >
              {singlePost}
            </BlockContent>
          </div>
          <button className="py-5">
            <Link
              to="/blog"
              className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
            >
              Back to blogs
            </Link>
          </button>
        </section>
      )}
    </>
  );
}
