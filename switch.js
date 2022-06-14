// 3. Use switch case to return a grade for the score, either "A", "B", "C", "D", or "F". (Take convension for numbers and grades by yourself)
// Anything below 50 is F


let score = 100;
let gscore;
switch (true) {
    case (score <= 100 && score >= 90):
        gscore = 'A';
        break;
    case (score <= 89 && score >= 80):
        gscore = 'B';
        break;
    case (score <= 79 && score >= 70):
        gscore = 'C';
        break;
    case (score <= 69 && score >= 60):
        gscore = 'D';
        break;
    case (score <= 59 && score >= 0):
        gscore = 'F';
        break;
    default:
        console.log('INVALID SCORE');

}

console.log(gscore);