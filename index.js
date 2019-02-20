const Sentry = require("@sentry/node");
const axios = require("axios");
const stream = require("stream");

Sentry.init({
  dsn: "..."
});

async function start() {
  console.log("stream is OK:");
  console.log(stream.Stream);
  try {
    await axios.get("/crash");
  } catch (e) {
    Sentry.captureException(e);
  }

  setTimeout(() => {
    console.log("--------------------");
    console.log("stream is broken:");
    console.log(stream.Stream);
  }, 3000);
}

start();
