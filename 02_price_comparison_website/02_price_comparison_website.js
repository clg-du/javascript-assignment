
// Template literal for products in a price comparison website
//
// Important Note: The template literals will be added to the body of the HTML document
//                 in the end of the script. We have not covered this in the course yet, but you
//                 can add the template to the body of the HTML document using the following code:
//
//                 document.body.innerHTML = template;
//
//                 where template is the template literal you want to add to the body of the HTML document.
//
// Create a HTML template literal for product information in a price comparison website.
// The template should include the following information:
//
// - Product name
// - Product price
// - Product category
// - Product rating (out of 5)
// - Product seller
//
// Below you will find an array of products. You should generate a template for each product
// and then create a template for all products. This is achieved by creating a function that
// generates a template for one product and then using the map() method to generate a template
// for all products. The templates for all products should be joined into a single string using
// the join() method. The products should be grouped by category using the reduce() method.
// Finally, you should create a template for all products by category and add the template to the
// body of the HTML document.
//
// Suggested methods to use: map(), join(), reduce(), template literals using backticks (`), and ${} syntax.
//
// You may of course use other methods and syntax if you prefer, as long as the base functionality is the same.
//
// The products should be grouped by category.
//
// Suggestion on how to solve the problem using the following steps:
//
// 1. Create a base template for one product.
// 2. Use the base template to generate a template for all products.
// 3. Use the reduce() method to group the products by category.
// 4. Create a template for all products by category.
// 5. Add the template to the body of the HTML document (code provided below).
//
// Point 5 is not covered in the course, but you can add the template to the body of the HTML document
// using the provided syntax in the end of the project. You can also test the template by logging it to the console
// using console.log() while debugging the code.
//
// Hint: You can use the map() method to generate a template for each product and the join() method
//       to join the templates into a single string. You can use the reduce() method to group the products
//       by category. You can use the Object.keys() method to get the keys of an object and the map() method
//       to generate a template for each category. You can use the join() method to join the templates for each
//       category into a single string.
//
//       To learn more about these methods, check the documentation on MDN:
//       - map(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//       - join(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
//       - reduce(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//       - Object.keys(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
//
//       You can also check the documentation on template literals:
//       - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//
// Remember that you can use the backtick character (`) to create a template literal.
// Also remember that you are able to use the ${} syntax to include variables in the template,
// e.g., ${product.name} will include the name of the product in the template.
// You are also able to style the template using CSS, either by adding a style tag to the template
// or by adding classes to the elements in the template. Styling is not required for this exercise.

// Loop over the following products and generate the template for each product:
const products = [
    { name: 'iPhone X', price: 799.99, category: 'Technology', rating: 4.2, seller: 'Apple' },
    { name: 'Blue Shirt', price: 18.99, category: 'Fashion', rating: 4.0, seller: 'H&M' },
    { name: 'Smart Watch', price: 99.99, category: 'Technology', rating: 3.8, seller: 'Xiaomi' },
    { name: 'Denim Jacket', price: 129.99, category: 'Fashion', rating: 4.4, seller: 'Levis' },
    { name: 'iPad Pro', price: 699.99, category: 'Technology', rating: 4.7, seller: 'Apple' },
    { name: 'Black Jeans', price: 29.99, category: 'Fashion', rating: 4.2, seller: 'H&M' },
    { name: 'Fitness Band', price: 49.99, category: 'Technology', rating: 3.9, seller: 'Fitbit' },
    { name: 'White T-Shirt', price: 9.99, category: 'Fashion', rating: 4.1, seller: 'Uniqlo' },
    { name: 'MacBook Pro', price: 1299.99, category: 'Technology', rating: 4.3, seller: 'Apple' },
    { name: 'Red Dress', price: 49.99, category: 'Fashion', rating: 4.6, seller: 'Zara' },
    { name: 'Headphones', price: 349.99, category: 'Technology', rating: 4.0, seller: 'Bose' },
    { name: 'Brown Belt', price: 14.99, category: 'Fashion', rating: 4.2, seller: 'H&M' },
    { name: 'Smartphone', price: 699.99, category: 'Technology', rating: 4.5, seller: 'Samsung' },
    { name: 'Backpack', price: 59.99, category: 'Fashion', rating: 4.3, seller: 'Herschel' },
    { name: 'Wireless Mouse', price: 19.99, category: 'Technology', rating: 3.8, seller: 'Logitech' },
    { name: 'Sweatshirt', price: 39.99, category: 'Fashion', rating: 4.0, seller: 'Gap' },
    { name: 'External Hard Drive', price: 79.99, category: 'Technology', rating: 4.1, seller: 'Seagate' },
    { name: 'Sneakers', price: 59.99, category: 'Fashion', rating: 4.4, seller: 'Adidas' },
    { name: 'Tablet', price: 299.99, category: 'Technology', rating: 4.2, seller: 'Samsung' },
    { name: 'Dress Shirt', price: 24.99, category: 'Fashion', rating: 4.3, seller: 'Uniqlo' },
    { name: 'Smart Speaker', price: 149.99, category: 'Technology', rating: 4.0, seller: 'Google' },
    { name: 'Jeans', price: 39.99, category: 'Fashion', rating: 4.1, seller: 'Levis' },
    { name: 'Digital Camera', price: 499.99, category: 'Technology', rating: 4.5, seller: 'Canon' },
    { name: 'Hoodie', price: 29.99, category: 'Fashion', rating: 4.2, seller: 'Gap' },
    { name: 'Wireless Earbuds', price: 199.99, category: 'Technology', rating: 4.3, seller: 'Apple' },
    { name: 'Skirt', price: 19.99, category: 'Fashion', rating: 4.0, seller: 'Zara' }
];

// You should be able to add the template to the body of the HTML document by order of the products category.
// This project therefore requires you to display the content in the HTML document.

// Solution:

// Create base template for one product
const productTemplate = function(product) {

};

// Create a template for all products
const allProductsTemplate = function(products) {
   
};

// Group products by category
const groupedProducts = products.reduce((acc, product) => { 
    
    // => is a different way to write function, i.e, function() {} is the same as () => {}
    //
    // Add your code here...
    // 
    // Hint: acc is the accumulator object that you should return at the end of the iteration.
    //       product is the current product in the iteration.
    //       You can use the category of the product to group the products.
    //       You are also at liberty to proceed in any way you see fit!
    //       This is just a suggestion on how to solve the problem.

}, {});

// Create a template for all products by category
const allProductsByCategoryTemplate = (groupedProducts) => {
   
    // Add your code here...

};

// Add the template to the body of the HTML document
document.body.innerHTML = allProductsByCategoryTemplate(groupedProducts);


