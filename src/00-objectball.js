//Game object function
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colours: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colours: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  console.log(gameObject());

  //function to find number of points scored by a player
  function numPointsScored(playerName)
  {
    const gameData = gameObject();
    for ( const team in gameData)
        {
            //iterating through game data
            const players = gameData[team].players;
            if (players.hasOwnProperty(playerName))
                {
                    return players[playerName].points
                }
        }
        return null;// Cannot find player
  }
  // function to find shoe size of the any player

function shoeSize(playerName)
{
  const gameData = gameObject();
  for (team in gameData)
    {
        //iterating through game data
        const players = gameData[team].players;
        if (players.hasOwnProperty(playerName))
            {
                return players[playerName].shoe
            }
    }
    return "team cannot be found, Please enter correct player name";// if player not found
}
// function to find team colours and return an arry of team colours
function teamColours(teamName)
{
   const gameData = gameObject();
   for (const team in gameData)
    {
        if (gameData[team].teamName === teamName)
            {
                return gameData[team].colours;
            }
    } 
    return "team cannot be found, Please enter correct team name";// if team not found
    
}
// function to return an array of team names
function teamNames()
{
    const gameData = gameObject();
    return [gameData.home.teamName, gameData.away.teamName];
}
//function to return an array of jersey numbers for a team
function playerNumbers(teamName)
{
    const gameData = gameObject();
    for (const team in gameData)
        {
            if (gameData[team].teamName === teamName )
                {
                    const players = gameData[team].players;
                    return Object.values(players).map(player => player.number);
                }
        }
            return "team cannot be found, Please enter correct team name";// if team not found
}
//function to display player stats
function playerStats(playerName)
{
    const gameData = gameObject();
    for (const team in gameData)
        {
            const players = gameData[team].players;
            if (players.hasOwnProperty(playerName))
                {
                    return players[playerName];
                }
        }
        return "cannot find player, Please check and enter correctly"
}
// function to find the biggest shoes size on rebound
function bigShoeRebounds()
{
    let largestShoeSize = -Infinity;
    let playerWithLargestShoeSize = null;
    
    //check through both teams
    for (const team in gameObject())
        {
            const players = gameObject()[team].players;
        
    for (const playerName in players)
        {
            const player =players[playerName];

            if(player.shoe > largestShoeSize)
                {
                   largestShoeSize = player.shoe;
                   playerWithLargestShoeSize = player 
                }
        }
    }
    return playerWithLargestShoeSize.rebounds; // return value of the biggest shoe size
}
//function to find the player with the most points
function mostPointsScored()
{
    let maxPoints = -Infinity; // unbounded floating numerical value so not to crash function
    let playerWithMostPoints = null;

    //checking throught home and away team
    for (const team in gameObject())
        {
            const players =gameObject()[team].players;

      for (const playerName in players)
        {
            const player = players[playerName];

            if(player.points > maxPoints)
                {
                    maxPoints =player.points;
                    playerWithMostPoints = playerName;
                }
            }
        }
        return playerWithMostPoints; 

}
// fuinction to find winning team with the most points
function winningTeam()
{
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;

    //calculate total points for home team
    for (const player in gameObject().home.players)
        {
            homeTeamPoints += gameObject().home.players[player].points;
        }
    //calculte total points for away team
    for (const player in gameObject().away.players)
        {
            awayTeamPoints += gameObject().away.players[player].points;
        }    

    //determining the winner base on the total points for each team
    return homeTeamPoints > awayTeamPoints ? gameObject().home.teamName : gameObject.away.teamName;    
}

