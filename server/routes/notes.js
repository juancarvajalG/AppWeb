const express = require('express');
const router = express.Router();
const {
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
} = require('../controllers/notes');


router.get('/', getNotes);
router.get('/:id', getNoteById);
router.post('/', createNote);       
router.put('/:id', updateNote);     
router.delete('/:id', deleteNote);  

module.exports = router;