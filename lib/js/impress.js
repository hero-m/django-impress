function Impress(image_data, canvas_id) {
	
	this.from_image_data = function () {
		this.saved = JSON.parse(image_data.saved);
		this.active = JSON.parse(image_data.active);
		this.width = image_data.width;
		this.height = image_data.height;
		this.canvas.set(this.active);

		this.pixels = this.width * this.height;
		this.length = this.pixels * 4;
	}
	this.from_canvas = function () {
		this.width = this.canvas.get_width();
		this.height = this.canvas.get_height();
		this.image_data = this.canvas.get();
		this.saved = this.canvas.get();
		this.active = this.canvas.get();
		
		this.pixels = this.width * this.height;
		this.length = this.pixels * 4;
	}
	
	this.init = function (image_data, canvas_id) {
		this.url = image_data.url;
		this.name = image_data.name;
		this.canvas = new ImpressCanvas(canvas_id);
		
		if (image_data.width !== 0) {
			this.from_image_data();
		} else {
			var img = new Image();
			var that = this;
			img.onload = function () {
				that.canvas.load(img);
				that.from_canvas();
			}
			img.src = this.url;
		}
		
	};

	this.init(image_data, canvas_id);
}
