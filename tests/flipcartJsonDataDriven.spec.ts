import {test,expect} from '@playwright/test';
import { Flipcartpage } from '../src/Pages/flipcartPage';
import { findPackageJSON } from 'node:module';
// read url from env file
import dotenv from "dotenv" // load env file
dotenv.config({path:'Data/.env.uat'}) //set the env file path
//dotenv.config({path:`Data/.env.${process.env.appenv}`}) //set each env (QA,UAT) file path using back tild
// read the data from Json file
const flipdata=JSON.parse(JSON.stringify(require("..//Data/LoginSearchData.json")))

//data driven test from json in loop
test.describe("json dd test",function ()
  {
    for(const data of flipdata)
    {
      test.describe(`each record ${data.id}`,function () //back tild side used to unique record
      {

     // test here
         // const flipurl="https://www.flipkart.com/";
          let flipcartpage:Flipcartpage;

          test.beforeEach(async({page})=>
          { 
           
          const applicationUrl=process.env.url as string  //feach url from env file
          flipcartpage=new Flipcartpage(page);
           // object of page class 
          await page.goto(applicationUrl) ;// open url
          })


          // test.only("Verify page Open login",async({page})=>
             test("Verify page Open login",async({page})=>
            {
                   

            await expect.soft(flipcartpage.searchitem).toBeVisible()  //verify search box visible or not

            await expect.soft(flipcartpage.searchitem).toBeEnabled() //verify search box enabled  or not

             // search item data from json file
            await flipcartpage.searchMyProduct(data.searchproduct) 
            // search method with product name from json file
            await flipcartpage.flipcartLogin(data.EmailId) // login method with email id from json file
        

           //   await page.pause(); 

    } )


      })
    }
  }            
)

