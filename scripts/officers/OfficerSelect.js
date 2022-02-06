import { getOfficers, useOfficers } from "./OfficerProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

// on the eventHub, change event for "Officer" dropdown list
eventHub.addEventListener("change", event => {
    if (event.target.id === "officerSelect") {
        eventHub.dispatchEvent(new CustomEvent("officerChosen", {
            detail: {
                officerThatWasChosen: event.target.value
            }
        }))
    }
})

// render HTML string for crime dropdown list
const render = officersCollection => {
    contentTarget.innerHTML = `
    <h2>Officer Select:</h2>
    <select class="dropdown" id="officerSelect">
        <option value="0">Please select an officer...</option>
        ${officersCollection.map(officer => {
            return `<option value="${officer.name}">${officer.name}</option>`
            })
        }.join("")
    </select>
    `
}


export const OfficerSelect = () => {
    getOfficers()
        .then(() => {
            const officers = useOfficers()
            render(officers)
        })
}

