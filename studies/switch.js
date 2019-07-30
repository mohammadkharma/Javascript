// switch uses a strict equality comparison (===)
// e.g. : case 'A' means case === 'A'
const grade = 'D';

switch (grade) {
    case 'A':
    console.log('You have A!');
    break;

    case 'B':
    console.log('You have B!');
    break;

    case 'C':
    console.log('You have C!');
    break;
    
    case 'D':
    console.log('You have D!');
    break;
    

    default:
        console.log('No valid grade');

} // You have D!