import { useState, useEffect } from "react";
import './HomePage.css';
import axios from "axios";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

function HomePage() {
  const [notes, setNotes] = useState([]);

  // Obtener notas al cargar la página
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/api/notas");
    setNotes(res.data);
  };

  // Crear una nueva nota
  const handleCreateNote = async (newNote) => {
    await axios.post("http://localhost:5000/api/notas", newNote);
    fetchNotes(); // Actualizar la lista
  };

  return (
    <div className="home-container">
        <div className="MisNotas">
          <h1>Mis Notas 📝</h1>
          <NoteForm onSubmit={handleCreateNote} />
        </div>
        <div>
          <NoteList notes={notes} />
        </div>
    </div>
  );
}

export default HomePage;