const express = require('express');
const router = express.Router();
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
} = require('../controllers/notes');

// CRUD
router.get('/', getNotes);
router.get('/:id', getNoteById);
router.post('/', createNote);       // Crear nota (POST /api/notas)
router.put('/:id', updateNote);     // Actualizar nota (PUT /api/notas/1)
router.delete('/:id', deleteNote);  // Eliminar nota (DELETE /api/notas/1)

module.exports = router;