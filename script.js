// Handle the form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.getElementById('successPopup').style.display = 'flex';

    document.getElementById('signupForm').reset();
});

function closePopup() {
    document.getElementById('successPopup').style.display = 'none';
}
