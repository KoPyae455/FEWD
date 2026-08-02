// --- ၁။ Variables များ ကြေညာခြင်း ---
let myString = "Hello World! View in Console";//string
let firstNum = 10;//int
let secondNum = 5;//int
let myDouble = 12.5;//double
let myBoolean = true;//boolean
firstNum++
secondNum++

// --- ၂။ အခြေခံ Output ထုတ်ခြင်းများ ---
console.log(myString+" is a "+typeof(myString));
console.log("Sum of two Numbers : "+(firstNum + secondNum));
console.log("Double Number : "+myDouble+" and Type : "+typeof(myDouble));

// --- ၃။ သင်္ချာ သင်္ကေတများ အသုံးပြုခြင်း ---
console.log("Subtraction of two Numbers : "+(firstNum - secondNum));
console.log("Multiplication of two Numbers : "+(firstNum * secondNum));
console.log("Division of two Numbers : "+(firstNum / secondNum));//result
console.log("Modulus of two Numbers : "+(firstNum % secondNum));//remainder
console.log("Boolean Value : "+myBoolean+" and Type : "+typeof(myBoolean));

console.log("_________________________________________");

// --- ၄။ Functions များ တည်ဆောက်ခြင်း ---
function calculateRectArea(width, height){
    // implementation
    // let width = 5, height = 6;
    let rectArea = width * height;
    return rectArea;//saving result
}
console.log("rectangle area : "+calculateRectArea(7, 6));
console.log("rectangle area : "+calculateRectArea(8, 6));
console.log("rectangle area : "+calculateRectArea(9, 6));
// console.log("Rectangle Area : "+calculateRectArea());

function calculateCircleArea(radius){
    const PI = (Math.PI).toFixed(2);
    let circleArea = PI * Math.pow(radius, 2);
    return circleArea;
}

console.log("Circle Area : "+calculateCircleArea(7));
console.log("Circle Area : "+calculateCircleArea(8));
console.log("Circle Area : "+calculateCircleArea(9));