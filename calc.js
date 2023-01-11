// Stores previous value if any
let prevVal = "";

// Stores value we are building
let newVal = "";

// Stores value to display in the entry window
let resultVal = "";

// Store previous math operator clicked
let mathOperator = "";

// Store whether decimal has been clicked
// [Only allow 1 per new value entered]
let decimalClicked = false;

// Will hold values we want to store in memory
let valMemStored = "";

// Called when a number button is clicked
function numButPress(num){
    // checks if resultVal has a value or not
    // Check if a number has been already clicked
    if(resultVal){
        // Start a new new number
        newVal = num;
        // Reset to create a new result
        resultVal = "";
    } else {
        // Used to block using multiple decimals
        if(num === '.'){
            if(decimalClicked != true){
                newVal += num;
                decimalClicked = true;           
            }
        } else {
            newVal += num;
        }
    }
    // Update value in entry input tag
    document.getElementById("entry").value = newVal;
}


function mathButPress(operator){
    // checks if resultVal does not have a value
    // this is based on the logic of the calculator 
    // Check if there was a previous calculation
    // by seeing if resultVal has a value
 
    // If result doesn't have a value then store
    // the current val as a previous for the next 
    // calculation
    if(!resultVal){
        prevVal = newVal;
    } else {
        // If there is a current result store that as
        // the previous value entered 
        prevVal = resultVal;
    }
    // Restart creation of new number
    newVal = "";
    // Reset decimalClicked
    decimalClicked = false;
    // Store operator clicked
    mathOperator = operator;

    // Prepare entry for receiving new numbers
    resultVal = "";
    document.getElementById("entry").value = "";
}


function equalButPress(num){
    // Reset decimalClicked
    decimalClicked = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);

    switch(mathOperator){
        case "+":
            resultVal = prevVal + newVal;
            break;
        case "-":
            resultVal = prevVal - newVal;
            break;
        case "*":
            resultVal = prevVal * newVal;
            break;
        case "/":
            resultVal = prevVal / newVal;
            break;
        default:
            resultVal = newVal;
    }

    prevVal = resultVal;

    document.getElementById("entry").value = resultVal;
}

// Clear everything except memory
function clearButPress(){
    prevVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    decimalClicked = false;

    document.getElementById("entry").value = "0";
}

// Store the current value in the entry window
function copyButPress(num){
    valMemStored = document.getElementById("entry").value;
}

// If a value has been stored paste it in the entry
// window and assign it as the newVal
function pasteButPress(num){
    // checks if valMemStored has value
    if(valMemStored){
        document.getElementById("entry").value = valMemStored;
        newVal = valMemStored;
    }
}





