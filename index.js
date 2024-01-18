const express = require("express");
const ParseServer = require("parse-server").ParseServer;
const Parse = require("parse/node");
var ParseDashboard = require("parse-dashboard");
const jobRoute = require("./routes/job");
const applicationRoute = require("./routes/application");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const server = new ParseServer({
  "appId": "5lS3OYRcc0lwkxmonsvXiecsYK82t3kGnaj5vguG",
  "masterKey": "r49szxPgBh01swmbs4irpDUj28TqnFBuQIgqIXVx",
  "appName": "Pentasynth",
  "cloud": "./cloud/main",
  "databaseURI": "mongodb://127.0.0.1:27017/parse",
  "serverURL": "http://localhost:1337/parse",
});

Parse.initialize("5lS3OYRcc0lwkxmonsvXiecsYK82t3kGnaj5vguG");
Parse.serverURL = 'http://localhost:1337/parse';


var dashboard = new ParseDashboard({
  apps: [
    {
      serverURL: "http://localhost:1337/parse",
      appId: "5lS3OYRcc0lwkxmonsvXiecsYK82t3kGnaj5vguG",
      masterKey: "r49szxPgBh01swmbs4irpDUj28TqnFBuQIgqIXVx",
      appName: "Pentasynth",
    },
  ],
});


app.use(express.json());
app.use("/parse", server.app);
app.use("/dashboard", dashboard);
app.use("/jobs", jobRoute);
app.use("/applications", applicationRoute);
app.use(errorHandler);

app.get("/", function(req, res){
  res.send("Welcome to the Pentasynth");
})

async function startServer() {
  try {
    await server.start();
    app.listen(1337, function () {
      console.log("parse-server-example running on port 1337.");
    });
  } catch (error) {
    console.error("Error starting Parse Server:", error);
  }
}

startServer();
