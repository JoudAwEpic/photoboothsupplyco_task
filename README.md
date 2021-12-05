# photoboothsupplyco Interview Task:

Task was very straight forword and I built small node.js API to handle the request and show the images, I have used node version of: `v14.17.5`
and published my api to an IP address on web: http://137.184.21.75:3000

# Installation:

project is built with javascript and node.js as a backend server:

1.  navigate to the url: https://github.com/JoudAwEpic/photoboothsupplyco_task
2.  run the command `git clone https://github.com/JoudAwEpic/photoboothsupplyco_task.git`
3.  cd into the directory
4.  type `npm install` which will download the dependecies for you
5.  (optional) create a .env file and add a value of `PORT=<value>` that will start the application in your browser at that port, otherwise the application will start on port `3000`
6.  type `npm run start` (make sure you are under node version 14) which will start the application and boot it up on your `http://locahost:3000` or the port you have specified

# Instruction on how to use the application:

using the application can be very easy all you have to do is to navigate to the main url and that will generate an image for you, each time you visit the url
also you can use postman in `preview` mode in order to view and use the api

# Development and strategy:

I have used the basic MVC pattren my design followed the strategy of seperating logic in one folder `controllers` and putting the routing system in other one `routes` and combine everything else in the index.js in the root of the project to host and start my project.

also added an extra folder called `utilits` to add some extra helping utilites functions in there, like `winison` for logging and creating the basic `axios` init from that folder.

talking about the logic in terms of what I have done, so first i start by creating a request to the `Programmer Quotes` API to fetch a random text from it and pass the result i get to the `CATAAS (Cat-As-A-Service)` API to generate that image for me with that text.

the `CATAAS (Cat-As-A-Service)` returned the data and I had to buffer it and change it in a way I can generate an image with the data That I have got.
next step was to pass that data into a plain `HTML` in order to display and show that image to public.

# LIVE PREVIEW:

you can find the site up and running onto the following URL:
http://137.184.21.75:3000
in case the domain was removed when you are reviewing this please let me know so i can upload it again
please let me know if you have any questions feel free to e-mail me.
