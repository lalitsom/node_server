const request = require("request");
const request_url =
  "https://api.darksky.net/forecast/17128c60b6d999bd7f1d3de03ae1105e/28.610660,77.455772?units=si";

request({ url: request_url, json: true }, (err, res) => {
//   const resJSON = JSON.parse(res);
  const weatherData =   res.body;
  console.log(weatherData.currently.temperature);
});
