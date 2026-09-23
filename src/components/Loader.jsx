import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
};

export default Loader;
