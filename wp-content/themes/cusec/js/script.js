$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
}

$(document).ready(function() {
	$('.carousel').carousel({
		interval: 8000
	});
	
	$('#search-icon').click(function() {
		$('#search-form').submit();
	})
	
	$('#democamp_submit').click(function(e) {
		valid = true;
		
		$('#democamp_form .required').each(function() {
			if ($(this).val() == '') {
				valid = false;
				$(this).css('border-color', '#B94A48');
			}
		});
		
		if (!valid) {
			e.preventDefault();
		} else {
			$('html, body').animate({ scrollTop: 0 });
			$('#democamp_form').fadeOut('slow');
			$('#submit_thanks').fadeIn();
		}
	});
	
	$('#proposal_submit').click(function(e) {
		valid = true;
		
		$('#proposal_form .required').each(function() {
			if ($(this).val() == '') {
				valid = false;
				$(this).css('border-color', '#B94A48');
			}
		});
		
		if (!valid) {
			e.preventDefault();
		} else {
			$('html, body').animate({ scrollTop: 0 });
			$('#proposal_form').fadeOut('slow');
			$('#submit_thanks').fadeIn();
		}
	});
	
	if (!!$('#chirp-tweets').size()) {
		chirp = new Chirp({
			target: 'chirp-tweets',
			user: 'CUSEC',
			max: 4,
			count: 8,
			retweets: true,
			replies: false,
			templates: {
				base: '<ul class="chirp">{{tweets}}</ul>',
				tweet: '<li>{{html}}</li>'
			}
		});
		
		chirp.show();
	}
	
	if (window.location.hash) {
		$(window.location.hash).scrollView();
	} else {
		setTimeout(function() { window.scrollTo(0, 1) }, 100);
	}
	
});