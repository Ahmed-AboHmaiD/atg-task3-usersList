import React from "react";
import { motion } from "framer-motion";

const UserDetailsItem = ({ info }) => {
  return (
    <div className="mt-6 text-left">
      <motion.p
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="font-semibold flex items-center gap-1"
      >
        <info.icon className="text-lg text-custom_1" />
        {info.title}:
      </motion.p>
      <motion.p
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="ml-8 mt-1 bg-custom_2 dark:bg-dark_2 py-3 px-2 rounded-md shadow-sm font-medium"
      >
        {info.text}
      </motion.p>
    </div>
  );
};

export default UserDetailsItem;
