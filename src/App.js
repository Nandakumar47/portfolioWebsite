import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
function App() {
  window.addEventListener("scroll", function () {
    console.log(this.window.scrollY);
  });
  return (
    <div className="app">
      <NavBar />
      <Home/>
    </div>
  );
}

export default App;
