let hit = document.getElementById("hit-button");
let score = 0;
let players = 10;

function shotPlay() {
  let shot = Math.floor(Math.random() * 7);
  console.log(shot);

  if (shot === 0) {
    alert("Out!");
    players--;
  } else if (players === 0) {
    alert("All Players are Out.");
  } else {
    score += shot;
    alert(shot + " Runs");
  }

  document.getElementById("score-display").textContent =
    "Total score is: " + score;
  document.getElementById("players-display").textContent =
    "Players Left: " + players;
}
