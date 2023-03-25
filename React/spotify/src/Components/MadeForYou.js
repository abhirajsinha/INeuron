import React from "react";

function MadeForYou({ madeForYou }) {
  return (
    <>
      {madeForYou.map((item) => {
        return (
          <div key={item.id} className="madeforyou--section">
            <div className="mdf-cont">
              <img
                src={item.src}
                className="mdf-image"
                style={{ height: "215px", width: "200px" }}
              />
              <p>{item.imageHeading}</p>
            </div>
            <div className="mdf--headings">
              <h2>{item.heading}</h2>
              <p>{item.p}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MadeForYou;
