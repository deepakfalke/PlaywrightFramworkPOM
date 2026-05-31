import { test } from '@playwright/test';
import { AmazonHomePage } from '../src/Pages/AmazonHomePage';
import { AmazonSearchPage } from '../src/Pages/AmazonSearchPage';
import { AmazonProductPage } from '../src/Pages/AmazonProductPage';
import { AmazonCartPage } from '../src/Pages/AmazonCartPage';

test.describe("Amazon Automation", () => {
    test("Navigate to Amazon, search, add to cart, go to cart", async ({ page }) => {
        const homePage = new AmazonHomePage(page);
        const searchPage = new AmazonSearchPage(page);
        const productPage = new AmazonProductPage(page);
        const cartPage = new AmazonCartPage(page);

        await page.goto('https://www.amazon.com');

        await homePage.searchProduct('55 inch LG LED TV');

        await searchPage.selectFirstProduct();

        await productPage.addToCart();

        await cartPage.goToCart();
    });
});