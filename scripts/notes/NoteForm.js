import { saveNote } from "./NoteProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
    <h2>Notes</h2>
    <div class="field">
        <label class="label" for="noteText">Notes:</label>
        <input type="text" name="noteText" class="input" />
    </div>
    <div class="field">
        <label class="label" for="noteDate">Date:</label>
        <input type="date" name="noteDate" class="input" />
    </div>
    <div class="field">
        <label class="label" for="suspect">Suspect:</label>
        <input type="text" name="suspect" class="input" />
    </div>

    <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
        const newNote = {
            text: document.querySelector('input[name="noteText"]').value,
            date: document.querySelector('input[name="noteDate"]').value,
            suspect: document.querySelector('input[name="suspect"]').value
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

