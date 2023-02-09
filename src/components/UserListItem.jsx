import React from "react";
import { Link } from "react-router-dom";

const UserListItem = ({ user }) => {
  return (
    <Link to={`/user/${user.id}`}>
      <div className="mt-3 px-4 shadow-sm bg-slate-100 w-full py-3 cursor-pointer rounded-sm flex items-center relative transition-all duration-100 ease-in focus:bg-slate-200 before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-full before:bg-slate-200 before:-z-10 z-10 before:transition-all before:duration-300 hover:before:w-full">
        <div>
          <img
            src={`https://ui-avatars.com/api/?name=${user.profile.firstName}+${user.profile.lastName}?background=random?font-size=0.33`}
            alt="user-avatar"
            className="rounded-full w-11 md:w-12"
          />
        </div>
        <p className="ml-3 font-semibold">
          {user.profile.firstName} {user.profile.lastName}
        </p>
      </div>
    </Link>
  );
};

export default UserListItem;
