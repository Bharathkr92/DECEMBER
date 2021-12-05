$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/Adactin_Feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Lauch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"\u003cUsername\u003e\" In Username Text Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"\u003cPassword\u003e\" In Password Text Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 10,
      "id": "hotel-booking-in-adactin-application;login-page;;1"
    },
    {
      "cells": [
        "Abi",
        "Abi@12345"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;login-page;;2"
    },
    {
      "cells": [
        "Ravi",
        "Ravi@12345"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;login-page;;3"
    },
    {
      "cells": [
        "SeleniumJavaTeste",
        "Sel@12345"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;login-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1928900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Lauch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"Abi\" In Username Text Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"Abi@12345\" In Password Text Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defenition.user_Lauch_The_Application()"
});
formatter.result({
  "duration": 3384314300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abi",
      "offset": 16
    }
  ],
  "location": "Step_Defenition.user_Enter_The_In_Username_Text_Field(String)"
});
formatter.result({
  "duration": 1278153500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abi@12345",
      "offset": 16
    }
  ],
  "location": "Step_Defenition.user_Enter_The_In_Password_Text_Field(String)"
});
formatter.result({
  "duration": 156241300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel()"
});
formatter.result({
  "duration": 710499500,
  "status": "passed"
});
formatter.after({
  "duration": 241800,
  "status": "passed"
});
formatter.before({
  "duration": 129100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Lauch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"Ravi\" In Username Text Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"Ravi@12345\" In Password Text Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defenition.user_Lauch_The_Application()"
});
formatter.result({
  "duration": 378237500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ravi",
      "offset": 16
    }
  ],
  "location": "Step_Defenition.user_Enter_The_In_Username_Text_Field(String)"
});
formatter.result({
  "duration": 104641200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ravi@12345",
      "offset": 16
    }
  ],
  "location": "Step_Defenition.user_Enter_The_In_Password_Text_Field(String)"
});
formatter.result({
  "duration": 103542900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel()"
});
formatter.result({
  "duration": 302507200,
  "status": "passed"
});
formatter.after({
  "duration": 47100,
  "status": "passed"
});
formatter.before({
  "duration": 115400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Lauch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"SeleniumJavaTeste\" In Username Text Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"Sel@12345\" In Password Text Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defenition.user_Lauch_The_Application()"
});
formatter.result({
  "duration": 254481100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SeleniumJavaTeste",
      "offset": 16
    }
  ],
  "location": "Step_Defenition.user_Enter_The_In_Username_Text_Field(String)"
});
formatter.result({
  "duration": 160096000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sel@12345",
      "offset": 16
    }
  ],
  "location": "Step_Defenition.user_Enter_The_In_Password_Text_Field(String)"
});
formatter.result({
  "duration": 95247100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel()"
});
formatter.result({
  "duration": 851557300,
  "status": "passed"
});
formatter.after({
  "duration": 36600,
  "status": "passed"
});
formatter.before({
  "duration": 111400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Hotel Search Window",
  "description": "",
  "id": "hotel-booking-in-adactin-application;hotel-search-window",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user Select The Hotel Location",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select The CheckIn Date",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Select The Checkout Date",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Select Number Of Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Select Number of Childrens Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Click On The Search Button And It Navigates To Confirm Select Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_Hotel_Location()"
});
formatter.result({
  "duration": 1107310400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 217155300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 215082900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 250953200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_CheckIn_Date()"
});
formatter.result({
  "duration": 119499900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_Checkout_Date()"
});
formatter.result({
  "duration": 108962200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_Number_Of_Adults_Per_Room()"
});
formatter.result({
  "duration": 208373600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Select_Number_of_Childrens_Per_Room()"
});
formatter.result({
  "duration": 230981800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Click_On_The_Search_Button_And_It_Navigates_To_Confirm_Select_Hotel()"
});
formatter.result({
  "duration": 2338587800,
  "status": "passed"
});
formatter.after({
  "duration": 64100,
  "status": "passed"
});
formatter.before({
  "duration": 131400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Confirm Select Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;confirm-select-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user Select The Hotels",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user Click On The Continue Button And It Navigates To BooK A Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defenition.user_Select_The_Hotels()"
});
formatter.result({
  "duration": 96559600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Click_On_The_Continue_Button_And_It_Navigates_To_BooK_A_Hotel()"
});
formatter.result({
  "duration": 544919600,
  "status": "passed"
});
formatter.after({
  "duration": 34900,
  "status": "passed"
});
formatter.before({
  "duration": 181600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Booking A Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;booking-a-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user Enter The First Name",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "user Enter The Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Enter The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Enter The Credit Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Enter The Expiry Month And Year",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Enter The Cvv Number",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Click On The Book Now Button And It Navigates To Booking Confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defenition.user_Enter_The_First_Name()"
});
formatter.result({
  "duration": 374887800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Enter_The_Last_Name()"
});
formatter.result({
  "duration": 115650800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Enter_The_Billing_Address()"
});
formatter.result({
  "duration": 126427800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Enter_The_Credit_Card_Number()"
});
formatter.result({
  "duration": 105598800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Enter_The_Expiry_Month_And_Year()"
});
formatter.result({
  "duration": 1223128800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Enter_The_Cvv_Number()"
});
formatter.result({
  "duration": 115670700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Click_On_The_Book_Now_Button_And_It_Navigates_To_Booking_Confirmation()"
});
formatter.result({
  "duration": 1109119100,
  "status": "passed"
});
formatter.after({
  "duration": 98800,
  "status": "passed"
});
formatter.before({
  "duration": 166700,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Hotel Booking Confirmation",
  "description": "",
  "id": "hotel-booking-in-adactin-application;hotel-booking-confirmation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "user Checks All Details By Clicking On My Itineary Button It Navigates To Booked Itineary",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defenition.user_Checks_All_Details_By_Clicking_On_My_Itineary_Button_It_Navigates_To_Booked_Itineary()"
});
formatter.result({
  "duration": 485319500,
  "status": "passed"
});
formatter.after({
  "duration": 74200,
  "status": "passed"
});
formatter.before({
  "duration": 128600,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Booked Itineary",
  "description": "",
  "id": "hotel-booking-in-adactin-application;booked-itineary",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@regressionTest"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "user Select Booked Itineary With Payment",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "user Click On The Logout Button It Navigates To Successful Logout Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defenition.user_Select_Booked_Itineary_With_Payment()"
});
formatter.result({
  "duration": 1111393400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defenition.user_Click_On_The_Logout_Button_It_Navigates_To_Successful_Logout_Page()"
});
formatter.result({
  "duration": 1075381400,
  "status": "passed"
});
formatter.after({
  "duration": 35700,
  "status": "passed"
});
});