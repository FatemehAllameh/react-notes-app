import AddNewNote from "./components/AddNewNote";
import NotesList from "./components/NotesList";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="header"></div>
        <div className="note-app">
          <AddNewNote />
          <NotesList />
        </div>
      </div>
    </>
  );
}

export default App;
