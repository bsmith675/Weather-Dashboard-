var searchFormEl = document.querySelector('#search-city');
var resultTextEl = document.querySelector('#currentCityName');
var currentCityName;
var APIkey = '23b89ccd37ecfa0524d0c35eae3690f8';
var weather = [];
var cityList = [];

function displayWeather(weather) {
    $("day0-wind").text(weather[0].wind);
    $("#day0-UV").text(weather[0].UV);
    $(`#currentCityname`).text(currentCityName);
    if (weather[0].UV >= 11) {varUV = `Violet`}; 
    if (weather[0].UV < 11) {varUV = `Red`};
    if (weather[0].UV < 8) {varUV = `Orange`};
    if (weather[0].UV < 6) {varUV = `Yellow`};
    if (weather[0].UV < 3) {varUV = `Green`};
    $(`#day0-UV`).css( "background-color", varUV);
    for (var i = 0; i <= 5; i++) {
        $(`#day`+i+`-temp`).text(weather[i].temp);
        $(`#day`+i+`-icon`).html(weather[i].icon);
        $(`#day`+i+`-hum`).text(weather[i].hum);
        $(`#day`+i+`-date`).html(weather[i].date);
        $(`#day`+i+`-icon`).attr("src",weather[i].icon);
    }
}

function showCityList(cityList) {
    var varText = "";
    for (var i = 0; i < cityList.length; i++) {
        varText += `<li class="btn list-group-item list-group-item-action d-flex justify-content-between align-items-center" onclick="searchApi('`+cityList[i]+`')">`+cityList[i]+`</li>`;
    }
    $(`#cityListGroup`).html(varText);
}