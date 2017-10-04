function basicCard (front, back) {
  this.front = front,
  this.back = back 
  this.printCard = function(){
    console.log("----------------------------------------------------------");
    console.log("Front: " + this.front);
    console.log("Back: " + this.back);
    console.log("----------------------------------------------------------");
  } 
};

module.exports = basicCard;