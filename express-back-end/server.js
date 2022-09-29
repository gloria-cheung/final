const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const twilio = require("twilio");
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

const app = express();

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/messages", (req, res) => {
  res.header("Content-Type", "application/json");

  client.messages
    .create({
      body: `\nFrom: ${req.body.fullname}, \nPhone #: ${req.body.phone}, \nEmail: ${req.body.email}, \nListing ZPID: ${req.body.zpid} \nMessage: ${req.body.message}`,
      to: "+16478013218", // in production, need to buy twilio numbers
      from: process.env.TWILIO_PHONE_NUMBER, // From a valid Twilio number
    })
    .then((message) => {
      console.log("message sent");
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(8080, () => {
  console.log("Server has started on port 8080");
});
