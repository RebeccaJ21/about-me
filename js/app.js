'use strict';

alert('Hello and Welcome To My Page! My name is Rebecca Prows, hope you enjoy learning a little bit about me!');

var userName =prompt('Before we get to me, please tell me your name!');
console.log( 'The user entered: ' + userName);

alert('Hello, ' + userName + ' thank you for stopping by! For the following five questions please answer with Y or Yes, N or No. When you are ready hit OK!');

var placesLived=prompt('Alright, ' +userName + ' let\'s start with something basic. Have I lived in any state beside Washington?').toLowerCase();
console.log( 'User answered placesLived with' + placesLived);

if (placesLived==='n' || placesLived==='no') { 
alert('Correct! I have lived in Washington my whole life!');
} else if (placesLived==='y'|| placesLived==="yes") {
    alert('Sorry that is inccorect I have lived here my entire life.');
} else {
    alert('Come on, it\'s a yes or no question, just take a guess next time!'); 
}

