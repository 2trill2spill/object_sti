var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

var maxIncome = 65000;

for(var i = 0; i< employees.length; i++){
	var emp = processEmployee(employees[i]);
	console.log("Employee name: ", emp[0], " - ", "Bonus: ", emp[1] + "%", "(" + "$" + emp[4] + ")" + " which totals $" + emp[3] + ".");
};

function calSti(number, salary, rating) {
	var bonus = 0;
    switch(rating) {
    	case 1:
    	case 2:
    	    bonus = 0;
    	    break;

    	case 3:
    	    bonus = 4;
    	    break; 

    	case 4:
    	    bonus = 6;
    	    break;

    	case 5:
    	    bonus = 10;
    	    break;

    	default:
    	    alert("Please enter a whole number rating 1-5");
    }
    
    if(salary > maxIncome && number.length == 4) {
    	bonus += 4;
    } else if(salary < maxIncome && number.length == 4) {
    	bonus += 5;
    } else if(salary > maxIncome && number.length != 4) {
    	bonus -= 1;
    } else if(salary < maxIncome && number.length != 4) {
        bonus += 0;
    }

    if(bonus > 13) {
    	bonus = 13;
    }

    return bonus;

}

function processEmployee(employee) {
	var array = [];

	// Push employee name to new array.
	array.push(employee[0]);

	// Calculate employee bonus and push into the array.
	array.push(calSti(employee[1], employee[2], employee[3]));

    // Convert income/salary to a number.
	var income = parseInt(employee[2]);

    // Get total salary by calculating bonus in dollars and adding to base salary.
    array.push(((array[1] * .01) * income) + income);

    // Round the employees total salary to nearest whole number.
	array.push(Math.round(array[2]));
	array.push((array[1] * .01) * income);

    // Return the new array.
	return array;
}

