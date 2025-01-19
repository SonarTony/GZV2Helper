const teams = {
  "TeamA": {
      offense: [
          { position: "QB", P: 3, R: 1, X: 2 },
          { position: "WR", P: 2, R: 2, X: 1 },
          { position: "WR", P: 2, R: 1, X: 3 },
          { position: "RB", P: 1, R: 3, X: 1 },
          { position: "OL", P: 0, R: 2, X: 1 },
          { position: "OL", P: 1, R: 2, X: 0 },
          { position: "OL", P: 0, R: 3, X: 1 },
          { position: "Extra", P: 1, R: 1, X: 1 },
          { position: "Extra", P: 0, R: 1, X: 2 },
      ],
      defense: [
          { position: "DL", P: 2, R: 3, X: 1 },
          { position: "DL", P: 1, R: 2, X: 2 },
          { position: "DL", P: 0, R: 3, X: 2 },
          { position: "LB", P: 2, R: 2, X: 2 },
          { position: "LB", P: 3, R: 1, X: 1 },
          { position: "DB", P: 2, R: 2, X: 3 },
          { position: "DB", P: 3, R: 1, X: 2 },
          { position: "Extra", P: 1, R: 1, X: 1 },
          { position: "Extra", P: 2, R: 0, X: 1 },
      ],
      playCharts: {
          normal: ["R", "R", "P", "P", "R or X", "X"],
          hurry: ["P", "P", "R", "R", "P", "P"],
          control: ["R", "R", "R", "P", "P", "R"],
      },
  },
  "TeamB": {
      offense: [
          { position: "QB", P: 2, R: 2, X: 2 },
          { position: "WR", P: 3, R: 1, X: 1 },
          { position: "WR", P: 2, R: 3, X: 0 },
          { position: "RB", P: 1, R: 3, X: 2 },
          { position: "OL", P: 1, R: 2, X: 1 },
          { position: "OL", P: 0, R: 3, X: 2 },
          { position: "OL", P: 1, R: 2, X: 1 },
          { position: "Extra", P: 2, R: 1, X: 0 },
          { position: "Extra", P: 1, R: 0, X: 2 },
      ],
      defense: [
          { position: "DL", P: 3, R: 1, X: 1 },
          { position: "DL", P: 1, R: 3, X: 2 },
          { position: "DL", P: 0, R: 2, X: 3 },
          { position: "LB", P: 2, R: 3, X: 1 },
          { position: "LB", P: 3, R: 2, X: 0 },
          { position: "DB", P: 2, R: 3, X: 2 },
          { position: "DB", P: 1, R: 2, X: 3 },
          { position: "Extra", P: 1, R: 1, X: 2 },
          { position: "Extra", P: 0, R: 2, X: 1 },
      ],
      playCharts: {
          normal: ["P", "P", "R", "R", "X", "P"],
          hurry: ["R", "P", "P", "R", "P", "X"],
          control: ["R", "R", "P", "P", "R", "R"],
      },
  },
};

const footballCharts = {
  "Pass_vs_Pass": [
      { diceRoll: -3, playerRating: "2 or 3", outcomeIfMet: "pass for 3", outcomeElse: "pass for 1" },
      { diceRoll: -2, playerRating: "4 or 5", outcomeIfMet: "run for 5", outcomeElse: "run for 2" },
      // Add more entries as needed
  ],
  "Pass_vs_Run": [
      { diceRoll: -3, playerRating: "6", outcomeIfMet: "complete pass for 10", outcomeElse: "incomplete" },
      { diceRoll: -2, playerRating: "7 or 8", outcomeIfMet: "interception", outcomeElse: "incomplete" },
      // Add more entries as needed
  ],
  "Pass_vs_X": [
      { diceRoll: -3, playerRating: "9", outcomeIfMet: "touchdown", outcomeElse: "fumble" },
      { diceRoll: -2, playerRating: "10 or 11", outcomeIfMet: "field goal", outcomeElse: "missed kick" },
      // Add more entries as needed
  ],
  // Additional charts here...
};

function populateTeamDropdowns() {
  const homeTeamDropdown = document.getElementById('home-team');
  const awayTeamDropdown = document.getElementById('away-team');

  Object.keys(teams).forEach(team => {
      const option1 = document.createElement('option');
      option1.value = team;
      option1.textContent = team;
      homeTeamDropdown.appendChild(option1);

      const option2 = document.createElement('option');
      option2.value = team;
      option2.textContent = team;
      awayTeamDropdown.appendChild(option2);
  });
}

function displayTeamDetails(teamKey, elementId) {
  const team = teams[teamKey];
  const element = document.getElementById(elementId);

  if (!team) {
      element.innerHTML = '<p>No team selected</p>';
      return;
  }

  element.innerHTML = `
      <h3>${teamKey}</h3>
      <p><strong>Offense:</strong> ${JSON.stringify(team.offense)}</p>
      <p><strong>Defense:</strong> ${JSON.stringify(team.defense)}</p>
      <p><strong>Play Charts:</strong> ${JSON.stringify(team.playCharts)}</p>
  `;
}

function rollDice() {
  const redDie = Math.ceil(Math.random() * 6);
  const whiteDie = Math.ceil(Math.random() * 6);
  const twelveSidedDie = Math.ceil(Math.random() * 12);

  const diceResult = `Red Die: ${redDie}, White Die: ${whiteDie}, 12-Sided Die: ${twelveSidedDie}`;
  const chart = footballCharts["Pass_vs_Pass"];
  const chartEntry = chart.find(entry => entry.diceRoll === twelveSidedDie - 6);
  const chartResult = chartEntry ? chartEntry.outcomeIfMet : "No matching result";
  document.getElementById('dice-result').textContent = `${diceResult} => Chart Result: ${chartResult}`;
}

document.getElementById('roll-dice').addEventListener('click', rollDice);

document.getElementById('home-team').addEventListener('change', (event) => {
  displayTeamDetails(event.target.value, 'home-team-details');
});

document.getElementById('away-team').addEventListener('change', (event) => {
  displayTeamDetails(event.target.value, 'away-team-details');
});

populateTeamDropdowns();