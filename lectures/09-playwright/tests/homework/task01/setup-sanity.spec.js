import {test, expect} from "@playwright/test" ;

test("Sanity check", async({page})=> {
   await page.goto("http://training.skillo-bg.com:4300/posts/all");
   await expect(page).toHaveURL("http://training.skillo-bg.com:4300/posts/all"); 
   const loginPage = page.locator("#nav-link-login");
   await loginPage.click();
   await expect(page).toHaveURL("http://training.skillo-bg.com:4300/users/login");
}) 

