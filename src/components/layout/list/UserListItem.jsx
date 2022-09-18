import React from "react";

export default function UserListItem({ user }) {
  const { name, username, email } = user;
  return (
    <article>
      <header>{name}</header>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </article>
  );
}
