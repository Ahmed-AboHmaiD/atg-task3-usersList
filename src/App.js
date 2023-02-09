import UserInfo from "./components/UsersInfo";
import UserList from "./components/UsersList";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const api = axios.create({
    baseURL: "https://602e7c2c4410730017c50b9d.mockapi.io/users",
  });

  const getData = useCallback(async () => {
    try {
      let data = await api.get("/").then((data) => data.data);
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [getData]);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-7 p-8 sm:p-14">
      <div className="flex-initial sm:w-1/2">
        <UserList users={data} isLoading={isLoading} />
      </div>
      <div className="flex-1 sm:w-1/2">
        <UserInfo users={data} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
