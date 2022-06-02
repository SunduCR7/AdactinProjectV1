package com.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.AdactinRunner.Test_Runner;
import com.MavenProject.BaseClass;
import com.properties.FileReaderManager;
import com.sdp.PageObjectManager;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends BaseClass {

	public static WebDriver driver = Test_Runner.driver;
	public static PageObjectManager pom = new PageObjectManager(driver);

	
	@Given("^Url Of Adactin Web Application$")
	public void url_Of_Adactin_Web_Application() throws Throwable {

	
	System.out.println("User provided with Adactin URL. Test Scenario begins here");
	
	
	}

	
	
	@Given("^user Must Launch The Url$")
	public void user_Must_Launch_The_Url() throws Throwable {

		String url = FileReaderManager.getInstanceFRM().getInstanceCR().getURL();

		System.out.println(url);

		openURL(url);

	}

	@When("^user Needs To Enter \"([^\"]*)\" In Username Field$")
	public void user_Needs_To_Enter_In_Username_Field(String username) throws Throwable {

		sendKeys(pom.getInstanceLp().getUsernameCSS(), username);

	}

	@When("^user Needs to Enter \"([^\"]*)\" In Password Field$")
	public void user_Needs_to_Enter_In_Password_Field(String password) throws Throwable {

		sendKeys(pom.getInstanceLp().getPassword(), password);
		
		
		

	}

	@Then("^user Clicks Login to Login To The Hotel Booking Page$")
	public void user_Clicks_Login_to_Login_To_The_Hotel_Booking_Page() throws Throwable {

		clickSingle(pom.getInstanceLp().getLoginButton());

	}

	@Given("^user Selects A Location$")
	public void user_Selects_A_Location() throws Throwable {

		WebElement selectlocation = pom.getInstanceBd().getSelectlocation();

		String location = FileReaderManager.getInstanceFRM().getInstanceCR().getLocation();

		selectByValue(selectlocation, location);

	}

	@Then("^user Selects A Hotel$")
	public void user_Selects_A_Hotel() throws Throwable {

		WebElement selectHotel = pom.getInstanceBd().getSelectHotel();

		String hotelName = FileReaderManager.getInstanceFRM().getInstanceCR().getHotelName();

		selectByVisibleText(selectHotel, hotelName);

	}

	@Then("^user Selects A Room Type$")
	public void user_Selects_A_Room_Type() throws Throwable {

		WebElement selectRoomType = pom.getInstanceBd().getSelectRoomType();

		String roomType = FileReaderManager.getInstanceFRM().getInstanceCR().getRoomType();

		selectByVisibleText(selectRoomType, roomType);

	}

	@Then("^user Selects Number Of Required Rooms$")
	public void user_Selects_Number_Of_Required_Rooms() throws Throwable {

		WebElement selectNumberOfRooms = pom.getInstanceBd().getSelectNumberOfRooms();

		selectByIndex(selectNumberOfRooms, 4);

	}

	@Then("^user Selects Check-In Date$")
	public void user_Selects_Check_In_Date() throws Throwable {

		WebElement selectCheckIn = pom.getInstanceBd().getSelectCheckIn();

		String checkInDate = FileReaderManager.getInstanceFRM().getInstanceCR().getCheckInDate();

		clearText(selectCheckIn);
		sendKeys(selectCheckIn, checkInDate);

	}

	@Then("^user Selects Check-Out Date$")
	public void user_Selects_Check_Out_Date() throws Throwable {

		WebElement selectCheckOut = pom.getInstanceBd().getSelectCheckOut();

		String checkOutDate = FileReaderManager.getInstanceFRM().getInstanceCR().getCheckOutDate();

		clearText(selectCheckOut);
		sendKeys(selectCheckOut, checkOutDate);

	}

	@Then("^user Selects Number Of Adult Per Rooom$")
	public void user_Selects_Number_Of_Adult_Per_Rooom() throws Throwable {

		WebElement selectAdultsRoom = pom.getInstanceBd().getSelectAdultsRoom();
		String adultRooms = FileReaderManager.getInstanceFRM().getInstanceCR().getAdultRooms();

		selectByValue(selectAdultsRoom, adultRooms);

	}

	@Then("^user Selects Number Of Children Per Room$")
	public void user_Selects_Number_Of_Children_Per_Room() throws Throwable {

		WebElement selectChildRoom = pom.getInstanceBd().getSelectChildRoom();
		String childRooms = FileReaderManager.getInstanceFRM().getInstanceCR().getChildRooms();

		selectByValue(selectChildRoom, childRooms);
	}

	@Then("^user Clicks Search Button$")
	public void user_Clicks_Search_Button() throws Throwable {

		WebElement searchButton = pom.getInstanceBd().getSearchButton();
		clickSingle(searchButton);

	}

	@Given("^user Selects A Given Hotel Using Radio Button$")
	public void user_Selects_A_Given_Hotel_Using_Radio_Button() throws Throwable {

		WebElement selectRadioButton = pom.getInstanceHs().getSelectRadioButton();
		clickSingle(selectRadioButton);

	}

	@Then("^user Clicks Continue Button$")
	public void user_Clicks_Continue_Button() throws Throwable {

		WebElement continueButton = pom.getInstanceHs().getContinueButton();
		clickSingle(continueButton);

	}

	@Given("^user Enters First Name In First Name Field$")
	public void user_Enters_First_Name_In_First_Name_Field() throws Throwable {

		WebElement textFirstName = pom.getInstanceBhp().getTextFirstName();
		String firstName = FileReaderManager.getInstanceFRM().getInstanceCR().getFirstName();

		sendKeys(textFirstName, firstName);

	}

	@Given("^user Enters Last Name In Last Name Field$")
	public void user_Enters_Last_Name_In_Last_Name_Field() throws Throwable {

		WebElement textLastName = pom.getInstanceBhp().getTextLastName();
		String lastName = FileReaderManager.getInstanceFRM().getInstanceCR().getLastName();

		sendKeys(textLastName, lastName);

	}

	@Given("^user Enters Billing Address In Billing Field$")
	public void user_Enters_Billing_Address_In_Billing_Field() throws Throwable {

		WebElement textBillingAddress = pom.getInstanceBhp().getTextBillingAddress();
		String addess = FileReaderManager.getInstanceFRM().getInstanceCR().getAddess();

		sendKeys(textBillingAddress, addess);

	}

	@Given("^user Enters (\\d+) Digit Credit Card Number In Credit Card Field$")
	public void user_Enters_Digit_Credit_Card_Number_In_Credit_Card_Field(int arg1) throws Throwable {

		WebElement creditCardNumber = pom.getInstanceBhp().getCreditCardNumber();
		String creditCard = FileReaderManager.getInstanceFRM().getInstanceCR().getCreditCard();

		sendKeys(creditCardNumber, creditCard);

	}

	@Given("^user Selects Type Of Credit Card$")
	public void user_Selects_Type_Of_Credit_Card() throws Throwable {

		WebElement creditCardType = pom.getInstanceBhp().getCreditCardType();
		selectByIndex(creditCardType, 1);

	}

	@Given("^user Selects Expiry Month Of Credit Card$")
	public void user_Selects_Expiry_Month_Of_Credit_Card() throws Throwable {

		WebElement creditCardExpiry = pom.getInstanceBhp().getCreditCardExpiry();
		String expiryMonth = FileReaderManager.getInstanceFRM().getInstanceCR().getExpiryMonth();

		selectByValue(creditCardExpiry, expiryMonth);

	}

	@Given("^user Selects Expiry Year Of Credit Card$")
	public void user_Selects_Expiry_Year_Of_Credit_Card() throws Throwable {

		WebElement creditCardYear = pom.getInstanceBhp().getCreditCardYear();
		String expiryYear = FileReaderManager.getInstanceFRM().getInstanceCR().getExpiryYear();

		selectByValue(creditCardYear, expiryYear);

	}

	@Given("^user Enters CVV Number Of Credit Card$")
	public void user_Enters_CVV_Number_Of_Credit_Card() throws Throwable {
		
		WebElement creditCardCVV = pom.getInstanceBhp().getCreditCardCVV();
		String creditCVV = FileReaderManager.getInstanceFRM().getInstanceCR().getCreditCVV();
		
		sendKeys(creditCardCVV, creditCVV);
		
		
	}

	@Then("^user Clicks BookNow Button$")
	public void user_Clicks_BookNow_Button() throws Throwable {
		
		WebElement bookNowbutton = pom.getInstanceBhp().getBookNowbutton();
		
		waitImplicitly();
		
		clickSingle(bookNowbutton);
		
	}

	@Given("^user Checks Details For Booking Confirmation$")
	public void user_Checks_Details_For_Booking_Confirmation() throws Throwable {
		
		waitImplicitly();
		
		System.out.println("User Checks for Booking details now and proceeds to click My itenary button");
		
		
	}

	@Then("^user Clicks MyItenary Button$")
	public void user_Clicks_MyItenary_Button() throws Throwable {
		
		WebElement myItenaryButton = pom.getInstanceMp().getMyItenaryButton();
		
		waitImplicitly();

		clickSingle(myItenaryButton);
		
		
	}

	@Given("^user Checks Order Id And Booking Details Take Screenshot$")
	public void user_Checks_Order_Id_And_Booking_Details_Take_Screenshot() throws Throwable {
		
		
		System.out.println("Check order details and take Screenshot");
		
		String filePath = FileReaderManager.getInstanceFRM().getInstanceCR().getFilePath();
		
		screenshot(filePath);
		
		
	}

	@Then("^Logout And Close Browser$")
	public void logout_And_Close_Browser(DataTable data) throws Throwable {
		
		
		
		System.out.println(data.getGherkinRows().indexOf("Bye bye"));
		WebElement logoutButton = pom.getInstanceBis().getLogoutButton();
		
		clickSingle(logoutButton);
		
		
	}

}
