import { saveNote } from "../notes/NoteProvider.js"
import { getCriminals, useCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")


// Listen for the custom event dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    if (event.detail.crimeThatWasChosen !== "0") {
        const criminals = useCriminals()
        
        const matchingCriminals = criminals.filter(criminal => criminal.conviction === event.detail.crimeThatWasChosen)

        render(matchingCriminals)
    }
})

// Listen for the custom event dispatched in OfficerSelect
eventHub.addEventListener("officerChosen", event => {
    if (event.detail.officerThatWasChosen !== "0") {
        const criminals = useCriminals()
        
        const matchingCriminals = criminals.filter(criminal => criminal.arrestingOfficer === event.detail.officerThatWasChosen)

        render(matchingCriminals)
    }
})

// render HTML string for criminal list
const render = criminalCollection => {
    contentTarget.innerHTML = `
    <h2>Criminals</h2>
        <ol>
            ${criminalCollection.map(criminal => {
                return `<li>Name: ${criminal.name}, ${criminal.age} years old,
                conviction: ${criminal.conviction},
                incarceration date: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}
                to ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}
                <button id="associates--${criminal.id}">Associate Alibis</button>
                </li>`
            }).join("")
            }
        </ol>
    `
}

// click event for Associate Alibis button
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("associates--")) {
        const [,clickedId] = event.target.id.split("--")
        const criminals = useCriminals()

        const foundCriminal = criminals.find(criminal => criminal.id === parseInt(clickedId))
        
        // display an alert to show "known_associates" info
        foundCriminal.known_associates.forEach(elem => {
            return alert(`Name: ${elem.name}, Alibi: ${elem.alibi}`)
        })
    }   
})

// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const criminals = useCriminals()
            render(criminals)
        })
}

