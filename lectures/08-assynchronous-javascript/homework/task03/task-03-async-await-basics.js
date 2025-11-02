function simulateApiCall(login, shouldFail) {
  console.log("Test execution started");

  return new Promise(function (resolve, reject) {
    console.log(`Executing: ${login}`);

    const duration = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;

    setTimeout(function () {
      if (shouldFail) {
        const result = {
          testName: login,
          status: "FAIL",
          duration: duration,
        };
        const message = new Error(`Assertion fail in ${login}`);
        console.log(`Failed: ${login} (${duration}ms)`);
        reject(message);
      } else {
        console.log(`Passed: ${login} (${duration}ms)`);
        resolve({ name: login, status: "OK", duration: duration });
      }
    }, duration);
  });
}

function runSingleOperation(name, shouldFail){
    console.log("Start");
    async function runSingleOperation(name, shouldFail) {
  const result1 = await simulateApiCall(name, shouldFail);
  console.log(" Operation result:", result1);
  return result1;
};
}
simulateApiCall();
runSingleOperation();