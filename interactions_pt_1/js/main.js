

// Hide the item with the id #dropdownMenu
$('#dropdownMenu').hide();

// When the element with the id #openDropdown
$('#openDropdown').on('click', function () {
	$('#dropdownMenu').slideToggle();
});


// Hide the item with the id #answer2
$('#answer2').hide();

// Question2
$('#question2').on('click', function () {
	$('#answer2').slideDown();
	$('#answer1').slideUp();
	$('li').removeClass('active');
	$('#question2').addClass('active');
});


// Question1
$('#question1').on('click', function () {
	$('#answer1').slideDown();
	$('#answer2').slideUp();
	$('li').removeClass('active');
	$('#question1').addClass('active');
});


// Show Yellow button
$('#showYellowCircles').on('click', function () {
	// Hide circles with the class .blue
	$('.blue').hide();
	// Fade in circles with the class .yellow
	$('.yellow').fadeIn(200);
});

// Show Blue button
$('#showBlueCircles').on('click', function () {
	// Hide circles with the class .yellow
	$('.yellow').hide();
	// Fade in circles with the class .blue
	$('.blue').fadeIn(200);
});
