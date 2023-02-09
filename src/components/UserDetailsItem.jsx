import React from "react";

const UserDetailsItem = ({info}) => {
  return (
    <div className="mt-6 text-left">
      <p className="font-semibold flex items-center gap-1">
        <info.icon className="text-lg text-custom_1" />
        {info.title}:
      </p>
      <p className="ml-8 mt-1 bg-custom_2 py-3 px-2 rounded-md shadow-sm font-medium">
        {info.text}
      </p>
    </div>
  );
};

export default UserDetailsItem;
