var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var name2 = document.querySelector('.name2');

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
            desc.innerHTML = "Desc - " + descValue;
            temp.innerHTML = "Temp - " + tempValue;
            name2.innerHTML = "pressure - " + prasure;
            clouds.innerHTML = "clouds - " + cloudsValue
            input.value = "";

        })


    .catch(err => alert("Wrong city name!"));
})