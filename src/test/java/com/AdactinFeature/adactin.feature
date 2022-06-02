@AdactinHotelBooking


Feature: Booking a hotel using Adactin Application
Background: Print Feature Being Tested
Given Url Of Adactin Web Application


@First
Scenario Outline: Login Functionality
Given user Must Launch The Url
When user Needs To Enter "<username>" In Username Field
And user Needs to Enter "<password>" In Password Field
Then user Clicks Login to Login To The Hotel Booking Page

Examples:
|username|password|
|karigalan_kaala@gmail.com|vengaiVeeran1989!!|
|ThirumbaVaraen_STR@hotmail.com|$mottaMadhan%002|
|paththuThala_FC@yahoo.com|%Viral Mannan122|
|SunduCR7|SunduCR7!|

@Second
Scenario: Search Hotel As Per User Requirement
Given user Selects A Location
When user Selects A Hotel
And user Selects A Room Type
And user Selects Number Of Required Rooms
And user Selects Check-In Date
And user Selects Check-Out Date
And user Selects Number Of Adult Per Rooom
And user Selects Number Of Children Per Room
Then user Clicks Search Button


@Third
Scenario: Select A Hotel In Hotel Selection Page
Given user Selects A Given Hotel Using Radio Button
Then user Clicks Continue Button

@Fourth
Scenario: User Enters Personal Details In Book A Hotel Page And Makes Payment
Given user Enters First Name In First Name Field
When user Enters Last Name In Last Name Field
And user Enters Billing Address In Billing Field
And user Enters 16 Digit Credit Card Number In Credit Card Field
And user Selects Type Of Credit Card
And user Selects Expiry Month Of Credit Card
And user Selects Expiry Year Of Credit Card
And user Enters CVV Number Of Credit Card
Then user Clicks BookNow Button

@Fifth
Scenario: Booking Confirmation Page
Given user Checks Details For Booking Confirmation
Then user Clicks MyItenary Button

@Sixth
Scenario: Check Booking Details And Order ID Take Screenshot And logout
Given user Checks Order Id And Booking Details Take Screenshot
Then Logout And Close Browser
|Bye bye|End of session|Testing of Data Table|
