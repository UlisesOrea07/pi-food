const orderAlphaAsc = (array) => {
    array.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0
    })
    return array;
}
const orderAlphaDesc = (array, prop) => {
    array.reverse((a, b) => {
        if (a[prop] > b[prop]) return 1;
        if (a[prop] < b[prop]) return -1;
        return 0
    })
    return array;
}

const orderScoreAsc = (array, prop) => {
    array.sort((a, b) => a[prop] - b[prop])
    return array;
}
const orderScoreDesc = (array, prop) => {
    array.reverse((a, b) => a[prop] - b[prop])
    return array;
}
export {
    orderAlphaAsc,
    orderAlphaDesc,
    orderScoreAsc,
    orderScoreDesc
}