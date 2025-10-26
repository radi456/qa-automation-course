let userProfile = {
  userName: "user1",
  userEmail: "user1@mail.com",
  userPass: "pas1233",
};
let caseList = [
  { caseName: "Register user", caseStatus: "PASS", casePriority: "High" },
  { caseName: "Register emai", caseStatus: "PASS", casePriority: "Skip" },
  { caseName: "Password reset", caseStatus: "FAIL", casePriority: "Low" },
];

let toJson = (value) => JSON.stringify(value);
let fromJson = (jsonString) => JSON.parse(jsonString);

let userJson = toJson(userProfile);
console.log("Before conversion (userProfile):", typeof userProfile);
console.log("After conversion (userJson):", typeof userJson);
console.log("User Profile JSON:", userJson);

let parsedJson = fromJson(userJson);
console.log("After parsing (parsedJson):", typeof parsedJson);
console.log("Parsed User Profile:", parsedJson);

let caseJson = toJson(caseList);

console.log("Before conversion (caseList):", typeof caseList);
console.log("After conversion (caseJson):", typeof caseJson);
console.log("Case list JSON:", caseJson);
let caseParseJson = fromJson(caseJson);
console.log("After parsing (caseParseJson):", typeof caseParseJson);
console.log("Parsed case list", caseParseJson);
