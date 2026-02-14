import {test,expect} from '@playwright/test';
import { Flipcartpage } from '../src/Pages/flipcartPage';
import { findPackageJSON } from 'node:module';
import dotenv from "dotenv" // load env file

dotenv.config({path:'Data/.env.uat'}) //set the env file path

import {parse} from "csv-parse/sync"
import fs from "fs"
const csvdata=parse<Record<string,string>>(fs.readFileSync("Data/flipdata.csv"),{
columns:true,
skip_empty_lines:true,
skipRecordsWithEmptyValues:true

})

//const flipUrl="https://www.flipkart.com/";

let flipcartpage:Flipcartpage;

test.beforeEach(async({page})=>
{ 
const applicationUrl=process.env.url as string
flipcartpage=new Flipcartpage(page); // object of page class 
await page.goto(applicationUrl) ;// open url
})


test("env test",async({page})=>{

  for(const csvdatas of csvdata)
  {

  
   
               await expect.soft(flipcartpage.searchitem).toBeVisible()  //verify search box visible or not

               await expect.soft(flipcartpage.searchitem).toBeEnabled() //verify search box enabled  or not

               await flipcartpage.searchitem.fill(csvdatas.itemName) // search item data from csv file
              await flipcartpage.searchMyProduct(csvdatas.itemName) // search method with product name from csv file
              await page.waitForTimeout(2000)


               await flipcartpage.flipcartLogin(csvdatas.emailid) // login method with email id from csv file

               //await page.waitForTimeout(2000)

               //await flipcartpage.emailId.fill(csvdatas.emailid); // email id from csv file 

               //await page.waitForTimeout(2000)

               //await flipcartpage.requestOtp.click();

              



}


})