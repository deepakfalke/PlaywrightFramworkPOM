import { Locator,Page } from "@playwright/test";
import { time } from "node:console";

export class Flipcartpage
{
    readonly searchitem:Locator;
    readonly searchtext:Locator;
    
    readonly userLogin_button:Locator;
    readonly userSignUp_button:Locator;
    readonly emailId:Locator;
    readonly requestOtp:Locator;
    
    constructor(page:Page)
    {
        this.searchitem=page.getByRole('textbox', { name: 'Search for products, brands and more' });
        this.searchtext=page.getByText('VW 60 cm (24 inch) HD Ready LED TV 2025 Edition', { exact: true });         
       
       // this.userLogin_button=page.getByText('Login', { exact: true }).first();
        this.userLogin_button= page.getByRole('link', { name: 'Login' })
        this.userSignUp_button= page.getByText('Sign Up', { exact: true })
        this.emailId=page.locator(`//input[@class='c3Bd2c yXUQVt']`);
        this.requestOtp=page.getByRole('button', { name: 'Request OTP' })  //
        
    }

     async searchMyProduct(itemName:string)
        {
         await this.searchitem.waitFor({state:"visible"});   
         await this.searchitem.fill(itemName);        
         
        }

       async flipcartLogin(login_emailId:string)
        { 
         //await this.userLogin_button.waitFor({state:"visible",timeout:2000});
         await this.userLogin_button.click({timeout:2000 });
         await this.userSignUp_button.waitFor({state:"visible",timeout:2000});
         await this.userSignUp_button.click({timeout:2000 });
         await this.emailId.waitFor({state:"visible",timeout:2000});
         await this.emailId.fill(login_emailId,{timeout:2000});
         await this.requestOtp.waitFor({state:"visible",timeout:2000});
         await this.requestOtp.click({timeout:2000 });
        }

}
