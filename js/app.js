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

var siblings=prompt('Time for the next question! Do I have any siblings?').toLowerCase();
console.log( 'User answered siblings with' + siblings);

if (siblings==='y' || siblings==='yes') { 
 var numberOfSiblings=prompt('You are right! Now for a bonus question can you guess how many siblings I have?');
 if (parseInt(numberOfSiblings)===2 || numberOfSiblings==='two') {
     alert('Wow! You got it! I have two sisters. They are 16.');
 } else { 
     alert('I actually have two siblings, 16 year old sisters!'); 
 }

 } else if (siblings==='n'|| siblings==="no") {
    alert('Didn\'t get that one! I have two sisters!');
} else {
    alert('Seriously! It\'s a yes or no question, just take a guess next time!'); 
}

var travel=prompt('Have I traveled outside of the country?').toLowerCase();
console.log( 'User answered travel with' + travel);

if (travel==='y' || travel==='yes') { 
alert('Good job! I have only been to Canada but that still counts and was a lot of fun! Hoping to go to Ireland at the end of this year!');
} else if (travel==='n'|| travel==="no") {
    alert('Actually I have! I\'ve only ever been to Canada, but it still counts!');
} else {
    alert('Since you didn\'t guess I guess I\'ll just tell you, I have been out of the country, I went all the way to Canada!'); 
}


