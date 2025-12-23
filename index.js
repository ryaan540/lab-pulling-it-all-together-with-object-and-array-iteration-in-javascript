function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}


function numPointsScored(playerName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.players[playerName]) {
            return team.players[playerName].points;
        }
    }
}

function shoeSize(playerName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.players[playerName]) {
            return team.players[playerName].shoe;
        }
    }
}

function teamColors(teamName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
}

function teamNames() {
    const game = gameObject();
    return Object.values(game).map(team => team.teamName);
}

function playerNumbers(teamName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.teamName === teamName) {
            return Object.values(team.players).map(player => player.number);
        }
    }
}

function playerStats(playerName) {
    const game = gameObject();
    for (const team of Object.values(game)) {
        if (team.players[playerName]) {
            return team.players[playerName];
        }
    }
}

function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoeSize = 0;
    let rebounds = 0;

    for (const team of Object.values(game)) {
        for (const [playerName, stats] of Object.entries(team.players)) {
            if (stats.shoe > biggestShoeSize) {
                biggestShoeSize = stats.shoe;
                rebounds = stats.rebounds;
            }
        }
    }

    return rebounds;
}

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topScorer = "";

    for (const team of Object.values(game)) {
        for (const [playerName, stats] of Object.entries(team.players)) {
            if (stats.points > maxPoints) {
                maxPoints = stats.points;
                topScorer = playerName;
            }
        }
    }

    return topScorer;
}

function winningTeam() {
    const game = gameObject();
    let maxPoints = 0;
    let winningTeamName = "";

    for (const team of Object.values(game)) {
        const totalPoints = Object.values(team.players).reduce((sum, player) => sum + player.points, 0);
        if (totalPoints > maxPoints) {
            maxPoints = totalPoints;
            winningTeamName = team.teamName;
        }
    }

    return winningTeamName;
}

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";

    for (const team of Object.values(game)) {
        for (const playerName of Object.keys(team.players)) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
            }
        }
    }

    return longestName;
}

function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let mostSteals = 0;

    for (const team of Object.values(game)) {
        for (const [playerName, stats] of Object.entries(team.players)) {
            if (playerName === longestName) {
                mostSteals = stats.steals;
            }
        }
    }

    return mostSteals > 10; 
}