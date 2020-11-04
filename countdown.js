var curday;
var secTime;
var ticker;
 
function getTimer() {
	// get the current date
	var nowDate = new Date();
	
	// set the day of the week to end the timer - Here we have specify it Thursday
	var day = 6 ; //Sunday through Saturday, 0 to 6
	
	// set the counter time to ends on Thursday at 03.00PM UTC
	var countertime = new Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate(),15,0,0); //15 out of 24 hours = 3pm
	
	// get the current time
	var curtime = nowDate.getTime();
	
	// get the time of countdown timer
	var atime = countertime.getTime();
	
	// get the difference of countdown time and current time
	var diff = parseInt((atime - curtime)/1000);
	
	// if difference is in a day
	if (diff > 0) { curday = day - nowDate.getDay(); }
	else { curday = day - nowDate.getDay() - 1 } //after countdown time
	
	if (curday < 0) { curday += 7; } //already after countdown time, switch to next week
	if (diff <= 0) { diff += (86400 * 7) } // total difference in seconds
	startTimer(diff);
}
 
function startTimer(secs) {
	secTime = parseInt(secs); // total seconds in count down timer
	ticker = setInterval("tick()",1000); // set the interval for count down timer call on each second
	tick();
}
 
function tick() {
	var secs = secTime; // total seconds remaining in count down timer
	if (secs>0) {
		secTime--;
	}
	else {
		clearInterval(ticker); // clear the count down timer
		getTimer(); //start automatically after time over
	}
 
 	// count the days remaining in count down timer
	var days = Math.floor(secs/86400);
	secs %= 86400;
	
	// count the hours remaining in count down timer
	var hours= Math.floor(secs/3600);
	secs %= 3600;
	
	// count the minutes remaining in count down timer
	var mins = Math.floor(secs/60);
	secs %= 60;
 
	// display the timer count down
	document.getElementById("days").innerHTML = ((curday < 10 ) ? "0" : "" ) + curday; // display the remaining days
	document.getElementById("hours").innerHTML = ((hours < 10 ) ? "0" : "" ) + hours; // display the remaining hours
	document.getElementById("minutes").innerHTML = ((mins < 10) ? "0" : "" ) + mins; // display the remaining minutes
	document.getElementById("seconds").innerHTML = ((secs < 10) ? "0" : "" ) + secs; // display the remaining seconds
	
	document.getElementById("days_ref").innerHTML = (curday < 2) ? "day" : "days"; // display the remaining days
	document.getElementById("hours_ref").innerHTML = (hours < 2) ? "hour" : "hours"; // display the remaining hours
	document.getElementById("minutes_ref").innerHTML = (mins < 2) ? "minute" : "minutes"; // display the remaining minutes
	document.getElementById("seconds_ref").innerHTML = (secs < 2) ? "second" : "seconds"; // display the remaining seconds
}

$( document ).ready(function() {
	getTimer(); // initiate the timer count down
});