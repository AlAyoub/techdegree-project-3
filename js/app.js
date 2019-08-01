// Alan Ayoub
// Treehouse Techdegree
// FSJS Project 3 - Interactive Form

// On page load, the name input field is active
// If job role other is selected, show other job role text field
$(document).ready(function() {
    $("#name").focus();
    $('#otherjob').hide(); 

  $('select[name="user_title"]').change(function () {
    if ($(this).val() == "other") {
      $('#otherjob').show();
    } else {
      $('#otherjob').hide();
    }
});

// User Story #4
// Hide all color options first
// Then display the default text 'Please select a T-shirt theme'
$('#color').hide();
// $('#color option').text('Please select a T-shirt theme');


// User Story #5
// If Theme JS Puns is selected - hide last 3 options and show first 3 options
// Else If Theme I Love JS is selected - hide first 3 options andshow last 3 options

$('select[name="user_design"]').change(function () {
  if ($(this).val() == "default") {
    $('#color option').text('Please select a T-shirt theme');
  } else if ($(this).val() == "js puns") {

    $('#color').show();
    $("#color option:contains('Cornflower Blue (JS Puns shirt only)')").prop('selected', true);
    $("#color option:contains('I ♥ JS shirt only')").hide();
    $("#color option:contains('JS Puns shirt only')").show();
  } else if ($(this).val() == "heart js") {
      $('#color').show();
      $("#color option:contains('Tomato (I ♥ JS shirt only)')").prop('selected', true);
      $("#color option:contains('JS Puns shirt only')").hide();
      $("#color option:contains('I ♥ JS shirt only')").show();
    } 
});

});


// User Story #6
// Users cannot select two activities at the same time
// Write an if/else statement that prevents two events that occur at the same time
// from being sleected



// User Story #7
// Total cost of selected activities is calculated and displayed below the list of activities
// Add a total cost variable and add each item that is selected to the total


// User Story #8
// Make the credit card payment option the default selection


// User Story #9
// If user selects credit card, credit card option is displayed
          // Hide paypal option
          // Hide Bitcoin option
// Else If user selects paypal, paypal option is displayed
          // Hide credit card option
          // Hide bitcoin option
// Else If user selects bitcoin, bitcoin option is displayed
          // Hide credit card option
          // Hide paypal option




// User Story #10
// Form cannot be submitted (the page does not refresh when the submit button is clicked) 
// until the following requirements have been met:
      // 1. Name field isn’t blank.
      // 2. Email field contains validly formatted e-mail address: 
      // (doesn’t have to check that it's a real e-mail address, just that it's formatted 
      // like one: dave@teamtreehouse.com, for example).
      // 3. At least one checkbox under "Register for Activities" section must be selected.
      // 4. If "Credit Card" is the selected payment option, the three fields accept only numbers: 
      // a 13 to 16-digit credit card number, a 5-digit zip code, and 3-number CVV value


// User Story # 11
// On submission, the form provides an error indication or message for each field that requires validation:
// 1. Name field
// 2. Email field
// 3. “Register for Activities” checkboxes
// 4. Credit Card number, Zip code, and CVV, only if the credit card payment method is selected.




// User Story #12
// When JavaScript is disabled, all form fields and payment information is displayed, 
// including the "Other" field under the "Job Role" section.