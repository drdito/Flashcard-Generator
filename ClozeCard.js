function clozeCard (text, cloze) {
  this.fullText = text,
  this.cloze = cloze,
  this.partial = this.fullText.replace(this.cloze, " ... "),
  this.printCard = function() {
    if (this.fullText === this.partial) {
      console.log("This request is invalid, The cloze argument does not exist in the full text");
    }
    else {
      console.log("Text: " + this.fullText);
      console.log("Cloze Portion: " + this.cloze);
      console.log("Partial: " + this.partial);
    }
  }
}

module.exports = clozeCard;

