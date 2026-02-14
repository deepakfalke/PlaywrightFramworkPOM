import { Locator,Page } from "@playwright/test";

export class Flipcartpage
{
    readonly searchitem:Locator;
    readonly searchtext:Locator;
    
    readonly userLogin_button:Locator;
    readonly emailId:Locator;
    readonly requestOtp:Locator;
    
    constructor(page:Page)
    {
        this.searchitem=page.getByRole('textbox', { name: 'Search for products, brands and more' });
        this.searchtext=page.getByText('VW 60 cm (24 inch) HD Ready LED TV 2025 Edition', { exact: true });         
        this.userLogin_button=page.getByText('Login', { exact: true }).first();
        this.emailId=page.locator(`//input[@class='c3Bd2c yXUQVt']`);
        this.requestOtp=page.getByRole('button', { name: 'Request OTP' });
    }

     async searchMyProduct(itemName:string)
        {
         await this.searchitem.waitFor({state:"visible"});   
         await this.searchitem.fill(itemName);        
         
        }

       async flipcartLogin(login_emailId:string)
        { 
         await this.userLogin_button.waitFor({state:"visible"});
         await this.userLogin_button.click();
         await this.emailId.fill(login_emailId);
         await this.requestOtp.waitFor({state:"visible"});
         await this.requestOtp.click();
        }

}
