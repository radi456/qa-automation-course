import {test, expect} from "@playwright/test" ;



test("Invalid credentials", async({page})=> {

   await page.goto("http://training.skillo-bg.com:4300/users/login"); 
   const usernameInput = page.locator("#defaultLoginFormUsername");
   await usernameInput.fill ("admin@mail.com");
   const passwordInput = page.locator("#defaultLoginFormPasswor");
   await passwordInput.fill("badpassword");
  const signInButton = page.locator("#sign-in-button");
  await signInButton.click();
  await expect(page).toHaveURL("http://training.skillo-bg.com:4300/users/login")
  await expect (signInButton).toBeVisible();

  await expect (page.locator("#nav-link-profile")).not.toBeVisible();


});

test ("Empty field submission", async ({page}) =>{
 await page.goto("http://training.skillo-bg.com:4300/users/login") ;
  const signInButton = page.locator("#sign-in-button");
 await signInButton.click();
 await expect(page).toHaveUrl("http://training.skillo-bg.com:4300/users/login");
 await expect (signInButton).toBeDisabled();
}
)