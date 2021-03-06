const applicationState = {
    notes: []
}

// fetch json data
export const getNotes = () => {
    return fetch("http://localhost:8088/notes")
        .then(response => response.json())
        .then(
            (notesData) => {
                applicationState.notes = notesData
            }
        )
}

export const useNotes = () => {
    return applicationState.notes.slice()
}

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const customEvent = new CustomEvent("notesChanged")
    eventHub.dispatchEvent(customEvent)
}

export const saveNote = (note) => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}


