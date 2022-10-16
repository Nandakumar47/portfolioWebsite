import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Home/>
    </div>
  );
}

export default App;
