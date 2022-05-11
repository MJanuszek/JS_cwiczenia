
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