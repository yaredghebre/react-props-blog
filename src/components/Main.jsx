import React from 'react';
import Card from './Card';

const Main = () => {
  return (
    <div>
      <main className="h-screen w-full bg-gray-200 py-10">
        <h1 className="text-center text-2xl font-bold">Il mio Blog</h1>
        <div className="my-10 flex flex-col items-center justify-center ">
          <Card title="ciao" />
        </div>
      </main>
    </div>
  );
};

export default Main;
