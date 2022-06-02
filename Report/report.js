$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adactin.feature");
formatter.feature({
  "line": 4,
  "name": "Booking a hotel using Adactin Application",
  "description": "",
  "id": "booking-a-hotel-using-adactin-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AdactinHotelBooking"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Login Functionality",
  "description": "",
  "id": "booking-a-hotel-using-adactin-application;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user Needs To Enter \"\u003cusername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user Needs to Enter \"\u003cpassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Clicks Login to Login To The Hotel Booking Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "booking-a-hotel-using-adactin-application;login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "booking-a-hotel-using-adactin-application;login-functionality;;1"
    },
    {
      "cells": [
        "karigalan_kaala@gmail.com",
        "vengaiVeeran1989!!"
      ],
      "line": 18,
      "id": "booking-a-hotel-using-adactin-application;login-functionality;;2"
    },
    {
      "cells": [
        "ThirumbaVaraen_STR@hotmail.com",
        "$mottaMadhan%002"
      ],
      "line": 19,
      "id": "booking-a-hotel-using-adactin-application;login-functionality;;3"
    },
    {
      "cells": [
        "paththuThala_FC@yahoo.com",
        "%Viral Mannan122"
      ],
      "line": 20,
      "id": "booking-a-hotel-using-adactin-application;login-functionality;;4"
    },
    {
      "cells": [
        "SunduCR7",
        "SunduCR7!"
      ],
      "line": 21,
      "id": "booking-a-hotel-using-adactin-application;login-functionality;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 258600,
  "status": "passed"
});
formatter.before({
  "duration": 16700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Print Feature Being Tested",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Url Of Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.url_Of_Adactin_Web_Application()"
});
formatter.result({
  "duration": 45034900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login Functionality",
  "description": "",
  "id": "booking-a-hotel-using-adactin-application;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@First"
    },
    {
      "line": 1,
      "name": "@AdactinHotelBooking"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user Needs To Enter \"karigalan_kaala@gmail.com\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user Needs to Enter \"vengaiVeeran1989!!\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Clicks Login to Login To The Hotel Booking Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Must_Launch_The_Url()"
});
formatter.result({
  "duration": 1467858300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karigalan_kaala@gmail.com",
      "offset": 21
    }
  ],
  "location": "StepDefinition.user_Needs_To_Enter_In_Username_Field(String)"
});
formatter.result({
  "duration": 63571800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vengaiVeeran1989!!",
      "offset": 21
    }
  ],
  "location": "StepDefinition.user_Needs_to_Enter_In_Password_Field(String)"
});
formatter.result({
  "duration": 43878400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_Login_to_Login_To_The_Hotel_Booking_Page()"
});
formatter.result({
  "duration": 210401300,
  "status": "passed"
});
formatter.after({
  "duration": 28400,
  "status": "passed"
});
formatter.after({
  "duration": 15100,
  "status": "passed"
});
formatter.before({
  "duration": 20600,
  "status": "passed"
});
formatter.before({
  "duration": 12200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Print Feature Being Tested",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Url Of Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.url_Of_Adactin_Web_Application()"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login Functionality",
  "description": "",
  "id": "booking-a-hotel-using-adactin-application;login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@First"
    },
    {
      "line": 1,
      "name": "@AdactinHotelBooking"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user Needs To Enter \"ThirumbaVaraen_STR@hotmail.com\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user Needs to Enter \"$mottaMadhan%002\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Clicks Login to Login To The Hotel Booking Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Must_Launch_The_Url()"
});
formatter.result({
  "duration": 150007400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ThirumbaVaraen_STR@hotmail.com",
      "offset": 21
    }
  ],
  "location": "StepDefinition.user_Needs_To_Enter_In_Username_Field(String)"
});
formatter.result({
  "duration": 50194500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$mottaMadhan%002",
      "offset": 21
    }
  ],
  "location": "StepDefinition.user_Needs_to_Enter_In_Password_Field(String)"
});
formatter.result({
  "duration": 42330400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_Login_to_Login_To_The_Hotel_Booking_Page()"
});
formatter.result({
  "duration": 191706900,
  "status": "passed"
});
formatter.after({
  "duration": 22900,
  "status": "passed"
});
formatter.after({
  "duration": 11100,
  "status": "passed"
});
formatter.before({
  "duration": 18900,
  "status": "passed"
});
formatter.before({
  "duration": 11900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Print Feature Being Tested",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Url Of Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.url_Of_Adactin_Web_Application()"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login Functionality",
  "description": "",
  "id": "booking-a-hotel-using-adactin-application;login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@First"
    },
    {
      "line": 1,
      "name": "@AdactinHotelBooking"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user Needs To Enter \"paththuThala_FC@yahoo.com\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user Needs to Enter \"%Viral Mannan122\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Clicks Login to Login To The Hotel Booking Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Must_Launch_The_Url()"
});
formatter.result({
  "duration": 155828300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "paththuThala_FC@yahoo.com",
      "offset": 21
    }
  ],
  "location": "StepDefinition.user_Needs_To_Enter_In_Username_Field(String)"
});
formatter.result({
  "duration": 45278200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "%Viral Mannan122",
      "offset": 21
    }
  ],
  "location": "StepDefinition.user_Needs_to_Enter_In_Password_Field(String)"
});
formatter.result({
  "duration": 43970900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_Login_to_Login_To_The_Hotel_Booking_Page()"
});
formatter.result({
  "duration": 191506900,
  "status": "passed"
});
formatter.after({
  "duration": 24200,
  "status": "passed"
});
formatter.after({
  "duration": 12500,
  "status": "passed"
});
formatter.before({
  "duration": 17300,
  "status": "passed"
});
formatter.before({
  "duration": 11700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Print Feature Being Tested",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Url Of Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.url_Of_Adactin_Web_Application()"
});
formatter.result({
  "duration": 20900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login Functionality",
  "description": "",
  "id": "booking-a-hotel-using-adactin-application;login-functionality;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@First"
    },
    {
      "line": 1,
      "name": "@AdactinHotelBooking"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user Must Launch The Url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user Needs To Enter \"SunduCR7\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user Needs to Enter \"SunduCR7!\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Clicks Login to Login To The Hotel Booking Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Must_Launch_The_Url()"
});
formatter.result({
  "duration": 153006300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SunduCR7",
      "offset": 21
    }
  ],
  "location": "StepDefinition.user_Needs_To_Enter_In_Username_Field(String)"
});
formatter.result({
  "duration": 41352600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SunduCR7!",
      "offset": 21
    }
  ],
  "location": "StepDefinition.user_Needs_to_Enter_In_Password_Field(String)"
});
formatter.result({
  "duration": 45653800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_Login_to_Login_To_The_Hotel_Booking_Page()"
});
formatter.result({
  "duration": 1386923200,
  "status": "passed"
});
formatter.after({
  "duration": 26100,
  "status": "passed"
});
formatter.after({
  "duration": 14100,
  "status": "passed"
});
formatter.before({
  "duration": 35400,
  "status": "passed"
});
formatter.before({
  "duration": 11800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Print Feature Being Tested",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Url Of Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.url_Of_Adactin_Web_Application()"
});
formatter.result({
  "duration": 23700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search Hotel As Per User Requirement",
  "description": "",
  "id": "booking-a-hotel-using-adactin-application;search-hotel-as-per-user-requirement",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user Selects A Location",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user Selects A Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user Selects A Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Selects Number Of Required Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Selects Check-In Date",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Selects Check-Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Selects Number Of Adult Per Rooom",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Selects Number Of Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Clicks Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Selects_A_Location()"
});
formatter.result({
  "duration": 101446200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Selects_A_Hotel()"
});
formatter.result({
  "duration": 94947900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Selects_A_Room_Type()"
});
formatter.result({
  "duration": 91737300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Selects_Number_Of_Required_Rooms()"
});
formatter.result({
  "duration": 184348800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Selects_Check_In_Date()"
});
formatter.result({
  "duration": 78201900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Selects_Check_Out_Date()"
});
formatter.result({
  "duration": 74875400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Selects_Number_Of_Adult_Per_Rooom()"
});
formatter.result({
  "duration": 103856500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Selects_Number_Of_Children_Per_Room()"
});
formatter.result({
  "duration": 91228000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_Search_Button()"
});
formatter.result({
  "duration": 331522300,
  "status": "passed"
});
formatter.after({
  "duration": 23100,
  "status": "passed"
});
formatter.after({
  "duration": 19500,
  "status": "passed"
});
formatter.before({
  "duration": 17900,
  "status": "passed"
});
formatter.before({
  "duration": 16900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Print Feature Being Tested",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Url Of Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.url_Of_Adactin_Web_Application()"
});
formatter.result({
  "duration": 21100,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Select A Hotel In Hotel Selection Page",
  "description": "",
  "id": "booking-a-hotel-using-adactin-application;select-a-hotel-in-hotel-selection-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@Third"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "user Selects A Given Hotel Using Radio Button",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user Clicks Continue Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Selects_A_Given_Hotel_Using_Radio_Button()"
});
formatter.result({
  "duration": 39127300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_Continue_Button()"
});
formatter.result({
  "duration": 371201300,
  "status": "passed"
});
formatter.after({
  "duration": 27900,
  "status": "passed"
});
formatter.after({
  "duration": 36500,
  "status": "passed"
});
formatter.before({
  "duration": 18700,
  "status": "passed"
});
formatter.before({
  "duration": 17800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Print Feature Being Tested",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Url Of Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.url_Of_Adactin_Web_Application()"
});
formatter.result({
  "duration": 22500,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "User Enters Personal Details In Book A Hotel Page And Makes Payment",
  "description": "",
  "id": "booking-a-hotel-using-adactin-application;user-enters-personal-details-in-book-a-hotel-page-and-makes-payment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@Fourth"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "user Enters First Name In First Name Field",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "user Enters Last Name In Last Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user Enters Billing Address In Billing Field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user Enters 16 Digit Credit Card Number In Credit Card Field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user Selects Type Of Credit Card",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user Selects Expiry Month Of Credit Card",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user Selects Expiry Year Of Credit Card",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user Enters CVV Number Of Credit Card",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user Clicks BookNow Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Enters_First_Name_In_First_Name_Field()"
});
formatter.result({
  "duration": 56001300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enters_Last_Name_In_Last_Name_Field()"
});
formatter.result({
  "duration": 43118600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enters_Billing_Address_In_Billing_Field()"
});
formatter.result({
  "duration": 61830900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 12
    }
  ],
  "location": "StepDefinition.user_Enters_Digit_Credit_Card_Number_In_Credit_Card_Field(int)"
});
formatter.result({
  "duration": 52391600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Selects_Type_Of_Credit_Card()"
});
formatter.result({
  "duration": 128885500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Selects_Expiry_Month_Of_Credit_Card()"
});
formatter.result({
  "duration": 92653900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Selects_Expiry_Year_Of_Credit_Card()"
});
formatter.result({
  "duration": 94148400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enters_CVV_Number_Of_Credit_Card()"
});
formatter.result({
  "duration": 41052700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_BookNow_Button()"
});
formatter.result({
  "duration": 59393600,
  "status": "passed"
});
formatter.after({
  "duration": 28200,
  "status": "passed"
});
formatter.after({
  "duration": 29200,
  "status": "passed"
});
formatter.before({
  "duration": 23700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Print Feature Being Tested",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Url Of Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.url_Of_Adactin_Web_Application()"
});
formatter.result({
  "duration": 23600,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Booking Confirmation Page",
  "description": "",
  "id": "booking-a-hotel-using-adactin-application;booking-confirmation-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@Fifth"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "user Checks Details For Booking Confirmation",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "user Clicks MyItenary Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Checks_Details_For_Booking_Confirmation()"
});
formatter.result({
  "duration": 11812900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicks_MyItenary_Button()"
});
formatter.result({
  "duration": 6240736700,
  "status": "passed"
});
formatter.after({
  "duration": 29100,
  "status": "passed"
});
formatter.before({
  "duration": 20800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Print Feature Being Tested",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Url Of Adactin Web Application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.url_Of_Adactin_Web_Application()"
});
formatter.result({
  "duration": 28400,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Check Booking Details And Order ID Take Screenshot And logout",
  "description": "",
  "id": "booking-a-hotel-using-adactin-application;check-booking-details-and-order-id-take-screenshot-and-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@Sixth"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "user Checks Order Id And Booking Details Take Screenshot",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "Logout And Close Browser",
  "rows": [
    {
      "cells": [
        "Bye bye",
        "End of session",
        "Testing of Data Table"
      ],
      "line": 62
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Checks_Order_Id_And_Booking_Details_Take_Screenshot()"
});
formatter.result({
  "duration": 102541200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.logout_And_Close_Browser(DataTable)"
});
formatter.result({
  "duration": 1375916400,
  "status": "passed"
});
formatter.after({
  "duration": 22900,
  "status": "passed"
});
});