# Public version of Spotify get token API

## Download and execute with [npm] Node Package Manager to download the node modules.
```` npm install ````

# Guide to get your own credentials with your spotify account, (it works with free accounts as well).


Before you can get the token to work with the spotify API you need to get your own credentials, client_id and client_secret, which is why you have to log in here.

 [login](https://developer.spotify.com/dashboard/login) 

Once there you will create a "New App" so you can have your own credentials and use them in this code in order to request the token from Spotify API.

Once you have your credentials you will copy and paste them in server.js exactly in this part below.

````javascript
    // * Credentials
    const client_id     = ''; // * your client id from your account
    const client_secret = ''; // * your client secret from your account
````

# Now you can test it.

## To run locally.
```` node server/server.js ````

## Or with nodemon.
```` nodemon server/server.js ````

## Then in your browser or Postman after you run it.
````http://localhost:3001/get-token````


# Spotify Authorization Guide used in this code.
[Authorization Guide](https://developer.spotify.com/documentation/general/guides/authorization-guide/)

I have used this guide with the title: [Client Credentials Flow]

## License.
[MIT](https://choosealicense.com/licenses/mit/)