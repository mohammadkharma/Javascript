// The Cashier Problem

function cashier(payment, bill) {

    let rest = payment - bill;

    let euros200 = 200;
    let euros100 = 100;
    let euros50 = 50;
    let euros20 = 20;
    let euros10 = 10;
    let euros5 = 5;

    let euros2 = 2;
    let euro1 = 1;
    let cents50 = 0.50;
    let cents20 = 0.20;
    let cents10 = 0.10;
    let cents5 = 0.05;
    let cents2 = 0.02;
    let cent1 = 0.01;


    if (bill > payment) {

        let stillToPay = bill - payment;
        console.log(`Incorrect! There's still ${stillToPay}€ to pay.`);

    } else {

        console.log(`The change is: ${rest}€.`)

        if (rest >= euros200) {
            let frequency = Math.floor(rest / 200);
            let valueOfNote = euros200 * frequency;
            rest -= valueOfNote;
            console.log(`${frequency} * ${euros200}€`);
        }

        if (rest >= euros100) {
            let frequency = Math.floor(rest / 100);
            let valueOfNote = euros100 * frequency;
            rest -= valueOfNote;
            console.log(`${frequency} * ${euros100}€`);
        }

        if (rest >= euros50) {
            let frequency = Math.floor(rest / 50);
            let valueOfNote = euros50 * frequency;
            rest -= valueOfNote;
            console.log(`${frequency} * ${euros50}€`);
        }

        if (rest >= euros20) {
            let frequency = Math.floor(rest / 20);
            let valueOfNote = euros20 * frequency;
            rest -= valueOfNote;
            console.log(`${frequency} * ${euros20}€`);
        }

        if (rest >= euros10) {
            let frequency = Math.floor(rest / 10);
            let valueOfNote = euros10 * frequency;
            rest -= valueOfNote;
            console.log(`${frequency} * ${euros10}€`);
        }

        if (rest >= euros5) {
            let frequency = Math.floor(rest / 5);
            let valueOfNote = euros5 * frequency;
            rest -= valueOfNote;
            console.log(`${frequency} * ${euros5}€`);
        }

        rest = rest.toFixed(2);

        if (rest >= euros2) {
            let frequency = Math.floor(rest / 2);
            let valueOfNote = euros2 * frequency;
            rest -= valueOfNote;
            rest = rest.toFixed(2);
            console.log(`${frequency} * ${euros2}€`);
        }

        if (rest >= euro1) {
            let frequency = Math.floor(rest / 1);
            let valueOfNote = euro1 * frequency;
            rest -= valueOfNote;
            rest = rest.toFixed(2);
            console.log(`${frequency} * ${euro1}€`);
        }

        if (rest >= cents50) {
            let frequency = Math.floor(rest / 0.50);
            let valueOfNote = cents50 * frequency;
            rest -= valueOfNote;
            rest = rest.toFixed(2);
            console.log(`${frequency} * ${cents50}€`);
        }

        if (rest >= cents20) {
            let frequency = Math.floor(rest / 0.20);
            let valueOfNote = cents20 * frequency;
            rest -= valueOfNote;
            rest = rest.toFixed(2);
            console.log(`${frequency} * ${cents20}€`);
        }

        if (rest >= cents10) {
            let frequency = Math.floor(rest / 0.10);
            let valueOfNote = cents10 * frequency;
            rest -= valueOfNote;
            rest = rest.toFixed(2);
            console.log(`${frequency} * ${cents10}€`);
        }

        if (rest >= cents5) {
            let frequency = Math.floor(rest / 0.05);
            let valueOfNote = cents5 * frequency;
            rest -= valueOfNote;
            rest = rest.toFixed(2);
            console.log(`${frequency} * ${cents5}€`);
        }

        if (rest >= cents2) {
            let frequency = Math.floor(rest / 0.02);
            let valueOfNote = cents2 * frequency;
            rest -= valueOfNote;
            rest = rest.toFixed(2);
            console.log(`${frequency} * ${cents2}€`);
        }

        if (rest >= cent1) {
            let frequency = Math.floor(rest / 0.01);
            let valueOfNote = cent1 * frequency;
            rest -= valueOfNote;
            rest = rest.toFixed(2);
            console.log(`${frequency} * ${cent1}€`);
        }

    }

}

cashier(100, 35);
// The change is: 65€.
// 1 * 50€
// 1 * 10€
// 1 * 5€

cashier(500, 245.13);
// The change is: 254.87€.
// 1 * 200€
// 1 * 50€
// 2 * 2€
// 1 * 0.5€
// 1 * 0.2€
// 1 * 0.1€
// 1 * 0.05€
// 1 * 0.02€

cashier(10, 15.10);
// Incorrect! There's still 5.1€ to pay.
