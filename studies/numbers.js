// order of operation:

// some operators have higher precedence than others
// operators with higher precedence execute first

// in this console, the brackets are execute first '(5 - 2)'
// then the indices '**2'
// then the multiplication '4 *'
console.log(4 * (5 - 2) ** 2); // 36


// 'B I D M A S' is a good example to know the precedence the most used operators
// 'B' ()brackets(20), 'I' **indices(15), 'D' /division(14), 'M' *multiplication(14)
// 'A' +addition(13), 'S' -subtraction(13)

// other operators:
// 'remainder: %' (14)
// 'comparisons: <, >, >=, <=' (11)
// 'equality: ==, ===, !=, !==' (10)
// 'logical operators: &&-AND (6), ||-OR (5)'
// 'conditional: ?' (4)
// 'assignments: =, +=, *=, /=' (3)

// Precedence Table at:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table