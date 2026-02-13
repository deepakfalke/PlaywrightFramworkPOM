import {test,expect} from '@playwright/test';
import { FlipcartpageSearch } from '../src/Pages/flipcartPageSearch';
import { findPackageJSON } from 'node:module';

import {parse} from "csv-parse/sync"
import fs from "fs"
const csvdata=parse<Record<string,string>>(fs.readFileSync("Data/flipdata.csv"),
{
columns:true,
skip_empty_lines:true,
skipRecordsWithEmptyValues:true

})
let flipcartpageSearchobj:FlipcartpageSearch;


const flipurl="https://www.flipkart.com/";
  


        
          test.beforeEach(async({page})=>
            { 

             flipcartpageSearchobj=new FlipcartpageSearch(page);
             // object of page class assigned to page factory class
            
            await page.goto(flipurl) ;// open url          
            
            })


            test("csv test",async({page})=>
              {
              for(const csvdatas of csvdata)
              {     
                
                await expect.soft(flipcartpageSearchobj.searchitem).toBeVisible()  //verify search box visible or not

                await expect.soft(flipcartpageSearchobj.searchitem).toBeEnabled() //verify search box enabled  or not

                            
                await flipcartpageSearchobj.searchmyproduct(csvdatas.itemName,csvdatas.emailid) // call function from page factory

              } 
                         

                    
                }
              )

            
