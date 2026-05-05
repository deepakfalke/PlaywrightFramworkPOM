import {test,expect} from '@playwright/test';
import { Flipcartpage } from '../src/Pages/flipcartPage';
import { findPackageJSON } from 'node:module';
const flipdata=JSON.parse(JSON.stringify(require("..//Data/LoginSearchData.json")))

const flipurl="https://www.flipkart.com/";
let flipcartpage:Flipcartpage;

test.beforeEach(async({page})=>
{ 
flipcartpage=new Flipcartpage(page);
await page.goto(flipurl) ;// open url
})


test("Verify page Open login",async({page})=>{
     // object of page class

//console.log("Title",await page.url())

//await expect(page).toHaveURL("https://www.flipkart.com/")
await expect.soft(flipcartpage.searchitem).toBeVisible()  //verify search box visible or not

await expect.soft(flipcartpage.searchitem).toBeEnabled() //verify search box enabled  or not

await flipcartpage.searchitem.fill(flipdata.searchproduct) // search item data from json file

await page.waitForTimeout(19000)   

await flipcartpage.flipcartLogin(flipdata.EmailId) // login method with email id from json file

await page.pause();



//await page.getByRole('textbox', { name: 'Search for Products, Brands and More' }).fill("Led TV")
//await page.keyboard.press("Enter")
//await flipcartpage.searchtext.click();
//await page.getByText('VW 60 cm (24 inch) HD Ready LED TV 2025 Edition', { exact: true }).click();
//await page.waitForTimeout(6000)





})