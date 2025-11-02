function logSynchorousFlow() {
  console.log("Start");
  console.log("Middle");
  console.log("End");
}
logSynchorousFlow();

function delayedLog(message, delayMs) {
  setTimeout(function () {
    console.log("This runs after 1 seconds");
  }, 1000);
}
delayedLog();

function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(true);
    }, ms);
  });
}
delay();
console.log("End");
