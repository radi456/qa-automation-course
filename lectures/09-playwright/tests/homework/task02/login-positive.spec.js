import {test, expect} from "@playwright/test";


test ("First login test", async ({page})=> {
    await page.goto("http://training.skillo-bg.com:4300/posts/all");
    const loginPage = page.locator("#nav-link-login");
   await loginPage.click();
   await expect(page).toHaveURL("http://training.skillo-bg.com:4300/users/login");
   const signInButton = page.locator("#sign-in-button");
   await expect(signInButton).toBeVisible();
    const usernameInput = page.locator("#defaultLoginFormUsername");
    const passwordInput = page.locator("#defaultLoginFormPassword");
    await usernameInput.fill("Radi_Kost@mail.bg");
await passwordInput.fill("Pass123!");
await signInButton.click();
 const profileLink = page.locator("#nav-link-profile");
 await expect(profileLink).toBeVisible();
  await profileLink.click();
  await expect(page).toHaveURL(/\/users\/\d+$/);
  await expect(page.locator("h2")).toBeVisible();
  await expect(page.locator("h2")).toHaveText("RADOSLAVA_KOSTOVA");

}
)
