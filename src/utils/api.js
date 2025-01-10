// API-Football (external through RapidAPI)

const url = "https://api-football-v1.p.rapidapi.com/v3";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "351c97b38fmsh6bda07528fd0bf8p1671d2jsn51b31b7a440d",
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  },
};

const imageURL = "https://media.api-sports.io/football";

function validateResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

function getPlayers() {
  return fetch(`${url}/players/profiles`, options).then();
}

function getLeagues() {
  return fetch(`${url}/leagues`, options).then(validateResponse);
}

function getTeams(teamName) {
  return fetch(
    `${url}/teams/statistics?${{
      response: {
        team: {
          name: teamName,
        },
      },
    }}`,
    options
  ).then(validateResponse());
}

export { getPlayers, getLeagues, getTeams };
