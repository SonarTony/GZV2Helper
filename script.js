const teams = {
    "TeamA": {
        offense: [
            { rank: 1, firstName: "John", lastName: "Smith", position: "QB", P: 3, R: 1, X: 2 },
            { rank: 2, firstName: "James", lastName: "Johnson", position: "WR", P: 2, R: 2, X: 1 },
            { rank: 3, firstName: "Robert", lastName: "Williams", position: "WR", P: 2, R: 1, X: 3 },
            { rank: 4, firstName: "Michael", lastName: "Brown", position: "RB", P: 1, R: 3, X: 1 },
            { rank: 5, firstName: "David", lastName: "Jones", position: "OL", P: 0, R: 2, X: 1 },
            { rank: 6, firstName: "Chris", lastName: "Garcia", position: "OL", P: 1, R: 2, X: 0 },
            { rank: 7, firstName: "Paul", lastName: "Martinez", position: "OL", P: 0, R: 3, X: 1 },
            { rank: 8, firstName: "Mark", lastName: "Hernandez", position: "Extra", P: 1, R: 1, X: 1 },
            { rank: 9, firstName: "Steven", lastName: "Lopez", position: "Extra", P: 0, R: 1, X: 2 },
        ],
        defense: [
            { rank: 1, firstName: "Daniel", lastName: "Gonzalez", position: "DL", P: 2, R: 3, X: 1 },
            { rank: 2, firstName: "Matthew", lastName: "Wilson", position: "DL", P: 1, R: 2, X: 2 },
            { rank: 3, firstName: "Anthony", lastName: "Anderson", position: "DL", P: 0, R: 3, X: 2 },
            { rank: 4, firstName: "Kevin", lastName: "Thomas", position: "LB", P: 2, R: 2, X: 2 },
            { rank: 5, firstName: "Brian", lastName: "Taylor", position: "LB", P: 3, R: 1, X: 1 },
            { rank: 6, firstName: "George", lastName: "Moore", position: "DB", P: 2, R: 2, X: 3 },
            { rank: 7, firstName: "Edward", lastName: "Martin", position: "DB", P: 3, R: 1, X: 2 },
            { rank: 8, firstName: "Ronald", lastName: "Jackson", position: "Extra", P: 1, R: 1, X: 1 },
            { rank: 9, firstName: "Donald", lastName: "White", position: "Extra", P: 2, R: 0, X: 1 },
        ],
        playCharts: {
            normal: ["R", "R", "P", "P", "R or X", "X"],
            hurry: ["P", "P", "R", "R", "P", "P"],
            control: ["R", "R", "R", "P", "P", "R"],
        },
    },
    "TeamB": {
        offense: [
            { rank: 1, firstName: "Andrew", lastName: "King", position: "QB", P: 2, R: 2, X: 2 },
            { rank: 2, firstName: "Joshua", lastName: "Wright", position: "WR", P: 3, R: 1, X: 1 },
            { rank: 3, firstName: "Ethan", lastName: "Hill", position: "WR", P: 2, R: 3, X: 0 },
            { rank: 4, firstName: "Alexander", lastName: "Scott", position: "RB", P: 1, R: 3, X: 2 },
            { rank: 5, firstName: "Nicholas", lastName: "Green", position: "OL", P: 1, R: 2, X: 1 },
            { rank: 6, firstName: "Ryan", lastName: "Adams", position: "OL", P: 0, R: 3, X: 2 },
            { rank: 7, firstName: "Jacob", lastName: "Baker", position: "OL", P: 1, R: 2, X: 1 },
            { rank: 8, firstName: "Elijah", lastName: "Gonzales", position: "Extra", P: 2, R: 1, X: 0 },
            { rank: 9, firstName: "Aaron", lastName: "Nelson", position: "Extra", P: 1, R: 0, X: 2 },
        ],
        defense: [
            { rank: 1, firstName: "Christopher", lastName: "Carter", position: "DL", P: 3, R: 1, X: 1 },
            { rank: 2, firstName: "Nathan", lastName: "Mitchell", position: "DL", P: 1, R: 3, X: 2 },
            { rank: 3, firstName: "Logan", lastName: "Perez", position: "DL", P: 0, R: 2, X: 3 },
            { rank: 4, firstName: "Hunter", lastName: "Roberts", position: "LB", P: 2, R: 3, X: 1 },
            { rank: 5, firstName: "Dylan", lastName: "Turner", position: "LB", P: 3, R: 2, X: 0 },
            { rank: 6, firstName: "Lucas", lastName: "Phillips", position: "DB", P: 2, R: 3, X: 2 },
            { rank: 7, firstName: "Gavin", lastName: "Campbell", position: "DB", P: 1, R: 2, X: 3 },
            { rank: 8, firstName: "Caleb", lastName: "Parker", position: "Extra", P: 1, R: 1, X: 2 },
            { rank: 9, firstName: "Isaac", lastName: "Evans", position: "Extra", P: 0, R: 2, X: 1 },
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

    const offenseDetails = team.offense.map(player => `Rank: ${player.rank}, ${player.firstName} ${player.lastName}, ${player.position}, P:${player.P} R:${player.R} X:${player.X}`).join('<br>');
    const defenseDetails = team.defense.map(player => `Rank: ${player.rank}, ${player.firstName} ${player.lastName}, ${player.position}, P:${player.P} R:${player.R} X:${player.X}`).join('<br>');

    element.innerHTML = `
        <h3>${teamKey}</h3>
        <p><strong>Offense:</strong><br>${offenseDetails}</p>
        <p><strong>Defense:</strong><br>${defenseDetails}</p>
        <p><strong>Play Charts:</strong> Normal: ${team.playCharts.normal.join(", ")}, Hurry: ${team.playCharts.hurry.join(", ")}, Control: ${team.playCharts.control.join(", ")}</p>
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
