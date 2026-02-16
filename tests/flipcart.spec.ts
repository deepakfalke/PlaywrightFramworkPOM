import {test,expect} from '@playwright/test';
import { Flipcartpage } from '../src/Pages/flipcartPage';
import { findPackageJSON } from 'node:module';
const flipdata=JSON.parse(JSON.stringify(require("..//Data/LoginSearchData.json")))

//data driven test
test.describe("Sanity check",function ()
  {
    for(const data of flipdata)
    {
      test.describe(`each record ${data.id}`,function () //back tild side used to unique record
      {

     // test here
          const flipurl="https://www.flipkart.com/account/login?ret=/";
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

          await flipcartpage.searchMyProduct(data.searchproduct) 
            // search method with product name from json file
          await flipcartpage.flipcartLogin(data.EmailId)

        //  await page.pause();

    } )


      })
    }
  }            
)

