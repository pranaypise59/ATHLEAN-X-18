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



const radio1 = document.getElementById('flexRadioDefault1');
const radio2 = document.getElementById('flexRadioDefault2');
const slider = document.getElementById('slider');
const valueDisplay = document.getElementById('valueDisplay');
const unitLabel = document.getElementById('unitLabel');
const repsslider = document.getElementById('repsslider');
const repsvalueDisplay = document.getElementById('repsvalueDisplay');
const rootElement = document.getElementById('result_root');

// Function to get the current value of the selected radio button
function isMetric() {
  return radio1.checked;
}
function getSelectedRadioValue() {
  return isMetric() ? 'kg' : 'lb';
}

// Function to calculate Epley's Formula with one decimal place
function calculateOneRepMax() {
	let weight = Number(slider.value);
  let reps = Number(repsslider.value);
  const result = (weight + ( 0.0333 * (weight * (reps-1))));
  updateOneRepMaxPer(result);
  	// Round to the nearest 0.5
	const roundedWeight = Math.round(result * 2) / 2;
  return roundedWeight;
}

// Function to update the slider value and display
function updateSliderValue(step) {
  const currentValue = parseInt(slider.value);
  const newValue = currentValue + step;
  const maxval = isMetric() ? 272.5 : 600;

  if (newValue >= 0 && newValue <= maxval) {
    slider.value = newValue;
    updateDisplay();
    updateRootDisplay();
  }
}

// Function to update the display based on the slider value
function updateDisplay() {
  const thumbSize = 22;
  const thumbPosition =
    ((slider.value - slider.min) / (slider.max - slider.min)) *
    (slider.offsetWidth - thumbSize);

  valueDisplay.textContent = `${slider.value} ${unitLabel.textContent}`;
  valueDisplay.style.left = `calc(${thumbPosition}px + ${thumbSize / 2}px + 40px)`;

  const gradient = `linear-gradient(to right, red 0%, red ${thumbPosition}px, #cfcfcf ${thumbPosition}px, #cfcfcf 100%)`;
  slider.style.background = gradient;
}

// Function to update the unit label based on the selected radio button
function updateUnitLabel() {
  const unit = getSelectedRadioValue();
  unitLabel.textContent = unit;
  updateDisplay();
}

// Function to convert the slider value between lb and kg
function convertSliderValue(fromUnit, toUnit) {
  if (fromUnit === 'lb' && toUnit === 'kg') {
	  slider.value /= 2.20462;
	  slider.max = 272.5;
  } else if (fromUnit === 'kg' && toUnit === 'lb') {
	  slider.max= 600;
	  slider.value *= 2.20462;
  }
  updateDisplay();
}

// Event listeners for radio buttons to update the unit label
radio1.addEventListener('change', function () {
  updateUnitLabel();
  convertSliderValue('lb', 'kg');
  updateRootDisplay();
});

radio2.addEventListener('change', function () {
  updateUnitLabel();
  convertSliderValue('kg', 'lb');
  updateRootDisplay();
});

// Event listeners for slider input change
slider.addEventListener('input', () => {
  updateDisplay();
  updateRootDisplay();
});

// Event listeners for reps slider input change
repsslider.addEventListener('input', () => {
  updateRepDisplay();
  updateRootDisplay();
});

// Function to update the reps slider value and display
function updateRepSliderValue(step) {
  const currentValue = parseInt(repsslider.value);
  const newValue = currentValue + step;

  if (newValue >= 0 && newValue <= 20) {
    repsslider.value = newValue;
    updateRepDisplay();
    updateRootDisplay();
  }
}

// Function to update the reps display based on the slider value
function updateRepDisplay() {
  const thumbSize = 22;
  const thumbPosition =
    ((repsslider.value - repsslider.min) / (repsslider.max - repsslider.min)) *
    (repsslider.offsetWidth - thumbSize);

  repsvalueDisplay.textContent = `${repsslider.value} reps`;
  repsvalueDisplay.style.left = `calc(${thumbPosition}px + ${thumbSize / 2}px + 40px)`;

  const gradient = `linear-gradient(to right, red 0%, red ${thumbPosition}px, #cfcfcf ${thumbPosition}px, #cfcfcf 100%)`;
  repsslider.style.background = gradient;
}

// Function to update the root element display
function updateRootDisplay() {
  const repval = calculateOneRepMax();
  rootElement.textContent = `${repval} ${getSelectedRadioValue()}`;
}

// Set "kg" as the default unit and update the display
updateUnitLabel();
updateRepDisplay();
updateRootDisplay();

function updateOneRepMaxPer(result=2.5){
const oneRepMaxPer = document.getElementById('oneRepMaxPer');
const percentages = [95, 90, 85, 80, 75, 70, 65, 60, 55, 50];

// Ensure the table exists before proceeding
if (oneRepMaxPer) {
  // Select the second row (index 1)
  const secondRow = oneRepMaxPer.rows[1];

  // Loop through all the td elements in the second row
  for (let i = 1; i < secondRow.cells.length; i++) {
	const percentWeight = result * (percentages[i - 1] / 100);

    const td = secondRow.cells[i];

    // Set the value as the index
    td.textContent = Math.round(percentWeight * 2) / 2 + ' ' + getSelectedRadioValue();
  }
}

// ===================================================
const oldSchoolIronPer = document.getElementById('oldSchoolIronPer');
const oldpercentages = [102.5, 97.5, 92.5, 87.5, 82.5, 77.5, 30];

// Ensure the table exists before proceeding
if (oldSchoolIronPer) {
  // Select the second row (index 1)
  const secondRow = oldSchoolIronPer.rows[1];
  for (let i = 1; i < secondRow.cells.length; i++) {
	const percentWeight = result * (oldpercentages[i - 1] / 100);

    const td = secondRow.cells[i];

    // Set the value as the index
    td.textContent = Math.round(percentWeight * 2) / 2 + ' ' + getSelectedRadioValue();
  }
}

// ===================================================
function roundToNearestHalf(value) {
	return Math.round(value * 2) / 2;
  }
  
  function calculateRM(weight, multiplier) {
	return roundToNearestHalf(Math.round((10000 * result) / ((333 * multiplier) + 10000) * 10) / 10) + ' ' + getSelectedRadioValue();
  }
  
  $(".onehundred").html(calculateRM(result, 0));
  $(".threeRM").html(calculateRM(result, 2));
  $(".fiveRM").html(calculateRM(result, 4));
  $(".sixRM").html(calculateRM(result, 5));
  $(".sevenRM").html(calculateRM(result, 6));
  $(".eightRM").html(calculateRM(result, 7));
  $(".nineRM").html(calculateRM(result, 8));
  $(".tenRM").html(calculateRM(result, 9));
  $(".twelveRM").html(calculateRM(result, 11));
  $(".fifteenRM").html(calculateRM(result, 14));

}
updateOneRepMaxPer()


function calculateEstimatedWeight(oneRepMaxWeight, desiredReps) {
	const estimatedWeight = oneRepMaxWeight / (1 + desiredReps / 30);
	
	// Round to the nearest 0.5
	const roundedWeight = Math.round(estimatedWeight * 2) / 2;
	
	return roundedWeight;
  }