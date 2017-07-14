# _Care Bear Club_

#### _Care Bear Club member tracker. Which member gives out the most hugs in a day? Let's find out! 7/14/17_

#### By _**Guy Anderson**_

## Description

_Application will display the members list of Care Bear Club. Details of the members will be displayed in the members details area. Members can be added, updated and deleted._

## specs
| Behavior | Input | Output |
|---|---|---|
| Program will display a welcome page | none | Welcome to the Care Bears Club! |
| program will have 4 navigation buttons | click | see below |
| Home button | click | will return the user to the welcome page |
| About button | click | Will take the user to the about page where we explain the vital role the Care Bear Club has in the world. (maybe) |
| Members button | click | Will display a list of members by first name |
| Admin button | click | will take the user to the admin page  |
| Admin page will be have functionality for adding members. | text/ form entry | new member will be displayed in the members page |
| Admin page will be have functionality for updating members. | text/ form | real time data change to member information |
| Admin page will be have functionality for deleting members.  | button click | remove member from database (sad Care Bear) |
| members information page will have their Care-Stats | none | Name: Belly Symbol: Favorite Care Bear: Number of dolls they own: Number of hugs they give out in a day:|
| All data will be collected and stored in Firebase | na | na |



## Setup/Installation Requirements


* _Go to Github repository page._
* _Click the "download or clone" button and copy the link to CareBearClub_
* _In your computers terminal type "git clone" & paste the copied link._
* _CD into CareBearClub _
* _Open in atom_
* _In terminal run _
* _$ npm install_
* _$ bower init_
* _$ bower install_
* _go to https://firebase.google.com/ and follow their insructions for getting an API key_
* _create a new file called api-keys.ts in the src/app directory. Copy the code from Firebase into it. Follow the example code below._

* _export var masterFirebaseConfig = {_
* _apiKey: "xxxx",_
* _authDomain: "xxxx.firebaseapp.com",_
* _databaseURL: "https://xxxx.firebaseio.com",_
* _storageBucket: "xxxx.appspot.com",_
* _ messagingSenderId: "xxxx"_
* _};_
** _$ ng serve_
* _open localhost:4200 in web browser_

## To-Do List

* _Add more members._
* _Add some Care Bear themes._

## Known Bugs

* _No data type verification for user inputs_

## Technologies Used

_HTML, Angular, Firebase, JavaScript, TypeScript, bower_

### License

Copyright (c) 2017 **_FunGuy Entertainment_**


# Carebearclub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
