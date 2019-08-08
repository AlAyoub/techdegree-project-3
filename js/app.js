// Alan Ayoub
// Treehouse Techdegree
// FSJS Project 3 - Interactive Form

$(document).ready(function () {

  // mouse focus in the name input and hide other job input field
  $("#name").focus();
  $('#otherjob').hide();

  // shows the other input field if other is selected from the job role select drop dowm
  $('select[name="user_title"]').change(function () {
    if ($(this).val() == "other") {
      $('#otherjob').show();
    } else {
      $('#otherjob').hide();
    }
  });

  // hide all color options
  $('#colors-js-puns label').hide();
  $('#color').hide();

  // default text when no t-shirt theme has been selected, initially hidden
  const $defaultText = $("#color option:contains('Please select a T-shirt theme')").hide();

  // only show t-shirt options for the design selected
  $('select[name="user_design"]').change(function () {
    if ($(this).val() == "js puns") {
      $('#colors-js-puns label').show();
      $('#color').show();
      $("#color option:contains('Cornflower Blue (JS Puns shirt only)')").prop('selected', true);
      $("#color option:contains('I ♥ JS shirt only')").hide();
      $("#color option:contains('JS Puns shirt only')").show();
    } else if ($(this).val() == "heart js") {
      $('#colors-js-puns label').show();
      $('#color').show();
      $("#color option:contains('Tomato (I ♥ JS shirt only)')").prop('selected', true);
      $("#color option:contains('JS Puns shirt only')").hide();
      $("#color option:contains('I ♥ JS shirt only')").show();
    } else {
      $('#colors-js-puns label').show();
      $("#color option:contains('Please select a T-shirt theme')").prop('selected', true);
      $("#color option:contains('JS Puns shirt only')").hide();
      $("#color option:contains('I ♥ JS shirt only')").hide();
    }
  });


  // users cannot select two events that occur at the same time
  $('.activities :checkbox').change(function () {
    if (this.checked && this.name === "all") {
    }
    else if (this.checked && this.name === "build-tools") {
    }
    else if (this.checked && this.name === "npm") {
    }
    else if (this.checked && this.name === "js-frameworks") {
      $('input[name="express"]').prop("disabled", true);
      $('input[name="express"]').parent().css('color', 'grey');
    }
    else if (this.checked && this.name === "express") {
      $('input[name="js-frameworks"]').prop("disabled", true);
      $('input[name="js-frameworks"]').parent().css('color', 'grey');
    }
    else if (this.checked && this.name === "js-libs") {
      $('input[name="node"]').prop("disabled", true);
      $('input[name="node"]').parent().css('color', 'grey');
    }
    else if (this.checked && this.name === "node") {
      $('input[name="js-libs"]').prop("disabled", true);
      $('input[name="js-libs"]').parent().css('color', 'grey');
    }
    else {
      $('input[name="express"]').prop("disabled", false);
      $('input[name="js-frameworks"]').prop("disabled", false);
      $('input[name="node"]').prop("disabled", false);
      $('input[name="js-libs"]').prop("disabled", false);
      $('input[name="express"]').parent().css('color', 'black');
      $('input[name="js-frameworks"]').parent().css('color', 'black');
      $('input[name="node"]').parent().css('color', 'black');
      $('input[name="js-libs"]').parent().css('color', 'black');
    }
  });

  // cost added to the register for activities total if checkbox is checked
  $('label').click(function () {
    var total = 0;
    $('.activities :checked').each(function () {
      total += parseInt($(this).val());
    })
    $('#total').html('Total $' + total);
  });

  // make credit card option the default selection and hides the paypal and botcoin text
  $("#payment option:contains('Credit Card')").prop('selected', true);
  $('#paypal').hide();
  $('#bitcoin').hide();

  // display the selelcted payment option
  $('#payment').change(function () {
    if ($('#payment option:selected').val() === "paypal") {
      $('#paypal').show();
      $('#bitcoin').hide();
      $('#credit-card').hide();
    } else if ($('#payment option:selected').val() === "bitcoin") {
      $('#bitcoin').show();
      $('#paypal').hide();
      $('#credit-card').hide();
    } else {
      $('#credit-card').show();
      $('#bitcoin').hide();
    }
  });

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  //                        FORM VALIDATION                                 //

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  // all regex variables are listed here
  regexName = /^\s*$/;
  regexEmail = /^\S+@\S+\.\S+$/;
  regexCreditCard = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
  regexZip = /^\d{5}$/;
  regexCvv = /^\d{3}$/;
  var error = "";

  // add a div with the id #error for text to display at the top if there is an error and initially hide the div
  $('form').prepend('<div id="error"></div>');
  $('#error').hide();


  // handles our form submission
  $('form').submit(function (e) {
    
    // prevents the default refresh of the submit button
    e.preventDefault();

    // regex validation for the name, email, activities, credit card, zip, and cvv fields
    if (regexName.test($('#name').val())) {
      error = "<h3>The name field cannot be left blank. Please enter your name.<br></h3>";
      $('#error').css('color', 'red').show();
    }
    else if (!regexEmail.test($('#mail').val())) {
      error = "<h3>The email address is not in the correct format. Please enter a valid email address.<br></h3>";
      $('#error').css('color', 'red').show();
    }
    else if ($(".activities > label > input:checked").length === 0) {
      error = "<h3>You have not selected an activity. Please select an activity.<br></h3>";
      $('#error').css('color', 'red').show();
    }
    else if (!regexCreditCard.test($('#cc-num').val())) {
      error = "<h3>The credit card number entered is invalid. Please enter a valid credit card number.<br></h3>";
      $('#error').css('color', 'red').show();
    }
    else if (!regexZip.test($('#zip').val())) {
      error = "<h3>The zip code you entered is invalid. Please enter a valid 5 digit zip code.<br></h3>";
      $('#error').css('color', 'red').show();
    }
    else if (!regexCvv.test($('#cvv').val())) {
      error = "<h3>The cvv number you entered is invalid. Please enter a valid 3 digit cvv.<br></h3>";
      $('#error').css('color', 'red').show();
    }
    else {
      error = "<h3>You have submitted the form successfully.<br></h3>";
      $('#error').css('color', 'green').show();
      $('form')[0].reset();
    }

    // inserts the error text into the id #error 
    // that was preppended to the top of the form
    document.getElementById('error').innerHTML = error;

    // an animation that slowly scrolls up when the form is submitted
    $('body, html').animate({ scrollTop: $('form').offset().top }, 'slow');
  });
});