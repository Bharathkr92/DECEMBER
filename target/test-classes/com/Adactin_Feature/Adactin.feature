Feature: Hotel Booking In Adactin Application
@smokeTest
Scenario Outline: Login Page
Given user Lauch The Application
When user Enter The "<Username>" In Username Text Field
And user Enter The "<Password>" In Password Text Field
Then user Click On The Login Button And It Navigates To The Search Hotel

Examples:
|Username|Password|
|Abi|Abi@12345|
|Ravi|Ravi@12345|
|SeleniumJavaTeste|Sel@12345|

@sanityTest
Scenario: Hotel Search Window
When user Select The Hotel Location
And user Select The Hotel
And user Select The Room Type
And user Select The Number Of Rooms
And user Select The CheckIn Date
And user Select The Checkout Date
And user Select Number Of Adults Per Room
And user Select Number of Childrens Per Room
Then user Click On The Search Button And It Navigates To Confirm Select Hotel 
@sanityTest
Scenario: Confirm Select Hotel
When user Select The Hotels
Then user Click On The Continue Button And It Navigates To BooK A Hotel

@sanityTest
Scenario: Booking A Hotel
When user Enter The First Name
And user Enter The Last Name
And user Enter The Billing Address
And user Enter The Credit Card Number
And user Enter The Expiry Month And Year
And user Enter The Cvv Number
Then user Click On The Book Now Button And It Navigates To Booking Confirmation
@sanityTest
Scenario: Hotel Booking Confirmation
Then user Checks All Details By Clicking On My Itineary Button It Navigates To Booked Itineary 
@regressionTest
Scenario: Booked Itineary
When user Select Booked Itineary With Payment
Then user Click On The Logout Button It Navigates To Successful Logout Page
