import React from "react";
import "./UserListStyle.css";
const UserList = ({ users }) => {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>{" "}
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
              </tr>
            );
          })}{" "}
        </tbody>{" "}
      </table>
    </>
  );
};

export default UserList;
