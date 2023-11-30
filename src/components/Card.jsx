import React from 'react';

const Card = (props) => {
  return (
    <div>
      <div className="h-[400px] w-[600px] rounded-xl border">
        <div className="flex h-4/5 w-full items-center justify-center bg-gray-300 text-center">
          <p className="text-5xl font-thin">600 x 400</p>
        </div>
        <div className="h-auto w-full bg-white p-5">
          <h1 className="mb-3 text-lg font-bold">
            {props.title ?? 'Titolo del post'}
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            eaque temporibus, laborum tenetur iste, officiis ut beatae sint
            molestiae vitae provident, ipsa necessitatibus magnam perspiciatis
            in. Ab in libero dolores.
          </p>
          <button className="mb-2 me-2 mt-3 bg-yellow-400 px-5 py-2.5 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900">
            LEGGI DI PIÙ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
