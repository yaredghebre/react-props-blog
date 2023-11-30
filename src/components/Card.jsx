import React from 'react';
import getImg from '../utilities/getImg';

const getTagClass = (tag) => {
  const tagColors = {
    html: 'bg-red-500',
    css: 'bg-blue-500',
    js: 'bg-yellow-300 text-gray-900',
    php: 'bg-purple-800',
  };

  return `text-md me-2 rounded-full px-3 py-1 font-medium text-white ${tagColors[tag]} dark:${tagColors[tag]} dark:text-gray-800`;
};

const Card = (props) => {
  const { title, image, content, tags, published } = props;

  return (
    <div>
      <div className="borde h-auto w-auto transform cursor-pointer rounded-xl border-gray-600 transition duration-150 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-500">
        <div className="flex min-h-[300px] w-full items-center justify-center bg-gray-300 text-center">
          <img src={getImg('imgs/' + image)} alt="" className="rounded-t-lg" />
        </div>
        <div className="h-auto w-full rounded-b-lg bg-white p-5">
          <h1 className="mb-3 text-lg font-bold">{title}</h1>
          <p>{content}</p>
          <div className="mt-3">
            {tags.map((tag, index) => (
              <span key={index} className={getTagClass(tag)}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
