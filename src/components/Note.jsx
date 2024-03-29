import React from "react";
//5. Create a Note.jsx component to show a <div> element with a <h1> for a title and a <p> for the content.

function Note(props) {
  function deleteNote() {
    props.onDelete(props.id);
  }

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1> {props.title} </h1>
      <p> {props.content} </p>
      <button onClick={handleClick}> Delete </button>
    </div>
  );
}

export default Note;
