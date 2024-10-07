import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className=" p-5 border-b text-center ">
        20% off for the next two weeks
      </div>
      {children}
    </div>
  );
};

export default layout;
