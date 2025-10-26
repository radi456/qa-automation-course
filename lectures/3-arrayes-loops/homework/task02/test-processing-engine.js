let UserArray = ["rado", "misho", "pesho", "gosho", "stamat"];

function processAllTestUsers(userArray) {
  for (let i = 0; i < userArray.length; i++) {
    console.log(`Processing user: ${userArray[i + 1]}`);
  }
  console.log("All users have been processed.");
  console.log(`Total users processed: ${userArray.length}`);
}
processAllTestUsers(UserArray);

let emailArray = [
  "testmail.com",
  "user@domain",
  "example@.com",
  "admin@site.",
  "rado@mail.com",
  "stamat_t@mail.com",
  "pesho@mail.com",
];
let invalidEmails = [];
let validEmails = [];

function validateEmails(emailArray) {
  for (let i = 0; i < emailArray.length; i++) {
    
    if (emailArray[i].includes("@")) {
      validEmails.push(emailArray[i]);
    } else {
      invalidEmails.push(emailArray[i]);
    }
    console.log("Email [i+1], [email]- [valid/ invalid]");
  }
  console.log("Valid emails:", validEmails.length);
  console.log("Invalid emails:", invalidEmails.length);
  console.log([validEmails, invalidEmails]);
}
validateEmails(emailArray);

