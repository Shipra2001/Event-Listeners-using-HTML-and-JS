// Function to change the button color on click
function changeColor(event) {
    event.target.style.backgroundColor = 'lightblue';
}

// Function to show the message on mouseover
function showMessage(event) {
    const messageId = 'message' + event.target.id.replace('button', '');
    const messageElement = document.getElementById(messageId);
    messageElement.style.display = 'block';
}

// Function to hide the message on mouseout
function hideMessage(event) {
    const messageId = 'message' + event.target.id.replace('button', '');
    const messageElement = document.getElementById(messageId);
    messageElement.style.display = 'none';
}

// Function to hide the button on double-click
function hideButton(event) {
    event.target.style.display = 'none';
}

// Adding event listeners to each button
document.getElementById('button1').addEventListener('click', changeColor);
document.getElementById('button1').addEventListener('mouseover', showMessage);
document.getElementById('button1').addEventListener('mouseout', hideMessage);
document.getElementById('button1').addEventListener('dblclick', hideButton);

document.getElementById('button2').addEventListener('click', changeColor);
document.getElementById('button2').addEventListener('mouseover', showMessage);
document.getElementById('button2').addEventListener('mouseout', hideMessage);
document.getElementById('button2').addEventListener('dblclick', hideButton);

document.getElementById('button3').addEventListener('click', changeColor);
document.getElementById('button3').addEventListener('mouseover', showMessage);
document.getElementById('button3').addEventListener('mouseout', hideMessage);
document.getElementById('button3').addEventListener('dblclick', hideButton);
