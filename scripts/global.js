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
});