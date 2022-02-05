import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"

export const Glassdale = () => {
    return `
    <h1>Glassdale Cyber Crime Unit</h1>

    <div class="criminal-list">
        ${CriminalList()}
    </div>

    <div class="conviction-select">
        ${ConvictionSelect()}
    </div>

    `
}