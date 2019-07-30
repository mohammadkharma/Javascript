console.log('-------------------- break & continue --------------------');
//________________________________________________________________________//


let array = [ 45, 70, 60, 90, 100, 110 ];

// 'break' statement break (stops) the loop when it reaches the given condition 
for (let i = 0; i < array.length; i++) {
    if (array[i] === 60) {
        break;
    }
    console.log(array[i]);
} // 45, 70

//________________________________________________________________________//

// 'continue' statement skips (ignores) the appropriate element for the given condition and continue
for (let i = 0; i < array.length; i++) {
    if (array[i] === 60) {
        continue;
    }
    console.log(array[i]);
} // 45, 70, 90, 100, 110