var stats = {
             "id": "1",
             "rating": "2.4",
             "kills": 24,
             "assists": 8,
             "deaths": 16,
             "headshots": 56,
             "offensiveOp": "Ash",
             "defensiveOp": "Mira"

             }

var outputRating = document.getElementById('ratingOutput');
outputRating.innerHTML = stats.rating;

var outputKills = document.getElementById('killsOutput');
outputKills.innerHTML = stats.kills;

var outputAssists = document.getElementById('assistsOutput');
outputAssists.innerHTML = stats.assists;

var outputDeaths = document.getElementById('deathsOutput');
outputDeaths.innerHTML = stats.deaths;

var outputHeadshots = document.getElementById('headshotOutput');
outputHeadshots.innerHTML = stats.headshots + "%";

var outputOffensive = document.getElementById('offensiveOutput');
outputOffensive.innerHTML = stats.offensiveOp;

var outputDefensive = document.getElementById('defensiveOutput');
outputDefensive.innerHTML = stats.defensiveOp;




