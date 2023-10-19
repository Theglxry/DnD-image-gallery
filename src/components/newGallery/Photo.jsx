import React, { forwardRef } from "react";
import LazyLoad from "react-lazy-load";







export const Photo = forwardRef(({ url, brand,index, ...props }, ref) => {

  const inlinestyle = {
    // height: index === 0 ? 410 : 200,
  }


  return (
    <div ref={ref} {...props} style={inlinestyle} className="p-5 rounded-3xl shadow-md bg-white cursor-grab">
      <div className="rounded-3xl">
        <LazyLoad height={250} offset={100}>
          <img
            src={url}
            alt={brand || "Unsplash Image"}
            loading="lazy"
            className="h-72 lg:h-80 w-full object-cover rounded-3xl"
          />
        </LazyLoad>

        <p className="p-2 font-semibold underline decoration-sky-500">{brand}</p>
      </div>
    </div>
  );
});

// export default Photo;
