import Header from "./components/pages/Header";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
