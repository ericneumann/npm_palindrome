module.export = Phrase;

// Adds 'reverse' to all strings;
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// defines a phrase object
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    
    return this.processedContent() === this.processedContent().reverse();
  }

  // Returns an all caps version of the phrase with two bangs
  this.louder = function louder() {
    return this.content.toUpperCase() + "!!";
  }
}

String.prototype.palindrome = function palindrome() {
  return new Phrase(this).palindrome();
}
