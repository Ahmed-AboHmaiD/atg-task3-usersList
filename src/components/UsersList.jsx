import React from "react";
import Spinner from "./Spinner";
import UserListItem from "./UserListItem";

const UserList = ({ users, isLoading, handleScrollClick }) => {
  return (
    <div className="flex flex-col justify-center text-center relative w-full text-sm md:text-lg">
      <div className="uppercase rounded-tr-md rounded-tl-md bg-custom_1 text-white font-bold p-2">
        Users List
      </div>
      {isLoading ? (
        <Spinner message="Loading Users..." />
      ) : (
        <ul className="mt-1">
          {users?.map((user) => (
            <UserListItem key={user.id} user={user} handleScrollClick={handleScrollClick}/>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
