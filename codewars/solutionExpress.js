/*codewar challenge for the day link: https://www.codewars.com/kata/5696c8b5fddc42058b000032/train/javascript
7 kyu: Configure an express server
Express
Express is a minimalist web framework for Node.js.

To get a server up and running there are a few steps you have to follow.

Install express npm install express --save
Require express on a file var express = require('express');
Get the app from express by invoking it var app = express();
Start the server with the app's listen function
The listen function will start a server that you are going to be able to use through the browser.

It has different signature methods, the one you are going to use in this kata is (port, host, callback)

Your Task
Inside the solution function you have to require express and start a server.

The PORT and HOST are going to be pre-loaded in the process.env object (in a node application process.env stores the environment configuration).

process.env = {
  PORT: 3000,
  HOST: '0.0.0.0',
};
*/

const solution = () => {
    var express = require('express');
    var app = express()
    
    app.listen(process.env.PORT, process.env.HOST, () => {})
    
    
  };