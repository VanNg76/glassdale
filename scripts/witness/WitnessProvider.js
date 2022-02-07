let witnesses = []

export const getWitnesses = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(
        parsedWitnesses => {
            // console.table(parsedOfficers)
            witnesses = parsedWitnesses
        }
    )
}

export const useWitnesses = () => {
    return witnesses.slice()
}