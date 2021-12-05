package com.Test_Runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;


import Base_Class.Base_Class;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\test\\java\\com\\Adactin_Feature\\Adactin.feature",
		glue = "com.Step_Defenition",
	    monochrome = true,
	    
	    plugin = {
	    		"html:Report/HtmlReport.html",
	    		 "json:JsonReport/Report.json",
	    		 "pretty",
	    		 "com.cucumber.listener.ExtentCucumberFormatter:Reports/Extent.html"
	    }
		
		)

public class Test_Runner {
	public static WebDriver driver;
	@BeforeClass
	public static void set_UP() {
		driver =Base_Class.getBrowser("chrome");

	}
    @AfterClass
    public static void tear_Down() {
		driver.close();

	}

}
