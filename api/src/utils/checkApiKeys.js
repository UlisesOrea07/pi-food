
const fetch = require('node-fetch');

const checkKey = async (arrayKeys, baseUrl, prefijos) => {
    console.log('entro AOS')
    try {
        let i = 0;
        //'https://api.spoonacular.com/recipes/complexSearch?apiKey=d18d943ce8944e3d8e6354cc5c759233'
        let resp = await fetch(`${baseUrl}${prefijos}?apiKey=${arrayKeys[i]}`)
        while (resp.status === 401 && i <= arrayKeys.length) {
            console.log('entreeeeeeeeeewhile')
            resp = await fetch(`${baseUrl}${prefijos}?apiKey=${arrayKeys[i]}`)
            keys[i++]
        }
        let datApi = await resp.json();
        if (datApi) return { found: true, key: arrayKeys[i] }
        return { found: false, message: 'the keys has been expired' };

    } catch (error) {
        return ('Failure connection')
    }
}
module.exports = checkKey;