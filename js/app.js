// Alan Ayoub
// Treehouse Techdegree
// FSJS Project 3 - Interactive Form

// User Story #1
// Project uses JQuery

// User Story #2
// On page load, make the #name field active 
$("#name").focus();

// User Story #3
// Create job role text field
// Hide job role text field
// If job role is selected, show job role text field with focus active

// User Story #4
// Hide all color options first
// Then display the default text 'Please select a T-shirt theme'
$('#color option').hide();
//let $defaultText = $('#color option').text('Please select a T-shirt theme');


// User Story #5
// If Theme JS Puns is selected - hide last 3 options and show first 3 options
// Else If Theme I Love JS is selected - hide first 3 options andshow last 3 options

$('select[name="user_design"]').change(function () {
  if ($(this).val() == "js puns") {
    $("#color option:contains('Cornflower Blue (JS Puns shirt only)')").prop('selected', true);
    $("#color option:contains('I ♥ JS shirt only')").hide();
    $("#color option:contains('JS Puns shirt only')").show();
  } else if ($(this).val() == "heart js") {
    $("#color option:contains('Tomato (I ♥ JS shirt only)')").prop('selected', true);
    $("#color option:contains('JS Puns shirt only')").hide();
    $("#color option:contains('I ♥ JS shirt only')").show();
  }
});

// User Story #6
// Users cannot select two activities at the same time
// Write an if/else statement that 