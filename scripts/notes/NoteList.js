import { NoteForm } from "./NoteForm.js"
import { getNotes, useNotes } from "./NoteProvider.js"

const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")

export const render = (notesCollection) => {
    contentTarget.innerHTML = `
        <ul>
            ${notesCollection.map(note => {
                return `<li>${note.date}: ${note.text}\n Suspect: ${note.suspect}</li>`
                }).join("")
            }
        </ul>
    `
}

export const NoteList = () => {
    getNotes()
        .then(() => {
            const notes = useNotes()
            render(notes)
        })
}

eventHub.addEventListener("noteStateChanged", () => {
    NoteList()
    NoteForm()
})

