function mask (source, destination, mask) {
	for (var code = 0; code < 4; code++) {
		if (mask[i]) {
			for(var i = 0; i < source.length / 4; i++) {
				destination[i * 4 + code] = source[i * 4 + code];
			}
		}
	}
}