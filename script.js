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

    // Clear existing options first
    homeTeamDropdown.innerHTML = '';
    awayTeamDropdown.innerHTML = '';

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

    const offenseDetails = team.offense.map(player => 
        `Rank: ${player.rank}, ${player.firstName} ${player.lastName}, ${player.position}, P:${player.P} R:${player.R} X:${player.X}`
    ).join('<br>');

    const defenseDetails = team.defense.map(player => 
        `Rank: ${player.rank}, ${player.firstName} ${player.lastName}, ${player.position}, P:${player.P} R:${player.R} X:${player.X}`
    ).join('<br>');

    element.innerHTML = `
        <h3>${teamKey}</h3>
        <p><strong>Offense:</strong><br>${offenseDetails}</p>
        <p><strong>Defense:</strong><br>${defenseDetails}</p>
        <p><strong>Play Charts:</strong> Normal: ${team.playCharts.normal.join(", ")}, Hurry: ${team.playCharts.hurry.join(", ")}, Control: ${team.playCharts.control.join(", ")}</p>
    `;
}

function executePlay() {
    const chartType = document.querySelector('input[name="play-type"]:checked')?.value || 'normal';

    const offenseDie = Math.ceil(Math.random() * 6);
    const defenseDie = Math.ceil(Math.random() * 6);
    const d12Result = Math.ceil(Math.random() * 12);

    const offenseTeam = teams[document.getElementById('home-team').value];
    const defenseTeam = teams[document.getElementById('away-team').value];

    if (!offenseTeam || !defenseTeam) {
        alert('Please select both teams before rolling');
        return;
    }

    const offensePlay = offenseTeam.playCharts[chartType][offenseDie - 1];
    const defensePlay = offenseTeam.playCharts[chartType][defenseDie - 1];

    const finalOffensePlay = offensePlay === "R or X" ? (Math.random() < 0.5 ? "R" : "X") : offensePlay;

    const chartKey = `${finalOffensePlay}_vs_${defensePlay}`;
    const modifier = d12Result - 6;

    const result = {
        diceRolls: {
            offense: offenseDie,
            defense: defenseDie,
            d12: d12Result
        },
        playCalls: {
            offense: finalOffensePlay,
            defense: defensePlay
        },
        chartKey: chartKey,
        modifier: modifier
    };

    displayResults(result);
    return result;
}

function displayResults(result) {
    const resultDiv = document.getElementById('dice-result');
    resultDiv.innerHTML = `
        <h3>Play Result</h3>
        <p><strong>Dice Rolls:</strong></p>
        <ul>
            <li>Offense Die (d6): ${result.diceRolls.offense}</li>
            <li>Defense Die (d6): ${result.diceRolls.defense}</li>
            <li>Modifier Die (d12): ${result.diceRolls.d12} (Modifier: ${result.modifier})</li>
        </ul>
        <p><strong>Play Calls:</strong></p>
        <ul>
            <li>Offense called: ${result.playCalls.offense}</li>
            <li>Defense called: ${result.playCalls.defense}</li>
        </ul>
        <p><strong>Resulting Chart:</strong> ${result.chartKey}</p>
    `;
}

// Set up all event listeners and initial state
document.getElementById('roll-dice').addEventListener('click', executePlay);

document.getElementById('home-team').addEventListener('change', (event) => {
    displayTeamDetails(event.target.value, 'home-team-details');
});

document.getElementById('away-team').addEventListener('change', (event) => {
    displayTeamDetails(event.target.value, 'away-team-details');
});

// Call populateTeamDropdowns directly
populateTeamDropdowns();