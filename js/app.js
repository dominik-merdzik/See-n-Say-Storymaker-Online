// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
var arrayOne = ["The turkey","Mom","Dad","The dog","My teacher","The elephant","The cat"];
var arrayTwo = ["sat on","ate","danced with","saw","doesn't like","kissed"];
var arrayThree = ["a funny","a scary","a goofy","a slimy","a barking","a fat"];
var arrayFour = ["goat","monkey","fish","cow","frog","bug","worm"];
var arrayFive = ["on the moon","on the chair","in my spghetti","in my soup","on the grass","in my shooes"];
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var finalWord = '';
var randomWord = '';
var speakButton = document.querySelector('button');

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
function buttonOne(){
	finalWord += ' ' + arrayOne[getRandomInt(arrayOne.length)];
	document.getElementById("finalWordPrint").innerHTML = finalWord;
}
function buttonTwo(){
	finalWord += ' ' + arrayTwo[getRandomInt(arrayTwo.length)];
	document.getElementById("finalWordPrint").innerHTML = finalWord;
}
function buttonThree(){
	finalWord += ' ' + arrayThree[getRandomInt(arrayThree.length)];
	document.getElementById("finalWordPrint").innerHTML = finalWord;
}
function buttonFour(){
	finalWord += ' ' + arrayFour[getRandomInt(arrayFour.length)];
	document.getElementById("finalWordPrint").innerHTML = finalWord;
}
function buttonFive(){
	finalWord += ' ' + arrayFive[getRandomInt(arrayFive.length)];
	document.getElementById("finalWordPrint").innerHTML = finalWord;
	console.log(finalWord);
}
function buttonRandom(){
	finalWord='';
	document.getElementById("finalWordPrint").innerHTML = finalWord;
	randomWord +=arrayOne[getRandomInt(arrayOne.length)] + 
	' ' + arrayTwo[getRandomInt(arrayTwo.length)] + 
	' ' + arrayThree[getRandomInt(arrayThree.length)] +
	' ' + arrayFour[getRandomInt(arrayFour.length)] +
	' ' + arrayFive[getRandomInt(arrayFive.length)];
	speakNow(randomWord);
	document.getElementById("randomWordPrint").innerHTML = randomWord;
	window.alert(randomWord);
}
function buttonClear(){
	finalWord='';
	randomWord='';
	document.getElementById("finalWordPrint").innerHTML = finalWord;
	document.getElementById("randomWordPrint").innerHTML = randomWord;
	synth.cancel(utterThis);
}
function buttonSpeach(){
	speakNow(finalWord);
	speakNow(randomWord);

}

