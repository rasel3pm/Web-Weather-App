var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var name2 = document.querySelector('.name2');

//alwase show 
var showAll = document.getElementById('show-name')
var showTemp = document.querySelector('.show-temp');
var showDesc = document.querySelector('.show-desc');
var showClouds = document.querySelector('.show-clouds');
var showPrasure = document.querySelector('.show-prasure');


var apiGet = 'https://api.openweathermap.org/data/2.5/weather?q=Tangail&APPID=75da90463dfd47aa705856bbbdd6d3d6'
fetch(apiGet)
    .then(res => res.json())
    .then(data => {
        const getMal = data['name']
        var tempValue2 = data['main']['temp'];
        var descValue2 = data['weather'][0]['description'];
        var prasure = data['main']['pressure']
        var cloudsValue2 = data['clouds']['all']

        showAll.innerHTML = getMal
        showTemp.innerHTML = "Temparature : " + tempValue2;
        showDesc.innerHTML = "Desc : " + descValue2;
        showClouds.innerHTML = "Clouds : " + cloudsValue2;
        showPrasure.innerHTML = "Pressure : " + prasure;

    })


//add even 
button.addEventListener('click', function(name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&APPID=75da90463dfd47aa705856bbbdd6d3d6')

    .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            var prasure = data['main']['pressure']
            var cloudsValue = data['clouds']['all']

            main.innerHTML = nameValue;
            desc.innerHTML = "Desc : " + descValue;
            temp.innerHTML = "Temp : " + tempValue;
            name2.innerHTML = "pressure : " + prasure;
            clouds.innerHTML = "clouds : " + cloudsValue
            input.value = "";

        })


    .catch(err => alert("Wrong city name!"));
})