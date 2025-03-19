function showPopup(title, description) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('popup').style.display = 'flex';
}

// Closes the pop-up when clicking the close button
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Closes the pop-up when clicking outside the content
document.getElementById('popup').addEventListener('click', function (event) {
    if (event.target === this) {
        closePopup();
    }
});
