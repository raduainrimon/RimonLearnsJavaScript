// Get the button and div elements by their IDs
const button = document.getElementById("myButton");
const div = document.getElementById("myDiv");

// Add a click event listener to the button
button.addEventListener("click", () => {
  alert("Button was clicked!");
  div.style.backgroundColor = "lightblue"; // Change div background color on button click
});

// Add a mouseover event listener to the div
div.addEventListener("mouseover", () => {
  div.style.color = "black"; // Change text color on mouseover
});

// Add a mouseout event listener to the div
div.addEventListener("mouseout", () => {
  div.style.color = "aquamarine"; // Revert text color on mouseout
});
