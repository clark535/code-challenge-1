console.log('in js');

var makeClickCounter = 0;

$(document).ready(readyNow);


function readyNow(){

$('.buttonDiv').on('click', '#generateButton', clickCounter);
$('#generateButton').on('click').append('.buttonDiv');
$('.buttonDiv').on('click').append('<p id="paragraph"></p>');

$('#paragraph').append('<button id="swapButton">Swap</button>');
$('#paragraph').append('<button id="deletButton">Delete</button>');
//$('<div>').append('<p></p>');

$('#swapButton').on('click').remove();
$('#deleteButton').on('click').val('');
}; 

function clickCounter() {
console.log('in clickCounter');
    makeClickCounter += 1;   
    $('.buttonDiv').html('The generate button has been clicked ' + makeClickCounter + ' times!');
};
