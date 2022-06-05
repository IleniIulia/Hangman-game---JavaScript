let wordInput;
let numberImage = 2;
let life = 7;
let guessedLetters = 0;
document.getElementById("life").innerHTML = life;
function putWord() {
  wordInput = $('#word').val();
  let letters = wordInput.length;
  for (let i = 1; i <= letters; ++i) {
    $('#character').append(`
      <div class="centerdiv2" id="slash">_</div>`);
  }
  document.getElementById("word").value = "";
  let numberCharacter = 0;
  for (let i = 97; i <= 122; ++i) {
    ++numberCharacter;
    $('#letters').append(`
      <button type="button" class="btn btn-secondary" style="margin:5px" onclick="pressLetter(` + i + `);">` + String.fromCharCode(i) + `</button>`);
  }
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
      document.getElementById("myImage").src="Images/Untitled" + numberimage + ".png";
    } else {
      document.getElementById("message").innerHTML = "You lost :(";
      document.getElementById("message").style.color = "red";
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
    return;
  }
}
