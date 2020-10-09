//this is the start of function fizzBuzzA where we use if and else if statements. 
function fizzBuzzA() {

    //the variables inputNumA1 and inputNumA2 represent the two input boxes the user will input the multiples of.
    let inputNumA1 = parseInt(document.getElementById("userNumA1").value);
    let inputNumA2 = parseInt(document.getElementById("userNumA2").value);

    //the variables rangeLowA and rangeHighA represent the two input boxes the user will input the lowest and highest numbers that will be considered for Fizz and/or Buzz.
    let rangeLowA = parseInt(document.getElementById("lowA").value);
    let rangeHighA = parseInt(document.getElementById("highA").value);

    //the variable returnValueA is going to be used to return the result of fizzBuzzA later on in the code. For now, we are just calling it as an empty string, it will be defined later on.
    let returnValueA = "";

    //if the input of variable i (which is = rangeLowA) is less then the input of rangeHighA, add 1 to i and check again until it is = rangeHighA.
    for (let i = rangeLowA; i <= rangeHighA; i++) {

        //if i is a multiple of userNumA1 and userNumA2, print FizzBuzz.
        if (i % inputNumA1 == 0 && i % inputNumA2 == 0) { returnValueA += "FizzBuzz " }

        //else if it isn't a multiple of userNumA1 and userNumA2, but is a multiple of userNumA1, print Fizz.
        else if (i % inputNumA1 == 0) { returnValueA += "Fizz " }

        //else if it isn't a multiple of userNumA1 and userNumA2, but is a multiple of userNumA2, print Buzz.
        else if (i % inputNumA2 == 0) { returnValueA += "Buzz " }

        //else print i
        else { returnValueA += i + " " }
    }

    document.getElementById("returnValueA").innerHTML = returnValueA;

}




//this is the start of function fizzBuzzB where we use the switch statement.
function fizzBuzzB(userNumB1, userNumB2) {

    //the variables inputNumB1 and inputNumB2 represent the two input boxes the user will input the multiples of.
    let inputNumB1 = parseInt(document.getElementById("userNumB1").value);
    let inputNumB2 = parseInt(document.getElementById("userNumB2").value);

    //the variables rangeLowB and rangeHighB represent the two input boxes the user will input the lowest and highest numbers that will be considered for Fizz and/or Buzz.
    let rangeLowB = parseInt(document.getElementById("lowB").value);
    let rangeHighB = parseInt(document.getElementById("highB").value);

    //the variable returnValueB is going to be used to return the result of fizzBuzzB later on in the code. For now, we are just calling it as an empty string, it will be defined later on.
    let returnValueB = "";

    //the variables Fizz and Buzz are boolean variables. They hold the values of true or false. 
    let Fizz = false;
    let Buzz = false;

    //we set the variable i = rangeLowB; if i is less then or equal to rangeHighB, the loop will stop, else it will add 1 number to i and check again.
    for (let i = rangeLowB; i <= rangeHighB; i++) {
        //here we are checking if the variable Fizz and Buzz is equal to their respective input (userNumB1/userNumB2). 
        //keep in mind that Fizz and Buzz are = false. You can read it as false = i % (userNumB1/userNumB2) == 0; so if i % (userNumB1/userNumB2) !== 0, then you see false = false, which is true.
        //the code below will determine our output.
        Fizz = i % inputNumB1 == 0;
        Buzz = i % inputNumB2 == 0;

        //switch case, if any of the following statements (or cases) are true, then execute the code.
        switch (true) {
            case Fizz && Buzz: {
                returnValueB += 'FizzBuzz ';
                //the break statement will allow us to get out of the switch case and hit the next loop and loop it over.
                break;
            }
            case Fizz: {
                returnValueB += 'Fizz ';
                break;
            }
            case Buzz: {
                returnValueB += 'Buzz ';
                break;
            }
            default: {
                returnValueB += i + ' ';
                break;
            }
        }

        document.getElementById("returnValueB").innerHTML = returnValueB;

    }

}




//this is the start of function fizzBuzzC. It is written in one line of code and still includes inputs for the multiples of and the range option.
function fizzBuzzC() {

    //the variables inputNumC1 and inputNumC2 represent the two input boxes the user will input the multiples of.
    let inputNumC1 = parseInt(document.getElementById("userNumC1").value);
    let inputNumC2 = parseInt(document.getElementById("userNumC2").value);

    //the variables rangeLowC and rangeHighC represent the two input boxes the user will input the lowest and highest numbers that will be considered for Fizz and/or Buzz.
    let rangeLowC = parseInt(document.getElementById("lowC").value);
    let rangeHighC = parseInt(document.getElementById("highC").value);

    //the variable returnValueC is going to be used to return the result of fizzBuzzC later on in the code. For now, we are just calling it as an empty string, it will be defined later on.
    let returnValueC = "";

    for (let i = rangeLowC; i <= rangeHighC; i++) {
        //if inputNumC1 = 0 return Fizz and if inputNumC2 = 0 return Buzz, if either is false, return i respectively, if both are true, return FizzBuzz.
        //the ? is called a ternary operator. A ternary operator takes three arguments (or operands). An n-ary operation with n = 3. 
        //Evaluate this statement to be true or false, if it is true, do something defined right after the ?.
        //the : means otherwise and the || means or.
        returnValueC += ((i % inputNumC1 == 0 ? 'Fizz' : '') + (i % inputNumC2 == 0 ? 'Buzz' : '') || i) + ' ';
    }

    document.getElementById("returnValueC").innerHTML = returnValueC;
}




//this is the start of fizzBuzzD. This code is using an Array.
function fizzBuzzD() {

    //the variables inputNumD1 and inputNumD2 represent the two input boxes the user will input the multiples of.
    let inputNumD1 = parseInt(document.getElementById("userNumD1").value);
    let inputNumD2 = parseInt(document.getElementById("userNumD2").value);

    //the variables rangeLowD and rangeHighD represent the two input boxes the user will input the lowest and highest numbers that will be considered for Fizz and/or Buzz.
    let rangeLowD = parseInt(document.getElementById("lowD").value);
    let rangeHighD = parseInt(document.getElementById("highD").value);

    let returnValueD = [];

    for (let i = rangeLowD; i <= rangeHighD; i++) {
        returnValueD.push((i % inputNumD1 == 0 ? 'Fizz' : '') + (i % inputNumD2 == 0 ? 'Buzz' : '') || i);
    }

    //the .join('') is required in this situation or your code will show a bunch of commas which aren't pretty.
    //I also used <br> to break the numbers apart and make it easier to look at.
    document.getElementById("returnValueD").innerHTML = returnValueD;
}






var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active2");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


