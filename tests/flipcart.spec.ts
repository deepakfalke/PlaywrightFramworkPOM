import {test,expect} from '@playwright/test';
import { Flipcartpage } from '../src/Pages/flipcartPage';
import { findPackageJSON } from 'node:module';
const flipdata=JSON.parse(JSON.stringify(require("..//Data/LoginSearchData.json")))

//data driven test
test.describe("Flipcart test",function ()
  {
    for(const data of flipdata)
    {
      test.describe(`each record ${data.id}`,function () //back tild side used to unique record
      {

     // test here
          const flipurl="https://www.flipkart.com/";
          let flipcartpage:Flipcartpage;

          test.beforeEach(async({page})=>
          { 
          flipcartpage=new Flipcartpage(page);
          await page.goto(flipurl) ;// open url
          })


           test("Verify page Open login",async({page})=>{
                    // object of page class


          await expect.soft(flipcartpage.searchitem).toBeVisible()  //verify search box visible or not

          await expect.soft(flipcartpage.searchitem).toBeEnabled() //verify search box enabled  or not

          await flipcartpage.searchitem.fill(data.searchproduct) // search item data from json file

          await page.waitForTimeout(2000)

          await flipcartpage.userlogin.click();

          await page.waitForTimeout(2000)

          await flipcartpage.emailId.fill(data.EmailId); // email id from json file

          await page.waitForTimeout(2000)

          await flipcartpage.requestOtp.click();

          await page.pause();

    } )


      })
    }
  }            
)

