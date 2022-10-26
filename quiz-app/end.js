const username = document.getElementById("username");
const saveScoreBtn = document.getElementsById('sumbit-btn');
const finalScore = document.getElementsByClassName('final-score');
const mostrecentscore = localStorage.getItem('mostrecentscore');

username.addEventListener('keyup', () => {
   saveScoreBtn.disabled = !username.value;

});

saveHighScore = e => {
  console.log('Hello')
};

finalScore.innerText = mostrecentscore;