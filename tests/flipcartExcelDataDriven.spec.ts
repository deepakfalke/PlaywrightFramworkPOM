import {test,expect} from '@playwright/test';
import { Flipcartpage } from '../src/Pages/flipcartPage';
import { findPackageJSON } from 'node:module';
import * as XLSX from 'xlsx'; // import xlsx module


// Define the structure of Excel data
interface ExcelRow {
  id: number;
  searchproduct: string;
  EmailId: string;
}

// read url from env file
import dotenv from "dotenv" // load env file
dotenv.config({path:'Data/.env.uat'}) //set the env file path
//dotenv.config({path:`Data/.env.${process.env.appenv}`}) //set each env (QA,UAT) file path using back tild
// read the data from Json file

const Excelpath=XLSX.readFile("./Data/ExcelData.xlsx")
const sheetname=Excelpath.SheetNames[0] // read the sheet name
const Exceldata: ExcelRow[] = XLSX.utils.sheet_to_json(Excelpath.Sheets[sheetname]) // convert excel data to json format  

 



//data driven test from Excel in loop
test.describe("ExcelTest",function ()
  {
    for(const { id, searchproduct, EmailId } of Exceldata)
    {
      test.describe(`each record ${id}`,function () //back tild side used to unique record
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
            await flipcartpage.searchMyProduct(searchproduct) 
            // search method with product name from json file
            await flipcartpage.flipcartLogin(EmailId) // login method with email id from json file
             

           //   await page.pause(); 

      } )


      })
    }
  }            
)