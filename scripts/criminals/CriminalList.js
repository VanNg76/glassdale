import { getCriminals, useCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")


// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    if (event.detail.crimeThatWasChosen !== "0") {
        const criminals = useCriminals()
        
        const matchingCriminals = criminals.filter(criminal => criminal.conviction === event.detail.crimeThatWasChosen)

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
                to ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</li>`
            }).join("")
            }
        </ol>
    `
}


// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const criminals = useCriminals()
            render(criminals)
        })
}

