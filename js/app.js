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


  // variables used later inside of functions
  // when errors occur, variables are set to true
  // when there are no errors, variables are set to false
  var error_name = false;
  var error_mail = false;
  var error_checkbox = false;
  var error_ccnum = false;
  var error_zip = false;
  var error_cvv = false;

  // check name field for validation
  function check_name() {
    regexName = /^\s*$/;
    if (regexName.test($('#name').val())) {
      $('#nameError').html('<h3>The name field cannot be left blank. Please enter your name.<br></h3>');
      $('#nameError').css('color', 'red').show();
      $('#name').css('border', 'solid red 3px').show();
      error_name = true;
    }
    else {
      $('#nameError').empty();
      $('#name').css('border', 'none').show();
      console.log("name field is valid");
      error_name = false;
    }
  };

  // check email field for validation
  function check_mail() {
    regexEmail = /^\S+@\S+\.\S+$/;
    if (!regexEmail.test($('#mail').val())) {
      $('#mailError').html('<h3>The email address is not in the correct format. Please enter a valid email address.<br></h3>');
      $('#mailError').css('color', 'red').show();
      $('#mail').css('border', 'solid red 3px').show();
      error_mail = true;
    }
    else {
      $('#mail').css('border', 'none').show();
      $('#mailError').css('color', 'red').hide();
      console.log("mail field is valid");
      error_mail = false;
    };

  }

  // check checkboxes for validation
  function check_checkboxes() {
    if ($(".activities > label > input:checked").length === 0) {
      $('#checkboxError').html('<h3>You have not selected an activity. Please select an activity.<br></h3>');
      $('#checkboxError').css('color', 'red').show();
      $('.activities').css('border', 'solid red 3px').show();
      error_checkbox = true;
    }
    else {
      $('.activities').css('border', 'none').show();
      $('#checkboxError').css('color', 'red').hide();
      console.log("checkbox field is valid");
      error_checkbox = false;
    };

  }

  // check credit card field for validation
  function check_cc() {
    regexCreditCard = /^\d( ?\d){12,15}$/;
    if (!regexCreditCard.test($('#cc-num').val())) {
      $('#ccError').html('<h3>The credit card number entered is invalid. Please enter a valid credit card number.<br></h3>');
      $('#ccError').css('color', 'red').show();
      $('#cc-num').css('border', 'solid red 3px').show();
      console.log("cc is invalid");
      error_ccnum = true;
    }
    else {
      $('#cc-num').css('border', 'none').show();
      $('#ccError').css('color', 'red').hide();
      console.log("credit card field is valid");
      error_ccnum = false;
    };

  }

  // check zip field for validation
  function check_zip() {
    regexZip = /^\d{5}$/;
    if (!regexZip.test($('#zip').val())) {
      $('#zipError').html('<h3>The zip code you entered is invalid. Please enter a valid 5 digit zip code.<br></h3>');
      $('#zipError').css('color', 'red').show();
      $('#zip').css('border', 'solid red 3px').show();
      console.log("zip is invalid");
      error_zip = true;
    }
    else {
      $('#zip').css('border', 'none').show();
      $('#zipError').css('color', 'red').hide();
      console.log("zip field is valid");
      error_zip = false;
    };

  }

  // check cvv field for validation
  function check_cvv() {
    regexCvv = /^\d{3}$/;
    if (!regexCvv.test($('#cvv').val())) {
      $('#cvvError').html('<h3>The cvv number you entered is invalid. Please enter a valid 3 digit cvv.<br></h3>');
      $('#cvvError').css('color', 'red').show();
      $('#cvv').css('border', 'solid red 3px').show();
      console.log("cvv is invalid");
      error_cvv = true;
    }
    else {
      $('#cvv').css('border', 'none').show();
      $('#cvvError').css('color', 'red').hide();
      console.log("cvv field is valid");
      error_cvv = false;
    };

  }

  // handles our form submission
  $('form').submit(function (event) {

    // prevents the default refresh of the submit button
    event.preventDefault();


    // call the name, mail, and checkbox function to validate fields
    check_name();
    check_mail();
    check_checkboxes();

    // if paypal or bitcoin is selected, no need to validate credit card fields
    if ($('#payment option:selected').val() === "paypal") {
      error_ccnum = false;
      error_zip = false;
      error_cvv = false;
    } else if ($('#payment option:selected').val() === "bitcoin") {
      error_ccnum = false;
      error_zip = false;
      error_cvv = false;
    } else {
      check_cc();
      check_zip();
      check_cvv();
    }

    // determines if all fields are valid
    if (error_name == false && error_mail == false &&
      error_checkbox == false && error_ccnum == false &&
      error_zip == false && error_cvv == false) {
      success();
      console.log("Success");
    } else {
      fail();
      console.log("Fail");
    }

    // prints out a fail message at the top of the page
    function fail() {
      $('#fail')
        .css('color', 'red')
        .html('<h3>Please correct the fields below</h3>');
    };

    // prints out a success message at the top of the page
    function success() {
      $('#fail').hide();
      $('#success').html('<h3>You have submitted the form successfully.<br></h3>');
      $('#success').css('color', 'green').show();
      $('form')[0].reset();
    };

    // an animation that slowly scrolls up when the form is submitted
    $('body, html').animate({ scrollTop: $('form').offset().top }, 'slow');
  });
});