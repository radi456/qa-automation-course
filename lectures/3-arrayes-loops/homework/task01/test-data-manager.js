let testUsers = [];
let testEnvironments = ["development", "staging", "production"];
let brouserTypes = ["Chrome", "Firefox", "Safari", "Edge"];

function initializeTestData() {
  console.log("Lenght of test Users array:" + testUsers.length);
  console.log("Length of array test environments:" + testEnvironments.length);
  console.log("Length of array brouser types:" + brouserTypes.length);
}
initializeTestData();

function displayTestDataInfo(testUsers, testEnvironments, brouserTypes) {
  console.log(testUsers[0]);
  console.log(testEnvironments[0]);
  console.log(brouserTypes[0]);
  console.log(testUsers[testUsers.length - 1]);
  console.log(testEnvironments[testEnvironments.length - 1]);
  console.log(brouserTypes[brouserTypes.length - 1]);
  console.log(
    "First environment:",
    testEnvironments[0],
    "Last bowser:",
    brouserTypes[3]
  );
}

displayTestDataInfo(testUsers, testEnvironments, brouserTypes);

let usersArray = ["Alice", "Bob", "Charlie"];
let newUserEmail = ["alice@mail.com", "bob@mail.com", "Charlie@mail.com"];

function addTestUsers(usersArray, newUserEmail) {
  console.log("Current users:", usersArray);
  usersArray.push(...newUserEmail);
  console.log("Updated users:", usersArray.length);
  console.log("Updated users list:", usersArray);
}
addTestUsers(usersArray, newUserEmail);

let testQueue = [];
let testNames = [
  "login_test",
  "logout_test",
  "registration_test",
  "password_reset",
  "profile_update",
];

function buildTestQueue() {
  for (let i = 0; i < testNames.length; i++) {
    testQueue.push(testNames[i]);
    console.log(`Added ${testNames[i]}, Queue length: ${testQueue.length}`);
  }
}
buildTestQueue();

function processTestQueue(testQueue) {
  while (testQueue.length > 0) {
    testQueue.pop();
    console.log("Processed a test, Remaining in queue:", testQueue.length);
  }
  console.log("All tests have been processed. Queue is empty.");
  console.log("Total number of tests processed:", testQueue.length);
}
processTestQueue(testQueue);

let passedTests = [];
let failedTests = [];
let skippedTests = [];
function manageTestResults() {
  passedTests.push("login_functionality", "user_registration ");
  failedTests.push("payment_processing");
  skippedTests.push("email_notification");
  console.log("Passed tests:", passedTests.length);
  console.log("Failed tests:", failedTests.length);
  console.log("Skipped tests:", skippedTests.length);
  console.log([passedTests, failedTests, skippedTests]);
}
manageTestResults();

let environmentArray = ["development", "staging", "production"];
function rotateTestEnvironments(environmentArray) {
  console.log("First element:", environmentArray[0]);
  let removedEnvironment = environmentArray.pop();
  console.log("Removed environment:", removedEnvironment);
  console.log("Updated array:", environmentArray);
  environmentArray.push(environmentArray[0]);
  console.log("Array after push:", environmentArray);
}

rotateTestEnvironments(environmentArray);

function validateTestDataIntegrity(TestUsers, testEnvironments, brouserTypes) {
  let ValidationIssues = [];
  if (TestUsers.length === 0) {
    ValidationIssues.push("No test users defined.");
    console.log("Validation check: No test users defined.");
    if (testEnvironments.length < 2) {
      ValidationIssues.push("Insufficient test environments.");
      console.log("Validation check: Insufficient test environments.");
      if (brouserTypes.length < 3) {
        ValidationIssues.push("Not enough browsers for testing.");
        console.log("Validation check: Not enough browsers for testing.");

        console.log("Validation Issues:", ValidationIssues);
      }
    }
  }
}
validateTestDataIntegrity(testUsers, testEnvironments, brouserTypes);

function generateTestReport(passedTests, failedTests, skippedTests) {
  const totalTests =
    passedTests.length + failedTests.length + skippedTests.length;

  if (failedTests.length > 0) {
    console.log("First failed test:", failedTests[0]);
  } else {
    console.log("No failed tests.");
  }
  console.log("Complete test count:", totalTests);
  console.log([passedTests, failedTests, skippedTests]);
}

generateTestReport(passedTests, failedTests, skippedTests);

