$(document).ready(function() {
    
    $(document).on('input', '#username, #password', function() {
        const username = $('#username').val().trim();
        const password = $('#password').val().trim();

        if (username && password) {
            $('input[type="submit"]').prop('disabled', false);
        } else {
            $('input[type="submit"]').prop('disabled', true);
        }
    });

    $(document).ready(function() {
        $('input[type="submit"]').prop('disabled', true);
    });


    $(document).on('submit', '#loginForm', function(event) {
        console.log('Login Clicked!!');
        event.preventDefault();

        const username = $('#username').val().trim();
        const password = $('#password').val().trim();

        $.getJSON('./assets/json/users.json', function(data) {
            const users = data.users;
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                localStorage.setItem('user-role', user.role);

                if (user.role === 'benefactor') {
                    window.location.href = 'pages/home/benefactor-home.html';
                } else if (user.role === 'user') {
                    window.location.href = 'pages/home/user-home.html';
                }
            } else {
                $('#login-error').text('Invalid username or password. Please try again.');
            }
        }).fail(function() {
            $('#login-error').text('Error loading user data.');
        });
    });
});