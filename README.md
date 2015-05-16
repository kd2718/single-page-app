# Example single page app

This is a rudimentary example of a single page application using AngularJS and ui-router. In the static folder if you take a look at the app.js file you will see the states that are defined which handle the routing on the client side. No requests to a server are made to fetch pages in the format that other frameworks implement their web page fetching/rendering. Due to that implementation, you will never be stuck waiting for a page to load. 

This technology is useful when you want to build a project using a client server architecture because it will allow you to seperate you server side API from the client side that is handling the routing and display of dynamic data.