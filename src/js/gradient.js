//---> Create	:	1397.03.05  ->  2018.05.26
//---> Finish	:	1397.03.09  ->  2018.05.30
//---> Update	:	--
/*****************************/
/* jquery required */
$(document).ready(function () {
	
	if ($('.bg_gradient').length === 0) return;
	
	webcolors = {
		"red_50":		"#FFEBEE",
		"red_100":		"#FFCDD2",
		"red_200":		"#EF9A9A",
		"red_300":		"#E57373",
		"red_400":		"#EF5350",
		"red_500":		"#F44336",
		"red_600":		"#E53935",
		"red_700":		"#D32F2F",
		"red_800":		"#C62828",
		"red_900":		"#B71C1C",
		"red_a100":		"#FF8A80",
		"red_a200":		"#FF5252",
		"red_a400":		"#FF1744",
		"red_a700":		"#D50000",
		
		"pink_50":		"#fce4ec",
		"pink_100":		"#f8bbd0",
		"pink_200":		"#f48fb1",
		"pink_300":		"#f06292",
		"pink_400":		"#ec407a",
		"pink_500":		"#e91e63",
		"pink_600":		"#d81b60",
		"pink_700":		"#c2185b",
		"pink_800":		"#ad1457",
		"pink_900":		"#880e4f",
		"pink_a100":	"#ff80ab",
		"pink_a200":	"#ff4081",
		"pink_a400":	"#f50057",
		"pink_a700":	"#c51162",
		
		"purple_50":		"#f3e5f5",
		"purple_100":		"#e1bee7",
		"purple_200":		"#ce93d8",
		"purple_300":		"#ba68c8",
		"purple_400":		"#ab47bc",
		"purple_500":		"#9c27b0",
		"purple_600":		"#8e24aa",
		"purple_700":		"#7b1fa2",
		"purple_800":		"#6a1b9a",
		"purple_900":		"#4a148c",
		"purple_a100":		"#ea80fc",
		"purple_a200":		"#e040fb",
		"purple_a400":		"#d500f9",
		"purple_a700":		"#aa00ff",
		
		"deep-purple_50":		"#ede7f6",
		"deep-purple_100":		"#d1c4e9",
		"deep-purple_200":		"#b39ddb",
		"deep-purple_300":		"#9575cd",
		"deep-purple_400":		"#7e57c2",
		"deep-purple_500":		"#673ab7",
		"deep-purple_600":		"#5e35b1",
		"deep-purple_700":		"#512da8",
		"deep-purple_800":		"#4527a0",
		"deep-purple_900":		"#311b92",
		"deep-purple_a100":		"#b388ff",
		"deep-purple_a200":		"#7c4dff",
		"deep-purple_a400":		"#651fff",
		"deep-purple_a700":		"#6200ea",
		
		"indigo_50":		"#e8eaf6",
		"indigo_100":		"#c5cae9",
		"indigo_200":		"#9fa8da",
		"indigo_300":		"#7986cb",
		"indigo_400":		"#5c6bc0",
		"indigo_500":		"#3f51b5",
		"indigo_600":		"#3949ab",
		"indigo_700":		"#303f9f",
		"indigo_800":		"#283593",
		"indigo_900":		"#1a237e",
		"indigo_a100":		"#8c9eff",
		"indigo_a200":		"#536dfe",
		"indigo_a400":		"#3d5afe",
		"indigo_a700":		"#304ffe",
		
		"blue_50":		"#E3F2FD",
		"blue_100":		"#BBDEFB",
		"blue_200":		"#90CAF9",
		"blue_300":		"#64B5F6",
		"blue_400":		"#42A5F5",
		"blue_500":		"#2196F3",
		"blue_600":		"#1E88E5",
		"blue_700":		"#1976D2",
		"blue_800":		"#1565C0",
		"blue_900":		"#0D47A1",
		"blue_a100":	"#82B1FF",
		"blue_a200":	"#448AFF",
		"blue_a400":	"#2979FF",
		"blue_a700":	"#2962FF",
		
		"light-blue_50":		"#e1f5fe",
		"light-blue_100":		"#b3e5fc",
		"light-blue_200":		"#81d4fa",
		"light-blue_300":		"#4fc3f7",
		"light-blue_400":		"#29b6f6",
		"light-blue_500":		"#03a9f4",
		"light-blue_600":		"#039be5",
		"light-blue_700":		"#0288d1",
		"light-blue_800":		"#0277bd",
		"light-blue_900":		"#01579b",
		"light-blue_a100":		"#80d8ff",
		"light-blue_a200":		"#40c4ff",
		"light-blue_a400":		"#00b0ff",
		"light-blue_a700":		"#0091ea",
		
		"cyan_50":		"#e0f7fa",
		"cyan_100":		"#b2ebf2",
		"cyan_200":		"#80deea",
		"cyan_300":		"#4dd0e1",
		"cyan_400":		"#26c6da",
		"cyan_500":		"#00bcd4",
		"cyan_600":		"#00acc1",
		"cyan_700":		"#0097a7",
		"cyan_800":		"#00838f",
		"cyan_900":		"#006064",
		"cyan_a100":	"#84ffff",
		"cyan_a200":	"#18ffff",
		"cyan_a400":	"#00e5ff",
		"cyan_a700":	"#00b8d4",
		
		"teal_50":		"#e0f2f1",
		"teal_100":		"#b2dfdb",
		"teal_200":		"#80cbc4",
		"teal_300":		"#4db6ac",
		"teal_400":		"#26a69a",
		"teal_500":		"#009688",
		"teal_600":		"#00897b",
		"teal_700":		"#00796b",
		"teal_800":		"#00695c",
		"teal_900":		"#004d40",
		"teal_a100":	"#a7ffeb",
		"teal_a200":	"#64ffda",
		"teal_a400":	"#1de9b6",
		"teal_a700":	"#00bfa5",
		
		"green_50":		"#E8F5E9",
		"green_100":	"#C8E6C9",
		"green_200":	"#A5D6A7",
		"green_300":	"#81C784",
		"green_400":	"#66BB6A",
		"green_500":	"#4CAF50",
		"green_600":	"#43A047",
		"green_700":	"#388E3C",
		"green_800":	"#2E7D32",
		"green_900":	"#1B5E20",
		"green_a100":	"#B9F6CA",
		"green_a200":	"#69F0AE",
		"green_a400":	"#00E676",
		"green_a700":	"#00C853",
		
		"light-green_50":		"#f1f8e9",
		"light-green_100":		"#dcedc8",
		"light-green_200":		"#c5e1a5",
		"light-green_300":		"#aed581",
		"light-green_400":		"#9ccc65",
		"light-green_500":		"#8bc34a",
		"light-green_600":		"#7cb342",
		"light-green_700":		"#689f38",
		"light-green_800":		"#558b2f",
		"light-green_900":		"#33691e",
		"light-green_a100":		"#ccff90",
		"light-green_a200":		"#b2ff59",
		"light-green_a400":		"#76ff03",
		"light-green_a700":		"#64dd17",
		
		"lime_50":		"#f9fbe7",
		"lime_100":		"#f0f4c3",
		"lime_200":		"#e6ee9c",
		"lime_300":		"#dce775",
		"lime_400":		"#d4e157",
		"lime_500":		"#cddc39",
		"lime_600":		"#c0ca33",
		"lime_700":		"#afb42b",
		"lime_800":		"#9e9d24",
		"lime_900":		"#827717",
		"lime_a100":	"#f4ff81",
		"lime_a200":	"#eeff41",
		"lime_a400":	"#c6ff00",
		"lime_a700":	"#aeea00",
		
		"yellow_50":	"#fffde7",
		"yellow_100":	"#fff9c4",
		"yellow_200":	"#fff59d",
		"yellow_300":	"#fff176",
		"yellow_400":	"#ffee58",
		"yellow_500":	"#ffeb3b",
		"yellow_600":	"#fdd835",
		"yellow_700":	"#fbc02d",
		"yellow_800":	"#f9a825",
		"yellow_900":	"#f57f17",
		"yellow_a100":	"#ffff8d",
		"yellow_a200":	"#ffff00",
		"yellow_a400":	"#ffea00",
		"yellow_a700":	"#ffd600",
		
		"amber_50":		"#fff8e1",
		"amber_100":	"#ffecb3",
		"amber_200":	"#ffe082",
		"amber_300":	"#ffd54f",
		"amber_400":	"#ffca28",
		"amber_500":	"#ffc107",
		"amber_600":	"#ffb300",
		"amber_700":	"#ffa000",
		"amber_800":	"#ff8f00",
		"amber_900":	"#ff6f00",
		"amber_a100":	"#ffe57f",
		"amber_a200":	"#ffd740",
		"amber_a400":	"#ffc400",
		"amber_a700":	"#ffab00",
		
		"orange_50":		"#fff3e0",
		"orange_100":		"#ffe0b2",
		"orange_200":		"#ffcc80",
		"orange_300":		"#ffb74d",
		"orange_400":		"#ffa726",
		"orange_500":		"#ff9800",
		"orange_600":		"#fb8c00",
		"orange_700":		"#f57c00",
		"orange_800":		"#ef6c00",
		"orange_900":		"#e65100",
		"orange_a100":		"#ffd180",
		"orange_a200":		"#ffab40",
		"orange_a400":		"#ff9100",
		"orange_a700":		"#ff6d00",
		
		"deep-orange_50":		"#fbe9e7",
		"deep-orange_100":		"#ffccbc",
		"deep-orange_200":		"#ffab91",
		"deep-orange_300":		"#ff8a65",
		"deep-orange_400":		"#ff7043",
		"deep-orange_500":		"#ff5722",
		"deep-orange_600":		"#f4511e",
		"deep-orange_700":		"#e64a19",
		"deep-orange_800":		"#d84315",
		"deep-orange_900":		"#bf360c",
		"deep-orange_a100":		"#ff9e80",
		"deep-orange_a200":		"#ff6e40",
		"deep-orange_a400":		"#ff3d00",
		"deep-orange_a700":		"#dd2c00",
		
		"brown_50":		"#efebe9",
		"brown_100":	"#d7ccc8",
		"brown_200":	"#bcaaa4",
		"brown_300":	"#a1887f",
		"brown_400":	"#8d6e63",
		"brown_500":	"#795548",
		"brown_600":	"#6d4c41",
		"brown_700":	"#5d4037",
		"brown_800":	"#4e342e",
		"brown_900":	"#3e2723",
		
		"blue-grey_50":		    "#eceff1",
		"blue-grey_100":		"#cfd8dc",
		"blue-grey_200":		"#b0bec5",
		"blue-grey_300":		"#90a4ae",
		"blue-grey_400":		"#78909c",
		"blue-grey_500":		"#607d8b",
		"blue-grey_600":		"#546e7a",
		"blue-grey_700":		"#455a64",
		"blue-grey_800":		"#37474f",
		"blue-grey_900":		"#263238",
		
		"grey_50":		"#fafafa",
		"grey_100":		"#f5f5f5",
		"grey_200":		"#eeeeee",
		"grey_300":		"#e0e0e0",
		"grey_400":		"#bdbdbd",
		"grey_500":		"#9e9e9e",
		"grey_600":		"#757575",
		"grey_700":		"#616161",
		"grey_800":		"#424242",
		"grey_900":		"#212121",
		"grey_0":		"#000",
		"grey_1":		"#111",
		"grey_2":		"#222",
		"grey_3":		"#333",
		"grey_4":		"#444",
		"grey_5":		"#555",
		"grey_6":		"#666",
		"grey_7":		"#777",
		"grey_8":		"#888",
		"grey_9":		"#999",
		"grey_a":		"#aaa",
		"grey_b":		"#bbb",
		"grey_c":		"#ccc",
		"grey_d":		"#ddd",
		"grey_e":		"#eee",
		"grey_f":		"#fff",
		"grey_f0":		"#f0f0f0",
		"grey_f1":		"#f1f1f1",
		"grey_f2":		"#f2f2f2",
		"grey_f3":		"#f3f3f3",
		"grey_f4":		"#f4f4f4",
		"grey_f5":		"#f5f5f5",
		"grey_f6":		"#f6f6f6",
		"grey_f7":		"#f7f7f7",
		"grey_f8":		"#f8f8f8",
		"grey_f9":		"#f9f9f9",
		"grey_fa":		"#fafafa",
		"grey_fb":		"#fbfbfb",
		"grey_fc":		"#fcfcfc",
		"grey_fd":		"#fdfdfd",
		"grey_fe":		"#fefefe",
		
		"white":        "#fff",
		"black":        "#000",
		"transparent":  "transparent",
		
		"red":          "#F44336",
		"pink":         "#e91e63",
		"purple":       "#9c27b0",
		"deep-purple":  "#673ab7",
		"indigo":       "#3f51b5",
		"blue":         "#2196F3",
		"light-blue":   "#03a9f4",
		"cyan":         "#00bcd4",
		"teal":         "#009688",
		"green":        "#4CAF50",
		"light-green":  "#8bc34a",
		"lime":         "#cddc39",
		"yellow":       "#ffeb3b",
		"amber":        "#ffc107",
		"orange":       "#ff9800",
		"deep-orange":  "#ff5722",
		"brown":        "#795548",
		"blue-grey":    "#607d8b",
		"grey":         "#9e9e9e"
		
	};
	
	webColors_gradient = new class_webColors_gradient();
	
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
			self.simple(item, data);
			/*if (typeof data === 'string') {
				self.simple(item, data);
			}
			else if (typeof data === 'object') {
				self.advanced(item, data);
			}*/
		});
	};
	
	this.simple = function(item, data) {
		// usage example : <div class="bg_gradient" data-gradient="to bottom left, [red_100], [red_300]"></div>
		data = self.replaceColor(data);
		$(item).css('background', 'linear-gradient(' + data + ')');
	}; //done
	
	/*this.advanced = function(item, data_array) {
		// usage advanced : <div class="bg_gradient" data-gradient='["to bottom left, [red], [orange]", "to top left, [blue], [indigo]"]'></div>
		// data gradient has a simple json array format including multiple strings. and each string is like a simple gradient example. easy right?!
		var css_value = '';
		$(data_array).each(function(key, data) {
			data = self.replaceColor(data);
			css_value = css_value + 'linear-gradient(' + data + ')';
			if (key + 1 < data_array.length) {
				css_value = css_value + ','
			}
			console.log(css_value);
			// $(item).css('background', 'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)');
			$(item).css('background', css_value);
		});
	}; //done*/
	
	this.replaceColor = function(string) {
		$.each(webcolors, function(name, color) {
			string = string.replace('[' + name + ']', color)
		});
		return string;
	}; //done
	
	/*****************************/
	// After All Methods :
	var __construct = function(that) {
		that.init();
	}(self)
}
