const request = require("request");

// const url =
//   "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" +
//   process.env.OPEN_WEATHER_API;

// request(url, (error, response, body) => {
//   if (error) {
//     return console.log(error);
//   }
//   const parsedData = JSON.parse(body);
//   const city = parsedData.city.name;
//   const temperature = parsedData.list[0].main.temp;
//   const description = parsedData.list[0].weather[0].description;

//   console.log(city, temperature, description);
// });

const url = "https://jsonplaceholder.typicode.com/users/1";

request(url, (error, response, body) => {
  if (error) {
    return console.error(error);
  }
  const { name, email, phone } = JSON.parse(body);
  console.log(name, email, phone);
});
