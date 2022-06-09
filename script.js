let wordInput;
let numberImage = 2;
let life = 7;
let guessedLetters = 0;
document.getElementById("life").innerHTML = life;
function putWord() {
  wordInput = $('#word').val();
  let numberLetters = wordInput.length;
  for (let i = 1; i <= numberLetters; ++i) {
    $('#charactersSlash').append(`
      <div class="centerdiv2" id="slash">_</div>`);
  }
  document.getElementById("word").value = "";
  for (let i = 97; i <= 122; ++i) {
    $('#keyboard').append(`
      <button type="button" class="btn btn-secondary" style="margin:5px"
      onclick="pressLetter(` + i + `);">` + String.fromCharCode(i) + `</button>
    `);
  }
  document.getElementById("deleteDiv").remove();
  return false;
}

function pressLetter(i) {
  let character = String.fromCharCode(i);
  let x = document.getElementsByClassName('centerdiv2');
  let flag = 0;
  for (let i = 0; i < wordInput.length; ++i) {
    if (wordInput[i] == character) {
      x[i].innerHTML = character;
      flag = 1;
      ++guessedLetters;
    }
  }
  if (flag == 0) {
    --life;
    document.getElementById("life").innerHTML = life;
    if (numberImage <= 7) {
      document.getElementById("myImage").src="Images/Untitled" + numberImage + ".png";
    } else {
      document.getElementById("message").innerHTML = "You lost :(";
      document.getElementById("message").style.color = "red";
      document.getElementById("keyboard").remove();
      for (let i = 0; i < wordInput.length; ++i) {
        x[i].innerHTML = wordInput[i];
      }
    }
    ++numberImage;
  }
  finalGame();
  return false;
}

function finalGame() {
  if (guessedLetters == wordInput.length) {
    document.getElementById("message").innerHTML = "You won :)";
    document.getElementById("message").style.color = "green";
    document.getElementById("keyboard").remove();
    return;
  }
}

function restartGame() {
  window.location.reload();
}
