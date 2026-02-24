import {test,expect} from '@playwright/test';
test('postApiGetToken', async ({ request }) => {
   
const postdata={
    "username" : "admin",
    "password" : "password123"
       }


    const response = await request.post('https://restful-booker.herokuapp.com/auth',
        {headers:{'Content-Type': 'application/json'},data:postdata })
  
        const status = response.status();
        const responsetext = await response.text();
        console.log(responsetext);
        console.log(status);
        console.log(await response.json());

        // validation

        const responsebody = await response.json();
        expect(response.status()).toBe(200);
        expect(responsebody.token).not.toBeNull();




   
   

    

})
test('postBookingApi', async ({ request }) => {

const bookingData={
    "firstname" : "neha",
    "lastname" : "Falke",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}


    const response = await request.post('https://restful-booker.herokuapp.com/booking',
        {headers:{'Content-Type': 'application/json'},data:bookingData })

        const status = response.status();
        const responsedata = await response.json();
        console.log(responsedata);
        console.log(status);
        console.log(await response.json()); 

        // validation
        expect(response.status()).toBe(200);
        expect(responsedata.bookingid).not.toBeNull();
        expect(responsedata.booking.firstname).toBe("neha");
        expect(responsedata.booking.lastname).toBe("Falke");
        expect(responsedata.booking.totalprice).toBe(111);
        expect(responsedata.booking.depositpaid).toBe(true);
     //   expect(responsedata.booking.bookingdates.checkin).toBe("2018-01-01");
      //  expect(responsedata.booking.bookingdates.checkout).toBe("2019-01-01");
        expect(responsedata.booking.additionalneeds).toBe("Breakfast"); 

}
)