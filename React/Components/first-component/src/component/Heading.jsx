import React from "react";

function Heading() {
  let title = ["one", "two", "three", "four", "five"];

  return (
    <>
      {title.map((data, i) => {
        return (
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title" key={i}>{data}</h5>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Heading;
