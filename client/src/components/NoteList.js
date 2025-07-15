import { Link } from "react-router-dom";
import './NoteList.css'
function NoteList({ notes }) {
  return (
    <div className="each-note">
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <small>Prioridad: {note.priority}</small>
            <br></br>
            <Link to={`/edit/${note.id}`}>✏️Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;