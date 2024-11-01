$(document).ready(function() {
    $.getJSON('../../assets/Json/ams-user.json', function(users) {
        let currentIndex = 0;

        function addNewRisksRecord() {
            if (currentIndex >= users.length) {
                currentIndex = 0;
            }

            const user = users[currentIndex];
            const randomHeartRate = Math.floor(Math.random() * (100 - 60 + 1)) + 60; // Random heart rate between 60-100
            const currentTime = new Date().toLocaleString();
            const randomTime = Math.floor(Math.random() * 59) + 1;

            const recentRisks = `
                <div class="homeDiv--upper--risks--users__user">
                    <img src="${user.image}" alt="${user.name}">
                    <div>
                        <h4>${user.name}</h4>
                        <h6>Heart Rate: ${randomHeartRate}bpm</h6><br>
                        <p>${currentTime}</p>
                    </div>
                </div>
            `;

            const recentRisksContainer = $('.homeDiv--upper--risks--users');

            recentRisksContainer.append(recentRisks);

            const itemHeight = recentRisksContainer.find('.homeDiv--upper--risks--users__user').last().outerHeight();
            recentRisksContainer.animate({
                scrollTop: recentRisksContainer.scrollTop() + itemHeight
            }, 500, function() {
                const firstUser = recentRisksContainer.find('.homeDiv--upper--risks--users__user').first();
                if (firstUser.position().top + itemHeight < 0) {
                    firstUser.remove();
                }
            });

            currentIndex++;
        }

        addNewRisksRecord();
        setInterval(addNewRisksRecord, 2000);

        function addNewNotif() {
            if (currentIndex >= users.length) {
                currentIndex = 0;
            }

            const user = users[currentIndex];
            const randomTime = Math.floor(Math.random() * 59) + 1;

            const recentNotification = `
                <div class="homeDiv--upper--notifs__notif">
                    <div class="homeDiv--upper--notifs__notif__white">
                        <div>
                            <img src="${user.image}" alt="${user.name}">
                            <div class="user-status"></div>
                        </div>
                        <h3>${user.name}</h3>
                    </div>
                    <div class="homeDiv--upper--notifs__notif__colored">
                        <h5>${user.address}</h5>
                        <h5>Connected ${randomTime} minute${randomTime > 1 ? 's' : ''} ago</h5>
                    </div>
                </div>
            `;

            const recentNotifContainer = $('.homeDiv--upper--notifs');

            recentNotifContainer.append(recentNotification);

            const newNotif = recentNotifContainer.find('.homeDiv--upper--notifs__notif').last();
            const currentNotif = recentNotifContainer.find('.homeDiv--upper--notifs__notif').first();

            newNotif.css('transform', 'translateX(100%)');

            setTimeout(function() {
                currentNotif.css('transform', 'translateX(-100%)');

                setTimeout(function() {
                    newNotif.css('transform', 'translateX(0)');
                }, 500);

                currentNotif.one('transitionend', function(event) {
                    if (event.originalEvent.propertyName === 'transform') {
                        $(this).remove();
                    }
                });
            }, 10);

            currentIndex++;
        }

        addNewNotif();
        setInterval(addNewNotif, 3000);

        // Users Carousel
        const activeUsers = users.filter(user => user.active);
        const imagePaths = activeUsers.map(user => user.image);

        const carouselContainer = $('.homeDiv--major--users-carousel');

        function addNewImage() {
            if (currentIndex >= imagePaths.length) {
                currentIndex = 0; 
            }
    
            const newImage = $('<img>').attr('src', imagePaths[currentIndex]);
            carouselContainer.append(newImage);
    
            const imageWidth = newImage.outerWidth(true);
            const containerWidth = carouselContainer.width();
            const totalWidth = carouselContainer.get(0).scrollWidth;
    
            if (totalWidth > containerWidth) {
                carouselContainer.animate({
                    scrollLeft: totalWidth - containerWidth
                }, 500, function() {
                    const firstImage = carouselContainer.find('img').first();
                    const firstImageRightEdge = firstImage.offset().left + firstImage.outerWidth();
    
                    if (firstImageRightEdge < carouselContainer.offset().left) {
                        firstImage.remove();
                    }
                });
            }
    
            currentIndex++;
        }
    
        addNewImage();
        setInterval(addNewImage, 3000);
    });
});