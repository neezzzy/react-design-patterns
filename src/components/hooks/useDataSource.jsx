import { useEffect, useState } from "react";

export const useDataSource = (getResourceFunc) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getResourceFunc();
      setResource(response.data);
    })();
  }, [getResourceFunc]);

  return resource;
};
