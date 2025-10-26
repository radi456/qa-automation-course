function safeParse(jsonString) {
  try {
    let data = JSON.parse(jsonString);
    console.log("Successfully parsed test data");
    return data;
  } catch (error) {
    console.log("Failed to parse test data", error.message);
    return null;
  }
}

let validData = safeParse('{"ok": "true", "data": "parsed"}');
console.log("Valid data message", validData);
let invalidData = safeParse('{"ok:" false}');
console.log("Invalid data result", invalidData);


console.log ("===Safe email===");

function safeGetEmail(user) {
  try {
    return { ok: true, email: user.mail };
  } catch (error) {
    console.error("Failed to get email:", error.message);
    return null;
  }
}

let user1 = { mail: "user1@mail.com" };
let user2 = null;

console.log("User 1", safeGetEmail(user1));
console.log("User 2", safeGetEmail(user2));

console.log ("===Safe email===");





