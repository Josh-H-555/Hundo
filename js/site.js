//Event Listener instantiation
document.getElementById("btnSubmit").addEventListener("click", getValues);

//get the values from the UI
//start or controller
function getValues() {
    //get values from page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse ints
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    let numbers = [];

    //validate input
    //call generate numbers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        numbers = generateNumbers(startValue, endValue);
    } else {
        alert("You must enter integers.");
    }

    //call display numbers
    displayNumbers(numbers);
}

//generate numbers from start to end value
//logic
function generateNumbers(start, end) {

    let numbers = [];

    //generate numbers from start value to end value, append into list.
    for (let i = start; i <= end; ++i) {
        numbers.push(i);
    }

    return numbers;
}

//display the numbers, bold the evens
//display or view
function displayNumbers(numbers) {
    //get the table where results will be written.
    table = document.getElementById("results");

    //iterate through the entire numbers array, if the remainder of dividing by 2
    //is 0, the number will be even. if it is even, we will bold the numbers.
    //otherwise, write the numbers in regular text.
    for (let i = 0; i < numbers.length; ++i) {
        if (numbers[i] % 2 == 0) {
            let className = 'even';
            table.innerHTML += `<tr><td class="${className}">${numbers[i]}</td></tr>`;
        } else {
            table.innerHTML += `<tr><td>${numbers[i]}</td></tr>`;
        }
    }
}