import { useState } from "react";

function NoteForm({ onSubmit, initialData, isEditing }) {
  const [note, setNote] = useState(initialData || { 
    title: '', 
    content: '', 
    priority: 'media' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title.trim()) {
      alert('El título es obligatorio');
      return;
    }
    onSubmit(note);
  };

  return (
    <form onSubmit={handleSubmit} className="ContenedorNoteForm">
      Titulo: 
      <br></br> 
      <input
        type="text"
        placeholder="Título"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
        required
      />
      <br></br>
      <br></br>
      Contenido:
      <br></br>
      <textarea
        placeholder="Contenido"
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
      />
      <br></br>
      <br></br>
      Urgencia:
      <br></br>
      <select
        value={note.priority}
        onChange={(e) => setNote({ ...note, priority: e.target.value })}
      >
        <option value="alta">Alta</option>
        <option value="media">Media</option>
        <option value="baja">Baja</option>
      </select>
      <br></br>
      <br></br>
      <button type="submit">
        {isEditing ? 'Actualizar Nota' : 'Crear Nota'}
      </button>
    </form>
  );
}
export default NoteForm;