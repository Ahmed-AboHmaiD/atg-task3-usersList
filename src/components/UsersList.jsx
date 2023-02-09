import React from "react";
import { Error } from "./Error";
import Spinner from "./Spinner";
import UserListItem from "./UserListItem";

const UserList = ({ users, isLoading, handleScrollClick, isError }) => {
  return (
    <div className="flex flex-col justify-center text-center bg-slate-50/40 dark:bg-col relative w-full text-sm md:text-lg">
      <div className="uppercase rounded-tr-md rounded-tl-md bg-custom_1 text-white font-bold p-2">
        Users List
      </div>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Spinner message="Loading Users..." />
      ) : (
        <ul className="mt-1">
          {users?.map((user) => (
            <UserListItem
              key={user.id}
              user={user}
              handleScrollClick={handleScrollClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
