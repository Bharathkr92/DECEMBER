package com.Testng;

import org.testng.annotations.Test;

import net.bytebuddy.build.ToStringPlugin.Exclude;


public class Simple_Annotation {

@Test
private void women() {
	System.out.println("Women Dress Booking");

}
@Test
private void childrens() {
	System.out.println("Children Dress Booking");

}

@Test
private void t_shirts() {
	System.out.println("T_Shirt Dress Booking");

}

@Test
private void mens_wear() {
	System.out.println("Mens Dress Booking");

}

}
