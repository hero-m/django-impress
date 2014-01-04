Impress.prototype.get_channel = function (channel) {
	this.image_data = [];
	var code = channel_code(channel);
	
	for (var i = 0; i < this.length; i++) {
		if (i % 4 == code) {
			this.image_data[i] = this.active[i];
		} else if (i % 4 == 3) {
			// show r,g,b channels with full alpha.
			this.image_data[i] = 255;
		} else {
			this.image_data[i] = 0;
		}
	}
	this.canvas.set(this.image_data);
}


Impress.prototype.exclude_channel = function (channel) {
	this.image_data = [];
	var code = channel_code(channel);
	
	for (var i = 0; i < this.length; i++) {
		if (i % 4 == code) {
			this.image_data[i] = 0;
		} else {
			this.image_data[i] = this.active[i];
		}
	}
	this.canvas.set(this.image_data);
}

function channel_code(channel) {
	switch(channel) {
	case 'r':
		return 0;
	case 'g':
		return 1;
	case 'b':
		return 2;
	case 'a':
		return 3;
	}
}
