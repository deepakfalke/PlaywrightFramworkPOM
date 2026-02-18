import {test,expect} from '@playwright/test';
test('test', async ({ request }) => {
   // await page.goto('https://jsonplaceholder.typicode.com/todos/1');

    const response = await request.get('https://jsonplaceholder.typicode.com/todos/1');
    const body  = await response.json();
    console.log(body);
    const status = response.status();
    console.log(status);
    expect(response.status()).toBe(200);
   // const headers = response.headers();
    //console.log(headers);

})