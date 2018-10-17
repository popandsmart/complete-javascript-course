/* var teamJohnAverage = (89 + 120 + 103) / 3;
var teamMarkAverage = (116 + 94 + 123) / 3;

//teamMarkAverage = 104;

if (teamJohnAverage > teamMarkAverage) {
	console.log('John\'s team has the highest average score');
} else if (teamJohnAverage < teamMarkAverage) {
	console.log('Mark\'s team has the highest average score');
} else {
	console.log('John\'s team and Mark\'s team has has the same average score');
}

var teamMaryAverage = (97 + 134 + 105) / 3;

console.log(teamJohnAverage, teamMarkAverage, teamMaryAverage);

switch (true) {
	case teamJohnAverage > teamMarkAverage && teamJohnAverage > teamMaryAverage:
		console.log('John\'s team has the highest average score');
		break;
	case teamMarkAverage > teamJohnAverage && teamMarkAverage > teamMaryAverage:
		console.log('Mark\'s team has the highest average score');
		break;
	case teamMaryAverage > teamJohnAverage && teamMaryAverage > teamMarkAverage:
		console.log('Mary\'s team has the highest average score');
		break;
    default:
		console.log('There is no winning team');
}
*/

function calculatedAge(birthYear) {
	return 2018 - birthYear;
}

var ageJohn = calculatedAge(1990);
var ageMike = calculatedAge(1948);
var ageJane = calculatedAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
	var age = calculatedAge(year);
	var retirement = 65 - age;
	console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsUntilRetirement(1990, 'John');
