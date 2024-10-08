import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../features/notes/addedNotesSlice';

const NoteInput = () => {
    const [noteTitle, setNoteTitle] = useState('');
    const dispatch = useDispatch();
    
    const handleAddNote = () => {
        if (noteTitle.trim()) {
            const newNote = {
                id: Date.now(),
                title: noteTitle,
            };
            
            dispatch(addNote(newNote));
            setNoteTitle('');
        }
    };
    
    return (
    <div>
        <input
        type="text"
        placeholder="Введите заметку"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
        />
        <button onClick={handleAddNote}>Добавить заметку</button>
    </div>
    );
};

export default NoteInput;
