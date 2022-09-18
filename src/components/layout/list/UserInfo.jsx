import React from "react";
import UserListItem from "./UserListItem";

export default function UserInfo({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) {
  return items ? (
    <>
      {items.map((item) => (
        <ItemComponent key={item.id} {...{ item }} />
      ))}
    </>
  ) : (
    <h1>Loading...</h1>
  );
}
