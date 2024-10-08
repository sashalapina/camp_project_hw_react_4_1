import './App.css'
import AddedNotesList from './components/AddedNotesList'
import NoteInput from './components/NoteInput'

function App() {
  
  return (
  <>
  <div>
    <h1>Мои заметки</h1>
    <NoteInput />
    <AddedNotesList />
  </div>
  </>
  )
}

export default App
