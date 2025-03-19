// Handle Button Clicks

// Function to change the background color when a button is clicked
const body = document.querySelector('body')
function changeBackgroundColor() {
  body.style = 'background-color: red'
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  body.style = 'background-color: white'
}

// Capture Keyboard Input

// Function to display the key pressed by the user
const keyPressDisplay = document.getElementById('keyPressDisplay')

function displayKeyPress(event) {
  // Implement the function to display key pressed
  keyPressDisplay.innerText = event.key

}

// Process Text Input
const textInputDisplay = document.getElementById('textInputDisplay')
// Function to display user input in real-time
function displayUserInput(e) {
  // Implement the function to display user input
  const { value } = e.target
  textInputDisplay.innerText = value
}

function refreshPageToDefault() {
  keyPressDisplay.innerText = 'Press any key...'
  textInputDisplay.innerText = 'Your input will be displayed here.'
  resetBackgroundColor()
  textInput.value = ""
}




// Attach Event Listeners

// Attach event listener to change background color when the button is clicked
document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor)

// Attach event listener to reset background color when the body is double-clicked
document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor)

// Attach event listener to display key pressed when a key is pressed down
document.addEventListener('keydown', displayKeyPress)

// Attach event listener to display user input in real-time as they type
document.getElementById('textInput').addEventListener('input', displayUserInput)

// Use mouseover and mouseout events to change element styles when hovering over them:
keyPressDisplay.addEventListener('mouseover', () => {
  keyPressDisplay.style.backgroundColor = 'yellow';
});

//Use mouseover and mouseout events to change element styles when hovering off of them:
keyPressDisplay.addEventListener('mouseout', () => {
  keyPressDisplay.style.backgroundColor = 'initial';
});

//refresh button refresh page values to default
document.getElementById('refreshForm').addEventListener('click', refreshPageToDefault)
