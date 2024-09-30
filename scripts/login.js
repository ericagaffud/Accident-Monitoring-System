$(document).on('submit', '#loginForm', function(event) {
    event.preventDefault();
    var username = $('#username').val();
    var password = $('#password').val();

    if (username && password) {
        loadPage('');
    } else {
        alert('Please enter a valid username and password.');
    }
});