
import {expect,test} from '@playwright/test';
 const url="https://www.flipkart.com/";

test.beforeEach("Verify page Open login",async({page})=>{

await page.goto(url);

await expect(page).toHaveURL("https://www.flipkart.com/")

 
});

test("switch window",async({page})=>{
    const [newTab]=await Promise.all([
    page.waitForEvent("popup"),
    page.getByRole('textbox', { name: 'Search for Products, Brands and More' }).fill("Led TV"),
    page.keyboard.press("Enter"),
    page.getByText('VW 60 cm (24 inch) HD Ready LED TV 2025 Edition', { exact: true }).click()
    

    ])

// This is for testing yes
await newTab.getByRole('textbox', { name: 'Enter Delivery Pincode' }).fill("412207")
await newTab.getByText('Check', { exact: true }).click()
});


