import React from "react";

const imageData = [
  { src: "GodOfWar.jpg", alt: "God of War", width: 200, height: 300 },
  { src: "Crash.jpg", alt: "Crash", width: 200, height: 300 },
  { src: "Sackboy.jpg", alt: "Sackboy", width: 200, height: 300 }
];

const Body = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h4 className="p-3 bg-white text-dark">Advertisement List</h4>
          {imageData.map((image, index) => (
            <div className="col p-3" key={index}>
              <img
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
              />
              <div className="container mt-3">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-target="#demo"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
