import React from "react";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to React Tutorial</h1>
      <p className="text-gray-600 dark:text-gray-300 text-center">
        Select a Tutorial in order to learn.
      </p>
    </div>
  );
}

export default Home;
