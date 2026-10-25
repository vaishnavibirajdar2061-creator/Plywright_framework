
/*
API Chaining
===============
When we send request and output of request we use as input to send to send other request
is called APIchaining

1.create new booking(post)------------->bookingid----->confirm from getBooking APi where we use id
2.create new booking(post)------------->bookingid----->create token---->PUT call for full update
3.create new booking(post)------------->bookingid----->create token---->PATCH call for partial update
4.create new booking(post)------------->bookingid----->create token---->DELETE to delete record


Temporary solution
====================
Run all test in sequence

Right technique to run api
============================
But with respect to playwright where every test case we run in parallel so we need to design AAA pattern
independent test is the solution

*/








