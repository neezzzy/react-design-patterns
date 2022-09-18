import CurrentUserLoader from "./components/container/CurrentUserLoader";
import DataLoader from "./components/container/DataLoader";
import UserItem from "./components/layout/list/UserItem";
import printProps from "./components/hoc/printProps";
import axios from "axios";
import { DangerButton } from "./components/functional/partiallyApply";

const UserItemWrapper = printProps(UserItem);

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
        {/* <UserItem /> */}
        <UserItemWrapper />
      </DataLoader>

      <DangerButton />
    </div>
  );
}

export default App;
