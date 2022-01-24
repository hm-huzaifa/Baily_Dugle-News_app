import React from "react";
import PacManLoader from "./PacManLoader.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img className="my-3" src={PacManLoader} alt="Loading..." />
    </div>
  );
};
export default Spinner;
