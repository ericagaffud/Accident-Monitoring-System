$(document).ready(function() {
    $.getJSON('../../assets/Json/ams-user.json', function(users) {
        let currentIndex = 0;

        function addNewUser() {
            if (currentIndex >= users.length) {
                currentIndex = 0;
            }

            const user = users[currentIndex];
            const randomHeartRate = Math.floor(Math.random() * (100 - 60 + 1)) + 60; // Random heart rate between 60-100
            const currentTime = new Date().toLocaleString();

            const newUserHtml = `
                <div class="homeDiv--upper--risks--users__user">
                    <img src="${user.image}" alt="${user.name}">
                    <div>
                        <h4>${user.name}</h4>
                        <h6>Heart Rate: ${randomHeartRate}bpm</h6><br>
                        <p>${currentTime}</p>
                    </div>
                </div>
            `;

            const usersContainer = $('.homeDiv--upper--risks--users');

            usersContainer.append(newUserHtml);

            const itemHeight = usersContainer.find('.homeDiv--upper--risks--users__user').last().outerHeight();

            usersContainer.animate({
                scrollTop: usersContainer.scrollTop() + itemHeight
            }, 500, function() {

                const firstUser = usersContainer.find('.homeDiv--upper--risks--users__user').first();

                if (firstUser.position().top + itemHeight < 0) {
                    firstUser.remove();
                }
            });

            currentIndex++;
        }

        setInterval(addNewUser, 2000);
    });
});