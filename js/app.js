'use strict';
var answersCorrect = 0;

function openingGreeting() {
  alert('Hello and Welcome To My Page! My name is Rebecca Prows, hope you enjoy learning a little bit about me!');
}

function questionsAboutUserName() {
  var userName = prompt('Before we get to me, please tell me your name!');
  console.log( 'The user entered: ' + userName);

  alert('Hello, ' + userName + ' thank you for stopping by! For the five yes or no questions please answer with Y or Yes, N or No. When you are ready hit OK!');

  var placesLived = prompt('Alright, ' + userName + ' let\'s start with something basic. Have I lived in any state beside Washington?').toLowerCase();
  console.log( 'User answered placesLived with ' + placesLived);

  if (placesLived === 'n' || placesLived === 'no') { 
    alert('Correct! I have lived in Washington my whole life!');
    answersCorrect += 1;
  } else if (placesLived === 'y' || placesLived === 'yes') {
    alert('Sorry that is inccorect I have lived here my entire life.');
  } else {
    alert('Come on, it\'s a yes or no question, just take a guess next time!'); 
  }
}

function questionSiblings() {

  var siblings = prompt('Time for the next question! Do I have any siblings?').toLowerCase();
  console.log( 'User answered siblings with ' + siblings);

  if (siblings === 'y' || siblings === 'yes') { 
    var numberOfSiblings = prompt('You are right! Now for a bonus question can you guess how many siblings I have?').toLowerCase();
    answersCorrect += 1;
    if (parseInt(numberOfSiblings) === 2 || numberOfSiblings === 'two') {
      alert('Wow! You got it! I have two sisters. They are 16.');
      answersCorrect += 1;
    } else { 
      alert('I actually have two siblings, 16 year old sisters!'); 
    }

  } else if (siblings === 'n' || siblings === "no") {
    alert('Didn\'t get that one! I have two sisters!');
  } else {
    alert('Seriously! It\'s a yes or no question, just take a guess next time!'); 
  }
}

function questionTravel () {
  var travel = prompt('Have I traveled outside of the country?').toLowerCase();
  console.log( 'User answered travel with ' + travel);

  if (travel === 'y' || travel === 'yes') { 
    alert('Good job! I have only been to Canada but that still counts and was a lot of fun! Hoping to go to Ireland at the end of this year!');
    answersCorrect += 1;
  } else if (travel === 'n' || travel === "no") {
    alert('Actually I have! I\'ve only ever been to Canada, but it still counts!');
  } else {
    alert('Since you didn\'t guess I guess I\'ll just tell you, I have been out of the country, I went all the way to Canada!'); 
  }
}

function questionNickname() {
  var nickname = prompt('Do I have a nickname?').toLowerCase();
  console.log('The user guessed ' + nickname);

  if (nickname === 'y' || nickname === 'yes') {
    alert('Yup! I mostly go by Rebecca but a lot of my friends call me RPB, I\'ll explain it if you ask. A few people call me Becca as well, but never Becky');
    answersCorrect += 1;
  } else if (nickname === 'n' || nickname === 'no') {
    alert('Actually I do! While I mostly go by Rebecca a lot of my friends call me RPB');
  } else {
    alert('Well, if you aren\'t going to ask then I am not going to tell you');
  }
}

function questionHairColor() {
  var hairColor = prompt('Is my hair it\'s natural color?').toLowerCase();
  console.log('The user guessed ' + hairColor);

  if (hairColor === 'y' || hairColor === 'yes') {
    alert('Correct!');
    answersCorrect += 1;
  } else if (hairColor === 'n' || hairColor === 'no') {
    alert('Wrong!');
  } else {
    alert('Spolier alert! It is my natural hair color'); 
  }
}

function questionJob() {
  var jobYears = prompt('How many years have I worked at Safeway?').toLowerCase();
  var counter = 0;
  while (counter < 4 && jobYears != 8){
    console.log('Answer must be 8');
    if (jobYears < 8) { 
      jobYears = prompt('I\'ve worked there longer then that! Guess again!');
    } else if (jobYears > 8) {
      jobYears = prompt('Haven\'t worked there quite that long, try again!');  
    } 
    counter += 1
  } if (jobYears < 8) {
    console.log('User got incorrect answer');
    alert('That was too low. The correct answer is 8.');
  } else if (jobYears > 8) {
    alert('That was too high. The correct answer is 8.');
  }
  else{
    console.log('User got correct answer');
    alert('8 is correct!')
    answersCorrect += 1;
  } 
}

function questionSports() {
  var counter = 0;
  var kidsSports = ['swimming', 'figure skating', 'soccer', 't-ball', 'basketball'];
  var flag = false;
  
  while (counter < 6 && flag === false) {
    var kidsSportsGuess = prompt('Guess one of the sports I did as a kid').toLowerCase();
    counter ++;
    for(var i = 0; i < kidsSports.length; i++) {
      if(kidsSportsGuess === kidsSports[i]) {
        alert('You got it! I at some point participated in Soccer, Swimming, T-Ball, Basketball, and Figure Skating!');
        answersCorrect += 1;
        flag = true;
        console.log('Correct Answer');
        break;
      } 
    }
    if(flag === false) {
      alert('Nope! Guess again!');
    }
    if(flag === false && kidsSportsGuess === 6) {
      alert('All out of guesses! The answers are swimming, figure skating, soccer, t-ball, and basketball.');
    }
  }
}

function closing() {
  alert('Hope you enjoyed getting to know a little bit about me! You got ' + answersCorrect + ' out of 8!');
}

openingGreeting();
questionsAboutUserName();
questionSiblings();
questionTravel();
questionNickname();
questionHairColor();
questionJob();
questionSports();
closing();