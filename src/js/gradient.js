//---> Create	:	1397.03.05
//---> Finish	:	--
//---> Update	:	--
/*****************************/
/* jquery required */
$(document).ready(function () {
	
	if ($('.bg_gradient').length === 0) return;
	
	webColors_gradient = new class_webColors_gradient();
	
	// usage example :
	// example simple   : <div class="bg_gradient" data-gradient='["to bottom left, red_100, red_300"]'></div>
	// example advanced : <div class="bg_gradient" data-gradient='["to bottom left, red, orange", "to top left, blue, indigo"]'></div>
	
});

function class_webColors_gradient() {
	
	var self = this;
	
	/*****************************/
	
	this.init = function() {
		self.handler();
	};
	
	/*****************************/
	
	this.busyCode = 0;
	
	/*****************************/
	
	this.handler = function() {
		var gradient_items = $('.bg_gradient');
		$(gradient_items).each(function(key, item) {
			var data = $(item).data('gradient');
			try {
				var data = JSON.parse(data);
				self.advanced(item, data);
			}
			catch (e) {
				self.simple(item, data);
			}
		});
	};
	
	this.simple = function(item, data) {
		// usage example : <div class="bg_gradient" data-gradient="to bottom left, red_100, red_300"></div>
		//data = data.split(',');
		$(this).css('background', 'linear-gradient(' + data + ')');
	}; //done
	
	this.advanced = function(item, data_array) {
		// usage advanced : <div class="bg_gradient" data-gradient='["to bottom left, red, orange", "to top left, blue, indigo"]'></div>
		// data gradient has a simple json array format including multiple strings. and each string is like a simple gradient example. easy right?!
		var css_value = '';
		$(data_array).each(function(key, value) {
			css_value = css_value + 'linear-gradient(' + value + ')';
			if (key + 1 < data_array.length) {
				css_value = css_value + ','
			}
			$(item).css('background', css_value);
		});
	};
	
	/*****************************/
	// After All Methods :
	var __construct = function(that) {
		that.init();
	}(self)
}