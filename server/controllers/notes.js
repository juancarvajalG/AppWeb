// Datos en memoria (simulan una DB)
let notes = [
  { id: 1, title: "Mi primera nota", content: "Hola mundo", priority: "media" }
];

// Obtener todas las notas
exports.getNotes = (req, res) => {
  res.json(notes);
};

// Agrega este controlador
exports.getNoteById = (req, res) => {
  const noteId = parseInt(req.params.id); // Convertir a número
  const note = notes.find(n => n.id === noteId);

  if (!note) {
    return res.status(404).json({ 
      error: `Nota con ID ${noteId} no encontrada`
    });
  }

  res.json(note);
};
// Luego en server/routes/notes.js:


// Crear una nueva nota
exports.createNote = (req, res) => {
  const { title, content, priority } = req.body;
  
  if (!title) {
    return res.status(400).json({ error: "El título es obligatorio" });
  }

  const newNote = { 
    id: notes.length + 1, 
    title, 
    content, 
    priority: priority || "media" 
  };
  
  notes.push(newNote);
  res.status(201).json(newNote);
};

// Actualizar una nota
exports.updateNote = (req, res) => {
  const { id } = req.params;
  const { title, content, priority } = req.body;
  const noteIndex = notes.findIndex(note => note.id === parseInt(id));

  if (noteIndex === -1) {
    return res.status(404).json({ error: "Nota no encontrada" });
  }

  notes[noteIndex] = { ...notes[noteIndex], title, content, priority };
  res.json(notes[noteIndex]);
};

// Eliminar una nota
exports.deleteNote = (req, res) => {
  const { id } = req.params;
  notes = notes.filter(note => note.id !== parseInt(id));
  res.status(204).send(); // 204 = "No Content" (éxito pero sin respuesta)
};