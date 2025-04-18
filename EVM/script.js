function toggleArrow(rowNumber) {
  var bulbImage = document.getElementById("bulbImage-" + rowNumber); // bulb image
  var redArrow = document.getElementById("red-arrow-" + rowNumber); // red arrow
  var blankArrow = document.getElementById("blank-arrow-" + rowNumber); // blank arrow
  var candidateAudio = new Audio('assets/click-sound.mpeg');  // Replace with actual audio path
  var buzzerAudio = new Audio('assets/buzz.wav');  // Replace with actual audio path

  // Toggling the bulb image
  if (bulbImage.src.includes('bulb.png')) {
    bulbImage.src = 'assets/bulbred.png'; // Change to "bulbed" image
  } else {
    bulbImage.src = 'assets/bulb.png'; // Change back to "bulb" image
  }

  // Sound effects based on the row number
  if (rowNumber === 3) {
    candidateAudio.play();  // Plays candidate's audio on row 3
  } else {
    buzzerAudio.play();  // Plays buzzer audio for other rows
  }

  // Hiding the blank arrow and showing the red arrow
  if (blankArrow) {
    blankArrow.style.visibility = 'hidden';  // Hides the blank arrow
  }
  if (redArrow) {
    redArrow.style.visibility = 'visible';  // Shows the red arrow
  }

  // Set a timeout to revert back to the blank arrow after 10 seconds (10000 milliseconds)
  setTimeout(function() {
    bulbImage.src = 'assets/bulb.png'; // Reset the bulb image to default
    if (blankArrow) {
      blankArrow.style.visibility = 'visible';  // Show the blank arrow again
    }
    if (redArrow) {
      redArrow.style.visibility = 'hidden';  // Hide the red arrow
    }
  }, 1000); // Adjust this time as needed
}

function onSound() {
  var clickAudio = new Audio('assets/click-sound.wav');  // Replace with the actual path to your sound file
  clickAudio.play();
}

function shareOnWhatsApp() {
  const message = encodeURIComponent("Check out this link: https://example.com");  // Replace with your desired message
  const whatsappURL = `https://web.whatsapp.com/send?text=${message}`;
  window.open(whatsappURL, "_blank");
}
