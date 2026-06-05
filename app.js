// const unitDropDown = document.getElementById('unitDropDown');

const dailyForcastData = [
    {
        key: 1,
        day: "Sun",
        weatherCondition: "assets/images/icon-overcast.webp",
        settlingFrom: "68°",
        settlingTo: "57°"
    },
    {   
        key: 2,
        day: "Mon",
        weatherCondition: "assets/images/icon-storm.webp",
        settlingFrom: "70°",
        settlingTo: "59°"
    },
    {   
        key: 3,
        day: "Tue",
        weatherCondition: "assets/images/icon-snow.webp",
        settlingFrom: "75°",
        settlingTo: "57°"
    },
    {   
        key: 4,
        day: "Wed",
        weatherCondition: "assets/images/icon-rain.webp",
        settlingFrom: "77°",
        settlingTo: "55°"
    },
    {   
        key: 5,
        day: "Thur",
        weatherCondition: "assets/images/icon-sunny.webp",
        settlingFrom: "70°",
        settlingTo: "59°"
    },
    {
        key: 6,
        day: "Fri",
        weatherCondition: "assets/images/icon-partly-cloudy.webp",
        settlingFrom: "77°",
        settlingTo: "61°"
    },
    {
        key: 7,
        day: "Sat",
        weatherCondition: "assets/images/icon-fog.webp",
        settlingFrom: "75°",
        settlingTo: "59°"
    }
]

const day = document.getElementById("day");

const dailyForcast = dailyForcastData.map( (forecast) =>{
    return `
        <div class="dayWrapper">
            <div class="day">
                <p>${forecast.day}</p>
                <img src=${forecast.weatherCondition} class="weatherEmoji" alt="sunny">
                <div class="settling">
                    <p>${forecast.settlingFrom}</p>
                    <p>${forecast.settlingTo}</p>
                </div>
            </div>
        </div>
    `
}       
).join("");
day.innerHTML = dailyForcast;

const hourlyForcastData = [
    {
        timeInHour: "3 PM",
        weatherConditionImage: "assets/images/icon-snow.webp",
        temperature: "63°"
    },
    {
        timeInHour: "4 PM",
        weatherConditionImage: "assets/images/icon-sunny.webp",
        temperature: "68°"
    },
    {
        timeInHour: "5 PM",
        weatherConditionImage: "assets/images/icon-rain.webp",
        temperature: "68°"
    },
    {
        timeInHour: "6 PM",
        weatherConditionImage: "assets/images/icon-partly-cloudy.webp",
        temperature: "63°"
    },
    {
        timeInHour: "7 PM",
        weatherConditionImage: "assets/images/icon-storm.webp",
        temperature: "63°"
    },
    {
        timeInHour: "8 PM",
        weatherConditionImage: "assets/images/icon-sunny.webp",
        temperature: "68°"
    },
    {
        timeInHour: "9 PM",
        weatherConditionImage: "assets/images/icon-fog.webp",
        temperature: "67°"
    },
    {
        timeInHour: "10 PM",
        weatherConditionImage: "assets/images/icon-rain.webp",
        temperature: "63°"
    },
    {
        timeInHour: "10 PM",
        weatherConditionImage: "assets/images/icon-rain.webp",
        temperature: "63°"
    },
    {
        timeInHour: "10 PM",
        weatherConditionImage: "assets/images/icon-rain.webp",
        temperature: "63°"
    },
    {
        timeInHour: "10 PM",
        weatherConditionImage: "assets/images/icon-rain.webp",
        temperature: "63°"
    },
]
const hour = document.getElementById("hour");
const hourlyForcast = hourlyForcastData.map((hourlyForcast)=>
{
    return `
    <div class="hourlyForcast">
        <div class="hour">
            <img src=${hourlyForcast.weatherConditionImage} class="weatherEmoji" alt="sunny">
            <p>${hourlyForcast.timeInHour}</p>
        </div>
        <p>${hourlyForcast.temperature}</p>
    </div>
    `
}
).join("");
hour.innerHTML = hourlyForcast;

// unitDropDown.addEventListener("click", ()=>{
//     alert("How fa")
// })

// const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&past_days=10&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m" 


// getData = async ()=>{
//     const response = await fetch(url)
//     data = await response.json();
//     console.log(data);

// }
// getData();



