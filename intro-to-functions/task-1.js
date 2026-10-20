// 1. Function Declaration
function areaDec(width, height) {
    return width * height;
}
console.log(areaDec(5, 10));

// 2. Function Expression
const areaExp = function (width, height) {
    return width * height;
};
console.log(areaExp(5, 10));

// 3. Arrow Function
const areaAr = (width, height) => width * height;
console.log(areaAr(5, 10)); 
