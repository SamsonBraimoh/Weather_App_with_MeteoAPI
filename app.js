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
const weatherIcons = {
    0: "☀️",
    1: "🌤️",
    2: "⛅",
    3: "☁️",
    45: "🌫️",
    48: "🌫️",
    51: "🌦️",
    53: "🌦️",
    55: "🌧️",
    56: "🌨️",
    57: "🌨️",
    61: "🌦️",
    63: "🌧️",
    65: "🌧️",
    66: "🌨️",
    67: "🌨️",
    71: "❄️",
    73: "🌨️",
    75: "❄️",
    77: "🌨️",
    80: "🌦️",
    81: "🌧️",
    82: "⛈️",
    85: "🌨️",
    86: "❄️",
    95: "⛈️",
    96: "⛈️🧊",
    99: "⛈️🧊"
};

const day = document.getElementById("day");

    const displayDailyTemp = (weatherData) => {
        const dailyForcast = weatherData.daily.time.map((date, index) =>{
            const icons = weatherIcons[weatherData.daily.weather_code[index]]
            console.log(icons)
            return `
                <div class="dayWrapper">
                    <div class="day">
                        <p>${new Date(date).toLocaleDateString("en-US", { weekday: "short" })}</p>
                        <span>${icons}</span>
                        <div class="settling">
                            <p>${weatherData.daily.temperature_2m_min[index]}</p>
                            <p>${weatherData.daily.temperature_2m_max[index]}</p>
                        </div>
                    </div>
                </div>
            `
        }       
        ).join("");
        day.innerHTML = dailyForcast;
    }

    // const dailyForcast = dailyForcastData.map((forecast) =>{
    //     return `
    //         <div class="dayWrapper" key=${forecast.key}>
    //             <div class="day">
    //                 <p>${forecast.day}</p>
    //                 <img src=${forecast.weatherCondition} class="weatherEmoji" alt="sunny">
    //                 <div class="settling">
    //                     <p>${forecast.settlingFrom}</p>
    //                     <p>${forecast.settlingTo}</p>
    //                 </div>
    //             </div>
    //         </div>
    //     `
    // }       
    // ).join("");
    // day.innerHTML = dailyForcast;

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

const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weather_code&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch" 

const displayCurrentWeather = (data) => {
    const currentTemp = document.getElementById("currentTemp");
    const humid = document.getElementById("humid");
    const windSpeed = document.getElementById("windSpeed")
    const precipitation = document.getElementById("precipitation")
    currentTemp.textContent = `${data.current.temperature_2m}°`
    windSpeed.textContent  = `${data.current.wind_speed_10m} mph`
    precipitation.textContent = `${data.current.precipitation} in`
    humid.textContent = `${data.current.relative_humidity_2m}%`
}

const getData =  async ()=>{
    try {
    const response =  await  fetch(url);
    const data = await response.json();
    // console.log(data)
        displayCurrentWeather(data);
        displayDailyTemp(data);
    } 
    catch(err){
        alert("Couldn't reach server");
    }
}

getData();



