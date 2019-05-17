const request = require("request");

const geocode = (address, cb) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYm9iZGVlaSIsImEiOiJjam5nNHcxcXk2cnNrM2tuMXYwYXZmemh4In0.XWbA6vifMGI8A-hWiBh4cw&limit=1`;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      cb("Unable to connect to location services", undefined);
    } else if (!body.features.length) {
      cb("Unable to find location. Try another search", undefined);
    } else {
      cb(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
