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
	// alert($("#contact_me_form").serialize());
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

/*<div class="form_container">
					<form name=contact_me_form style="margin:0px" onsubmit="return submit_form()">
					<table id="contact_me_table">
					<tr><td>Name: <span style="color:#D70000">*</span><br><input type="text" name="name" required="true" /></td></tr>
					<tr><td>E-mail Address: <span style="color:#D70000">*</span><br><input type="text" name="email" required="true" /></td></tr>
					<tr><td>Subject:<br><input type="text" name="subject" /></td></tr>
					<tr><td>Message: <span style="color:#D70000">*</span><br><textarea name="message" cols="42" rows="9" required="true"></textarea></td></tr>
					<tr><td><input type="submit" value="Send Message" style="font-weight:bold"></td></tr>
					</table>*/

/*					<script language="javascript">var sa_email_id = '85365-600e5';var sa_sent_text = 'Thank you for contacting me! I will get back to you soon.';</script>
				<script language="javascript" src="http://s1.smartaddon.com/sa_htmlform.js"></script>
				<div id="sa_contactdiv">
					<form name=sa_htmlform style="margin:0px" onsubmit="return sa_contactform()">
					<table id="contact_me_table">
					<tr><td>Name: <span style="color:#D70000">*</span><br><input type="text" name="name" required="true" /></td></tr>
					<tr><td>E-mail Address: <span style="color:#D70000">*</span><br><input type="text" name="email" required="true" /></td></tr>
					<tr><td>Subject:<br><input type="text" name="subject" /></td></tr>
					<tr><td>Message: <span style="color:#D70000">*</span><br><textarea name="message" cols="42" rows="9" required="true"></textarea></td></tr>
					<tr><td><input type="submit" value="Send Message" style="font-weight:bold"></td></tr>
					</table>
<!-- 				</form><div style="padding-top:10px"><a href="http://www.smartaddon.com/contact_form.html">Contact Form</a> provided by SmartAddon.com</div> -->
				</div>*/

/*<!-- CONTACT -->
			<div class="section" id="section5">
				<div class="contact text-center" id="contact">
					<h2 style="margin-bottom: 50px;"> CONTACT </h2>
					<div class="logos">				
							<a href="mailto:wilburshi@berkeley.edu"><img src="images/email.png" id="email"></a>
							<!-- <a href="mailto:wilburshi@berkeley.edu"><span class="glyphicon glyphicon-envelope" id="email"></span></a> -->
							<a href="https://github.com/wilbur-shi"><img src="images/github.png" id="github"></a>
							<a href="https://www.linkedin.com/in/wilburshi"><img src="images/linkedin.png" id="linkedin"></a>
					</div>
				</div>
				<div class="form_container">
					<form id="contact_me_form" method="post">
						<table id="contact_me_table">
						<tr><td>Name: <span style="color:#D70000">*</span><br><input type="text" name="name" required="true" /></td></tr>
						<tr><td>E-mail Address: <span style="color:#D70000">*</span><br><input type="text" name="email" required="true" /></td></tr>
						<tr><td>Subject:<br><input type="text" name="subject" /></td></tr>
						<tr><td>Message: <span style="color:#D70000">*</span><br><textarea name="message" cols="42" rows="9" required="true"></textarea></td></tr>
						<tr><td><input type="submit" value="Send Message" class="btn btn-default" style="font-weight:bold"></td></tr>
						</table>
					</form>
				</div>
			</div>
			*/