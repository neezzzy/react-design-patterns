import DescriptionView from "./components/layout/DescriptionView";
import ProfileCardView from "./components/layout/ProfileCardView";
import SplitScreen from "./components/layout/SplitScreen";

function App() {
  return (
    <div className="App">
      <SplitScreen left={ProfileCardView} right={DescriptionView} />
    </div>
  );
}

export default App;
