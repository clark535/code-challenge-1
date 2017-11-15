console.log('in js');

var makeClickCounter = 0;//my clickCounter global variable

$(document).ready(readyNow);//jquery initiation on function readyNow

function readyNow(){//jquery start-up function containing event listeners
    
    $('#generateButton').on('click', addCounterElements);//targeting id attached to the generate button
    $(document).on('click', '.swapButton', colorChange);//listener targeting the entire doc w/swapButton class
    //and changeColor function initiated on the click
    $(document).on('click', '.deleteButton', deleteDiv);
    
};

function addCounterElements() {//function that adds the divs, <p>s and counter on gen button push
    makeClickCounter += 1;//clickCounter
    $('body').append('<div class="elementDiv"><p>' + makeClickCounter + '<button class="swapButton">Swap</button><button class="deleteButton">Delete</button></p></div>'); 
};//targets the body, appends div&p, adds counter to <p>

function colorChange() {//function called on doc click
    $(this).parent().toggleClass('yellowDiv')//supposed to toggle on click between classes
    //$(this).replaceWith('<button class="secondSwap">Swap</button>');
};

function deleteDiv() {
    $(this).parent().remove();
};
//maybe an if statement for the class toggle?