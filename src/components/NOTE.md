Single state: showX = true or false

9 squares = 9 instances of Square, each with their own showX= true or false

If the state is in the Gameboard you only have ONE state variable which is an array
So if you want to manipulate the state, you have to change the array, and only the array
If you want to pass the state to an instance of Square, you have to get it from the array


xes = [1, 2]; os = [3, 4]
let stateOfSquare3 = xes.includes(2) ? "x" : (os.includes(2) ? "o" : "");
how do you set square 3 to x/o?


squareStates = ['', 'x', 'x', 'o', 'o', '', '', '', '']
let stateOfSquare3 = squareStates[2];
how do you set square 3 to x/o?