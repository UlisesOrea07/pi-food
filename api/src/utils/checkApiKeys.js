
const fetch = require('node-fetch');

const checkKey = async (arrayKeys, baseUrl, prefijos) => {
    try {
        let i = 0;
        let validKey = '';
        //'https://api.spoonacular.com/recipes/complexSearch?apiKey=d18d943ce8944e3d8e6354cc5c759233'
        let resp = await fetch(`${baseUrl}${prefijos}?apiKey=${arrayKeys[i]}`)
        while (resp.status === 402 && i <= arrayKeys.length) {
            resp = await fetch(`${baseUrl}${prefijos}?apiKey=${arrayKeys[i]}`)
            validKey = arrayKeys[i];
            i++
        }
        const datApi = await resp.json();
        if (datApi) return { found: true, key: validKey }
        return { found: false, message: 'the keys has been expired' };

    } catch (error) {
        return ('Failure connection')
    }
}
module.exports = checkKey;