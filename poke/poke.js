//helper function to fetch the data from an external source
function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}

//lets get some ships
function fetchMons() {
    var url = "//pokeapi.co/api/v2/type/16/";
    //call getJSON function to get the list of ships from the api
    getJSON(url).then(function (data) {
        //stuff that should happen after the request is done.
        console.log(data);
        var results = data.results;
        var monListElement = document.getElementById('monList');
        monListElement.innerHTML = "";

        results.forEach(function (mons) {
            var listItem = document.createElement('li');
            var link = document.createElement('a');

            link.setAttribute('href', mons.url);

            link.innerHTML = mons.name;

            listItem.appendChild(link);

            monListElement.appendChild(listItem);
        });
    });
}
