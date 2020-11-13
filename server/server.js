require('./config/config'); // port
const express = require('express');
const axios = require('axios');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// * Routes
app.get('/get-token', async function (req, res) {
 
  res.json(await getToken());
});

// * URL to request the token 
const URL = 'https://accounts.spotify.com/api/token';

// * Credentials
const client_id     = ''; // * your client id from your account
const client_secret = ''; // * your client secret from your account
 
// -- options
const params = {
  grant_type: 'client_credentials'
}

const headers = {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),        
    'Content-Type': 'application/x-www-form-urlencoded'
}

/**
 * * Request the token from spotify api with the credentials given
 */
async function getToken() {
    try {
      const response = await axios({
        method: 'post',
        url: URL,
        headers,
        params,
        json: true});

      console.log(response.data);
      return response.data;

    } catch (error) {

      console.error(error);
      return error;
    }
  }

  // getToken();


app.listen(process.env.PORT, () =>{
    console.log(`server on port ${process.env.PORT}`);
});

