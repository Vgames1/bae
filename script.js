// Function to display the welcome message on the webpage
function displayWelcomeMessage() {
    const welcomeMessage = "Welcome to the HTML, CSS, and JavaScript Tutorial Site!";
    const messageContainer = document.createElement('div');
    messageContainer.textContent = welcomeMessage;
    messageContainer.style.fontSize = "24px"; // Customize font size
    messageContainer.style.textAlign = "center"; // Center align the message
    messageContainer.style.margin = "20px"; // Add some margin
    messageContainer.style.color = "#FFFFFF"; // Change color to white
    document.body.prepend(messageContainer); // Add message to the top of the body
}

// Function to track page visits
function trackPageVisit() {
    const visits = localStorage.getItem('pageVisits') || 0;
    const newVisits = parseInt(visits) + 1;
    localStorage.setItem('pageVisits', newVisits);
    console.log(`This page has been visited ${newVisits} times.`);
}

// Function to update the current date and time
function displayCurrentDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    const timeString = now.toLocaleTimeString('en-US');
    
    console.log(`Current Date: ${dateString}`);
    console.log(`Current Time: ${timeString}`);
}

// Initialize the script
function init() {
    displayWelcomeMessage();
    trackPageVisit();
    displayCurrentDateTime();
}

// Execute the init function when the script loads
init();
