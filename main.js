
 // 1. Zwróć nazwy miast z parzystą/nieparzystą liczbą znaków. 
 let cities = ["tokyo", "osaka", "takayama", "hiroshima", "himeji", "nara", "sapporo"];

 // Pętla For:

 const evenCities = [];
 const oddCities = [];

 const sortCities = function (array) {
     for (i = 0; i < array.length; i++) {
         if (array[i].length % 2 == 0) {
             evenCities.push(array[i]);
         } else {
             // if (array[i].length % 2 == 1)
             oddCities.push(array[i]);
         }
     }
 }

 sortCities(cities);
 console.log(evenCities);
 console.log(oddCities);


 // Pętla forEach:
 const evenCities2 = [];
 const oddCities2 = [];

 const sortCities2 = function (array) {
     cities.forEach((city) => {
         if (city.length % 2 == 0) {
             evenCities2.push(city);
         }

     })
 }

 sortCities2(cities);
 console.log(evenCities2);

// ------------------------------------------------------------

let numbers = [2, 4, 5, 7, 9, 8, 10, 15, 322, 4, 6]

// 2. Zwróć sumę elementów [], ktrą przyjmuje funkcja jako arg.
const arraySum = function (array){
    let sum = 0;
    for (let i=0; i<array.length; i++){
       sum += array[i];
       
    }
    return sum;
}
console.log(arraySum(numbers))
// ______________________________________________________________

// 3. Zwróć ostatni element [];

let lastNumber = 0;

const lastElement = (array) => {
lastNumber = array[array.length-1];
return lastNumber

};
console.log(lastElement(numbers));
console.log(lastElement(cities));
// ______________________________________________________________

// 4. Zwróć największy element [];
let bigest = 0;
const whichIsTheBigestNumber = function(){
    console.log (numbers);
    for (i = 0; i < numbers.length; i++){
        if (numbers[i] > bigest){
            bigest = numbers[i];
        }
    }
}

whichIsTheBigestNumber(numbers);
console.log(bigest)

// -------------------------
var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
console.log(largest);
// ___________________________________________________________

// 5. Odwróć elementy [];

const colors = ["midori", "akai", "kuroi", "shiroi"];
const reversed = [];

const reverseArray = (array) => {
    for (i=array.length-1; i>=0; i--){
        reversed.push(array[i]);
    }
}

reverseArray(colors);
console.log(colors);
console.log(reversed);

// 6. Zwróć co drugi element [];

const evenEveryOthers  = [];

const everyOther = function (array) {
    for (i=0; i< array.length; i++) {
        if (i % 2 === 1 ) {
            evenEveryOthers.push(array[i])
        }
    }
}

everyOther(colors);
console.log(evenEveryOthers);
// __________________________________________________________________________

// 7. Zwróć pierwszą połowę [];

const authors = ["Murakami", "Sapkowski", "Jadowska", "Hamliton", "Maas", "Mickiweicz", "Bułhakow"];

const halfOfArray = [];
const halfOfArray2 = [];

const firstHalf = function (array) {
    for (i=0; i<array.length/2; i++) {
        halfOfArray.push(array[i]);
    }
}

const secondHalf = (array) => {

    for (i=array.length-1; i>array.length/2; i--){
        halfOfArray2.push(array[i]);
    }

}

firstHalf(authors);
console.log(halfOfArray);
secondHalf(authors);
console.log(halfOfArray2);
// __________________________________________________________________
