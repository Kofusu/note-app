import { useState } from "react";
import { getNotes } from "./api/noteApi";
import Header from "./components/Header/Header";
import InputSection from "./components/InputSection/InputSection";
import NoteSection from "./components/NoteSection/NoteSection";

const App = () => {
  const [notes, setNotes] = useState(getNotes());
  const [isOnSearch, setIsOnSearch] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const deleteHandler = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  };

  const searchHandler = (e) => {
    setSearchVal(e.target.value);
    e.target.value !== "" ? setIsOnSearch(true) : setIsOnSearch(false);
  };

  const archiveHandler = (id) => {
    setNotes((prevNotes) => {
      const updatedNote = prevNotes.find((note) => note.id === id);
      updatedNote.archived = !updatedNote.archived;
      return [...prevNotes.filter((note) => note.id !== id), updatedNote];
    });
  };

  const addNoteHandler = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const getDisplayNotes = () => {
    return isOnSearch
      ? notes.filter((note) => {
          return note.title.toLowerCase().includes(searchVal.toLowerCase());
        })
      : notes;
  };

  return (
    <>
      <Header onSearch={searchHandler} value={searchVal} />
      <main>
        <InputSection onAdd={addNoteHandler} />
        <NoteSection
          notes={getDisplayNotes()}
          onArchive={archiveHandler}
          onDelete={deleteHandler}
        />
      </main>
    </>
  );
};

export default App;
