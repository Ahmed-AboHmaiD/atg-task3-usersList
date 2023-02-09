import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { RxDoubleArrowRight } from "react-icons/rx";
import UserDetailsItem from "./UserDetailsItem";

const UserDetails = ({ user }) => {
  const details = [
    { id: 1, title: "About", text: user.Bio, icon: AiFillInfoCircle },
    {
      id: 2,
      title: "Full Name",
      text: `${user.profile.firstName} ${user.profile.lastName}`,
      icon: RxDoubleArrowRight,
    },
    {
      id: 3,
      title: "Job Title",
      text: user.jobTitle,
      icon: RxDoubleArrowRight,
    },
    {
      id: 4,
      title: "Email",
      text: user.profile.email,
      icon: RxDoubleArrowRight,
    },
  ];

  return (
    <div className="flex flex-col px-3 mt-3 user-details">
      <div className="flex flex-col items-center text-center">
        <img
          src={`https://ui-avatars.com/api/?name=${user.profile.firstName}+${user.profile.lastName}?background=random?font-size=0.33`}
          alt="user-avatar"
          className="rounded-full max-w-full w-32 md:w-40 shadow-sm"
        />
        <p className="mt-3 font-medium">@{user.profile.username}</p>
      </div>
      {details.map((item) => (
        <UserDetailsItem key={item.id} info={item} />
      ))}
    </div>
  );
};

export default UserDetails;
