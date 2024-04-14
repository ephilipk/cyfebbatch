//Assignment
//rahulshettyacademy/seleniumPractice
//add the 3 items and it should be $228
//Working with Strings,Numbers video-1:00:52
describe('Adding carrot, tomato, and potato to cart and verifying total price', function() {
  it('Add carrot, tomato, and beans to cart and verifying it', function() {
      let totalvalue = 0;
      // Visit the website
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/');

      // Add Carrot to cart
      cy.contains('Carrot')
        .siblings('.product-action')
        .click();
      // get carrot price
      cy.contains('Carrot')
        .siblings('.product-price')
        .invoke('text')
        .then((price) => {
            totalvalue += parseFloat(price.replace('₹', ''));
        });

      // Add Tomato to cart
      cy.contains('Tomato')
        .siblings('.product-action')
        .click();
      // get tomato price
      cy.contains('Tomato')
        .siblings('.product-price')
        .invoke('text')
        .then((price) => {
            totalvalue += parseFloat(price.replace('₹', ''));
        });

      // Add Potato to cart
      cy.contains('Potato')
        .siblings('.product-action')
        .click();
      // get potato price
      cy.contains('Potato')
        .siblings('.product-price')
        .invoke('text')
        .then((price) => {
            totalvalue += parseFloat(price.replace('₹', ''));
        })
        .then(() => {
            // Log total value after all prices are fetched and added
            cy.log(totalvalue.toFixed(2)); // Assuming you want to log the total value with 2 decimal places
        });
        it('Add TO CART', () => {
         
          // Visit the website and adding all the items ADD to cart
          cy.visit('https://rahulshettyacademy.com/seleniumPractise/');
          cy.xpath("//button[text()='ADD TO CART']").click({multiple:true})
        })
  });
});