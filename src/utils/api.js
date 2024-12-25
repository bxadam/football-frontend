// API-Football (external through RapidAPI)

const apiKey = "351c97b38fmsh6bda07528fd0bf8p1671d2jsn51b31b7a440d";
const apiHost = "";
const url = "https://api-football-v1.p.rapidapi.com/v3";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": { apiKey },
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  },
};
const response = await fetch(`${url}/players/${playerId}`, options);
const data = await response.json();
const player = data.response.players[0];

const imageURL = "https://media.api-sports.io/football";

function validateResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

function getPlayer(lastName, playerId) {
  fetch(`${url}/players/profiles`, options).then(validateResponse());
}

function getLeagues(country) {
  fetch(`${url}/leagues`, options).then(validateResponse());
}

function getTeams(league, season, team) {
  fetch(`${url}/teams/statistics`, options).then(validateResponse());
}

function getVenues(venueName, city, country) {
  fetch(`${url}/venues`, options).then(validateResponse());
}
