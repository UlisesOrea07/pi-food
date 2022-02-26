
const fetch = require('node-fetch');

const checkKey = async (arrayKeys, baseUrl, prefijos) => {
    try {
        let i = 0;
        let datApi = {};
        let isOn = false;
        let key = '';
        console.log('aquiii')
        while (i < arrayKeys.length) {
            console.log('entro al whil')
            var resp = await fetch(`${baseUrl}${prefijos}?apiKey=${arrayKeys[i]}`)
            datApi = await resp.json();
            if (datApi.results) {
                console.log('entro al if')
                key = arrayKeys[i];
                isOn = true;
                i = arrayKeys.length + 1
            }
            i++
        }
        console.log('salio del while')
        if (isOn) return { found: true, key: key }
        return { found: false, message: 'the keys has been expired' };

    } catch (error) {
        return ('Failure connection')
    }
}
const getAllDiets = async (baseUrl, prefijos, key) => {
    let obj = {};
    var resp = await fetch(`${baseUrl}${prefijos}?apiKey=${key}&addRecipeInformation=true&number=200`)
    datApi = await resp.json();
    datApi?.results.map(recipe => {
        recipe.diets?.map(diet => {
            obj[diet] = diet;
        })
    })
    return obj;
}
module.exports = checkKey;