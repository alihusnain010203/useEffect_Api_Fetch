import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";
const url = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);

  return (
    <>
      <Header />
      <UserList users={users}/>
    </>
  );
}

export default App;
