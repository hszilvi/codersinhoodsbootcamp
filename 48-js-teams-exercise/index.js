const reset = document.querySelector("#reset");

let players = {
  pool: [
    "Sam",
    "Vasile",
    "Mimi",
    "Tom",
    "Andrew",
    "Ben",
    "Archibald",
    "Adam",
    "Alex",
    "Aaron",
  ],
  team1: [],
  team2: [],
};

/* ======================= */
/**
 * Create a team picker app which will have 3 columns:
 *
 * 1. Pool of players
 * 2. Team 1
 * 3. Team 2
 *
 * Requirements:
 * 1. On load all players from {players.pool} should be rendered
 * in "Pool" column
 * 2. Each player element should has player name, and two buttons
 * to pick a side(check markup example for {createPlayerEl} function)
 * 3. when I click on a button with class "to_team1", this player needs
 * to be removed from "pool" list and added to "Team 1" list
 * 4. when I click on a button with class "to_team2", this player needs
 * to be removed from "pool" list and added to "Team 2" list
 * 5. Inside "Pool" container you have "Reset" button. When you click on it,
 * it should reset all lists to initial state.
 *
 * NOTE: remember to keep {players} object always updated.
 */
/* ======================= */

/**
 * As a part of team picker app, you need to create
 * a function {createPlayerEl} which takes a player name and return
 * a markup for this player
 *
 * Player markup should be:
 * <li class="player">
 *  <p>${name}</p>
 *	<div class="buttons">
 *    <button class="btn to_team1"> < </button>
 *    <button class="btn to_team2"> > </button>
 *  </div>
 * </li>
 */

const team1 = players.team1;
const team2 = players.team2;
const poolColumn = document.querySelector('.pool');
const allColumns = document.querySelector('.column');
const team1Column = document.querySelector('.team1_container');
const team2Column = document.querySelector('.team2_container');

// create one html li element PUT THE EVENTLISTENERS INTO THIS FUNCTION
const createPlayerEl = (player) => {
  let playersLi = document.createElement('li');
  playersLi.innerHTML = `<li class="player">
          <p>${player}</p>
          <div class="buttons">
          <button class="btn to_team1"> < </button>
          <button class="btn to_team2"> > </button>
          </div>
          </li>`
  return playersLi;
};
// creat team player li element
const createTeamPlayerEl = (playerToTeam) => {
  let playersTeamLi = document.createElement('li');
  playersTeamLi.innerHTML = `<p>${playerToTeam}</p>`
  return playersTeamLi;
};

// create playersTeamLi for team1
const createTeam1ListAsChild = (playerTeam1, tgtHtml) => {
  let newElemTeam1 = createTeamPlayerEl(playerTeam1); 
  tgtHtml.appendChild(newElemTeam1);
  console.log('helloteamlist', newElemTeam1);
  return tgtHtml;
}; 
// add created li's to ul as child element
const createPoolListAsChild = (playersNames, tgtHtmlTag) => {
  pool = [];
  playersNames.forEach((playersName) => {
    let newElem = createPlayerEl(playersName);
    tgtHtmlTag.appendChild(newElem);
    console.log(newElem);
    pool.push(tgtHtmlTag);
  });
  console.log(pool);
  const btnToTeam1 = tgtHtmlTag.querySelector('.to_team1');
  btnToTeam1.addEventListener('click', () => {
    createTeam1ListAsChild(playersNames, team1);
    const pTagName = tgtHtmlTag.querySelector('').innerText;
    let indexOfPlayer = playersNames.indexOf(pTagName);
    console.log(indexOfPlayer);
    playerRemoved = playersNames.splice(indexOfPlayer,1)

  });
};

createPoolListAsChild(players.pool, poolColumn);

//createTeam1ListAsChild(players.pool, team1Column);

// create PlayersTeamLI for team2
const createTeam2ListAsChild = (playerTeam2, tgtHtml) => {
  newElemTeam2 = createTeamPlayerEl(playerTeam2);
  tgtHtml.appendChild(newElemTeam2);
  console.log(newElemTeam2);
};

// const goToTeam1Btn = [...document.querySelectorAll('li')];
// goToTeam1Btn.forEach(player => {
//   player.addEventListener('click', () => {
//     createTeam1ListAsChild(player);
//     indexOfPlayer = 
//   })
// })


// reset button
reset.addEventListener('click', () => {
  poolColumn.innerHTML = ``;
  allColumns.innerHTML = ``;
  createPoolListAsChild(players.pool, poolColumn);
  console.log('hello reset button')
});

//const toTeam1Btn = playersLi.querySelector('.btn to_team1');


// splice player from pool
// const removeSelectedPlayer = () => {
//   const pTagName = playersLI.querySelector('').innerText;
//   let indexOfPlayer = playersNames.indexOf(pTagName);
//   console.log(indexOfPlayer);
//   playerRemoved = playersNames.splice(indexOfPlayer,1);
// }

// //  create function that call if button is clicked
// const pushPlayersToTeams = (player, teamToPush) => {
//   const playerToTeam = document.createElement('li');
//   playerToTeam.innerHTML = `<p>${player}</p>`;
//   teamToPush.appendChild(playerToTeam);
//   console.log(playerToTeam);
// }

// // buttons eventlisteners

// const team1Btn = player.querySelectorAll('.btn to_team1');
// const team2Btn = player.querySelectorAll('.btn to_team2');
// console.log(team1Btn);
// team1Btn.addEventListener('click', () => {
//   console.log('yes');
//   createPlayerEl();
// });