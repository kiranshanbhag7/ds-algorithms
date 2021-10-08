/**
 * We have been given the list of intercity paths of a person who is traveling from A to B, B to C, C to D and then D to E.
 * The list of paths provided need not be in the order he/she is traveling between the cities
 * We have to find the actual source city from which person has started his journey and
 * their final destination city where they have arrived.
 *
 * Input:
 * A -> B
 * B -> C
 * C -> D
 * D -> E
 *

 Output:
 Source: A
 Destination: E

 */

function calculateSourceDestination(travelMap) {
    const sourceMap = {};
    const destMap = {};
    let source = "";
    let destination = "";

    /* Iterate over the list of paths and populate the source and destination hashmap */
    for (let city in travelMap) {
        sourceMap[city] = true;
        destMap[travelMap[city]] = true;
    }
    /* Again iterate over the list of paths */
    for (let city in travelMap) {
        /* if the current city is not in the destMap, we have got our source city */
        if (!source && !destMap[city]) { // { B, C, D, E } city = A
            source = city;
        }
        /* if the current city is not in the sourceMap, we have got our destination city */
        if (!destination && !sourceMap[travelMap[city]]) { // { A, B, C, D } travelCity = E
            destination = travelMap[city];
        }
    }
    return {
        source,
        destination
    }
}

const travelMap = {
    A: "B",
    B: "C",
    C: "D",
    D: "E"
};

console.log(calculateSourceDestination(travelMap));