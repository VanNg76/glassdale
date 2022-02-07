import { getWitnesses, useWitnesses } from "./WitnessProvider.js";

const contentTarget = document.querySelector("#witnessListButton")
const eventHub = document.querySelector(".container")

export const render = (witnessData) => {
    contentTarget.innerHTML = `
    <button id='showWitness'>Show Witnesses</button>
    <h2>Witnesses:</h2>
        <div class="witnessList">
            <ul>
                ${witnessData.map(witness => {
                    return `<li>Witness name: ${witness.name}\. Statements: ${witness.statements}</li>`
                    }).join("")
                }
            </ul>
        </div>
    `
}



eventHub.addEventListener("showWitnessClicked", () => {
    getWitnesses()
        .then(
            () => {
                const witnesses = useWitnesses()
                render(witnesses)
            }
        )
})

export const ShowWitnessButton = () => {
    contentTarget.innerHTML = "<button id='showWitness'>Show Witnesses</button>"
}

// click event for showWitness button
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitness") {
        const customEvent = new CustomEvent("showWitnessClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

