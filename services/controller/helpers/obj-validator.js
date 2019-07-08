const objValidatorFunctions = {

    unsetNullKeys: async function (obj) {
        for(let key in obj) {
            if (typeof obj[key] !== 'object') {
                obj[key]= obj[key].trim();
            }
            if (obj[key] != null && typeof obj[key] === 'object') {
                obj[key] = await objValidatorFunctions.unsetNullKeys(obj[key])
            } else if (!obj[key]) {
                delete obj[key]
            }
        }
        return obj;
    }

}

module.exports = objValidatorFunctions;
