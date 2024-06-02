function showMessage() {
    const loveMessage = document.getElementById('loveMessage').value;
    if (loveMessage.trim() === "") {
        alert("Please enter your message.");
        return;
    }

    // Store the message in local storage
    localStorage.setItem('loveMessage', loveMessage);

    // Hide the text area and button, show the response
    document.getElementById('loveMessage').style.display = 'none';
    document.querySelector('button').style.display = 'none';
    document.getElementById('response').classList.remove('hidden');
}

// Function to retrieve the message from local storage
function getStoredMessage() {
    return localStorage.getItem('loveMessage');
}
