$(document).ready( function(){
    console.log('Contact');

    $('.contact--ams').show();
    $('.contact--personal').hide();

    $('#amsTab').click(function() {
        $('.contact--ams').show();
        $('.contact--personal').hide();

        $(this).addClass('active');
        $('#personalTab').removeClass('active');

        $('.contact--header--title').text('Get in touch!');
        $('.contact--header--subtitle').text('For any inquiries or support, do not hesitate to contact us under any circumstances.');
    });

    $('#personalTab').click(function() {
        $('.contact--personal').show();
        $('.contact--ams').hide();

        $(this).addClass('active');
        $('#amsTab').removeClass('active');

        $('.contact--header--title').text('Let’s talk about you.');
        $('.contact--header--subtitle').text('Ensure your contact details are accurate, as they are essential for others to reach you.');
    });
})