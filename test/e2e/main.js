describe('Test: Wallet', function() {
  browser.driver.manage().window().maximize();
  beforeEach(function(){
    browser.get("http://localhost:9000");

  });

  it('should test adding 1 of each banknote', function(){
    var clickCounts = 0;
    var total = $("#total");

    browser.findElements(by.css(".add-banknote")).then(function(elems){
      for(var i=0; i<elems.length; i++){
        clickCounts++;
        elems[i].click();
      }
    });
    browser.findElements(by.css(".alert")).then(function(elems) {
      expect(elems.length).toEqual(clickCounts);
    });
    total.getText().then(function(value){
      expect(parseInt(value)).toBeGreaterThan(0);
    });

  });

  it('should test removing 1 of each banknote', function() {
    var clickCounts = 0;
    var total = $("#total");

    browser.findElements(by.css(".remove-banknote")).then(function (elems) {
      for (var i = 0; i < elems.length; i++) {
        clickCounts++;
        elems[i].click();
      }
    });

    // getText returns promise, we need to cast value to Integer
    total.getText().then(function(value){
      expect(parseInt(value)).toEqual(0);
    });

    // it has the previous transactions listed also, so it's multiplied by 2
    browser.findElements(by.css(".alert")).then(function (elems) {
      expect(elems.length).toEqual(clickCounts * 2);
    });
  });

  it('should test error handling for removing money', function(){
    var clickCounts = 0;
    browser.findElements(by.css(".remove-banknote")).then(function (elems) {
      // click all of them to make sure all generate an error
      for (var i = 0; i < elems.length; i++) {
        clickCounts++;
        elems[i].click();
      }
    });

    browser.findElements(by.css('.error-message')).then(function (elems) {
      expect(elems.length).toEqual(clickCounts);
    });

  });

  it('should test storage reset', function(){
    var storageReset = $("#reset-storage");

    //click all buttons
    browser.findElements(by.css(".add-banknote")).then(function (elems) {
      for (var i = 0; i < elems.length; i++) {
        elems[i].click();
      }
    });

    storageReset.click();

    // after reset, all banknote quantities should be set to 0
    browser.findElements(by.css('.banknote-amount')).then(function (elems){
      for (var i = 0; i < elems.length; i++) {
        elems[i].getText().then(function(value){
          expect(parseInt(value)).toEqual(0);
        });

      }
    });
  });


});
