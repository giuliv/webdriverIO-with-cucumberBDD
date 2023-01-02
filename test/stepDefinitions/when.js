//import { Given, When, Then } from 'cucumber';
import loginPage from '../pageobjects/ta-login.page';
import { defineSupportCode } from 'cucumber';
import yahooPage from '../pageobjects/yahoo-search.page';
import yelpPage from '../pageobjects/yelp-searchpizza.page';


defineSupportCode(function({ When }) {
  // *** belongs to Yahoo serch feature


  When(/^I read the city "([^"]*)" on the home$/, function(message) {
    yahooPage.getHelpInfo().should.equal(message);
  });

  When(/^I enter "([^"]*)" into the search box$/, function(arg1) {
    yahooPage.enterText(arg1);
    yahooPage.searchInput.getValue().should.equal(arg1);
  });

  When(/^I click the search button$/, function() {
    yahooPage.search();
  });

  // *** belongs to ta-loging  feature
  When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/, function(arg1, arg2) {
    loginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
  });

  //YELP

  When(/^I click on the text box$/, function() {
    yelpPage.searchBarClick();
    
  });

  When(/^I Select Restaurants in the drop­down box in Find$/, function(){
    yelpPage.restaurantOptClick();
  });

  // When(/^I Select Restaurants in the drop­down box in Find$/, function(){
  //   yelpPage.restaurantOptClick();
  // });

  When(/^I append "([^"]*)" to Restaurants to make the search text as Restaurants Pizza$/, function(arg1){
    yelpPage.enterPizzaText(arg1);

  });
  
  When(/^I click on search icon$/, function() {
    yelpPage.searchiconClick();
    
  });

  When(/^I wait for the results$/, function() {
    yelpPage.waitBrowser();
  });

  When(/^I see the number of total search results$/, function() { 
    yelpPage.totalNroResult.getValue();
    //yelpPage.seeTotalRes();
    var nroT = yelpPage.totalNroResult.getValue();
    console.log(nroT)
  });

  When(/^I read the number of total search results$/, function() {
    yelpPage.seeTotalRes();
  });

  When(/^I click All filter button$/, function() {
    yelpPage.allFilterBTNClick();
  });



  When(/^I click 2 filters$/, function() {
    yelpPage.restaurantsBTNClick();
    yelpPage.deliveryCheckClick();
  });

  When(/^I should see a list of search pizza results$/, function() {
    yelpPage.isSearched().should.be.true;
  });


  When(/^I should see the first result rating$/, function() {
    yelpPage.firstResultStars();
  });

  
  When(/^I click the first result to expand it$/, function() {
    yelpPage.firstResultClick();
  });

   When(/^I click on search icon again$/, function() {
    yelpPage.searchiconClick();
    
  });


     When(/^I see the number of total search results again$/, function() {
      yelpPage.totalNroResult.getValue();
    
  });
   
   When(/^I read the number of total search results again$/, function() {
    yelpPage.seeTotalRes();
  });


  When(/^I click and expand the first result from the search results$/, function() {
    yelpPage.firstResultClick();
    
  });

  When(/^I move to title$/, function() {
    yelpPage.movetoTitle();
    
  });

  When(/^I read the website info$/, function(){
  yelpPage.showWebsiteInfo();
  });

  When(/^I read the telephone number$/, function(){
    yelpPage.showTelephoneInfo();
    });

    //scrolling down
    When(/^I move to location sub$/, function() {
      yelpPage.movetoLocationSub();
      
    });

    
    When(/^I move to consider Sub$/, function() {
      yelpPage.movetoConsiderSub();
      
    });

    When(/^I move to amenities Sub$/, function() {
      yelpPage.movetoAmenitiesSub();
      
    });

    // When(/^I move to ask Sub$/, function() {
    //   yelpPage.movetoAskSub();
      
    // });
    
     When(/^I go to about Sub$/, function() {
      yelpPage.movetoAboutSub();
      
    });

//leer comentarios
    


    When(/^I read the address link$/, function(){
      yelpPage.getAddresslink();
    });

    When(/^I read the first review$/, function(){
      yelpPage.show1review();
    });

    When(/^I read the second review$/, function(){
      yelpPage.show2review();
    });

    When(/^I read the third review$/, function(){
      yelpPage.show3review();
    });
    
  
  


  When(/^I see the phone info$/, function() { 
    yelpPage.phonelInfo.getValue();
    //var nroT = yelpPage.totalNroResult.getValue();
    //console.log(nroT)
  });

  When(/^I read the phone info$/, function() {
    yelpPage.seePhoneInfo();
  });


  When(/^I see the web info$/, function() { 
    yelpPage.webInfo.getValue();
    //var nroT = yelpPage.totalNroResult.getValue();
    //console.log(nroT)
  });

  When(/^I read the web info$/, function() {
    yelpPage.seewebInfo();
  });


    When(/^I see the web info$/, function() { 
    yelpPage.webInfo.getValue();
    //var nroT = yelpPage.totalNroResult.getValue();
    //console.log(nroT)
  });

  When(/^I read the web info$/, function() {
    yelpPage.seewebInfo();
  });


   When(/^I see the first review$/, function() { 
    yelpPage.firstReviewInfo.getValue();
    //var nroT = yelpPage.totalNroResult.getValue();
    //console.log(nroT)
  });

  // When(/^I read the first review$/, function() {
  //   yelpPage.seefirstReviewInfo();
  // });



     When(/^I see the second review$/, function() { 
    yelpPage.secondReviewInfo.getValue();
    //var nroT = yelpPage.totalNroResult.getValue();
    //console.log(nroT)
  });

  // When(/^I read the second review$/, function() {
  //   yelpPage.seesecondReviewInfo();
  // });




     When(/^I see the third review$/, function() { 
    yelpPage.thirdReviewInfo.getValue();
    //var nroT = yelpPage.totalNroResult.getValue();
    //console.log(nroT)
  });

  // When(/^I read the third review$/, function() {
  //   yelpPage.seethirdReviewInfo();
  // });



});
