//Require statements to bring in neccesary constructors and packages.
var clozeCard = require("./ClozeCard.js");
var basicCard = require("./BasicCard.js");
var inquirer = require('inquirer');

//Start of inquirer functions for users to build basic or cloze cards.
 function userBuild() {
   inquirer.prompt([
     {
       type: "list",
       message: "Welcome to the Flashcard Generator. Would you like to make a basic flashcard or a cloze deletion flashcard?",
       choices: ["Basic", "Cloze"],
       name: "userChoice"
     }
    ])
   .then(function(data){
      if (data.userChoice === "Basic") {
   	    inquirer.prompt([
   	      {
   	        type: "input",
   	        message: "What would you like the front of the card to say (question)?",
   	        name: "front"
   	      },
   	      {
   	        type: "input",
   	        message: "What would you like the back of the card to say (answer)?",
   	        name: "back"
   	      }
   	    ])
   	   .then(function(data){
   	      var newCard = new basicCard(data.front, data.back);
   	      newCard.printCard();
   	       inquirer.prompt([
   	         {
   	         	type: "confirm",
   	         	message: "Do you want to make another card?",
   	         	name: "confirm",
   	         	default: true
   	         }
   	       ])
   	      .then(function(data){
   	         if (data.confirm === true) {
               userBuild();
   	         }
   	         else {
   	           null;
   	         }
   	       }); 
   	    });
   	  }
   	  else if (data.userChoice === "Cloze") {
   	    inquirer.prompt([
   	      {
   	        type: "input",
   	        message: "What do you want to be the text of the card?",
   	        name: "fullText"
   	      },
   	      {
   	        type: "input",
   	        message: "What would you like the cloze deleted portion to be?",
   	        name: "clozePortion"
   	      }
   	    ])
   	   .then(function(data){
   	      var newClozeCard = new clozeCard(data.fullText, data.clozePortion);
   	      newClozeCard.printCard();
   	       inquirer.prompt([
   	         {
   	         	type: "confirm",
   	         	message: "Do you want to make another card?",
   	         	name: "confirm",
   	         	default: true
   	         }
   	       ])
   	      .then(function(data){
   	         if (data.confirm === true) {
               userBuild();
   	         }
   	         else {
   	           null;
   	         }
   	       }); 
   	    }); 
   	  }
    });
}
userBuild();
  

