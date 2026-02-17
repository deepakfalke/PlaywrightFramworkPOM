import {test as baseurl} from '@playwright/test';



type globalFixture={

        applicationurl:string
        
    }
    export const test=baseurl.extend<globalFixture>({    

     applicationurl:async({page},use)=>
      {

      const flipurl="https://www.flipkart.com/account/login?ret=/";
       await page.goto(flipurl) ;
       await use(flipurl) // use is used to pass value to test case
     
     }






})


