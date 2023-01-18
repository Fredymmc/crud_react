import axios from "axios";
import { useEffect, useState } from "react";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import "./styles2.css";

function App() {

  const [userList, setUserList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((res) => setUserList(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((res) => setUserList(res.data));
  };

  const selectUser = (user) => {    
    setUserSelected(user);    
  };

  document.body.style = `background:#a7a7a7 `;
  
  return (
    <div className="App">
      <h1>USERS</h1>
       <UsersForm 
       getUsers={getUsers} 
       userSelected={userSelected}
       selectUser={selectUser}/>
       <UsersList 
       userList={userList} 
       getUsers={getUsers} 
       selectUser={selectUser} />
    </div>
  );
}

export default App;
