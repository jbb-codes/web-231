/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Jarren Bess
     Date: Sep 5, 2025

     Filename: js03.js
 */

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

window.addEventListener("load", addWeekdays);

function addWeekdays() {
  let i = 0;

  let headingCells = document.getElementsByTagName("th");

  while (i < 7) {
    headingCells[i].innerHTML = weekDays[i];

    i++;
  }
}

window.addEventListener("load", showGames);

function showGames() {
  for (let i = 0; i < gameDates.length; i++) {
    let gameInfo = "";

    switch (gameResults[i]) {
      case "W":
        gameInfo += "<p class='win'>";
        break;
      case "L":
        gameInfo += "<p class='lose'>";
        break;
      case "S":
        gameInfo += "<p class='suspended'>";
        break;
      case "P":
        gameInfo += "<p class='postponed'>";
        break;
    }

    gameInfo += gameOpponents[i] + "<br>";

    gameInfo +=
      gameResults[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

    // Display innings played for suspended, shortened, or extra inning games
    if (gameInnings[i] < 5) {
      gameInfo += " [" + gameInnings[i] + "]***";
    } else if (gameInnings[i] < 9) {
      gameInfo += " [" + gameInnings[i] + "]*";
    } else if (gameInnings[i] > 9) {
      gameInfo += " [" + gameInnings[i] + "] ";
    }

    gameInfo += "</p>";

    let tableCell = document.getElementById(gameDates[i]);
    tableCell.insertAdjacentHTML("beforeend", gameInfo);
  }
}
