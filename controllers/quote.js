// import essential modules for this controller
const { programingQuotes, catAsServices } = require("../utils/axios");
const Logger = require("../utils/logger");
const fs = require("fs");

/**
 * function to generate a quote from the ProgrammingQuotes service and mash it up with catAsService Image
 * @param {_req} - the request coming to the server
 * @param {res} - the response to send to the client
 * @returns - the image of a cool cat 🐱 saying some text 🤩
 */
const getQuoteAndGenerateImage = async (_req, res) => {
  // log that a request come to here
  Logger.info("CALLED THE GET QUOTE AND GENERATE IMAGE");
  // if this function require req params logging we will do that here as well

  // make the first request to the programming quotes
  let programmingQuotesResponse;
  try {
    programmingQuotesResponse = await programingQuotes.get("/random");
    // log the data coming from the request
    Logger.info(`generated quote: ${programmingQuotesResponse.data.en}`);
  } catch (error) {
    // log the error
    Logger.error(error.response ? error.response.data : JSON.stringify(error));
    // throw a new error
    throw new Error(error);
  }

  // generate the cat with the response text
  let catAsServiceResponse;
  try {
    catAsServiceResponse = await catAsServices.get(
      `/${encodeURI(programmingQuotesResponse.data.en)}`
    );
  } catch (error) {
    // log the error
    Logger.error(error.response ? error.response.data : JSON.stringify(error));
    // throw a new error
    throw new Error(error);
  }

  // convert buffer into image and return it
  const rest = Buffer.from(catAsServiceResponse.data).toString("base64");
  const mimeType = "image/jpeg";

  // return the response of the server
  return res
    .status(200)
    .send(
      `<html><body><img src="data:${mimeType};base64,${rest}"/></body></html>`
    );
};

// export the functions of this controller
module.exports = {
  getQuoteAndGenerateImage,
};
