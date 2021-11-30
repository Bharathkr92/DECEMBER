package com.Testng;



import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class Parameterized_test2 {
	@Test
	
	@Parameters({"username1","password1"})
	private void credentials(String username1, String password1) {
		System.out.println("Username :" +username1);
		System.out.println("Password"  +password1);
		

	}

}
