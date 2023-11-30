import React from 'react';
import { posts } from '../assets/db/posts';
import Card from './Card';

const Main = () => {
  const publishedPosts = posts.filter((post) => post.published);

  const uniqueTags = [];

  publishedPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag);
      }
    });
  });

  return (
    <div>
      <main className="bg-gray-200">
        <div className="container mx-auto min-h-screen py-10">
          <h1 className="text-center text-2xl font-bold">Il mio Blog</h1>

          {/* Tags list */}
          <div className="my-5">
            <h2 className="mb-2 text-lg font-bold">Tag Utilizzati:</h2>
            <div>
              {uniqueTags.map((tag, index) => (
                <span key={index} className="mb-2 mr-2 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Posts */}
          <div className="xs:grid-cols-1 my-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {publishedPosts.map((post, i) => (
              <Card
                key={i}
                image={post.image}
                title={post.title}
                content={post.content}
                tags={post.tags}
                published={post.published}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
