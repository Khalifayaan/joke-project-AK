


import React from "react";

const TwoPart = ({ data }) => {
  return (
    <div className="content">
      <h2 className="joke">{data.show}</h2>
      <h2 className="punch-line">{data.display}</h2>
    </div>
  );
};

export default TwoPart;
