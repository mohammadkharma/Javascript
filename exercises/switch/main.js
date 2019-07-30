// SWITCH
// -------


console.log('------------------------ 1 ------------------------');

// #### 1. Color Analyzer 
// Create a function that takes a string in its parameters. Console log a different statement for each color (red, blue, green, yellow). 
// * Example: analyzeColor("Red") -> "Red is a primary color". 

let analyzeColor = color => {

    switch (color) {
        case 'Red':
            console.log('Red is a primary color');
            break;
        case 'Green':
            console.log('Green is a success color');

            break;

        case 'Yellow':
            console.log('Yellow is a warning color');
            break;

        default:
            console.log('not one of the the colors');
    }
}

analyzeColor('Red');


console.log('------------------------ 2 ------------------------');

// #### 2. Grading 
// Create a function that takes a grade in its parameters. Console log comments depending on the grade. 
// * Example: grade("A") -> "Good job!", grade("F") -> "Failed"

let gradeCommenter = grade => {

    switch (grade) {
        case 'A':
            console.log('AWESOME!');
            break;

        case 'B':
            console.log('Good Job');
            break;

        case 'C':
            console.log('Not bad');
            break;

        case 'D':
            console.log('You could do better');
            break;

        default:
            console.log('Sorry, you failed');
    }
}

gradeCommenter('C');


console.log('------------------------ 3 ------------------------');

// #### 3. What month is it? 
// Create a function using the new Date().getMonth() method and switch case in order to return the month of the year. Return "It's the month of May!"




console.log('------------------------ 4 ------------------------');

// #### 4. Fruits
// Create a function that takes a string in its parameters. Console log a different statement for each fruit (e.g. banana, orange, strawberry, apple). 
// * Example: fruits("Orange") -> Great choice! An orange is full of vitamin C!"

let fruitCommenter = fruit => {

    switch (fruit) {
        case 'Apple':
            console.log('Awesome! Apples are extremely rich in important antioxidants');
            break;

        case 'Orange':
            console.log('Great choice! An orange is full of vitamin C!');
            break;

        case 'Banana':
            console.log('Cool! Bananas are high in potassium');
            break;

        case 'Avocado':
            console.log('Perfect! Avocados are a great source of vitamins C, E, K, and B-6');
            break;

        default:
            console.log('Sorry we do not know about this fruit');
    }
}

fruitCommenter('Apple');


console.log('------------------------ 5 ------------------------');

// #### 5.Jobs 
// Create a function and a person object. Console log different statements for each job (e.g."teacher", "driver", "programmer", "actor", "chef") using a switch statement.
// * Examples of expected output
// * "Maria Smith is a teacher. She teaches children."
// * "Maria Smith is a driver. She drives a truck." 

let person = {
    firstName: 'Maria',
    lastName: 'Smith',
    job: 'Designer',
}

let personJob = () => {

    switch (person.job) {
        case 'Teacher':
            console.log(`Maria Smith is a Teacher, she teaches children`);
            break;

        case 'Sales Manager':
            console.log(`Maria Smith is a Sales Manager, she works for BMW`);
            break;
        case 'Designer':
            console.log(`Maria Smith is a Designer, she designs clothes`);
            break;
    }

}

personJob()
