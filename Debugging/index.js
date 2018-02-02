$.ajax("https://www.omdbapi.com/?s=Matrix&y=&plot=short&apikey=trilogy").done(function (response) {
	alert("The movie you chose is: " + response.search[0].title);
});

// $(".myBtn").click(function () {
// 	alert("You have clicked the button.");
// });
//
// var myVarA = 1;
// var myVarB = "1";
//
// if (myVarA === myVarB) {
// 	alert("1 is equal to 1");
// } else {
// 	alert("1 is not equal to 1");
// }
//
//
//
// var dateA = Date.now(); // current date
// var dateB = Date.now() - 1000; // 1 second ago
//
// if (dateA > dateB)  {
// 	alert("Date A is in the past compared to Date B");
// } else {
// 	alert("Date B is in the past compared to Date A");
// }