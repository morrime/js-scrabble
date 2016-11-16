var Scrabble = {
  scoreChart: {
    "A": 1,
    "E": 1,
    "I": 1,
    "O": 1,
    "U": 1,
    "L": 1,
    "N": 1,
    "R": 1,
    "S": 1,
    "T": 1,
    "D": 2,
    "G": 2,
    "B": 3,
    "C": 3,
    "M": 3,
    "P": 3,
    "F": 4,
    "H": 4,
    "V": 4,
    "W": 4,
    "Y": 4,
    "K": 5,
    "J": 8,
    "X": 8,
    "Q": 10,
    "Z": 10
  },

  score: function(word) {
    var string = word.toUpperCase(),
        score = 0;
    for(var i=0; i < string.length; i++) {
      score += Scrabble.scoreChart[string[i]];
    }
    if (string.length === 7) {
      score += 50;
    }
    return score;
  },


  highestScoreFrom: function(arrayOfWords) {
    var winner = "";
    var winningScore = 0;
    arrayOfWords.forEach(function(word){
      var wordScore = Scrabble.score(word);
      if (wordScore > winningScore) {
        winner = word;
        winningScore = wordScore;
      } else if (wordScore === winningScore) {
        if (winner.length !== 7) {
          if (word.length == 7) {
            winner = word;
            winningScore = wordScore;
          } else if (word.length < winner.length) {
            winner = word;
            winningScore = wordScore;
          }
        }
      }
    });
    return winner;
  }


};
module.exports = Scrabble;


scoreWord = Scrabble.score("yolo");
console.log(scoreWord);


declareWinner = Scrabble.highestScoreFrom(["yolo", "poodle", "cheese", "zzzzzz", "aaaaaaa"]);
console.log(declareWinner);
