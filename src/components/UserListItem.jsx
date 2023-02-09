import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const UserListItem = ({ user, handleScrollClick }) => {
  const notActiveClass =
    "mt-3 px-4 shadow-sm dark:bg-colItem dark:text-white bg-slate-100 w-full py-3 cursor-pointer rounded-sm flex items-center relative transition-all duration-100 ease-in before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-full before:bg-gray-200/70 before:dark:bg-colItemHover before:-z-10 z-10 before:transition-all before:duration-200 before:rounded-sm hover:before:w-full hover:-translate-y-[2px]";
  const activeClass =
    "bg-gray-200 mt-3 px-4 shadow-md dark:bg-colItemHover dark:text-white w-full py-3 cursor-pointer rounded-sm flex items-center relative transition-all duration-100 ease-in before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-full before:bg-gray-200/70 before:dark:bg-colItemHover before:-z-10 z-10 before:transition-all before:duration-200 before:rounded-sm hover:before:w-full hover:-translate-y-[2px]";

  return (
    <motion.div
      onClick={handleScrollClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <NavLink
        to={`/user/${user.id}`}
        className={({ isActive }) => (isActive ? activeClass : notActiveClass)}
      >
        <div>
          <motion.img
            src={`https://ui-avatars.com/api/?name=${user.profile.firstName}+${user.profile.lastName}?background=random?font-size=0.33`}
            alt="user-avatar"
            className="rounded-full w-11 md:w-12"
            initial={{ rotate: 90 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <motion.p
          className="ml-3 font-semibold"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
        >
          {user.profile.firstName} {user.profile.lastName}
        </motion.p>
      </NavLink>
    </motion.div>
  );
};

export default UserListItem;
