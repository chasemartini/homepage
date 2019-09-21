let name

// What is my age?
let myAge = 30;
function calculateDogYears() {
    let age = prompt("What is your age?");
    let ageInDogYears = dogyears(age);
    alert (`Your age in dog years is ${ageInDogYears}`);

}
function dogyears(myAge) {
    // First two years have higher aging rate.
    let earlyYears = 2;
    earlyYears = earlyYears * 10.5;
    // After the first 2 years, aging rate changes.
    let laterYears = myAge - 2;
    laterYears = laterYears * 4;
    // Combines both rates of aging.
    let myAgeInDogYears = earlyYears + laterYears;
    return myAgeInDogYears
}
console.log(dogyears(myAge));