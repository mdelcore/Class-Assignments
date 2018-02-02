// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

var config = {
    apiKey: "AIzaSyAexkBKCmFTkzlwaQlVFAoA2ytYUvSdqkg",
    authDomain: "coders-bay-7dd3d.firebaseapp.com",
    databaseURL: "https://coders-bay-7dd3d.firebaseio.com",
    projectId: "coders-bay-7dd3d",
    storageBucket: "coders-bay-7dd3d.appspot.com",
    messagingSenderId: "516001304494"
  };
  
  firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
var database = firebase.database();


// Initial Values & Global variables
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid; // 0
var highBidder = initialBidder; // no one

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) { //on page load and anytime new data changes

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highPrice = snapshot.val().highPrice;
    highBidder = snapshot.val().highBidder;


    // Change the HTML to reflect the stored values
    $("#highest-price").html("$"+highPrice);
    $("#highest-bidder").html(highBidder);


    // Print the data to the console.


  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-price").html("$"+highPrice);
    $("#highest-bidder").html(highBidder);


    // Print the data to the console.


  }

}, 
// If any errors are experienced, log them to console.

function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var bidderName = $("#bidder-name").val().trim();
  var bidderPrice = parseInt($("#bidder-price").val().trim()); //tells js that we are doing a number

  console.log(bidderName);
  console.log(bidderPrice);

 

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highBidder:bidderName,
      highPrice:bidderPrice
    })

    // Log the new High Price


    // Store the new high price and bidder name as a local variable

    highBidder = bidderName;
    highPrice = parseInt(bidderPrice);


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }
  });
