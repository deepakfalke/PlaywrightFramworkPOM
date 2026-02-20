import {test as baseurl} from '@playwright/test';

import dotenv from "dotenv" // load env file
import { time } from 'node:console';

dotenv.config({path:'Data/.env.uat'}) //set the env file path

const envUrl=process.env.url as string 

type globalFixture={

        applicationurl:string
        
    }
    export const test=baseurl.extend<globalFixture>({    

     applicationurl:async({page},use)=>
      {

      //const flipurl="https://www.flipkart.com/account/login?ret=/";
       await page.goto(envUrl,{waitUntil:"networkidle"}); // open url
       await use(envUrl) // use is used to pass value to test case
     
     }






})


