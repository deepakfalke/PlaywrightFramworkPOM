import {test,expect} from '@playwright/test';
test('getApi', async ({ request }) => {
   // await page.goto('https://jsonplaceholder.typicode.com/todos/1');

    const response = await request.get('https://jsonplaceholder.typicode.com/todos/1');
    const body  = await response.json();
    console.log(body);
    const status = response.status();
    const responsetext = await response.text();
    console.log(responsetext);
    console.log(status);

    // validation 
    expect(response.status()).toBe(200);
    expect(response.status()).not.toBe(400);
     expect (responsetext).toContain("delectus aut autem");   
 
    expect (body.id).toBe(1);
    expect(body.title).toBe("delectus aut autem");


    
})