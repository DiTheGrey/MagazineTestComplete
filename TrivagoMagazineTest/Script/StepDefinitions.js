Given("Trivago magazine website is online", function (){
  Browsers.Item(btChrome).Navigate("https://room5.trivago.com/", 3000);
  aqObject.CheckProperty(Aliases.browser.pageTrivagoMagazine.header.panel4.link4, "contentText", cmpEqual, "");
});

Given("Contact form is open", function (){
  let browser = Aliases.browser;
  browser.pageTrivagoMagazine.link.Click();
  let page = browser.pageTrivagoMagazine2;
  page.Wait();
  aqObject.CheckProperty(Aliases.browser.pageTrivagoMagazine2.textnode2, "contentText", cmpEqual, "Please give us your feedback and tell us what you want to read about!");
});

When("I enter details in contact form and submit it", function (){
  let browser = Aliases.browser;
  let page = browser.pageTrivagoMagazine2;
  let textarea = page.textarea;
  textarea.Click(201, 80);
  textarea.Keys("Test[Tab]");
  let textbox = page.textbox;
  textbox.SetText("Test");
  textbox.Keys("[Tab]");
  page.textboxContactEmail.SetText("test@test.com");
  page.panel2.Click(30, 16);
  page.checkboxBySubmittingAMessageOnOu.ClickChecked(true);
  page.buttonSubmit.ClickButton();
});

Then("I should see that form is successfully submitted", function (){
  aqObject.CheckProperty(Aliases.browser.pageTrivagoMagazine2.textnode, "contentText", cmpEqual, "Message Sent Successfully!");
});

Given("search form is open", function (){
  let panel = Aliases.browser.pageTrivagoMagazine.header.panel4;
  panel.panel22.Click(13, 10);
  aqObject.CheckProperty(Aliases.browser.pageTrivagoMagazine.header.panel4.textbox, "Text", cmpEqual, "");
});

When("I input {arg} into search form and submit it", function (param1){
  let panel = Aliases.browser.pageTrivagoMagazine.header.panel4;
  let textbox = panel.textbox;
  textbox.SetText(param1);
  textbox.Keys("[Enter]");
});

Then("I should see search results based on {arg}", function (param1){
  aqObject.CheckProperty(Aliases.browser.pageTrivagoMagazine.header.panel.textnode, "contentText", cmpContains, "Search Results", false);
  aqObject.CheckProperty(Aliases.browser.pageTrivagoMagazine.header.panel4.link4.textnode, "contentText", cmpContains, param1, false);
});

Given("dropdown menu is open", function (){
  let browser = Aliases.browser;
  let header = browser.pageTrivagoMagazine.header;
  header.panel.Click(9, 11);
  aqObject.CheckProperty(Aliases.browser.pageTrivagoMagazine.header.panel2.panel, "contentText", cmpContains, "Destinations", false);
});

When("I open Destinations and click {arg}", function (param1){
  let browser = Aliases.browser;
  let header = browser.pageTrivagoMagazine.header;
  header.panel3.Click(35, 4);
  header.link.panel.Click(82, 13);
  browser.pageMagazineTrivagoComDestinatio2.Wait();
});

Then("page with {arg} destinations are open", function (param1){
  aqObject.CheckProperty(Aliases.browser.pageMagazineTrivagoComDestinatio2.textnode, "contentText", cmpContains, param1, false);
});
