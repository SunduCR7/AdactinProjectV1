package com.hooks;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	
	
	@Before
	
	public static void beforeHook() {
		
		System.out.println("Before Hook");
		
	}
	
	
	@Before ("@First")
	
	public void beforeFirst() {
		
		System.out.println("Beginning first scenario");
		
		
	}
	
	
	@Before("@Second")
	
	
	public void beforeSecond() {
		
		
		System.out.println("Beginning second scenario");
		
		
	}
	
	
	@Before ("@Third")
	
	public void beforeThird() {
		
		
		System.out.println("Beginning third scenario");
		
	}
	
	
	@Before ("@Fourth")
	
	public void beforeFourth() {
		
		
		System.out.println("Beginning fourth scenario");
	}
	
	
	@After  
	
	public static void afterHook() {
		
		System.out.println("After Hook");
		
		
	}
	
	
	@After ("@First")
	
    public void afterFirst() {
		
		
		System.out.println("End of first scenario");
		
		
	}
	
	
	@After ("@Second")
	
    public void afterSecond() {
		
		
		System.out.println("End of second scenario");
		
		
	}
	
	@After ("@Third")
	
    public void afterThird() {
		
		
		System.out.println("End of third scenario");
		
		
	}
	
	
	@After ("@Fourth")
	
    public void afterFourth() {
		
		
		System.out.println("End of fourth scenario");
		
		
	}
}
