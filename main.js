var yourName = document.querySelector('#yourName');
var loverName = document.querySelector('#loverName');
var firstBox = document.querySelector('.box-1');
var thirdBox = document.querySelector('.box-3');
var btn = document.querySelector('.button');
var fourthBox = document.querySelector('.box-4');

btn.addEventListener('click', resultShow);

function resultShow(e) {
    e.preventDefault();
    firstBox.innerHTML = '';
    thirdBox.innerHTML = '';
    resultBox.innerHTML = '';
    fourthBox.innerHTML = '';
    var text1 = document.createTextNode(`${yourName.value}`);
    var text2 = document.createTextNode(`${loverName.value}`);
    firstBox.appendChild(text1);
    thirdBox.appendChild(text2);
    gettingResult();

    //clear value
    yourName.value = '';
    loverName.value = '';

}


//generating result
var resultBox = document.querySelector('.resultInBold');

let randomResult = Math.floor((Math.random() * 100));
let result = document.createTextNode(`${randomResult+1}%`);

function gettingResult() {
    resultBox.appendChild(result);
    showFeedback();
}

function showFeedback() {
    var feedback = "";
    if (randomResult < 30) {
        randomResult += 10;
        feedback += "you should love each other more and more";
    } else if (randomResult >= 30 && randomResult <= 70) {
        randomResult += 10;
        feedback += "you love each other. But you both should spend more time together";
    } else if (randomResult > 70) {
        feedback += "Congrats, you both are happy couple. There is no doubt of love between you two.. Keep loving:)";
    }
    var feedbackText = document.createTextNode(feedback);
    fourthBox.appendChild(feedbackText);
}





// var yourName = prompt('your Name:');
// var loverName = prompt('your lover name: ');
// var output = Math.floor(Math.random() * 100) + 1;


// console.log(`${yourName} love ${loverName}:

// ${output}%`);

// if (output < 30) {
//     console.log('you should love each other more and more');
// } else if (output > 30 && output < 70) {
//     console.log('you love each other. But you both should spend more time together');
// } else {
//     console.log('Congrats, you both are happy couple. There is no doubt of love between you two..');
// }