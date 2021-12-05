package com.Step_Defenition;

import java.io.IOException;

import org.openqa.selenium.WebDriver;

import com.Helper.File_Reader_Manager2;
import com.POBJ_MAG.Page_Object_Manager2;
import com.Test_Runner.Test_Runner;

import Base_Class.Base_Class;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Defenition extends Base_Class   {
	
	public static WebDriver driver = Test_Runner.driver;
	public static Page_Object_Manager2 pom2 = new Page_Object_Manager2(driver);
	
	@Before
	public void beforeHooks(Scenario s) {
		String n = s.getName();
  System.out.println("Name : " +n);
	}
	@After
	public void afterHooks(Scenario s) throws Throwable {
		if(s.isFailed()) {
			takeScreenShot("error");
		}

	}
	
	@Given("^user Lauch The Application$")
	public void user_Lauch_The_Application() throws Throwable {
		String url = File_Reader_Manager2.getInstanceFRM2().getInstanceCR2().getURL();
		 getURL(url);
	   
	}
	
	@When("^user Enter The \"([^\"]*)\" In Username Text Field$")
	public void user_Enter_The_In_Username_Text_Field(String Username) throws Throwable {
		inputValueElement(pom2.getur().getUsername(), Username);
	}

	@When("^user Enter The \"([^\"]*)\" In Password Text Field$")
	public void user_Enter_The_In_Password_Text_Field(String Password) throws Throwable {
		inputValueElement(pom2.getur().getPassword(), Password);
	}
	

	@Then("^user Click On The Login Button And It Navigates To The Search Hotel$")
	public void user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel() throws Throwable {
		clickOnElement(pom2.getur().getSigin()); 
	}
	
	@When("^user Select The Hotel Location$")
	public void user_Select_The_Hotel_Location() throws Throwable {
		dropDown("byIndex", pom2.getsh().getLocation(), "4");
	}
	
	@When("^user Select The Hotel$")
	public void user_Select_The_Hotel() throws Throwable {
		dropDown("byIndex", pom2.getsh().getHotels(), "2");
	}

	@When("^user Select The Room Type$")
	public void user_Select_The_Room_Type() throws Throwable {
		dropDown("byIndex", pom2.getsh().getRoomtype(), "2");
	}

	@When("^user Select The Number Of Rooms$")
	public void user_Select_The_Number_Of_Rooms() throws Throwable {
		dropDown("byIndex", pom2.getsh().getNoroom(), "4");
	}

	@When("^user Select The CheckIn Date$")
	public void user_Select_The_CheckIn_Date() throws Throwable {
		String checkin = File_Reader_Manager2.getInstanceFRM2().getInstanceCR2().getCheckin();
		inputValueElement(pom2.getsh().getCheckin(), checkin); 
	}

	@When("^user Select The Checkout Date$")
	public void user_Select_The_Checkout_Date() throws Throwable {
		String checkout = File_Reader_Manager2.getInstanceFRM2().getInstanceCR2().getCheckout();
		inputValueElement(pom2.getsh().getCheckout(), checkout); 
	}

	@When("^user Select Number Of Adults Per Room$")
	public void user_Select_Number_Of_Adults_Per_Room() throws Throwable {
		dropDown("byIndex", pom2.getsh().getAdperroom(), "2");
	}

	@When("^user Select Number of Childrens Per Room$")
	public void user_Select_Number_of_Childrens_Per_Room() throws Throwable {
		dropDown("byIndex", pom2.getsh().getChperroom(), "3");
	}

	@Then("^user Click On The Search Button And It Navigates To Confirm Select Hotel$")
	public void user_Click_On_The_Search_Button_And_It_Navigates_To_Confirm_Select_Hotel() throws Throwable {
		clickOnElement(pom2.getsh().getSubmit());
		
	}
	
	@When("^user Select The Hotels$")
	public void user_Select_The_Hotels() throws Throwable {
		clickOnElement(pom2.getseh().getSelect());
	}
	@Then("^user Click On The Continue Button And It Navigates To BooK A Hotel$")
	public void user_Click_On_The_Continue_Button_And_It_Navigates_To_BooK_A_Hotel() throws Throwable {
		clickOnElement(pom2.getseh().getConfirm());
	}

	@When("^user Enter The First Name$")
	public void user_Enter_The_First_Name() throws Throwable {
		String firstname = File_Reader_Manager2.getInstanceFRM2().getInstanceCR2().getFirstname();
		inputValueElement(pom2.getbh().getFname(), firstname);
	}

	@When("^user Enter The Last Name$")
	public void user_Enter_The_Last_Name() throws Throwable {
		String lastname = File_Reader_Manager2.getInstanceFRM2().getInstanceCR2().getLastname();
		inputValueElement(pom2.getbh().getLname(), lastname);
	}

	@When("^user Enter The Billing Address$")
	public void user_Enter_The_Billing_Address() throws Throwable {
		String address = File_Reader_Manager2.getInstanceFRM2().getInstanceCR2().getAddress();
		inputValueElement(pom2.getbh().getAdd(), address);
	}

	@When("^user Enter The Credit Card Number$")
	public void user_Enter_The_Credit_Card_Number() throws Throwable {
		String cardnumber = File_Reader_Manager2.getInstanceFRM2().getInstanceCR2().getCardnumber();
		inputValueElement(pom2.getbh().getCardnum(), cardnumber);
	}

	@When("^user Enter The Expiry Month And Year$")
	public void user_Enter_The_Expiry_Month_And_Year() throws Throwable {
		dropDown("byIndex", pom2.getbh().getCardtype(), "2");
		dropDown("byIndex", pom2.getbh().getExpmonth(), "3");
		dropDown("byIndex", pom2.getbh().getExpyear(), "12");
	}

	@When("^user Enter The Cvv Number$")
	public void user_Enter_The_Cvv_Number() throws Throwable {
		String cvv = File_Reader_Manager2.getInstanceFRM2().getInstanceCR2().getCvv();
		inputValueElement(pom2.getbh().getCvv(), cvv);
	}

	@Then("^user Click On The Book Now Button And It Navigates To Booking Confirmation$")
	public void user_Click_On_The_Book_Now_Button_And_It_Navigates_To_Booking_Confirmation() throws Throwable {
		clickOnElement(pom2.getbh().getBooknow());
		sleep(1000);
	}

	@Then("^user Checks All Details By Clicking On My Itineary Button It Navigates To Booked Itineary$")
	public void user_Checks_All_Details_By_Clicking_On_My_Itineary_Button_It_Navigates_To_Booked_Itineary() throws Throwable {
		 clickOnElement(pom2.getch().getItem());
	}

	@When("^user Select Booked Itineary With Payment$")
	public void user_Select_Booked_Itineary_With_Payment() throws Throwable {
		clickOnElement(pom2.getch().getChecker());
		sleep(1000);
	}

	@Then("^user Click On The Logout Button It Navigates To Successful Logout Page$")
	public void user_Click_On_The_Logout_Button_It_Navigates_To_Successful_Logout_Page() throws Throwable {
takeScreenShot("adactin");
		
		clickOnElement(pom2.getch().getLogout());
	}



}
