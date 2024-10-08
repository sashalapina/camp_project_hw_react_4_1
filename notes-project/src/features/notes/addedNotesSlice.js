import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notes: [],
}

const addedNotesSlice = createSlice({
  name: 'addedNotes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      const isAlreadyAdded = state.notes.find((note) => note.id === action.payload.id)

      if (!isAlreadyAdded) {
        state.notes.push(action.payload)
      }
    },

    editNote: (state, action) => {
      const noteIndex = state.notes.findIndex((note) => note.id === action.payload.id)
      if (noteIndex !== -1) {
        state.notes[noteIndex].title = action.payload.title
      }
    },

    removeNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload)
    },
  },
})

export const { addNote, editNote, removeNote } = addedNotesSlice.actions
export default addedNotesSlice.reducer
