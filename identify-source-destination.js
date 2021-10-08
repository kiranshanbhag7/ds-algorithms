/**
 *
 * N->A
 * A->B
 B->C
 C->D
 D->E
 E->Z
 Z->N
 *

 Src: C
 Dst: E

 */

function calculateSourceDestination(travelMap) {
    const sourceMap = {};
    const destMap = {};
    let source = "";
    let destination = "";
    for (let city in travelMap) {  // O(n)
        sourceMap[city] = true;
        destMap[travelMap[city]] = true;
    }
    for (let city in travelMap) { // O(n)
        if (!source && !destMap[city]) { // {A, B, C, D, E, Z} city = N  O(1)
            source = city;
        }
        if (!destination && !sourceMap[travelMap[city]]) { // {N, A, B, C, D, E} travelCity = Z O(1)
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