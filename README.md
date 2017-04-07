Appropriate Facility
---------------------
html/css, javascript, node.js, angular, postgres

Requirements
INSTALL 'npm' and 'node' for server and client side setup
Server: npm -https://www.npmjs.com/package/npm
Framework: node: https://nodejs.org/en/download/
DB: postgres - https://www.postgresql.org/download/windows/
terminal: git - https://git-scm.com/downloads

Extract the code from the zip folder into app folder
Right click on app folder and open git bash
Execute
npm install
Run node server.js

Waterline: ORM adapter for Node JS to communicate with postgres server



Data is extracted from https://www.copart.com/Content/US/EN/Landing-Page/print-locations-by-number

create copartdb, username: postgres, pwd: 1234 // based on your pgAdminIII

database insert commands are attached in yardLoaction-script.sql

Open localhost:3000 in any browser

The server will be running on the port 3000

Enter, any customer id, radius and zipcode to get the list of closest yard facilities.

Limitation: rules are not handled due to time constraint.

Listing of Upcoming Auction Events
-------------------------------------
express, node.js, html, bootstrap, angular.js
runs on port:3000

Choose country and brand to list the available auctions with yard names and numbers and times.

It displays list of results grouped by yard name, number with a nested list of event time/dates.


Programming Assignment - Convert String to Integer
-------------------------------------
Language used: java.

Compile using "javac StringToInteger.java"
Run the program "java StringToInteger <input>"


Programming Assignment - License Keys
-------------------------------------
Language used: java.

Compile using "javac LicenseKey.java"
Run the program "java LicenseKey <input> <K>"

Variation of Most Appropriate Yard
-----------------------------------
Language used: python

Required libraries:

- numpy
- Panda
- scipy-learn
- Shapely
- geopy

1. Basic idea is to loop all yards geo information to find the minimum distance from given input(latitude, longitude)
2. Idea of optimizing the solution is to use DBSCAN clustering to find the clusters, then compare with the given input (latitude, longitude) and with centroid of each cluster, find closest cluster, then find the most two closet locations in that specific cluster.

Validation of address and phone number
--------------------------------------
javascript, ajax, html/css
Usage of google api for address validation.
run node server.js
runs on localhost:5000
