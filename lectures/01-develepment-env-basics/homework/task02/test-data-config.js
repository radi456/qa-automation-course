const BASE_URL = "http://demo-qa-site.com";
const DEFAULT_TIMEOUT = 30000;
const API_ENDPOINT = {
  login: "http://demo-qa-site.com/api/login",
  users: "http://demo-qa-site.com/api/users",
  products: "http://demo-qa-site.com/api/products",
};
let testUserEmail = "example@mail.com";
let testUserPasword = "74loir!";
let adminUserEmail = "admin@mail.com";
let expectedWelcomeMessage = "Welcome to your dashboard";

let debugMode = true;
let runSlowTests = false;
let userTestData = true;

function validateEmail(mail) {
  console.log("Validation email format:" + testUserEmail.includes("@"));
  console.log("Validation email format:" + testUserEmail.includes("."));
  if (testUserEmail.includes("@") && testUserEmail.includes(".")) {
    return true;
  } else {
    return false;
  }
  console.log(
    "Test of email validation format:" + validateEmail(testUserEmail)
  );
}

function validatePassword(password) {
  if (testUserPasword.length >= 8) {
    return true;
    console.log("Password length is valid");
  } else {
    console.log("Pasword lenght is not valid");
  }
}

function generateUniqueEmail() {
  const timestamp = Date.now();
  const baseName = testUserEmail;
  const email = baseName + timestamp + "@testmail.com";
  console.log("Generated mail address:", email);
}

function logTestConfiguration() {
  console.log("Base URL:" + BASE_URL);
  console.log("Default timeout:" + DEFAULT_TIMEOUT);
  console.log("Api endpoints:" + API_ENDPOINT);
  console.log("Test user email:" + testUserEmail);
  console.log("Test user password" + testUserPasword);
  console.log("Admin user email:" + adminUserEmail);
  console.log("Expected welcome message:" + expectedWelcomeMessage);
  console.log("Debug mode:" + debugMode);
  console.log("Run slow tests:" + runSlowTests);
  console.log("Use test data:" + userTestData);
  console.log("Current timestamp:", timestamp);
}
