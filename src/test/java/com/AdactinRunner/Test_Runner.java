package com.AdactinRunner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.MavenProject.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\test\\java\\com\\AdactinFeature", 
		glue = {"com\\stepdefinition","com.hooks"}, 
		monochrome = true, 
		dryRun = false, 
		strict = false, 
        plugin = {
		"html:Report",  "json:Report/Adactin_Cucumber.json",
		"com.cucumber.listener.ExtentCucumberFormatter:Report/AdactinExtentReport.html" },
        tags= {"@AdactinHotelBooking"}
)






public class Test_Runner {

	public static WebDriver driver;

	@BeforeClass

	public static void set_Up() {

		driver = BaseClass.browserLaunch("chrome");

	}

	@AfterClass

	public static void tear_Down() {

		BaseClass.close();

	}

}
