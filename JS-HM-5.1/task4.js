//Додаткове

const allCaps = (str) => {
    if (typeof str !== 'string') {
        return false;
    }
    return str === str.toUpperCase();
}

console.log(allCaps('hELLO'));



