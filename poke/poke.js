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
    var url = "//pokeapi.co/api/v2/type/1/";
    getJSON(url).then(function (data) {
        console.log(data);
        var results = data.pokemon;
        var monListElement = document.getElementById('monList');
        monListElement.innerHTML = "";

        results.forEach(function (mons) {
            console.log(mons);
            var listItem = document.createElement('li');
            var link = document.createElement('a');

            link.setAttribute('href', mons.url);

            link.innerHTML = mons.name;
            link.addEventListener('click', function(event){
               event.preventDefault();
                getMonDetails(mons.url);
            });

            listItem.appendChild(link);

            monListElement.appendChild(listItem);
        });
    });
}

function getMonDetails(url) {
    getJSON(url).then(function (data) {
        console.log(data);
    })
}

fetchMons();
