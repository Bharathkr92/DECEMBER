package pom2;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Confirm_Hotel {
	
	public WebDriver Driver;
	
   @FindBy(xpath="/html/body/table[2]/tbody/tr[1]/td[2]/a[2]")
   private WebElement item;
   @FindBy(xpath="//*[@id=\"check_all\"]")
   private WebElement checker;
   @FindBy(xpath="/html/body/table[2]/tbody/tr[1]/td[2]/a[4]")
   private WebElement logout;
   public WebElement getLogout() {
	   return logout;
   }
   public WebElement getItem() {
	return item;
}
   public WebElement getChecker() {
	return checker;
}

public Confirm_Hotel(WebDriver driver2) {
	this.Driver=driver2;
	PageFactory.initElements(driver2, this);
}
   
}
