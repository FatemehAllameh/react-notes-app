function AddNewNote() {
  return (
    <>
      <div className="add-new-note">
        <h2 className="add-new-note__title">Add New Note</h2>
        <form className="note-form">
          <input type="text" className="text-field" placeholder="Note title" />
          <input
            type="text"
            className="text-field"
            placeholder="Note description"
          />
          <button type="submit" className="btn">
            Add New Note
          </button>
        </form>
      </div>
    </>
  );
}

export default AddNewNote;
