jQuery(document).ready(function () {
	//Smart-Menu
	jQuery(function () {
		jQuery('#main-menu').smartmenus({
			mainMenuSubOffsetX: -1,
			mainMenuSubOffsetY: 4,
			subMenusSubOffsetX: 6,
			subMenusSubOffsetY: -6
		});
	});


	jQuery('.active_programs_slider').owlCarousel({
		loop: true,
		center: false,
		stagePadding: 0,
		items: 4,
		margin: 30,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		responsiveClass: true,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
				dots: true,
				stagePadding: 40,
				margin: 10
			},
			600: {
				items: 1,
				dots: true,
				stagePadding: 50,
				margin: 10
			},
			768: {
				items: 2,
				dots: true,
				stagePadding: 40,
				margin: 10
			},
			992: {
				items: 3
			},
			1100: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	})

	jQuery('.workout-tebmenu-slider ').owlCarousel({
		loop: true,
		center: true,
		stagePadding: 0,
		items: 3,
		margin: 40,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		responsiveClass: true,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
				dots: false,
				stagePadding: 40,
				margin: 10
			},
			600: {
				items: 1,
				dots: false,
				stagePadding: 125,
				margin: 10
			},
			768: {
				items: 3,
				margin: 10
			},
			992: {
				items: 3
			},
			1100: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	})


	jQuery('.calender-slider ').owlCarousel({
		loop: false,
		center: false,
		stagePadding: 0,
		items: 1,
		margin: 0,
		animateOut: 'fadeOut',
		touchDrag: false,
		mouseDrag: false,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		responsiveClass: true,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
				dots: false
			},
			600: {
				items: 1,
				dots: false
			},
			768: {
				items: 1,
				margin: 10
			},
			992: {
				items: 1
			},
			1100: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	})


	jQuery('.max-shared').on('click', function () {
		jQuery('.header_info').toggleClass('active');
	});

	jQuery('.required_equipment_block h3').on('click', function () {
		jQuery('.required_equipment_block').toggleClass('active');
	});


	
	jQuery(".close-comment-1").click(function () {
		jQuery(".leave-comment-box-1").toggle();
	});


	jQuery('.search_box_top_1 .fa-ellipsis-vertical').on('click', function () {
		jQuery('.search_box_top_1').toggleClass('active');
	});
	
	jQuery('.search_box_top_one1 .fa-ellipsis-vertical').on('click', function () {
		jQuery('.search_box_top_one1').toggleClass('active');
	});
	jQuery('.search_box_top_one2 .fa-ellipsis-vertical').on('click', function () {
		jQuery('.search_box_top_one2').toggleClass('active');
	});
	jQuery('.search_box_top_one3 .fa-ellipsis-vertical').on('click', function () {
		jQuery('.search_box_top_one3').toggleClass('active');
	});
	
	jQuery('.search_box_top_one4 .fa-ellipsis-vertical').on('click', function () {
		jQuery('.search_box_top_one4').toggleClass('active');
	});

	jQuery('.search_box_top_2 .fa-ellipsis-vertical').on('click', function () {
		jQuery('.search_box_top_2').toggleClass('active');
	});
	jQuery('.search_box_top_3 .fa-ellipsis-vertical').on('click', function () {
		jQuery('.search_box_top_3').toggleClass('active');
	});
	jQuery('.search_box_top_4 .fa-ellipsis-vertical').on('click', function () {
		jQuery('.search_box_top_4').toggleClass('active');
	});
	jQuery('.search_box_top_5 .fa-ellipsis-vertical').on('click', function () {
		jQuery('.search_box_top_5').toggleClass('active');
	});
	jQuery('.search_box_top_6 .fa-ellipsis-vertical').on('click', function () {
		jQuery('.search_box_top_6').toggleClass('active');
	});
	jQuery('.search_box_top_7 .fa-ellipsis-vertical').on('click', function () {
		jQuery('.search_box_top_7').toggleClass('active');
	});

	jQuery('.meal-box-block-1 h2, .meal-box-block-1 .meal-images, .meal-box-block-1 .launch-icon').on('click', function () {
		jQuery('.meal-box-block-1').toggleClass('active');
	});

	jQuery('.meal-box-block-2 h2, .meal-box-block-2 .meal-images, .meal-box-block-2 .launch-icon').on('click', function () {
		jQuery('.meal-box-block-2').toggleClass('active');
	});

	jQuery('.meal-box-block-3 h2, .meal-box-block-3 .meal-images, .meal-box-block-3 .launch-icon').on('click', function () {
		jQuery('.meal-box-block-3').toggleClass('active');
	});

	jQuery('.meal-box-block-4 h2, .meal-box-block-4 .meal-images, .meal-box-block-4 .launch-icon').on('click', function () {
		jQuery('.meal-box-block-4').toggleClass('active');
	});

	jQuery('.meal-box-block-5 h2, .meal-box-block-5 .meal-images, .meal-box-block-5 .launch-icon').on('click', function () {
		jQuery('.meal-box-block-5').toggleClass('active');
	});

	jQuery("#show_hide_password a").on('click', function (event) {
		event.preventDefault();
		if (jQuery('#show_hide_password input').attr("type") == "text") {
			jQuery('#show_hide_password input').attr('type', 'password');
			jQuery('#show_hide_password i').addClass("fa-eye-slash");
			jQuery('#show_hide_password i').removeClass("fa-eye");
		} else if (jQuery('#show_hide_password input').attr("type") == "password") {
			jQuery('#show_hide_password input').attr('type', 'text');
			jQuery('#show_hide_password i').removeClass("fa-eye-slash");
			jQuery('#show_hide_password i').addClass("fa-eye");
		}
	});


});





const slider = document.getElementById("slider");
const valueDisplay = document.getElementById("valueDisplay");
const unitLabel = document.getElementById("unitLabel");

slider.addEventListener("input", updateDisplay);

function updateSliderValue(step) {
const currentValue = parseInt(slider.value);
const newValue = currentValue + step;
if (newValue >= 0 && newValue <= 800) {
slider.value = newValue;
updateDisplay();
}
}

function updateDisplay() {
const thumbSize = 22; // Adjust this value based on your slider thumb size
const thumbPosition = ((slider.value - slider.min) / (slider.max - slider.min)) * (slider.offsetWidth - thumbSize);
valueDisplay.textContent = `${slider.value} ${unitLabel.textContent}`;
valueDisplay.style.left = `calc(${thumbPosition}px + ${thumbSize / 2}px + 40px)`;
console.log(valueDisplay.style.left,'hello bro')
const gradient = `linear-gradient(to right, red 0%, red ${thumbPosition}px, #cfcfcf ${thumbPosition}px, #cfcfcf 100%)`;
slider.style.background = gradient;
}

// Function to update the unit label based on the selected radio button
function updateUnitLabel(unit) {
unitLabel.textContent = unit;
updateDisplay();
}

// Set "kg" as the default unit and update the display
updateUnitLabel("kg");

// Event listener for radio buttons to update the unit label
document.getElementById("flexRadioDefault1").addEventListener("change", function () {
updateUnitLabel("kg");
});

document.getElementById("flexRadioDefault2").addEventListener("change", function () {
updateUnitLabel("lb");
});

const repsslider = document.getElementById("repsslider");
const repsvalueDisplay = document.getElementById("repsvalueDisplay");

repsslider.addEventListener("input", updateRepDisplay);

function updateRepSliderValue(step) {
const currentValue = parseInt(repsslider.value);
const newValue = currentValue + step;
if (newValue >= 0 && newValue <= 800) {
repsslider.value = newValue;
updateRepDisplay();
}
}

function updateRepDisplay() {
const thumbSize = 22; // Adjust this value based on your slider thumb size
const thumbPosition = ((repsslider.value - repsslider.min) / (repsslider.max - repsslider.min)) * (repsslider.offsetWidth - thumbSize);
repsvalueDisplay.textContent = `${repsslider.value} reps`;
repsvalueDisplay.style.left = `calc(${thumbPosition}px + ${thumbSize / 2}px + 40px)`;

const gradient = `linear-gradient(to right, red 0%, red ${thumbPosition}px, #cfcfcf ${thumbPosition}px, #cfcfcf 100%)`;
repsslider.style.background = gradient;
}
updateRepDisplay()
