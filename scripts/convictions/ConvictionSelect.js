import { getConvictions, useConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// on the eventHub, change event for dropdown list
eventHub.addEventListener("change", event => {
    if (event.target.id === "crimeSelect") {
        eventHub.dispatchEvent(new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        }))
    }
})

// render HTML string for crime dropdown list
const render = convictionsCollection => {
    contentTarget.innerHTML = `
    <h2>Conviction Select:</h2>
    <select class="dropdown" id="crimeSelect">
        <option value="0">Please select a crime...</option>
        ${convictionsCollection.map(conviction => {
            return `<option value="${conviction.name}">${conviction.name}</option>`
            })
        }.join("")
    </select>
    `
}


export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}

