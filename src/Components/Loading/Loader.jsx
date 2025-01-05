import React from "react";

const Loader = () => {
  return (
    <div className="flex absolute top-[50%] left-[50%] justify-center items-center">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

export default Loader;
