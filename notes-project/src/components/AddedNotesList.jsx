import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editNote, removeNote } from '../features/notes/addedNotesSlice';

const AddedNotesList = () => {
  const notes = useSelector((state) => state.addedNotes.notes);
  const dispatch = useDispatch();
  const [editableNote, setEditableNote] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleEdit = (note) => {
    setEditableNote(note.id);
    setEditedText(note.title);
  };

  const handleSave = (id) => {
    dispatch(editNote({ id, title: editedText }));
    setEditableNote(null);
  };

  return (
    <div className='added-notes'>
      <h2>Добавленные заметки</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {editableNote === note.id ? (
              <>
                <input
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button className='save-button' onClick={() => handleSave(note.id)}>Сохранить</button>
              </>
            ) : (
              <>
                {note.title}
                <div className='btns-group'>
                    <button className='edit-button' onClick={() => handleEdit(note)}>Редактировать</button>
                    <button className='delete-button' onClick={() => dispatch(removeNote(note.id))}>Удалить</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddedNotesList;
