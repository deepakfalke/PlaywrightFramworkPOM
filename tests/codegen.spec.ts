import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('led tv ');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.locator('#a-autoid-3-announce').click();
  await page.getByRole('link', { name: 'Apply the filter Up to 25.9' }).click();
  await page.getByRole('link', { name: 'Apply the filter 26.0 to 34.9' }).click();
  await page.getByRole('link', { name: 'Apply the filter 35.0 to 43.9' }).click();
  await page.getByRole('link', { name: 'item in cart' }).click();
  await page.getByRole('button', { name: 'Proceed to Buy Buy Amazon' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
}); 
