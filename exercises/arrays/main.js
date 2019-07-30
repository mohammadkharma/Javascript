// ARRAYS:

// 1
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let item = euroCities[1];
console.log(item); // London

// 2
euroCities[0] = "Berlin";
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

// 3
console.log(euroCities.length); // 5

// 4
euroCities.pop();
console.log(euroCities); //[ 'Berlin', 'London', 'Valletta', 'Prague' ]

// 5
euroCities.push("Budapest");
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Budapest' ]

// 6
euroCities.splice(1, 2);
console.log(euroCities); // [ 'Berlin', 'Prague', 'Budapest' ]

// 7
let asianCities = ["Lebanon", "Syria", "Dubai", "China"];
console.log(asianCities); // [ 'Lebanon', 'Syria', 'Dubai', 'China' ]

// 8
let asianCities2 = [asianCities[1], asianCities[3]];
console.log(asianCities2);

// 9
let worldCities = euroCities.concat(asianCities);
console.log(worldCities); // [ 'Berlin', 'Prague', 'Budapest', 'Lebanon', 'Syria', 'Dubai', 'China' ]

// 10
worldCities.reverse();
console.log(worldCities); // [ 'China', 'Dubai', 'Syria', 'Lebanon', 'Budapest', 'Prague', 'Berlin' ]

// 11
worldCities[2] = "Toronto";
console.log(worldCities); // [ 'China', 'Dubai', 'Toronto', 'Lebanon', 'Budapest', 'Prague', 'Berlin' ]

// 12
worldCities.splice(2, 0, "Washington");
console.log(worldCities); // [ 'China', 'Dubai', 'Washington', 'Toronto', 'Lebanon', 'Budapest', 'Prague', 'Berlin' ]

// 13
let worldCities2 = worldCities.join(",");
console.log(worldCities2); // China,Dubai,Washington,Toronto,Lebanon,Budapest,Prague,Berlin
let worldCities3 = worldCities.join("+");
console.log(worldCities3); // China+Dubai+Washington+Toronto+Lebanon+Budapest+Prague+Berlin

// 14
euroCities = [];
console.log(euroCities); // []


// Extra Practice

// 1
let favMovies = ["limitless", "Troy", "Takes"];
console.log(favMovies); // [ 'limitless', 'Troy', 'Takes' ]

// 2
let parentsName = [ "Yehia", "Fatema"];
console.log(parentsName); // [ 'Yehia', 'Fatema' ]

// 3
let aboutMe = favMovies.concat(parentsName);
console.log(aboutMe); // [ 'limitless', 'Troy', 'Takes', 'Yehia', 'Fatema' ]

// 4
aboutMe.push("Lucy");
console.log(aboutMe); // [ 'limitless', 'Troy', 'Takes', 'Yehia', 'Fatema', 'Lucy' ]

// 5
aboutMe.reverse();
console.log(aboutMe); // [ 'Lucy', 'Fatema', 'Yehia', 'Takes', 'Troy', 'limitless' ]

// 6
console.log(aboutMe[1]); // Fatema

// 7
aboutMe[1] = "Tima";
console.log(aboutMe[1]); // Tima
