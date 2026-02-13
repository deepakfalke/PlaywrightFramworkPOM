import {test,expect} from '@playwright/test';
import { Flipcartpage } from '../src/Pages/flipcartPageSearch';
import { findPackageJSON } from 'node:module';

import {parse} from "csv-parse/sync"
import fs from "fs"
const csvdata=parse<Record<string,string>>(fs.readFileSync("Data/flipdata.csv"),{
columns:true,
skip_empty_lines:true,
skipRecordsWithEmptyValues:true

})



const flipurl="https://www.flipkart.com/";
let flipcartpageSearch:Flipcartpage;    

test.beforeEach(async({page})=>
{ 
flipcartpageSearch=new Flipcartpage(page); // object of page class 
await page.goto(flipurl) ;// open url
})


test("csv test",async({page})=>{

  for(const csvdatas of csvdata)
  {
        flipcartpageSearch.search(csvdatas.itemName,csvdatas.emailid)
        {
               await expect.soft(flipcartpageSearch.searchitem).toBeVisible()  //verify search box visible or not

               await expect.soft(flipcartpageSearch.searchitem).toBeEnabled() //verify search box enabled  or not

               await flipcartpageSearch.searchitem.fill(csvdatas.itemName) // search item data from csv file

               await page.waitForTimeout(2000)

               await flipcartpageSearch.userlogin.click();

               await page.waitForTimeout(2000)

               await flipcartpageSearch.emailId.fill(csvdatas.emailid); // email id from csv file 

               await page.waitForTimeout(2000)

               await flipcartpageSearch.requestOtp.click();

              
              //  await page.pause();

        }
}


})