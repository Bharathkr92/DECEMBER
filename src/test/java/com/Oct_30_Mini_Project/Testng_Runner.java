package com.Oct_30_Mini_Project;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.Test;

import com.Helper.File_Reader_Manager;
import com.Helper.File_Reader_Manager2;
import com.POBJ_MAG.Page_Object_Manager1;
import com.POBJ_MAG.Page_Object_Manager2;

import Base_Class.Base_Class;

public class Testng_Runner extends Base_Class {
	public static WebDriver driver = Base_Class.getBrowser("chrome");
	public static Page_Object_Manager1 pom = new Page_Object_Manager1(driver);
	
	@Test(priority = -2)
	private void browser_launch() throws Throwable {
		String url = File_Reader_Manager.getInstanceFRM().getInstanceCR().getURL();
		getURL(url);

	}

	@Test(priority = -1)
	private void logtn() throws Throwable {
		clickOnElement(pom.getInstanceHp().getSigin());
		String dataFromExcel = DataFromExcel("C:\\Users\\krbch\\eclipse-workspace\\Oct_30_Mini_Project\\EXCEL\\Adactin.xlsx",6,0);
		inputValueElement(pom.getInstancelg().getEmail(), dataFromExcel);
		String dataFromExcel2 = DataFromExcel("C:\\Users\\krbch\\eclipse-workspace\\Oct_30_Mini_Project\\EXCEL\\Adactin.xlsx",7,0);
		inputValueElement(pom.getInstancelg().getPwd(), dataFromExcel2 );
		clickOnElement(pom.getInstancelg().getSigin());
	}
	@Test(priority = 0)
	private void gohome_page() {
		clickOnElement(pom.getbk().getBack());

	}

	@Test(priority = 1)
	private void dress_select() throws Throwable {
		clickOnElement(pom.getst().getWomen());

		clickOnElement(pom.getse().getSelect());
		clickOnElement(pom.getse().getSelect1());
		clickOnElement(pom.getps().getCart());
		sleep(2000);

	}
//	Same Priority Invocation with Priority value 2
	@Test(priority = 2)
	private void cartut() throws Throwable {
		clickOnElement(pom.getps().getCout());

		sleep(1000);

		clickOnElement(pom.getod().getCartout());

		clickOnElement(pom.getod().getAdd());

		clickOnElement(pom.getsp().getCheckbox());

		clickOnElement(pom.getsp().getFout());

	}
//	Same Priority Invocation with Priority value 2
	@Test
	private void pay() throws Throwable {
		clickOnElement(pom.getpay().getPay());
		takeScreenShot("cartfinal");

		clickOnElement(pom.getpay().getOutdel());


	}
	
}
