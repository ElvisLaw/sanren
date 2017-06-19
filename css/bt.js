$(this).scroll(function() {
			var t = this.pageYOffset;
			if(t > 2200) {
				$(".bt").css("display", "block");
			} else {
				$(".bt").css("display", "none");
			}
		});