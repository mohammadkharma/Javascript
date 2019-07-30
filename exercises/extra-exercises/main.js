// Additional Exercises
// ====================

// 1. Create a random quote generator!
const quotes = [
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "Don't watch the clock; do what it does. Keep going.",
    "The secret of getting ahead is getting started.",
    "Well done is better than well said.",
    "You miss 100% of the shots you don’t take.",
    "A goal is a dream with a deadline.",
    "Outstanding people have one thing in common: An absolute sense of mission.",
    "Trying is winning in the moment.",
    "Fall down seven times and stand up eight.",
    "You just can't beat the person who never gives up.",
    "There is little success where there is little laughter.",
    "We cannot solve our problems with the same thinking we used when we created them."
];

function quoteGenerator(arr) {
    let item = arr[Math.floor(Math.random() * arr.length)];
    console.log(item);
}

quoteGenerator(quotes);


// 2. Create a random food generator for each day of the week! 

function foodGenerator(str) {
    let food = ['rice', 'chicken', 'meat', 'salad', 'fish', 'vegetables', 'fruits'];
    let item = food[Math.floor(Math.random() * food.length)];
    let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let counter = 0;
    days.forEach(e => {
        if (str.toLowerCase() === e) {
            counter++
        }
    });

    if (counter > 0) {
        console.log(item);
    } else {
        console.log('this is not a day')
    }
}

foodGenerator('Monday');
foodGenerator('friday');


// 3. Find out how many days there are till the end of a given month. 



// 4. Create a function that accepts two strings as arguments. Check if these words are anagrams. 
function isAnagrams(a, b) {
    if (a.split('').sort().join('') === b.split('').sort().join('')) {
        console.log(true);
    }
    else console.log(false);
}

isAnagrams('listen', 'silent')


// 5. Check what zodiac sign a person is depending on their birthdays! Zodiacs: aries, taurus, gemini etc. 

function whichZodiac(month, day) {
    let astro_sign = "";

    if (month == "december"){ 
          
        if (day < 22) 
        astro_sign = "Sagittarius"; 
        else
        astro_sign ="capricorn"; 
    } 
          
    else if (month == "january"){ 
        if (day < 20) 
        astro_sign = "Capricorn"; 
        else
        astro_sign = "aquarius"; 
    } 
          
    else if (month == "february"){ 
        if (day < 19) 
        astro_sign = "Aquarius"; 
        else
        astro_sign = "pisces"; 
    } 
          
    else if(month == "march"){ 
        if (day < 21)  
        astro_sign = "Pisces"; 
        else
        astro_sign = "aries"; 
    } 
    else if (month == "april"){ 
        if (day < 20) 
        astro_sign = "Aries"; 
        else
        astro_sign = "taurus"; 
    } 
          
    else if (month == "may"){ 
        if (day < 21) 
        astro_sign = "Taurus"; 
        else
        astro_sign = "gemini"; 
    } 
          
    else if( month == "june"){ 
        if (day < 21) 
        astro_sign = "Gemini"; 
        else
        astro_sign = "cancer"; 
    } 
          
    else if (month == "july"){ 
        if (day < 23) 
        astro_sign = "Cancer"; 
        else
        astro_sign = "leo"; 
    } 
          
    else if( month == "august"){ 
        if (day < 23)  
        astro_sign = "Leo"; 
        else
        astro_sign = "virgo"; 
    } 
          
    else if (month == "september"){ 
        if (day < 23) 
        astro_sign = "Virgo"; 
        else
        astro_sign = "libra"; 
    } 
          
    else if (month == "october"){ 
        if (day < 23) 
        astro_sign = "Libra"; 
        else
        astro_sign = "scorpio"; 
    } 
          
    else if (month == "november"){ 
        if (day < 22) 
        astro_sign = "scorpio"; 
        else
        astro_sign = "sagittarius"; 
    }
    
    console.log(astro_sign)
}

whichZodiac('june', 8)