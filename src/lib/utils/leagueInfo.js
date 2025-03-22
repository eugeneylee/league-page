/*   STEP 1   */
export const leagueID = "1180148921199599616"; // your league ID
export const leagueName = "Dynasty Beta"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
    "roster": 1,
    "managerID": "736572229042753536",
    "name": "DHuds",
    "tookOver": 2020,
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: 6,
      image: "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text",
  },
  {
    "roster": 2,
    "managerID": "884971020975685632",
    "name": "Squemz",
    "tookOver": 2020,
    "location": "Boston",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: 6,
      image: "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text",
  },
  {
    "roster": 3,
    "managerID": "952770528836714496",
    "name": "genogenogeno",
    "tookOver": 2020,
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "buf",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: 6,
      image: "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text",
  },
  {
    "roster": 4,
    "managerID": "953038446782644224",
    "name": "andrealedmunds",
    "tookOver": 2020,
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: 6,
      image: "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text",
  },
  {
    "roster": 5,
    "managerID": "953080021453729792",
    "name": "westandrew",
    "tookOver": 2020,
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: 6,
      image: "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text",
  },
  {
    "roster": 6,
    "managerID": "955695655769505792",
    "name": "Steer2023",
    "tookOver": 2020,
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: 6,
      image: "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text",
  },
  {
    "roster": 7,
    "managerID": "957077196949049344",
    "name": "realmikefut",
    "tookOver": 2020,
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: 6,
      image: "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text",
  },
  {
    "roster": 8,
    "managerID": "958414051749560320",
    "name": "MadKingdom",
    "tookOver": 2020,
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: 6,
      image: "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text",
  },
  {
    "roster": 9,
    "managerID": "958613187291578368",
    "name": "BLuiso",
    "tookOver": 2020,
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: 6,
      image: "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text",
  },
  {
    "roster": 10,
    "managerID": "961103212352692224",
    "name": "jamiddle",
    "tookOver": 2020,
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: 6,
      image: "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text",
  },
  {
    "roster": 11,
    "managerID": "962035069290434560",
    "name": "pmgallagher",
    "tookOver": 2020,
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: 6,
      image: "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text",
  },
  {
    "roster": 12,
    "managerID": "1090523560893906944",
    "name": "Rappin",
    "tookOver": 2020,
    "location": "Brooklyn",
    "bio": "Lorem ipsum...",
    "photo": "/managers/name.jpg",
    "fantasyStart": 2014,
    "favoriteTeam": "nyj",
    "mode": "Win Now",
    "rival": {
      name: "Rival",
      link: 6,
      image: "/managers/rival.jpg",
    },
    "favoritePlayer": 1426,
    "valuePosition": "WR",
    "rookieOrVets": "Rookies",
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10,
    "preferredContact": "Text",
  },
];
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
