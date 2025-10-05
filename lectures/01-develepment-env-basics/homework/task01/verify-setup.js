function checkNodeVersion(requiredVersion) {
  const currentVersion = process.version;
  console.log("Node.js version: " + currentVersion);
}
checkNodeVesrsion();

function checkNpmVersion() {
  const currentNmpVersion = process.env.npm._version;
  console.log("Npm version: " + currentNmpVersion);
}
CheckNpmVesrion();
