const axios = require("axios");

const programingQuotes = axios.create({
  baseURL: `https://programming-quotes-api.herokuapp.com/quotes`,
});

const catAsServices = axios.create({
  baseURL: `https://cataas.com/cat/says`,
  responseType: "arraybuffer",
});

module.exports = {
  programingQuotes,
  catAsServices,
};
