import React from "react";


function Image(props) {
 

  return (
    <>
      <div className="p-5 rounded-3xl shadow-md bg-white">
        <div className="rounded-3xl">
          <img
            src={props.urls.full}
            alt={props.alt_description || "Unsplash Image"}
            lazy="lazy"
            className="h-52 object-fit object-cover w-full lg:h-80 rounded-3xl"
          />
        </div>
      </div>
    </>
  );
}

export default Image;



