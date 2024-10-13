import React from "react";
import axios from "axios";

const getUserDetails = async () => {
  const { data } = await axios.get("http://localhost:3000/api/user");
  console.log(data);
  return data;
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
