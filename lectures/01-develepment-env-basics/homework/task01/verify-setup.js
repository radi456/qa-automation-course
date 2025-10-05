function checkNodeVersion() {
  const currentVersion = process.version();
  console.log("Node.js version: " + currentVersion);
}
checkNodeVersion();

function checkNpmVersion() {
  const currentNpmVersion = process.env.npm.version();
  console.log("Npm version: " + currentNmpVersion);
}
checkNpmVersion();

function displayEnvironmentInfo() {
  const systemInfo = process.platform();
  const workingDirectory = process.cwd();

  console.log("System info: " + systemInfo);
  console.log("Working directory: " + workingDirectory);
}
displayEnvironmentInfo();
