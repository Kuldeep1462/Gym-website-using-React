// contactHandlers.js

// Function to handle hover effect
export function addHoverEffect(event) {
    event.target.style.backgroundColor = "#ffcc66"; // Hover color
  }
  
  // Function to remove hover effect
  export function removeHoverEffect(event) {
    event.target.style.backgroundColor = ""; // Reset color
  }
  
  // Function to handle click effect
  export function handleClick(event, link) {
    // Reset all contact options' active style
    document.querySelectorAll('.contact-option').forEach(option => {
      option.style.backgroundColor = ""; // Reset color
      option.style.transform = ""; // Reset size
    });
  
    // Apply active style to clicked option
    event.currentTarget.style.backgroundColor = "#ff9933"; // Active color
    event.currentTarget.style.transform = "scale(1.05)"; // Enlarge size
  
    // Open link based on type (phone, email, or map)
    window.location.href = link;
  }
  