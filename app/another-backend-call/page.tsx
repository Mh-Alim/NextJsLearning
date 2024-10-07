import React from "react";

const getUserDetails = async () => {
  const data = await fetch("http://localhost:3000/api/user");
  const json = await data.json();
  console.log(json);
  return json;
};
const page = async () => {
  const user = await getUserDetails();
  return (
    <div className=" flex flex-col justify-center items-center h-[90vh] ">
      <div>{user.username}</div>
      <div>{user.password}</div>
    </div>
  );
};

export default page;
