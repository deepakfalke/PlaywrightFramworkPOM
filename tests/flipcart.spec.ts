import {expect} from '@playwright/test';
import {test} from '../tests/url_Fixture';
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
          
           let flipcartpage:Flipcartpage;
       /*   const flipurl="https://www.flipkart.com/account/login?ret=/";
          test.beforeEach(async({page})=>
          { 
          
          await page.goto(flipurl) ;// open url
          })*/
            

           test("Verify page Open login",async({page,applicationurl})=>
           {
                    // object of page class
          flipcartpage=new Flipcartpage(page);

          await expect.soft(flipcartpage.searchitem).toBeVisible()  //verify search box visible or not

          await expect.soft(flipcartpage.searchitem).toBeEnabled() //verify search box enabled  or not

          await flipcartpage.searchMyProduct(data.searchproduct) 
            // search method with product name from json file
          await flipcartpage.flipcartLogin(data.EmailId)

          // testing the git

        //  await page.pause();

    } )


      })
    }
  }            
)

