// const unitDropDown = document.getElementById('unitDropDown');

const today = document.getElementById("dateToday");
const date = new Date();
const formattedDate = new Intl.DateTimeFormat('en-us', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
}).format(date)
today.textContent = formattedDate;


// UNIT CONVERSIONS

let selectedTempUnit = "fahrenheit";
let selectedWindUnit = "mph";
let selectedPrecipUnit = "inches"



const fahrenheitToCelcius = (fahrenheit) => {
   return (fahrenheit - 32) * 5 / 9 
}

const mphToKmh = (mph) => {
    return mph * 1.60934
}

const inchesToMM = (inches) => {
    return inches * 25.4
}

const convertTemperature = (temperature, unit) => {
    if(unit === "celcius"){
        return fahrenheitToCelcius(temperature)
    }
    return temperature;
}

const convertWindSpeed = (speed, unit) => {
    if (unit === "km/h"){
        return  mphToKmh(speed)
    }
    return speed;
}

const convertPrecipitation = (precipitation, unit) => {
    if(unit === "millimeters"){
       return inchesToMM(precipitation)
    }
    return precipitation
}

const selectCelcius = document.getElementById("celciusSelected")
const selectFahrenheit = document.getElementById("fahrenheitSelected")
const ticked = document.getElementById("ticked")

const tempUnitOptions = document.querySelectorAll(".temp-unit-options")


const handleUnitSelection = (options, callback)=>{
    options.forEach((option)=>{
        option.addEventListener("click", () => {
            options.forEach((item)=>{
                item.classList.remove("selectedUnit")
                item.querySelector(".ticked")?.classList.add("hidden");
            })
            option.classList.add("selectedUnit")
            const tick = option.querySelector(".ticked");
            tick?.classList.remove("hidden");
            callback(option.dataset.unit)
        })
    })
}

const tempUnitSelection = (weatherData)=>{
        handleUnitSelection(tempUnitOptions, (unit)=>{
            selectedTempUnit = unit;
            displayDailyTemp(weatherData);
            displayHourlyTemp(weatherData);
            displayCurrentWeather(weatherData);
        });
}

const windSpeedUnitOptions = document.querySelectorAll(".wind-unit-option")

const windSpeedSelectionUnit = (weatherData) =>{
            handleUnitSelection(windSpeedUnitOptions, (unit)=>{
                selectedWindUnit = unit;
                displayCurrentWeather(weatherData);
            })
}

const precipitationUnitOptions = document.querySelectorAll(".precip-unit-option")

const precipitationUnitSelection = (weatherData) => {
            handleUnitSelection(precipitationUnitOptions, (unit)=>{
                selectedPrecipUnit = unit;
                displayCurrentWeather(weatherData);
            })
}


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
            
                const minTemp = weatherData.daily.temperature_2m_min[index]
                const maxTemp = weatherData.daily.temperature_2m_max[index]
                
                const temperature_min = convertTemperature(minTemp, selectedTempUnit)
                const temperature_max = convertTemperature(maxTemp, selectedTempUnit)
    
            return `
                <div class="dayWrapper">
                    <div class="day">
                        <p>${new Date(date).toLocaleDateString("en-US", { weekday: "short" })}</p>
                        <span>${icons}</span>
                        <div class="settling">
                        
                            <p>${Math.round(temperature_min)}°</p>
                            <p>${Math.round(temperature_max)}°</p>
                        
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

const displayHourlyTemp = (weatherData)=>{
    const hourlyForToday = weatherData.hourly.time.slice(0, 24);
    const hourlyForcast = hourlyForToday.map((time, index)=>{
        const icons = weatherIcons[weatherData.hourly.weather_code[index]]

                const temp = weatherData.hourly.temperature_2m[index]
                               
                const hourlyTemp = convertTemperature(temp, selectedTempUnit)
                
        return  `
                <div class="hourlyForcast">
                    <div class="hour">
                        <span>${icons}</span>
                        <p>${new Intl.DateTimeFormat('en-US', { hour: 'numeric', hour12: true }).format(new Date(time))}</p>
                    </div>
                    <p>${Math.round(hourlyTemp)}°</p>
                </div>
                `       
    }).join("");
    
    hour.innerHTML = hourlyForcast;

}


// const hourlyForcast = hourlyForcastData.map((hourlyForcast)=>
// {
//     return `
//     <div class="hourlyForcast">
//         <div class="hour">
//             <img src=${hourlyForcast.weatherConditionImage} class="weatherEmoji" alt="sunny">
//             <p>${hourlyForcast.timeInHour}</p>
//         </div>
//         <p>${hourlyForcast.temperature}</p>
//     </div>
//     `
// }
// ).join("");
// hour.innerHTML = hourlyForcast;

// unitDropDown.addEventListener("click", ()=>{
//     alert("How fa")
// })


const displayCurrentWeather = (data) => {
    const currentTemp = document.getElementById("currentTemp");
    const humid = document.getElementById("humid");
    const windSpeed = document.getElementById("windSpeed")
    const precipitation = document.getElementById("precipitation")
    const feelsLike = document.getElementById("feelsLike")

   const temp = data.current.temperature_2m;
   const tempNow = convertTemperature(temp, selectedTempUnit);
   const tempFeelsLike = data.current.apparent_temperature;
   const tempNowFeelsLike = convertTemperature(tempFeelsLike, selectedTempUnit)
   currentTemp.textContent = `${Math.round(tempNow)}°`
   feelsLike.textContent = `${Math.round(tempNowFeelsLike)}°`

   const wind = data.current.wind_speed_10m;
   const windNow = convertWindSpeed(wind, selectedWindUnit)
   const windUnitLabel = selectedWindUnit === "km/h" ? "km/h" : "mph";
   windSpeed.textContent  = `${Math.round(windNow)} ${windUnitLabel}`

   const precip = data.current.precipitation
   const precipNow = convertPrecipitation(precip, selectedPrecipUnit)
   const precipUnitLabel = selectedPrecipUnit === "millimeters" ? "mm" : "in"
    precipitation.textContent = `${precipNow} ${precipUnitLabel}`
    humid.textContent = `${data.current.relative_humidity_2m}%`
}

const getData =  async (latitude, longitude)=>{
    // celcius--> https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,apparent_temperature&wind_speed_unit=mph&precipitation_unit=inch
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,apparent_temperature&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch` 
        try {
    const response =  await  fetch(url);
    const data = await response.json();
    console.log(data)
        displayCurrentWeather(data);
        displayDailyTemp(data);
        displayHourlyTemp(data);
        tempUnitSelection(data);
        windSpeedSelectionUnit(data);
        precipitationUnitSelection(data);
    } 
    catch(err){
        alert("Couldn't reach server");
    }
}

const cityName = document.getElementById("city");
const getCityName = async (latitude, longitude)=>{
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    try{
        const response = await fetch(url);
        const data = await response.json()
        console.log(data);
        cityName.textContent = `${data.address.county}, ${data.address.country}`        
    }
    catch(err){
        alert("couldn't reach reverse-geocoding server")
    }
}

navigator.geolocation.getCurrentPosition(
    (position)=>{
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getData(latitude, longitude)
        getCityName(latitude, longitude)
    },
    (error)=>{
        console.log(error)
    }
);
const unitDropDown = document.getElementById("unitDropDown")
const unit = document.getElementById("unit")
unitDropDown.addEventListener("click", ()=>{
    unit.classList.remove("hidden")
})

const searchInput = document.getElementById("searchForm");
searchInput.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(searchInput);
    const data = Object.fromEntries(formData)
    console.log(data);
})

const citySearch = async()=>{
    const url = 'https://nominatim.openstreetmap.org/search?q=Abuja&format=json'
    try{
        const CityCord = await fetch(url);
        const data = await CityCord.json()
        console.log(data)
        const cityLat = data[0].lat
        const cityLon = data[0].lon
        console.log(`Latitude = ${cityLat} and Longitude = ${cityLon}`)
    }
    catch(error){
        console.log(error)
    }
}
citySearch();