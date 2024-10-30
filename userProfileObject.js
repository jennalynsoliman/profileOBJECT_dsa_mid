//Problem 6

// Function to create a user profile
function createUserProfile() {
    let userProfile = {};

    userProfile.name = prompt("Enter your name:");
    userProfile.age = prompt("Enter your age:");
    userProfile.gender = prompt("Enter your gender:");
    userProfile.favoriteColor = prompt("Enter your favorite color:");

    console.log("User Profile:", userProfile); //loging the entire object to the console    
}

// Call the function to create the user profile
createUserProfile();

