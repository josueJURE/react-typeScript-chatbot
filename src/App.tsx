import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <>
      <div className="parent-container">
        <div className="main-container">
          <Header />
          <div className="responseElement"></div>
          <div className="inputAndButton">
            <Input />
            <Button />
          </div>

          <script src="index.js"></script>
        </div>
      </div>
    </>
  );
}

export default App;
