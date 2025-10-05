const BASE_URL= "http://demo-qa-site.com";
const DEFAULT_TIMEOUT = 30000;
const API_ENDPOINT = {
    login: "http://demo-qa-site.com/api/login",
    users: "http://demo-qa-site.com/api/users",
    products: "http://demo-qa-site.com/api/products",
}
let testUserEmail= 'example@mail.com';
let testUserPasword= '74loir!';
let adminUserEmail= 'admin@mail.com';
let expectedWelcomeMessage = 'Welcome to your dashboard';

let debugMode = true;
let runSlowTests = false;
let useTestData = true;

function validateEmail(mail){
    console.log("Validation email format:" + testUserEmail.includes ('@'));
    console.log("Validation email format:" + testUserEmail.includes ('.'));
    if (testUserEmail.includes ('@') && testUserEmail.includes ('.')){
        return true;
    } else {return false;}
console.log("Test of email validation format:" +validateEmail(testUserEmail));}
