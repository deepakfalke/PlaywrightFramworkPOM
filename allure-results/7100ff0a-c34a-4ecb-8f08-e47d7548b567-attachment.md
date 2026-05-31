# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assertions.spec.ts >> Verify page Open login
- Location: tests\Assertions.spec.ts:3:6

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!"
Received: "Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com"
Timeout:  5000ms

Call log:
  - Expect "soft toHaveTitle" with timeout 5000ms
    8 × unexpected value "Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com"

```

```
Error: expect(locator).toBeDisabled() failed

Locator:  getByRole('textbox', { name: 'Search for Products, Brands and More' })
Expected: disabled
Received: enabled

Call log:
  - Expect "soft toBeDisabled" with timeout 5000ms
  - waiting for getByRole('textbox', { name: 'Search for Products, Brands and More' })
    6 × locator resolved to <input name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn25" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/>
      - unexpected value "enabled"

```

```
Error: locator.fill: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | test.only("Verify page Open login",async({page})=>{
  4  | 
  5  | //await page.goto("https://playwright.dev/docs/intro");
  6  | 
  7  | await page.goto("https://www.flipkart.com/")
  8  | 
  9  | console.log("Title",await page.url())
  10 | 
  11 | await expect(page).toHaveURL("https://www.flipkart.com/")
  12 | 
  13 | 
  14 | await expect.soft(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")
  15 | 
  16 | const searchbox=page.getByRole('textbox', { name: 'Search for Products, Brands and More' })
  17 |  
  18 | await expect.soft(searchbox).toBeVisible()
  19 | await expect.soft(searchbox).toBeEnabled()
  20 | await expect.soft(searchbox).toBeEditable()
  21 | await expect.soft(searchbox).toBeDisabled()
  22 | 
> 23 | await page.getByRole('textbox', { name: 'Search for Products, Brands and More' }).fill("Mobile");
     |                                                                                   ^ Error: locator.fill: Target page, context or browser has been closed
  24 | 
  25 | 
  26 | await page.keyboard.press("Enter")
  27 | 
  28 | 
  29 | 
  30 | 
  31 | 
  32 | 
  33 | 
  34 | })
```