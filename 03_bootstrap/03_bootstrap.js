
// Bootstrap 5 and JavaScript

// Create a bootstrap 5 card template for customer reviews. The card should include the following information:

// - Customer name
// - Review text
// - Review date
// - Review rating (out of 5)

// Below you will find an array of customer reviews. You should generate a card for each review and then create a card for all reviews.

// The card should be styled using Bootstrap 5. You can use the following classes to style the card:

// - card
// - card-body
// - card-title
// - card-text

// In addition, cards should be shown three-by-three on a large screen, two-by-two on a medium screen, and one-by-one on a small screen.
// Use loops and functions to generate the cards and add them to the body of the HTML document to achieve this.

// Suggestion on how to solve the problem using the following steps:

// 1. Create a function that generates a card for a review.
// 2. Create a function that generates cards for all reviews.
// 3. Add the cards to the body of the HTML document.

// Hint: You can use the map() method to generate a card for each review and the join() method to join the cards into a single string. You can use the reduce() method to group the reviews by category.
//       Actually, most of the concept are the same as the previous exercise, but this time we are using Bootstrap 5 to style the cards.

// Remember that you can use the backtick character (`) to create a template literal.
// Also remember that you are able to use the ${} syntax to include variables in the template, e.g., ${review.name} will include the name of the review in the template.
// You are also able to style the template using CSS, either by adding a style tag to the template or by adding classes to the elements in the template. Styling is not required for this exercise.

// Loop over the following reviews and generate the card for each review:

const reviews = [
    { name: 'John Doe', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna eget nunc luctus.', date: '2021-07-06', rating: 4.2 },
    { name: 'Jane Smith', text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', date: '2021-07-07', rating: 4.0 },
    { name: 'Alice Johnson', text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.', date: '2021-07-08', rating: 4.4 },
    { name: 'Bob Brown', text: 'Fusce nec dui eget nunc ultrices lacinia. Nullam nec nisl nec nunc ultrices lacinia.', date: '2021-07-09', rating: 4.7 },
    { name: 'Eve Wilson', text: 'Sed ac urna eget nunc luctus. Nullam nec nisl nec nunc ultrices lacinia.', date: '2021-07-10', rating: 4.2 },
    { name: 'Charlie Davis', text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', date: '2021-07-11', rating: 4.0 },
    { name: 'Grace Lee', text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.', date: '2021-07-12', rating: 4.4 },
    { name: 'Harry Clark', text: 'Fusce nec dui eget nunc ultrices lacinia. Nullam nec nisl nec nunc ultrices lacinia.', date: '2021-07-13', rating: 4.7 },
    { name: 'Ivy Thomas', text: 'Sed ac urna eget nunc luctus. Nullam nec nisl nec nunc ultrices lacinia.', date: '2021-07-14', rating: 4.2 },
    { name: 'Kevin Rodriguez', text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', date: '2021-07-15', rating: 4.0 },
    { name: 'Mary White', text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.', date: '2021-07-16', rating: 4.4 },
    { name: 'Nancy Harris', text: 'Fusce nec dui eget nunc ultrices lacinia. Nullam nec nisl nec nunc ultrices lacinia.', date: '2021-07-17', rating: 4.7 },
    { name: 'Oliver Martinez', text: 'Sed ac urna eget nunc luctus. Nullam nec nisl nec nunc ultrices lacinia.', date: '2021-07-18', rating: 4.2 },
    { name: 'Patricia Young', text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', date: '2021-07-19', rating: 4.0 },
    { name: 'Quincy Scott', text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.', date: '2021-07-20', rating: 4.4 },
    { name: 'Roger Allen', text: 'Fusce nec dui eget nunc ultrices lacinia. Nullam nec nisl nec nunc ultrices lacinia.', date: '2021-07-21', rating: 4.7 },
    { name: 'Samantha Hall', text: 'Sed ac urna eget nunc luctus. Nullam nec nisl nec nunc ultrices lacinia.', date: '2021-07-22', rating: 4.2 },
    { name: 'Tommy Adams', text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', date: '2021-07-23', rating: 4.0 },
    { name: 'Ursula Baker', text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.', date: '2021-07-24', rating: 4.4 },
    { name: 'Victor Cook', text: 'Fusce nec dui eget nunc ultrices lacinia. Nullam nec nisl nec nunc ultrices lacinia.', date: '2021-07-25', rating: 4.7 },
    { name: 'Wendy Evans', text: 'Sed ac urna eget nunc luctus. Nullam nec nisl nec nunc ultrices lacinia.', date: '2021-07-26', rating: 4.2 },
    { name: 'Xavier Ford', text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', date: '2021-07-27', rating: 4.0 },
    { name: 'Yvonne Gray', text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.', date: '2021-07-28', rating: 4.4 }
];

// Solution:

function generateCard(review) {
    
    // Add code here...
    
}

function generateAllCards(reviews) {
   
    // Add code here...

}

// Add the cards to the body of the HTML document
document.body.innerHTML = `
    <div class="container">
        <div class="row">
            ${generateAllCards(reviews)}
        </div>
    </div>
`;
