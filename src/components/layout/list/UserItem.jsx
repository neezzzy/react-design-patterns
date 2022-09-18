import React from "react";
import UserListItem from "./UserListItem";

export default function UserItem({ users }) {
  return (
    <div>
      {users ? (
        users.map((user) => <li key={user.id}>{user.name}</li>)
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}
