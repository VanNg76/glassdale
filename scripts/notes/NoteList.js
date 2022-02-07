import { NoteForm } from "./NoteForm.js"
import { getNotes, useNotes } from "./NoteProvider.js"

const contentTarget = document.querySelector(".noteList")
const eventHub = document.querySelector(".container")

export const render = (notesCollection) => {
    contentTarget.innerHTML = `
        ${notesCollection.map(noteObject => {
            return `<section class="note">
                        <div class="note__text">${ noteObject.text }</div>
                        <div class="note__suspect">Suspect: ${ noteObject.suspect }</div>
                        <div class="note__author">Author: ${ noteObject.author }</div>
                        <div class="note__date">Date: ${ noteObject.date }</div>
                    </section>
                    <br>`
            }).join("")
        }
    `
}

export const NoteList = () => {
    getNotes()
        .then(() => {
            const notes = useNotes()
            render(notes)
        })
}

eventHub.addEventListener("notesChanged", () => {
    NoteForm()
    NoteList()
})

eventHub.addEventListener("showNotesClicked", () => {
    NoteList()
})

