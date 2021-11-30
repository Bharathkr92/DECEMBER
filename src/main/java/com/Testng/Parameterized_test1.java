package com.Testng;



import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class Parameterized_test1 {

	@Test
	@Parameters({"username1","password1"})
	private void credentials(@Optional("RAVANA")String username1, String password1) {
		System.out.println("Username :" +username1);
		System.out.println("Password"  +password1);

	}
	
	

}
