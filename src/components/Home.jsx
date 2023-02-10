import React from "react";
import UserInfo from "./UsersInfo";
import UserList from "./UsersList";
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const ref = useRef(null);

  const handleScrollClick = () => {
    if (window.innerWidth < 640) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const api = axios.create({
    baseURL: "https://602e7c2c4410730017c50b9d.mockapi.io/users",
  });

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      let data = await api.get("/").then((data) => data.data);
      setData(data);
      setIsLoading(false);
      setIsError(false);
    } catch (err) {
      setIsError(true);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <>
      <div className="pt-8 pb-4 px-8 shadow-md">
        <Navbar />
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-7 p-8 sm:p-14">
        <div className="sm:w-1/2 flex-1 shadow-sm">
          <UserList
            users={data}
            isLoading={isLoading}
            isError={isError}
            handleScrollClick={handleScrollClick}
          />
        </div>
        <div className="sm:w-1/2 shadow-sm" ref={ref}>
          <UserInfo users={data} isLoading={isLoading} isError={isError} />
        </div>
      </div>
    </>
  );
};

export default Home;
