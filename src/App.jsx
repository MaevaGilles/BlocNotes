import { useState } from 'react'
import uuid from 'react-uuid'
import './App.scss'
import Sidebar from "./Sidebar"
import Main from "./Main"

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    const newNote = {
    id: uuid(),
    title: "Untitled Note",
    body: "",
    lastModified: Data.now(),
    };
    setNotes([newNote,...notes]);
  };



  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} />
      <Main />
    </div>
  )
}

export default App
