import React from "react";
import { useParams } from "react-router-dom";
import { Error } from "./Error";
import Spinner from "./Spinner";
import UserDetails from "./UserDetails";

const UserInfo = ({ users, isLoading, isError }) => {
  const { id } = useParams();

  return (
    <div className="flex flex-col justify-center bg-slate-50/40 dark:bg-col dark:text-white relative text-center w-full text-sm md:text-lg">
      <div className="uppercase rounded-tr-md rounded-tl-md bg-custom_1 text-white font-bold p-2">
        Users Details
      </div>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Spinner message="Loading User Details..." />
      ) : id ? (
        users
          .filter((user) => user.id === id)
          .map((user) => <UserDetails key={user.id} user={user} />)
      ) : (
        <h1 className="mt-10 sm:mt-40 text-lg md:text-xl font-semibold">
          Click on a user to display their information.
        </h1>
      )}
    </div>
  );
};

export default UserInfo;
