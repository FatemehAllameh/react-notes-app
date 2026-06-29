import { FaTrash } from "react-icons/fa";
function NotesList() {
  return (
    <>
      <div className="notes-list">
        <NoteItem />
      </div>
    </>
  );
}

export default NotesList;

function NoteItem() {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="note-item">
      <div className="note-body">
        <div className="note__content">
          <h3 className="note__title">React</h3>
          <p className="note__desc">Learning React.js</p>
        </div>
        <div className="note__actions">
          <button className="note__delete">
            <FaTrash />
          </button>
          <input type="checkbox" className="note__check" />
        </div>
      </div>
      <div className="note-footer">
        {new Date().toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
