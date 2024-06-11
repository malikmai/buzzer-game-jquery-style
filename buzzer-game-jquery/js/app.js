let gamePlayed = false; // The initial state of the game
let cookiesWon = 0;
let timer; // Manages timer

$(document).ready(function() {
  function toggleGameState() {
    clearTimeout(timer); // Clears the timer whenever the button is clicked

    if ($('#gameMessage').text() === "Too slow, You've lost your chance!" && gamePlayed) {
      cookiesWon = 0; // resets the cookie count if the user stops playing.
      $('#cookieCounter').text(`Cookies Won: ${cookiesWon}`);
    }

    if (cookiesWon >= 50) {
      // Special message and button behavior after 50 wins
      $('#gameMessage').text("Wow... You really pressed this button 100 times. Go get some real cookies mate.");
      $('#theBuzzer').text("You WILL be Judged");
      $('#theBuzzer').click(function() { 
        window.location.href = 'jumpScare.html'; // Redirects to jumpScare.html on next click
      });
      return; // Stop further execution to avoid resetting the message and button text
    }

    if (!gamePlayed) {
      $('#gameMessage').text("You won a cookie!");
      $('#theBuzzer').text("Play Again?");
      cookiesWon++; // Increments the cookies by 1
      $('#cookieCounter').text(`Cookies Won: ${cookiesWon}`);
      gamePlayed = true; // Changes the state to played
    } else {
      $('#gameMessage').text(""); // Resets the game message when 'Play Again?' is pressed
      $('#theBuzzer').text("Hit Me!");
      gamePlayed = false; // Resets the game state
    }

    setupTimer(); // Sets up or resets the timer for the next round
  }

  function setupTimer() {
    timer = setTimeout(() => {
      $('#gameMessage').text("Too slow, You've lost your chance!");
      $('#theBuzzer').text("Play Again?");
      gamePlayed = true; // Ensures the game resets on next button click
    }, 15000); // 15 seconds countdown
  }

  $('#theBuzzer').click(toggleGameState); // Handles game state toggle and timer reset on click

  setupTimer(); // Starts timer when the page is loaded
});