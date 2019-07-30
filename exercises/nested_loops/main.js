// LOOPS & NESTED LOOPS:

// 1
let arr = [11, 49, 53, 72, 19, 61];
let sum = 0;
for (i = 0; i < arr.length; i++)
    sum = sum + arr[i];
    console.log(sum); // 265

// 2
for (i = 1; i <= 5; i++) {
    console.log('*');
    for (i = 2; i <= 5; i++) {
        console.log('* *');
        for (i = 3; i <= 5; i++) {
            console.log('* * *');
            for (i = 4; i <= 5; i++) {
                console.log('* * * *');
                for (i = 5; i <= 5; i++) {
                    console.log('* * * * *');
                }
            }
        }
    }
};

// 3
let arr1 = [
    [1, 2, 1, 24],[8, 11, 9, 4],
    [7, 0, 7, 27], [7, 4, 28, 14],
    [3, 10, 26, 7] ];
for(i = 0; i < arr1.length; i++) {
    console.log(`"row ${i}"`);
    for(j = 0; j < arr1[i].length; j++) {
        console.log(`" ${arr1[i][j]}"`);
    }
};

// 4
for (i = 1; i < 5; i++) {
    for (j = 0; j < 3; j++) {
    console.log(i);
    }
};

// 5
for (i = 0; i < 3; i++) {
    for (j = 0; j < 5; j++) {
    console.log(j);
    }
};