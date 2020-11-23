//Pseudocode
//
// Use moment.js to start doing this HW, already linked.description

// Upcoming 

// Fix LocalStorage Issue: read docs and watch videos
// just some exapmle code, not being used currently
var someVarName = "value";
localStorage.setItem("someVarKey", someVarName);


// display current time in Javascript
var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();

// applying the date and time to HTML
document.getElementById("rightNow").innerHTML = n + ' ' + time;