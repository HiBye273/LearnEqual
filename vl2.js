const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.menu-content');

let hideTimeout;

dropdown.addEventListener('mouseover', () => {
  clearTimeout(hideTimeout);
  dropdownContent.style.display = 'block';
  dropdownContent.style.opacity = '1';
  dropdownContent.style.transform = 'translateY(0)';
});

dropdown.addEventListener('mouseout', () => {
  hideTimeout = setTimeout(() => {
    dropdownContent.style.opacity = '0';
    dropdownContent.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      dropdownContent.style.display = 'none';
    }, 300);
  }, 500);
});

const wordText = document.querySelector(".word");
const hintText = document.getElementById("hint-text");
const timeText = document.querySelector(".time b");
const inputField = document.querySelector("input");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return timeText.innerText = maxTime;
    }
    alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    var timerBar = document.getElementById("timer-bar");
    var totalDuration = 30; // 30 seconds
    var startTime = new Date().getTime();
    const updateTimerBar = () => {
      var elapsedTime = new Date().getTime() - startTime;
      var remainingTime = totalDuration * 1000 - elapsedTime;

      if (remainingTime <= 0) {
        timerBar.style.width = "0%";
      } else {
        timerBar.style.width = (remainingTime / (totalDuration * 1000)) * 100 + "%";
      }

      requestAnimationFrame(updateTimerBar);
    }
    updateTimerBar();
    initGame();
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  var timerBar = document.getElementById("timer-bar");
  var totalDuration = 30; // 30 seconds
  var startTime = new Date().getTime();
  const updateTimerBar = () => {
    var elapsedTime = new Date().getTime() - startTime;
    var remainingTime = totalDuration * 1000 - elapsedTime;

    if (remainingTime <= 0) {
      timerBar.style.width = "0%";
    } else {
      timerBar.style.width = (remainingTime / (totalDuration * 1000)) * 100 + "%";
    }

    requestAnimationFrame(updateTimerBar);
  }
  updateTimerBar();
});

const initGame = () => {
  initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();;
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
}
initGame();


const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) return alert("Please enter the word to check!");
  if (userWord !== correctWord) {
    alert(`Oops! ${userWord} is not a correct word. ${correctWord.toUpperCase()} was the correct word`);
    initGame();
    var timerBar = document.getElementById("timer-bar");
    var totalDuration = 30; // 30 seconds
    var startTime = new Date().getTime();
    const updateTimerBar = () => {
      var elapsedTime = new Date().getTime() - startTime;
      var remainingTime = totalDuration * 1000 - elapsedTime;

      if (remainingTime <= 0) {
        timerBar.style.width = "0%";
      } else {
        timerBar.style.width = (remainingTime / (totalDuration * 1000)) * 100 + "%";
      }

      requestAnimationFrame(updateTimerBar);
    }
    updateTimerBar();

  } else {
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    initGame();
    var timerBar = document.getElementById("timer-bar");
    var totalDuration = 30; // 30 seconds
    var startTime = new Date().getTime();
    const updateTimerBar = () => {
      var elapsedTime = new Date().getTime() - startTime;
      var remainingTime = totalDuration * 1000 - elapsedTime;

      if (remainingTime <= 0) {
        timerBar.style.width = "0%";
      } else {
        timerBar.style.width = (remainingTime / (totalDuration * 1000)) * 100 + "%";
      }

      requestAnimationFrame(updateTimerBar);
    }
    updateTimerBar();

  }
}

refreshBtn.addEventListener("click", function () {
  var timerBar = document.getElementById("timer-bar");
  var totalDuration = 30; // 30 seconds
  var startTime = new Date().getTime();
  const updateTimerBar = () => {
    var elapsedTime = new Date().getTime() - startTime;
    var remainingTime = totalDuration * 1000 - elapsedTime;

    if (remainingTime <= 0) {
      timerBar.style.width = "0%";
    } else {
      timerBar.style.width = (remainingTime / (totalDuration * 1000)) * 100 + "%";
    }

    requestAnimationFrame(updateTimerBar);
  }
  updateTimerBar();
});



refreshBtn.addEventListener("click", () => {
  initGame();
});


checkBtn.addEventListener("click", checkWord);
document.addEventListener("keydown",function(event){
  if (event.key ==="Enter"){
    checkWord();
  }
})


