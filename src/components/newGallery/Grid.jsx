import React from "react";






export function Grid({ children }) { 
  return (
    <div className="p-10  container mx-auto grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 ">
      {children}
    </div>
  );
}

// export default Grid;
