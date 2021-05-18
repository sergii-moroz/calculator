const resetButton = document.getElementById('reset-button');
const equalButton = document.getElementById('equal-button');
const deleteButton = document.getElementById('delete-button');
const screen = document.getElementById('screen');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');

//  GLOBAL VARIABLES
var variables = ['', ''];
var operator = '';
var id = 0;

function reset() {
    variables = ['', ''];
    operator = '';
    id = 0;
    updateScreen();
}

function updateScreen() {
    if(variables[id] === ''){
        screen.innerText = '0';
    } else {
        screen.innerText = variables[id];
    }
}

function del() {
    if(variables[id].length > 0){
        variables[id] = variables[id].substr(0, variables[id].length-1);
        updateScreen();
    }
}

function calculate(){
    var res = eval(variables[0] + operator + variables[1]);
    operator = '';
    variables[1] = '';
    variables[0] = res;
    id = 0;
    updateScreen();
    variables[0] = '';
    //using screen as temporary variable
}

//  EVENTS
resetButton.addEventListener('click', reset);
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const regexp = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/; // <= Black Magic ;)

        if( regexp.test(variables[id]+button.innerText) ){
            variables[id] += button.innerText;
            updateScreen();
        }

        // it doesn't handle -> .123
    });
});

deleteButton.addEventListener('click', del);

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(variables[0] === '' && screen.innerText !== '0'){
            variables[0] = screen.innerText;
            //id = 0;
        }

        id++;
        switch(button.innerText){
            case '+':
            case '-':
            case '/':
                operator = button.innerText;
                break;
            case 'x':
                operator = '*';
        }

        console.log('variables: ', variables, ' id: ', id, ' operator: ', operator);
    });
});

equalButton.addEventListener('click', calculate);

//console.log(resetButton);
//console.log(equalButton);
