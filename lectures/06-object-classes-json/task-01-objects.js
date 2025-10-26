let testConfig = {
  suiteName: "Test Suite",
  environment: "staging",
  maxTimeout: 5000,
};
console.log("=======Initial test configuration=======");
console.log(testConfig.suiteName);
console.log(testConfig.maxTimeout);
console.log(testConfig.environment);
testConfig.retryCount = 3;
console.log("======Updated test configuration=====");
console.log(testConfig.suiteName);
console.log(testConfig.maxTimeout);
console.log(testConfig.environment);
console.log(testConfig.retryCount);

let testUser1 = {
  username: "testuser",
  password: "password123",
  email: "user1@yo.com",
  role: "QA",
  active: true,
};
console.log("=======Test User 1 Details=======");
console.log(testUser1["role"]);
console.log(testUser1["email"]);
console.log(testUser1["active"]);

let testUser2 = {
  username: "testuser2",
  password: "password321",
  email: "user2@yo.com",
  role: "Junior QA",
  active: true,
};
console.log("=======Test User 2 Details=======");
console.log(testUser2["role"]);
console.log(testUser2["email"]);
console.log(testUser2["active"]);

let testUser3 = {
  userName: "testUser3",
  password: "pass1234",
  email: "user3@mail.com",
  role: "Intern",
  active: false,
};
console.log("=======Test User 3 Details=======");
console.log(testUser3["role"]);
console.log(testUser3["email"]);
console.log(testUser3["active"]);

let testCases = [
  {
    caseName: "New company Login Test",
    status: "Passed",
    duration: 1200,
    priority: "High",
  },
  {
    caseName: "Existing company Login Test",
    status: "Passed",
    duration: 1500,
    priority: "Medium",
  },

  {
    caseName: "Password Reset Test",
    status: "Failed",
    duration: 800,
    priority: "High",
  },

  {
    caseName: "User Registration Test",
    status: "Passed",
    duration: 2000,
    priority: "Low",
  },
  {
    caseName: "Data Export Test",
    status: "Skipped",
    duration: 0,
    priority: "Medium",
  },
];
console.log("=======Test Cases Details=======");
console.log("Total test cases:", testCases.length);

let failedTestCases = testCases.filter((test) => test.status === "Failed");

console.log("Failed test cases:", failedTestCases);
console.log("Number of failed tests:", failedTestCases.length);

let getHighPriorityTests = testCases
  .filter((test) => test.priority === "High")
  .map((test) => test.caseName);
console.log("Test case with high priority:", getHighPriorityTests);

let getTotalDuration = testCases.reduce((sum, test) => sum + test.duration, 0);
console.log("Total duration in ms:", getTotalDuration);
