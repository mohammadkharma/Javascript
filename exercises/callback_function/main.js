// 1

function each(array, fn){
    array.forEach(element => {
       fn(element);
        
    });
    }
    
    each([1, 2, 3, 4], function(val){
        console.log(val * 2);
    }); // 2, 4, 6, 8

// 2
function map(array, fn) {
    let mappedArray = [];
    array.forEach(element => {
        mappedArray.push(fn(element));
    });
    console.log(mappedArray);
}

map([1, 2, 3, 4], function (val) {
    return val * 2;
}); // [ 2, 4, 6, 8 ]

// 3
function filter(array, fn) {
    let filteredArray = [];
    array.forEach(element => {
        if (!fn(element)) {
            filteredArray.push(element);
        }
    });
    console.log(filteredArray);   
};

// filter([1, 2, 3, 4], function(val) {
//     return val > 2;
// }); // [ 1, 2 ]

filter([1, 2, 3, 4], function(val) {
    return val % 2 === 0;
}); // [ 1, 3 ]