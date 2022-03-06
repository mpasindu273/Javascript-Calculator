var opMode;

function addbtn()
{
  cal.add.style.backgroundColor="yellow";
  cal.sub.style.backgroundColor="white";
  cal.mult.style.backgroundColor="white";
  cal.divi.style.backgroundColor="white";
  window.opMode="+";
}

function subbtn()
{
  cal.add.style.backgroundColor="white";
  cal.sub.style.backgroundColor="yellow";
  cal.mult.style.backgroundColor="white";
  cal.divi.style.backgroundColor="white";
  window.opMode="-";
}

function multbtn()
{
  cal.add.style.backgroundColor="white";
  cal.sub.style.backgroundColor="white";
  cal.mult.style.backgroundColor="yellow";
  cal.divi.style.backgroundColor="white";
  window.opMode="*";
}

function divbtn()
{
  cal.add.style.backgroundColor="white";
  cal.sub.style.backgroundColor="white";
  cal.mult.style.backgroundColor="white";
  cal.divi.style.backgroundColor="yellow";
  window.opMode="/";
}

function clearbtn()
{
  cal.n1.value="";
  cal.n2.value="";
  cal.ans.value="";
  cal.add.style.backgroundColor="white";
  cal.sub.style.backgroundColor="white";
  cal.mult.style.backgroundColor="white";
  cal.divi.style.backgroundColor="white";
  window.opMode="";
}

function eq()
{
  var num1=parseFloat(cal.n1.value);
  var num2=parseFloat(cal.n2.value);
  var answer=0;
  
  switch(window.opMode)
  {
    case "+":
	answer=num1+num2;
	cal.ans.value=answer;
	break;
	
	case "-":
	answer=num1-num2;
	cal.ans.value=answer;
	break;
	
	case "*":
	answer=num1*num2;
	cal.ans.value=answer;
	break;
	
	case "/":
	answer=num1/num2;
	cal.ans.value=answer;
	break;
	
	default:
	cal.ans.value="Enter operand!";
  }
}
