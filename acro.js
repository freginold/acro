// acronym viewer JavaScript file

// -------------- vars --------------

var resultsDiv = document.getElementById('resultsDiv');
var inputDiv = document.getElementById('inputDiv');
var inputBox = document.getElementById('inputBox');
var acroToAdd = "";
var defToAdd = "";
var noResultsMsg = "[ none ]";


// -------------- functions --------------

function getInput() {
	// grab input on key press
	resetResults();
	if (inputBox.value == "" || inputBox.value == " " || inputBox.value.length < 2) { return; }
	checkInput(inputBox.value);
}

function checkInput(term) {
	// check lines to see if term is found; if so, display result(s)
	var pattern = new RegExp(term.toLowerCase());
	var match = false;		// flag to see if any results
	var currentLine;
	for (var i = 0; i < numLines; i++) {
		currentLine = getLine(i);
		if (!!pattern.test(currentLine.toLowerCase())) {
			// if a match found
			showResult(currentLine);
			match = true;
		}
	}
	if (!match) {	// if no results
		resultsDiv.innerHTML = resultsDiv.innerHTML + "<br /><center style='color: #222222; font-style: italic;'>" + noResultsMsg + "</center><br /><span class='qtrSize'><br /><br /></span><hr>";	
	}
}

function showResult(thisLine) {
	// show a line that matches the search term
	var splitArr = thisLine.split("=");
	var acro = "<span class='acro'>" + splitArr[0] + "</span>";
	var theRest = "";
	for (var i = 1; i < splitArr.length; i++) {
		// to get the rest of the line after the acronym
		theRest = theRest + " " + splitArr[i];
	}
	resultsDiv.innerHTML = resultsDiv.innerHTML + "<table><tr><td>" + acro + "</td><td>" + theRest + "</td></tr></table><span class='qtrSize'><br /><br /></span><hr>";
}

function trim(thisStr) {
	// remove lead & trail spaces from string
	var madeChange = true;
	while (!!madeChange) {
		// loop until no more changes to make
		madeChange = false;
		if (thisStr.slice(0,1) == " ") {
			thisStr = thisStr.slice(1);
			madeChange = true;
		}
		if (thisStr.slice(-1) == " ") {
			thisStr = thisStr.slice(0, (thisStr.length - 1));
			madeChange = true;
		}
	}
	return thisStr;
}

function addEntry() {
	// add a new entry to one of the files
	inputBox.value='';
	acroToAdd = getNew("acronym");
	if (acroToAdd == "") { showResultsDiv(); return; }
	defToAdd = getNew("definition");
	if (defToAdd == "") { showResultsDiv(); return; }
	addLine(txtFile);
}

function getNew(thisOne) {
	// prompt for acronym or definition to add
	var tempInput = prompt("Enter " + thisOne + ":", "");
	if (tempInput == "") { alert("Nothing was entered... canceling."); }
	else if (!tempInput) { tempInput = ""; }
	return tempInput;
}

function showResultsDiv() {
	// apply input box focus (call from VBS)
	inputBox.focus();
}

function resetResults() {
	// reset resultsDiv back to default
	resultsDiv.innerHTML = "<hr>";
}

function clearBox() {
	// clear input box when CLEAR button is clicked
	inputBox.value='';
	resetResults();
	inputBox.focus();	
}


// -------------- event handlers --------------

inputBox.attachEvent('onkeyup', getInput);


// -------------- start --------------

inputBox.focus();
