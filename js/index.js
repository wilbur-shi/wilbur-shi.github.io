$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		anchors:['Home', 'About', 'Skills', 'Projects', 'Contact Me'],
		navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Home', 'About', 'Skills', 'Projects', 'Contact Me'],
        showActiveTooltip: true,

        //Scrolling
        css3: true,
        scrollingSpeed: 1000,

        //Background sections
        sectionsColor: ['#8EADAB', '#A09A99', '#8EADAB', '#EAD599', '#B797A3']
        // sectionsColor: ['#3B61B4', '#F5AE4C', '#ABCEDF', '#E06D5B', '#3B61B4']

	});

	$('#contact_me_form').on('submit', submit_form);
});

function submit_form(e) {
	e.preventDefault();
	$.ajax({
	    url: "https://formspree.io/wilburshi@sbcglobal.net", 
	    method: "POST",
	    data: $("#contact_me_form").serialize(),
	    dataType: "json",
	    success: function() {
			alert('Thank you for contacting me! I will get back to you shortly.');
	    }, 
	    error: function(err) {
	    	console.log(err);
	    	alert("Woops. There was an error while sending your message. Try again!");
	    }
	});
}
