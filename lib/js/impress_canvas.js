function ImpressCanvas(canvas_id) {
	this.canvas_id = canvas_id;
	
	this.clear = function () {
		var canvas = document.getElementById(this.canvas_id);
		var context = canvas.getContext('2d');
		var image_data = context.createImageData(canvas.width, canvas.height);

		context.putImageData(image_data, 0, 0);
	}
	
	this.set = function (data) {
		var canvas = document.getElementById(this.canvas_id);
		var context = canvas.getContext('2d');
		var image_data = context.createImageData(canvas.width, canvas.height);
		
		for (var i = 0; i < data.length; i++) {
			image_data.data[i] = data[i];
		}
		
		context.putImageData(image_data, 0, 0);
	}
	
	this.get = function () {
		var canvas = document.getElementById(this.canvas_id);
		var context = canvas.getContext('2d');
		var image_data = context.getImageData(0, 0, canvas.width, canvas.height);
		
		var data = [];
		for (var i = 0; i < image_data.width * image_data.height * 4; i++) {
			data[i] = image_data.data[i];
		}
		
		return data;
	}
	
	this.load = function (img) {
		var canvas = document.getElementById(this.canvas_id);
		canvas.width = img.width;
		canvas.height = img.height;

		var context = canvas.getContext('2d');
		context.drawImage(img, 0, 0);
	}
	
	this.get_width = function () {
		return document.getElementById(this.canvas_id).width;
	}

	this.get_height = function () {
		return document.getElementById(this.canvas_id).height;
	}
}