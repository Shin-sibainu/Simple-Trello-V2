import AddButton from "./components/atoms/button/AddButton";
import Header from "./components/pages/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <AddButton />
      </div>
    </div>
  );
}

export default App;
