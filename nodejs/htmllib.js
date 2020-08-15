module.exports  = {
	createHead: function(name){
		return "<h3>Salary of " + name + "</h3>";
	},
	displaySalaryInfo: function(name,basic,hra,da,conveyance,lunch,pf,esi,insurance,tax)	{
		var style =' style="border:1px solid #333;"'
		var tdstyle = "<td style='text-align:right;border:1px solid #333'>";
		var thstyle = "<th style='text-align:right;border:1px solid #333''>";
		
		var tableStart = "<table>"
		var row_name = "<tr ><td" + style +">Name</td>" + tdstyle + name + "</td><tr>";
		var row_basic = "<tr><td>Basic</td>" + tdstyle + basic + "</td><tr>";
		var row_hra = "<tr ><td" + style + ">Basic</td>" + tdstyle +  hra + "</td><tr>";
		var row_da = "<tr ><td" + style + ">Dearness Allowance</td>"+ tdstyle +   da + "</td><tr>";
		var row_conveyance = "<tr ><td" + style +">Conveyance</td>" + tdstyle +  + conveyance + "</td><tr>";
		var row_lunch = "<tr ><td" + style +">Lunch</td>" + tdstyle  + lunch + "</td><tr>";

		
		var gross = basic+hra+da+conveyance+lunch;
		var row_gross_total = "<tr ><th" + style +">Gross Salary ....(A)</th>" + thstyle +   gross+ "</td><tr>";
		var row_pf = "<tr ><td" + style +">Provident Fund</td>" + tdstyle +   pf + "</td><tr>";
		var row_esi = "<tr ><td" + style +">ESI</td>"  + tdstyle +  esi + "</td><tr>";
		var row_insurance = "<tr ><td" + style +">Life Insurance</td>" + tdstyle +  insurance + "</td><tr>";
		
		var row_tax = "<tr ><td" + style +">TDS</td>" + tdstyle +   tax + "</td><tr>";
		var deductions = pf+esi+insurance+tax;
		var netSalary = gross - deductions;
		var row_total_ded = "<tr ><th" + style +">Less Deductions  .... (B)</th>" + tdstyle +  deductions + "</td><tr>";
		var row_net_salary = "<tr ><th" + style +">Net Salary C (A-B = C)</th>" + thstyle +  netSalary + "</th><tr>";
		var salaryInWords = moneyInWords(netSalary);
		var rowinwords = "<tr><th colspan='4'>" + salaryInWords + "</th></tr>";
		var tableEnd = "</table>";
		
		
		htmlResponse = tableStart + row_name+row_hra+row_da+row_conveyance+row_lunch+row_gross_total+row_pf+row_esi+row_insurance+row_tax+row_total_ded+row_net_salary + rowinwords + tableEnd;
		
		return htmlResponse;
		
		
	}
	
}

function moneyInWords(salary){
		
		
		var digits = salary.toString().split('');
		var realDigits = digits.map(Number)
		console.log(realDigits.length);
		console.log(realDigits);
		console.log(realDigits[0]);
		console.log(realDigits[1]);
		console.log(realDigits[2]);
		console.log(realDigits[3]);
		console.log(realDigits[4]);
		var inrInWords ="";
		 
		
		if (realDigits > 5)
		{
			
			inrInWords  =  "INR " + realDigits[0] + "lakhs," + realDigits[1]+realDigits[2]+" thousand, " + realDigits[4] + " hundred, " + + realDigits[4]+realDigits[5] + " Only";

		}
		else
		{	console.log("Digit 1 and 2 " + realDigits[0]+realDigits[1]);
			var textnumber =realDigits[0].toString()+realDigits[1].toString();
			var textnumber2 = realDigits[3].toString() +realDigits[4].toString();
			console.log(textnumber);
			console.log(textnumber2);
			var number = parseInt(textnumber);
			var number2 = parseInt(textnumber2);
			console.log(number);
			inrInWords =  "INR " +  TensInWord(textnumber) + " thousand, " + numberInWord(realDigits[2]) + " hundred and " +  TensInWord(number2)  + " Only";

		}
			return inrInWords;
	}

function TensInWord(number)
{
	console.log("In TenWord" + number);
	wordten = "";
	singleDigit = number %  10;	
	if (singleDigit > 0)
	{
		
		singleDigitWord = numberInWord(singleDigit);
	}
	
	
	if (number >= 10 && number < 20)
	{
		wordten = "ten"
		
	}
	else if (number >= 20 && number < 30)
	{
		wordten = "twenty";
	}
	else if (number >= 30 && number < 40)
	{
		wordten = "thirty";
	}
	else if (number >= 40 && number < 50)
	{
		wordten = "forty";
		
	}
	else if (number >= 50 && number < 60)
	{
		console.log("enter 50");
		wordten = "fifty";
		
	}
	else if (number >= 60 && number < 70)
	{
		wordten = "Sixty";
		
	}
	else if (number >= 70 && number < 80)
	{
		wordten = "Sevety";
		
	}
	else if (number >= 80 && number < 90)
	{
		wordten = "Eighty";
		
	}
	else if (number >= 90 && number < 100)
	{
			wordten = "Ninety";
		
	}
	if (singleDigit > 0)
	{
		return wordten + " " + singleDigitWord;
	}
	else
	{
		return wordten;
	}
}

function numberInWord(number)
{
	
	console.log("Number in NumberInWOrd: " + number);
	switch (number)
	{
		case 1:
			wordten = "one";
			break;
		case 2:
			wordten = "two";
			break;
		case 3:
			wordten = "three";
			break;
		case 4:
			wordten = "four";
			break;
		case 5:
			wordten = "five";
			break;
		case 6:
			wordten = "Six";
			break;
		case 7:
			wordten = "Seven";
			break;
		case 8:
			wordten = "Eight";
			break;
		case 9:
			wordten = "Nine";
			break;
		case 0:
			wordten = "zero"
			break;
			
	}
	return wordten;
}