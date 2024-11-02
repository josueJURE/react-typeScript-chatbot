import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="parent-container">
        <div className="main-container">
          <Header />
          <div className="responseElement"></div>
          <div className="inputAndButton">
            <input
              className="userInput"
              type="text"
              placeholder="enter your question"
            />
            <Button />
          </div>

          <script src="index.js"></script>
        </div>
      </div>
    </>
  );
}

export default App;
