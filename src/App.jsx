import AddNewNote from "./components/AddNewNote";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="header"></div>
        <div className="note-app">
          <AddNewNote />
          <div className="notes-list"></div>
        </div>
      </div>
    </>
  );
}

export default App;
