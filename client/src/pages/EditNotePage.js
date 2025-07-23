import './EditNotePage.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NoteForm from '../components/NoteForm';

function EditNotePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Con esto obtenemos la nota para editar
  useEffect(() => {
  const fetchNote = async () => {
    try {
      console.log(`Intentando obtener nota ID: ${id}`); 
      const response = await axios.get(`http://localhost:5000/api/notas/${id}`);
      console.log('Datos recibidos:', response.data); 
      setNote(response.data);
    } catch (error) {
      console.error('Error completo:', error.response);
      setError('No se pudo obtener la nota');
      navigate('/');
    } finally {
      setLoading(false);
    }
  };
  fetchNote();
}, [id, navigate]);


  // Con esta función actulizamos la nota
  const handleUpdateNote = async (updatedNote) => {
    try {
      setLoading(true);
      await axios.put(`http://localhost:5000/api/notas/${id}`, updatedNote);
      navigate('/');
    } catch (err) {
      setError('Error al actualizar la nota');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteNote = async () => {
  const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta nota?');
  if (!confirmDelete) return;

  try {
    setLoading(true);
    await axios.delete(`http://localhost:5000/api/notas/${id}`);
    navigate('/');
  } catch (err) {
    setError('Error al eliminar la nota');
    console.error('Error al eliminar:', err);
  } finally {
    setLoading(false);
  }
};


  // Estados
  if (loading) return <div className="loading">Cargando nota...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!note) return <div className="error">No se encontró la nota</div>;

  return (
    <div className="edit-note-container">
      <h1>Editar Nota #{id}</h1>
      <NoteForm 
        onSubmit={handleUpdateNote}
        initialData={note}
        isEditing={true}
      />

      <br></br>

      <button className="delete-button" onClick={handleDeleteNote}>
        Eliminar Nota
      </button>

    </div>
  );
}

export default EditNotePage;