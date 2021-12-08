const { M3O_API_KEY } = process.env;

const m3o = require("@m3o/m3o-node");

exports.handler = async function (event, context) {
  if (!M3O_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "no api key" }),
    };
  }

  let body = JSON.parse(event.body);

  try {
    let response = await new m3o.Client({ token: M3O_API_KEY }).call(
      // @todo change this to the actual API and endpoint you want to call
      "evchargers", // the name of the API
      "ReferenceData", // the name of the endpoint
      body
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (e) {
    if (e && e.response && e.response.data && e.response.data.Detail) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: e.response.data.Detail }),
      };
    }
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "something went wrong" }),
    };
  }
};