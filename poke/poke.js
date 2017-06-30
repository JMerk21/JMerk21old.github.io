function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function fetchMons() {
    var url = "//pokeapi.co/api/v2/type/16/";
    getJSON(url).then(function (data) {
        console.log(data);
        var results = data.results;
        var monListElement = document.getElementById('monList');
        monListElement.innerHTML = "";

        results.forEach(function (mons) {
            console.log(mons);
            var listItem = document.createElement('li');
            var link = document.createElement('a');

            link.setAttribute('href', mons.url);

            link.innerHTML = mons.name;

            listItem.appendChild(link);

            monListElement.appendChild(listItem);
        });
    });
}

fetchMons();
