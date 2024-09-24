
// Finalize the following password creation function createPassword() that lets
// the user create a password with the following conditions:

// 1. The password must be at least 8 characters long
// 2. The password must have at least 1 uppercase letter
// 3. The password must have at least 1 lowercase letter
// 4. The password must have at least 1 number
// 5. The password must have at least 1 special character (e.g., !, @, #, etc.)

// For point 2 through 5, you can use regular expressions to check if the
// password meets the conditions. These are as follows:

// 2. let uppercase = /[A-Z]/                   // checks for uppercase letters
// 3. let lowercase = /[a-z]/                   // checks for lowercase letters
// 4. let number = /[0-9]/                      // checks for numbers
// 5. let specialChar = /[!@#$%^&*]/            // checks for special characters

// The user should be prompted to enter a password until they enter a valid
// password. Use the prompt() function to get user input (i.e., the password).
// Use the alert function to display messages to the user. prompt() and alert()
// takes a string as an argument to display a message to the user, e.g.,
// prompt("Enter a password") will prompt the user to enter a password and
// alert("Invalid password") will display a message to the user that the
// password is invalid.

// The function should return the valid password entered by the user.

// Hint: You can use the test() method of regular expressions to check if a
//       string meets the conditions. For example, given the variables above,
//       uppercase.test(password) will return true if the password contains an
//       uppercase letter.

// Then create yet another function that lets the user enter a password and
// checks if it is the same as the first password entered. In this case, the
// used should be prompted to enter a password until they enter a password that
// matches the first password.

// The function should return a message that the passwords match, as an alert.

// Hint: You can call the createPassword() function to get the first password
//       and then prompt the user to enter the password again to confirm. If the
//       passwords do not match, the user should be prompted to enter the password
//       again until they match.

// Note: This project does not require console.log() statements. You can,
//       however, use them to debug your code.

// Solution:

function createPassword() {

    // Regular expressions to check if the password meets the conditions
    // Remember to add the length condition!
    let upperCase = /[A-Z]/;
    let lowerCase = /[a-z]/;
    let number = /[0-9]/;
    let specialChar = /[!@#$%^&*]/;

    // Add your code here...

}

function confirmPassword() {

    // Add your code here...
    
}

// Expected output: 
//
// Enter a password that meet the following conditions:
//
// 1. The password must be at least 8 characters long
// 2. The password must have at least 1 uppercase letter
// 3. The password must have at least 1 lowercase letter
// 4. The password must have at least 1 number
// 5. The password must have at least 1 special character (e.g., !, @, #, etc.)
//
//    Password: 1234 Invalid password. Please try again. Enter a password that
//    meet the following conditions:
//
// 1. The password must be at least 8 characters long
// 2. The password must have at least 1 uppercase letter
// 3. The password must have at least 1 lowercase letter
// 4. The password must have at least 1 number
// 5. The password must have at least 1 special character (e.g., !, @, #, etc.)
//
//    Password: 1234abcd Confirm password: 1234abcd Passwords match!
//
// In this solution, we first create a function createPassword() that prompts
// the user to enter a password and checks if the password meets the required
// conditions. If the password does not meet the conditions, the user is
// prompted to enter a password again until a valid password is entered.

// Then we create a function confirmPassword() that calls the createPassword()
// function to get the first password and then prompts the user to enter the
// password again to confirm. If the passwords do not match, the user is
// prompted to enter the password again until they match.

// Finally, the function returns a message "Passwords match!" when the passwords
// match.
