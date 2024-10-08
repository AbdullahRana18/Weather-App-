let result = document.getElementById("result");
let seaarchButton = document.getElementById("seaarchButton");
let cityRef = document.getElementById("city");
let getWeather = () => {
    let cityValue = cityRef.value;
    if (cityValue.length == 0){
    result.innerHTML =`<h3 class="msg">Please Enter A City Name</h3>`
    }else{

   
key = "7b443e6ec3cf3d8396dc74a7ae08e71f";
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`
    cityRef.value="";
    fetch(url)
    .then((resp) => resp.json())
    .then((data) =>{
        console.log(data)
        console.log(data.weather[0].icon)
        console.log(data.weather[0].main)
        console.log(data.weather[0].description)
        console.log(data.name)
        console.log(data.main.temp_min)
        console.log(data.main.temp_max)
        result.innerHTML =`
        <h2>${data.name}</h2>
        <h4 class = "weather">${data.weather[0].main}</h4>
        <h4 class = "desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;C</h1>
        <div class = "tempContainer">
        <div>
        <h4 class = "title">min</h4>
        <h4 class = "temp">${data.main.temp_min}</h4>
        </div> 
        <div>
        <h4 class = "title">max</h4>
        <h4 class = "temp">${data.main.temp_max}</h4>
        </div> 
        </div>
        `;
    })
    .catch(() =>{
        result.innerHTML = `<h3 class = "msg">City Not Found </h3> `
    })
}
};
seaarchButton.addEventListener("click",getWeather)
window.addEventListener("load", getWeather)