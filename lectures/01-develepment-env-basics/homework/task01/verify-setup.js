function checkNodeVersion() {
  const currentVersion = process.version;
  console.log("Node.js version: " + currentVersion);
}
checkNodeVersion();

function checkNpmVersion() {
  const currentNpmVersion = process.env.npm.version;
  console.log("Npm version: " + currentNmpVersion);
}
checkNpmVersion();

