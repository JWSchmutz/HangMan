var hangmanGame = {
  wordOptions: [
    "Peter Parker",
    "Venom",
    "Doctor Octopus",
    "Norman Osborn",
    "Mary Jane",
    "Gwen Stacey",
    "Aunt May"
  ],
  wins: 0,
  losses: 0,
  guessesRemaining: 6,
  guessedLetters: [],
  incorrectGuessedLetters: [],
  correctGuessedLetters: [],
  currentWord: null,
  displayWord: [],
  letterGuessed: null,
  createCurrentWord: function() {
    this.currentWord = this.wordOptions[
      Math.floor(Math.random() * this.wordOptions.length)
    ];
  },
  resetGuessesRemaining: function() {
    this.guessesRemaining = 0;
  },
  resetGuessedLetters: function() {
    this.guessedLetters = [];
    this.incorrectGuessedLetters = [];
    this.correctGuessedLetters = [];
  },
  displayWins: function() {
    document.getElementById("wins-text").innerHTML = this.wins;
  },
  displayLosses: function() {
    document.getElementById("losses-text").innerHTML = this.losses;
  },
  displayGuessesRemaining: function() {
    document.getElementById(
      "guesses-remaining-text"
    ).innerHTML = this.guessesRemaining;
  },
  displayIncorrectGuessedLetters: function() {
    document.getElementById(
      "guessed-letters-text"
    ).innerHTML = this.incorrectGuessedLetters;
  },
  createAndDisplayDisplayWord: function() {
    this.displayWord = [];

    for (var i = 0; i < this.currentWord.length; i++) {
      if (this.currentWord[i] === " ") {
        this.displayWord.push(" ");
      } else if (
        this.guessedLetters.includes(this.currentWord[i].toLowerCase())
      ) {
        this.displayWord.push(this.currentWord[i]);
      } else {
        this.displayWord.push("_");
      }
    }
    document.getElementById("word-text").innerHTML = this.displayWord.join("");
  },
  startGame: function() {
    this.createCurrentWord();
    this.displayWins();
    this.displayLosses();
    this.displayGuessesRemaining();
    this.displayIncorrectGuessedLetters();
    this.createAndDisplayDisplayWord();
  }
};

hangmanGame.startGame();

document.onkeyup = function(event) {
  var guessCode = event.which;
  var guess = event.key;
  if (
    guessCode >= 65 &&
    guessCode <= 90 &&
    !hangmanGame.guessedLetters.includes(guess)
  ) {
    if (hangmanGame.currentWord.toLowerCase().includes(guess)) {
      hangmanGame.guessedLetters.push(guess);
      hangmanGame.createAndDisplayDisplayWord();
      setTimeout(victory, 1000);

      function victory() {
        if (hangmanGame.displayWord.indexOf("_") === -1) {
          alert("Victory!");
          hangmanGame.wins++;
          hangmanGame.guessesRemaining = 6;
          hangmanGame.guessedLetters = [];
          hangmanGame.incorrectGuessedLetters = [];
          hangmanGame.startGame();
        }
      }
    } else {
      hangmanGame.incorrectGuessedLetters.push(guess);
      hangmanGame.displayIncorrectGuessedLetters();
      hangmanGame.guessesRemaining--;
      hangmanGame.displayGuessesRemaining();
      hangmanGame.guessedLetters.push(guess);
      if (hangmanGame.guessesRemaining === 0) {
        alert("Failure!");
        hangmanGame.losses++;
        hangmanGame.guessesRemaining = 6;
        hangmanGame.guessedLetters = [];
        hangmanGame.incorrectGuessedLetters = [];
        hangmanGame.startGame();
      }
    }
  }
};

var like = 4;
if (like > 2) {
  console.log("hi");
} else {
  console.log("I don't like you");
}
