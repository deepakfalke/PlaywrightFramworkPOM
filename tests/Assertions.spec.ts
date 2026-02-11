import {test,expect} from '@playwright/test';

test("Verify page Open login",async({page})=>{

//await page.goto("https://playwright.dev/docs/intro");

await page.goto("https://www.flipkart.com/")

console.log("Title",await page.url())

await expect(page).toHaveURL("https://www.flipkart.com/")


await expect.soft(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")

const searchbox=page.getByRole('textbox', { name: 'Search for Products, Brands and More' })
 
await expect.soft(searchbox).toBeVisible()
await expect.soft(searchbox).toBeEnabled()
await expect.soft(searchbox).toBeEditable()
await expect.soft(searchbox).toBeDisabled()

await page.getByRole('textbox', { name: 'Search for Products, Brands and More' }).fill("Mobile");


await page.keyboard.press("Enter")







})