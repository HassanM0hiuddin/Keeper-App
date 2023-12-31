import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevValues) => {
      return [...prevValues, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevValues) => {
      return prevValues.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((note, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={note.title}
            content={notes.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
