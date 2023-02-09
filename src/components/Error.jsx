import React from "react";
import { BiError } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export const Error = () => {
  toast.error("Sorry, an error happened.", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={1}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <motion.div
        className="mt-6 font-semibold flex flex-col items-center"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
      >
        <motion.div
          initial={{ rotate: 90, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BiError className="text-5xl dark:text-white" />
        </motion.div>
        <p className="text-lg dark:text-white">Error, no data to show</p>
      </motion.div>
    </>
  );
};
