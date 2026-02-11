import {test,expect} from '@playwright/test';
import { Flipcartpage } from '../src/Pages/flipcartPage';
import { findPackageJSON } from 'node:module';

import {parse} from "csv-parse/sync"
import fs from "fs"
const csvdata=parse<Record<string,string>>(fs.readFileSync("Data/flipdata.csv"),{
columns:true,
skip_empty_lines:true,
skipRecordsWithEmptyValues:true

})



const flipurl="https://www.flipkart.com/";
let flipcartpage:Flipcartpage;

test.beforeEach(async({page})=>
{ 
flipcartpage=new Flipcartpage(page); // object of page class 
await page.goto(flipurl) ;// open url
})


test.only ("csv test",async({page})=>{

  for(const csvdatas of csvdata)
  {
   
               await expect.soft(flipcartpage.searchitem).toBeVisible()  //verify search box visible or not

               await expect.soft(flipcartpage.searchitem).toBeEnabled() //verify search box enabled  or not

               await flipcartpage.searchitem.fill(csvdatas.itemName) // search item data from csv file

               await page.waitForTimeout(6000)

               await flipcartpage.userlogin.click();

               await page.waitForTimeout(6000)

               await flipcartpage.emailId.fill(csvdatas.emailid); // email id from csv file 

               await page.waitForTimeout(6000)

               await flipcartpage.requestOtp.click();

               await page.pause();



}


})