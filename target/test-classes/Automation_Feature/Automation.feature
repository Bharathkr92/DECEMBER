Feature: Dress Booking In Automation Practice
Scenario: Home Page
Given user Enters To The Booking Site
When user Clicks On Sign Button It Navigates To Sign In Page
And user Enters The Username In The Username Text Field
And user Enter The Password In The Password Text Field
Then user Clicks On The Login Button It Navigates To Users Home Page

Scenario: Dress Adding To The Cart
When user Clicks On The Womens Category Button In The Home Page It Navigates To Women Dress Page
And user Select The Dress Which Liked By Them
And user Click On The Add To Cart Button After Verifying The Price Details
Then user Click On The Proceed To Checkout Pop Up It Navigates To Shopping Cart Summary 

Scenario: Shopping Cart Summary
When user Verfiy The Whole Cart Summary Details
Then user Clicks On The Proceed To Checkout Button It Navigates To Addressed 

Scenario: Addresses Verify 
When User Verify The Billing And Delivery Addresses And Update If Required
Then User Click On  Proceed To Checkout It Navigates To Shipping

Scenario: Payment 
When user Checks Final Product And Selects Payment Method
Then User Clicks On The I Confirm My Order It Navigates TO Order Confirmation

 
 