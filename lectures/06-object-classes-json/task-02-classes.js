class TestUser {
  constructor(userName, email, password, role, activ) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.role = role;
    this.activ = true;
  }
  isValidEmail() {
    return this.email.includes("@") && this.email.length > 10;
  }
  isValidPassword() {
    return this.password.length >= 8;
  }
  validate() {
    return this.email.includes("u") && this.password.length >= 8;
  }
  getInfo() {
    return `User: ${this.userName}, role ${this.role}, Status ${this.activ}`;
  }
}

let user1 = new TestUser("Test user 1", "testuser1.@mail.com", "pass123", "QA");
let user2 = new TestUser(
  "Test user 2",
  "testuser2.@mail.com",
  "pass12388",
  "QA"
);

console.log("Test user 1 valid email:", user1.isValidEmail());
console.log("Test user 1 valid password:", user1.isValidPassword());

console.log("Test user 2 valid email:", user2.validate());
console.log("User2 detailed info:", user2.getInfo());

console.log("===Test Class===");

class TestCase {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.status = "PENDING";
    this.durationMs = 0;
  }
  start() {
    this.status = "RUNNING";
    console.log("Start test", this.name);
  }
  complete(status, durationMs) {
    this.status = status;
    this.durationMs = 3500;
    console.log(
      `Complete test: ${this.name} - ${this.status} (${this.durationMs}ms)`
    );
  }
  getSummary() {
    return {
      name: this.name,
      status: this.status,
      durationMs: `${this.durationMs}ms`,
    };
  }
}
let test1 = new TestCase("Test case 1", "New user register");
let test2 = new TestCase("Test case 2", "User login");

console.log("Result test case 1", test1.getSummary());
console.log("Result test case 2", test2.getSummary());
