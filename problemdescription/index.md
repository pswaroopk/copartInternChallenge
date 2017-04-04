<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Welcome to Copart Internship 2017 summer coding camp](#welcome-to-copart-internship-2017-summer-coding-camp)
  - [RULES OF ENGAGEMENT](#rules-of-engagement)
- [Coding Exercises - Problem statements](#coding-exercises---problem-statements)
  - [Most Appropriate Facility  (Complex) (100 points)](#most-appropriate-facility--complex-100-points)
    - [The Problem:](#the-problem)
  - [JS Library/framework* based - Nested ListView (Simple) (10 points)](#js-libraryframework-based---nested-listview-simple-10-points)
    - [The Problem:](#the-problem-1)
  - [Upcoming Auction Vehicle Search - UI/Web Service (Medium) (30 points)](#upcoming-auction-vehicle-search---uiweb-service-medium-30-points)
    - [The Problem:](#the-problem-2)
  - [Programming Assignment - License Keys (Simple) (10 points)](#programming-assignment---license-keys-simple-10-points)
    - [The Problem:](#the-problem-3)
  - [Coding Exercises - Problem statements (Node.js or Ruby)(30 points)](#coding-exercises---problem-statements-nodejs-or-ruby30-points)
  - [Coding Exercises - Problem statements (JavaScript or ReactJS) (30 points)](#coding-exercises---problem-statements-javascript-or-reactjs-30-points)
  - [Programming Assignment - Variation of Most Appropriate Yard (Complex) (100 points)](#programming-assignment---variation-of-most-appropriate-yard-complex-100-points)
  - [Convert String to Integer (Simple) (10 points)](#convert-string-to-integer-simple-10-points)
  - [Extract Text from PDF/Image (20 points)](#extract-text-from-pdfimage-20-points)
  - [HTML/JS Any frontend tech - Design calendar for auctions (Medium)(30 points)](#htmljs-any-frontend-tech---design-calendar-for-auctions-medium30-points)
  - [Github link](#github-link)
  - [Submit your application online](#submit-your-application-online)
  - [Copart Contacts](#copart-contacts)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Welcome to Copart Internship 2017 summer coding camp

Copart Coding camp is an initiative to get students to think out side the box and bring in new design/development ideas. Copart believes that such events are good tools to attract new talent and also stimulate creative thinking. We encourage participation.
 

### RULES OF ENGAGEMENT
1. Each team (not to exceed 2) has to pick a problem statement below and show their work. You may pick multiple problems to solve.
2. Do not copy. Try to be creative.
3. Understand what you are developing.
4. Code must be committed to Github or Bitbucket.
5. All commits after 4PM will not be accepted.
6. Code must have README.md
7. Code must have comments - We cannot read your mind.
8. You dont need to complete the problem. Make an effort.
9. Individual contributions must be clearly explained


- - -

## Coding Exercises - Problem statements

### Most Appropriate Facility  (Complex) (100 points)
#### The Problem:
Given a request payload that contains a US zip code and a Customer ID, figure out the Closest Copart facility based on specific rules for a Customer. Think inclusion and exclusion rules.
1. Use a DB where appropriate.
2. Use any rules based engine where appropriate
3. Use any API as you see appropriate
4. You can get a list of copart yards/facilities from our [website](https://www.copart.com/locationsList/) *Cannot use locations from zip_code_states.csv
5. Sample Rules file is added to the Repo in Documents/Rules.xls. There are no limit to number of Rules. The rules can be added to the xls and the system must be able to handle it.

- - -

### JS Library/framework* based - Nested ListView (Simple) (10 points)
#### The Problem:
JS based ListView - Must have multiple Nested list views - (eg) Countries, States, Cities. 
1. Single JSON response vs Multiple JSON response - Showcase both.
2. Reuse components and reuse data from cache/store
[*] - Use React or AngularJS or ember or backbone or one of the modern JS frameworks/libraries. Do not use JQuery or ExtJS 

- - -

### Upcoming Auction Vehicle Search - UI/Web Service (Medium) (30 points)
#### The Problem:
1. Given a listing of upcoming auctions, help the user narrow down to the vehicles that are of interest.
2. User should be able to search on Year, Make and Model in a region. Region is a grouping of one or more yards the user can choose from (Yards available in calendar service)\
Optional filters user can choose are damage description and title type to narrow the list further
3. The user interface should display the Year, Make, Model, Auction Date, Auction Yard, Address, Damage Description, and Vehicle images
4. The listing service documentation can be found at:
[Copart Inventory API](https://inventory.copart.io/docs/InventoryAPISpecification.html)
5. Alternately, in the place of a user interface, you may also build a web service that will retrieve this information mentioned above.
Sample API: http://inventory.copart.io/v1/saleLotDetails?country=US&brand=CPRT&auctionDate=2017-04-04T15:00:00.000Z&yardNumber=23
- - -

### Programming Assignment - License Keys (Simple) (10 points)
#### The Problem:
We are given a string S consisting of N characters and an integer K. The string represents software license key which we would like to format. The string is composed of alphanumeric characters and dashes. The dashes split the string into groups (i.e if there are M dashes, the string is split into M+1 groups). The dashes in the string are possibly misplaced.

We want each group of characters to be of the length K (except for possibly the first group which could be shorter). All lowercase letters must be converted to uppercase.

The Input:
Enter string S and integer K or pass them as args

The Output:
Formatted license key according to the rules

Sample Input:
S=2-4A0r7-4k
K=4

Sample Output:
24A0-R74K

- - -

### Coding Exercises - Problem statements (Node.js or Ruby)(30 points)

 Solve using Ruby or Node.js:
 
 Move attached CSV data into DB and fetch lat, Long coordinates for Location column using google map API. 

a). Import data from CSV file to DB (VehicleDetails.csv File attached).
b). Get Lat, Long coordinates for Location column in attached. CSV (you can use google map API)
c). Create two columns in DB Lat, Long
d). Add Lat, Long coordinates to Database for each Location in CSV.

Note: Make sure you don't make same call to maps api for same location

--
### Coding Exercises - Problem statements (JavaScript or ReactJS) (30 points)

 2. ReactJS - UI or JavaScript 
Build components:

1. Phone Component:  validation and auto format. 
a). As you enter numbers, the phone field should auto format. Format should look like (123) 456-7890.
b). As you delete/backspace numbers from right to left, the format should auto adjust. After removing last 4 digits, the hyphen should go away and rest of 
the numbers format remain same: (123) 456 but should display error message:Invalid phone number, if user leaves field incomplete and goes to another field: 

2. Address Component: 
 
  a). Build component to fetch full address as user enters street address, using Google API. 

  b). Address fields should be editable after populating address from google api. 
 
Address:________________
Street name 1: ______________
Street Name 2:_______________
City:_____________
State:______________
Zipcode:_____________

- - - 

### Programming Assignment - Variation of Most Appropriate Yard (Complex) (100 points)
a) Given the geo cordinates of different yard locations, develop a model that determines the closest yard to the given pickup location. (20 points)

b)Optimize your solution to O(n-k) through unsupervised learning algorithm (80 points). And also provide 2 more nearer locations to the chosen location.

The yard locations can be obtained from
zip_codes_states.csv

- - - 
### Convert String to Integer (Simple) (10 points) 
Without using any Integer functions like parseInt/valueOf convert the String to Integer. e.g. String input = "1234" - > Integer output=1234.


- - - 
### Extract Text from PDF/Image (20 points)
Use any open source tool extract the Vehicle ID Number, Plate Number & Certificate Name pdf/image file. Sample docs can be found in Documents/Title Docs Folder.

- - - 

### HTML/JS Any frontend tech - Design calendar for auctions (Medium)(30 points)

 The Problem::
 
 1. Each day should show the list of facilities and the time of sale. 
 2. Also take the timezone of the user into consideration. The times displayed should be in the user's local timezone. Feel free to use any time conversion libraries. 
 3. use Sale-Data.json file provided in [github](https://github.com/copart-internship/copart-internship.github.io) - under Documents.

- - - 

### [Github link](https://github.com/copart-internship/copart-internship.github.io) 
- - - 

### Submit your application [online](https://goo.gl/EVM9vs)
- - - 
- - - 
- - - 
### Copart Contacts

Reach out to one of the copart representatives and we will be glad to help you.



