import { Locator,Page } from "@playwright/test";

export class Flipcartpage
{
    readonly searchitem:Locator;
    readonly searchtext:Locator;
    
    readonly userlogin:Locator;
    readonly emailId:Locator;
    readonly requestOtp:Locator;
    
    constructor(page:Page)
    {
        this.searchitem=page.getByRole('textbox', { name: 'Search for Products, Brands and More' });
        this.searchtext=page.getByText('VW 60 cm (24 inch) HD Ready LED TV 2025 Edition', { exact: true });         
        this.userlogin=page.getByText('Login', { exact: true }).first();
        this.emailId=page.locator(`//input[@class='c3Bd2c yXUQVt']`);
        this.requestOtp=page.getByRole('button', { name: 'Request OTP' });
    }



}
