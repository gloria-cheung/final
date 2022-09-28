const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/messages", (req, res) => {
  res.header("Content-Type", "application/json");
  console.log(res);
  const twilio = require("twilio");
  require("dotenv").config();

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  const client = new twilio(accountSid, authToken);

  client.messages
    .create({
      body: "Hello from Node",
      to: "+16478013218", // Text this number
      from: process.env.TWILIO_PHONE_NUMBER, // From a valid Twilio number
    })
    .then((message) => {
      console.log(message);
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
