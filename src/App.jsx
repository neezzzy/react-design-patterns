import CurrentUserLoader from "./components/container/CurrentUserLoader";
import DataLoader from "./components/container/DataLoader";
import UserItem from "./components/layout/list/UserItem";
import axios from "axios";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  return (
    <div className="App">
      <DataLoader
        getDataFunc={getServerData(
          "https://jsonplaceholder.typicode.com/users"
        )}
        resourceName="users"
      >
        <UserItem />
      </DataLoader>
    </div>
  );
}

export default App;
