const M3O_API_KEY = process.env.M3O_API_KEY;

//const m3o = require("@m3o/m3o-node");

exports.handler = async function (event, context) {
  if (!M3O_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "no api key" }),
    };
  }

 // let body = JSON.parse(event.body);

  try {
    const url = 'https://api.m3o.com/v1/evchargers/ReferenceData'
      const response = await fetch(url, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ M3O_API_KEY }`
        }
      });
      const json = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify(json),
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