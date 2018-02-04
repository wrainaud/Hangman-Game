// Declare variables for New Game

    var showChar = [];
      showChar[0] = {name: "morty smith", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/E_qvy82U4RE?autoplay=1" frameborder="0" allowfullscreen><iframe>'};

      showChar[1] = {name: "rick sanchez", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/X-gHgcmFB6Q?autoplay=1" frameborder="0" allowfullscreen><iframe>'};
      
      showChar[2] = {name: "birdperson", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/-c-d720OvH8?autoplay=1" frameborder="0" allowfullscreen><iframe>'};
      
      showChar[3] = {name: "mr meeseeks", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/qUYvIAP3qQk?autoplay=1" frameborder="0" allowfullscreen><iframe>'};
      
      showChar[4] = {name: "squanchy", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/llhdrbcw6sM?autoplay=1" frameborder="0" allowfullscreen><iframe>'};
      
      showChar[5] = {name: "abradolf lincler", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/cWDeMD_JkGY?autoplay=1" frameborder="0" allowfullscreen><iframe>'};
      
      showChar[6] = {name: "ice t", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/LPDn0PC6zFE?autoplay=1" frameborder="0" allowfullscreen></iframe>'};
      
      showChar[7] = {name: "cromulons", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/m1fZ7Ap6ebs?autoplay=1" frameborder="0" allowfullscreen><iframe>'};
      
      showChar[8] = {name: "unity", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/wr2WZ_BfsII?autoplay=1" frameborder="0" allowfullscreen><iframe>'};

      showChar[9] = {name: "dr wong", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/ukL12WtJNo8?autoplay=1" frameborder="0" allowfullscreen><iframe>'};

      showChar[10] = {name: "tammy gueterman", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/-c-d720OvH8?autoplay=1" frameborder="0" allowfullscreen><iframe>'};

      showChar[11] = {name: "jerry smith", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/FvZH0Bm5USk?autoplay=1" frameborder="0" allowfullscreen><iframe>'};

      showChar[12] = {name: "jan michael vincent", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/nLB4dU3Yc6M?autoplay=1" frameborder="0" allowfullscreen><iframe>'};

      showChar[13] = {name: "beth smith", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/jl17CYYSzUw?autoplay=1" frameborder="0" allowfullscreen></iframe>'};

      showChar[14] = {name: "shrimply pibbles", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/ZblNe_04ABI?autoplay=1" frameborder="0" allowfullscreen></iframe>'};

      showChar[15] = {name: "summer smith", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/ukL12WtJNo8?autoplay=1" frameborder="0" allowfullscreen></iframe>'};

      showChar[16] = {name: "zeep xanflorp", youtube:'<iframe width="500" height="275" src="https://www.youtube.com/embed/8LrJGlVFtrM?autoplay=1" frameborder="0" allowfullscreen><iframe>'};

      showChar[17] = {name: "tiny rick", youtube: '<iframe width="500" height="275" src="https://www.youtube.com/embed/R0p8gk_zHSA?autoplay=1" frameborder="0" allowfullscreen></iframe>'};

    var charName;
    var youtube;
    var wins = 0;
    var losses = 0;
    var lettersGuessed;
    var goesLeft;
    var randomChar;
    var pickedChar;
    var placeholder;
    var input;
    var charNameLength;
    var charNameSubstring;
    var currentcharName;
    var key;

    // Function for New Game
    function newGame() {
      placeholder = "";
      goesLeft = 10;
      lettersGuessed = [];
      randomChar = Math.floor(Math.random() * showChar.length); 
      pickedChar = showChar.splice(randomChar, 1);
      charName =  pickedChar[0].name;
      youtube = pickedChar[0].youtube;
      charNameLength = charName.length;
      charNameSubstring = charName.substring;
    
      // Place holder for letters
      for (var i = 0; i < charName.length; i++) {
        if (charName.substring(i, i + 1) === " "){
          placeholder =  placeholder + " ";
        }
        else {
          placeholder = placeholder + "_";
        }
      }

      // Initial Page Content
      document.querySelector("#placeholder").innerHTML = placeholder;
      document.querySelector("#lettersGuessedSpace").innerHTML = lettersGuessed;
      document.querySelector("#wins").innerHTML = wins;
      document.querySelector("#losses").innerHTML = losses;
      document.querySelector("#message").innerHTML = "Rick and Morty Style Hangman Game.<br/>Press any key to get started!";
      document.querySelector("#guessesLeft").innerHTML = goesLeft;
      document.querySelector("#name").innerHTML = " ";
      document.querySelector("#youtube").innerHTML = "";

    }

  // Initialize first game
  newGame();
 
  // Record keystroke to start logic function
  document.onkeyup = function(e){
    if (key == /[a-zA-Z]/){
    key = event.key;
    }
    else{

    }



    document.querySelector("#message").innerHTML = "Rick and Morty Style Hangman Game.<br/> WUBBA LUBBA DUB DUB!";

    // Variable to lose turn
    var correct = 0;

    // For Loop to guess if letter was correct
    for (var i = 0; i < charNameLength; i++) {
      if (key == charName.substring(i, i + 1)) {
        correct++;
        placeholder = placeholder.substring(0, i) + key + placeholder.substring(i + 1, placeholder.length + 1);
        document.querySelector("#placeholder").innerHTML = placeholder;
      }
    }

    // If letter selected was incorrect
    if (correct == 0) {
      goesLeft--;
      lettersGuessed.push(key);
      document.querySelector("#lettersGuessedSpace").innerHTML = lettersGuessed;
      document.querySelector("#guessesLeft").innerHTML = goesLeft;
      
    }

    // Wins
    if (placeholder == charName) {
      wins++;
      document.querySelector("#message").innerHTML = "Listen, I'm not the nicest guy in the universe, because I'm the smartest, and being nice is something stupid people do to hedge their bets.<br/><h3>Click the New Game button to play again!</h3>";
      document.querySelector("#wins").innerHTML = wins;
      document.querySelector("#name").innerHTML = "ANSWER: " + charName;
      document.querySelector("#youtube").innerHTML = youtube;
      
    }
    // Losses
    if (goesLeft == 0) {
      losses++;
      
      document.querySelector("#message").innerHTML = "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV.<br/><h3>Click the New Game button to play again!</h3>";
      document.querySelector("#losses").innerHTML = losses;
      document.querySelector("#name").innerHTML = "ANSWER: " + charName;
      document.querySelector("#youtube").innerHTML = youtube;
      
    }

  };
  // New Game Button
  document.querySelector("#button").addEventListener("click", newGame);


