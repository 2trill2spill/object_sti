var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

var maxIncome = 65000;

function Employee(employeeArray) {

	// Calculate employee bonus.
	this.bonusPercent = calSti(employeeArray[1], employeeArray[2], employeeArray[3]);

	// Convert income/salary to a number.
	var income = parseInt(employeeArray[2]);

  // Calculate bonus in dollars.
	this.bonus = (this.bonusPercent * .01) * income;

	// Get total salary by adding the bonus to the base salary.
	this.totalSalary = this.bonus + income;

	// Round the employees total salary to nearest whole number.
	Math.round(this.totalSalary);

	this.name = employeeArray[0];
	this.number = employeeArray[1];
	this.salary = employeeArray[2];
	this.rating = employeeArray[3];
}

for(var i = 0; i< employees.length; i++){
	var emp = new Employee(employees[i]);
	console.log("Employee name: ", emp.name, " - ", "Bonus: ", emp.bonusPercent + "%", "(" + "$" + emp.bonus + ")" + " which totals $" + emp.totalSalary + ".");
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
