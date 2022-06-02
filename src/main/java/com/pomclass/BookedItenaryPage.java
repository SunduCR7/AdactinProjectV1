package com.pomclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookedItenaryPage {

	public WebDriver driver;

	@FindBy(xpath = "//input[@name='logout']")
	private WebElement logoutButton;

	public BookedItenaryPage(WebDriver driver2) {

		this.driver = driver2;

		PageFactory.initElements(driver, this);

	}

	public WebElement getLogoutButton() {
		return logoutButton;
	}

	public WebDriver getDriver() {
		return driver;
	}

}
