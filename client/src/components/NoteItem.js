import { useNavigate } from 'react-router-dom';

function NoteItem({ note, onDelete }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    if (!note._id) {
      console.error("Error: note._id no está definido");
      return;
    }
    console.log("Redirigiendo a /edit/" + note._id);
    navigate(`/edit/${note._id}`);
  };

  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <p>Relevancia: {note.importance}</p>
      <button onClick={handleEdit}>Editar</button>
      <button onClick={() => onDelete(note._id)}>Eliminar</button>
    </div>
  );
}

export default NoteItem;