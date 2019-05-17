const request = require("request");

const forecast = (latitude, longitude, cb) => {
  const API_KEY = "59328d8e5a0cfa45449545eec3457f14";
  const url = `https://api.darksky.net/forecast/${API_KEY}/${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      cb("Unable to connect to weather services!", undefined);
    } else if (body.error) {
      cb("Unable to find location", undefined);
    } else {
      const { currently, daily } = body;

      cb(
        undefined,
        `${daily.data[0].summary} It is currently ${
          currently.temperature
        } degrees out. There is a ${
          currently.precipProbability
        }% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
