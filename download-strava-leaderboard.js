// use chrome network tab
// right click "copy as fetch"
// remove csrf token, not needed
const headers = {
  "accept": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
  "accept-language": "en-US,en;q=0.9",
  "cache-control": "no-cache",
  "pragma": "no-cache",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"macOS\"",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-requested-with": "XMLHttpRequest"
}
const TEAM_ID = 129636;

async () => {
  // We can import NPM modules if needed in future.
  // const readability = await import('https://cdn.skypack.dev/@mozilla/readability');

const leaderboardData = fetch(`https://www.strava.com/clubs/${TEAM_ID}/leaderboard`, {
    "headers": headers,
    "referrer": `https://www.strava.com/clubs/${TEAM_ID}`,
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  }).then(x => x.json());

  return leaderboardData['data'];
}
