function clozeCard (text, cloze) {
  this.fullText = text,
  this.cloze = cloze,
  this.partial = this.fullText.replace(this.cloze, " ... "),
  this.printCard = function() {
    if (this.fullText === this.partial) {
      console.log("----------------------------------------------------------");
      console.log("This request is invalid, The cloze argument does not exist in the full text");
      console.log("----------------------------------------------------------");
    }
    else {
      console.log("----------------------------------------------------------");
      console.log("Text: " + this.fullText);
      console.log("Cloze Portion: " + this.cloze);
      console.log("Partial: " + this.partial);
      console.log("----------------------------------------------------------");
    }
  }
}

module.exports = clozeCard;

