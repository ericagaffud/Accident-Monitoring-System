$(document).ready(function(){
    window.loadPage = function(folder, page){ 
        $('#loginComponent').load('pages/' + folder + '/' + page +'.html', function(response, status, xhr) {
            if (status === "error") {
                console.error("Error loading the login page: " + xhr.status + " " + xhr.statusText);
            } else {

            }
        });
    }

    loadPage('login', 'login');

    $('#header-placeholder').load('../../components/header.html');

    function toggleMenu() {
        if ($(window).width() < 1024) {
            // Toggle the menu only if the width is less than 1024px
            $('#headerMenu').on('click', function(event) {
                event.stopPropagation();
                $('.header-menu-nav').show(100); // Slide toggle effect for smaller screens
            });

            // Hide the sidebar if clicking outside on smaller screens
            $(document).on('click', function(event) {
                if (!$(event.target).closest('.header-menu-nav, #headerMenu').length) {
                    if ($('.header-menu-nav').is(':visible')) {
                        $('.header-menu-nav').hide(100);
                    }
                }
            });
        } else {
            $('.header-menu-nav').show();
            $('#headerMenu').off('click');
        }
    }

    toggleMenu();

    $(window).resize(function() {
        toggleMenu();
    });
});