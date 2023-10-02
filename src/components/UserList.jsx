import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
//https://randomuser.me/api/?results=5
function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=10");
    setUsers(response.data.results);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="pt-4 flex flex-wrap">
        {users &&
          users.map((user, index) => (
            <div key={index}>
              <User user={user}></User>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UserList;
