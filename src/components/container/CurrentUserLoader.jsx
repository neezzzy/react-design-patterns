import React, { useEffect, useState } from "react";
import axios from "axios";
export default function CurrentUserLoader({ children }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );
      setItems(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { items });
        }
        return child;
      })}
    </>
  );
}
