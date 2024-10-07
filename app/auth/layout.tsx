import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className=" p-4 border-b text-center ">Auth page</div>
      {children}
    </div>
  );
};

export default layout;
