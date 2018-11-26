;(function() {
	function findFirstPositive(b, a, i, _c) {
		_c = function c(d, e) {
			return e >= d ? (a = d + (e - d) / 2, 0 < b(a) && (a == d || 0 >= b(a - 1)) ? a : 0 >= b(a) ? _c(a + 1, e) : _c(d, a - 1)) : -1;
		};
		for (i = 1; 0 >= b(i);) {
			i *= 2;
		}return _c(i / 2, i) | 0;
	}

	var dpi = findFirstPositive(function (x) {
		return matchMedia("(max-resolution: " + x + "dpi)").matches;
	});

	var reference = 96; //somente para referencia  > https://developer.mozilla.org/pt-BR/docs/Mozilla/Mobile/Viewport_meta_
	var scale = (1 / reference); // 96 passa a ser a escala 1
	var initialScale = 1;
	var maxScale = 2;// quanto maior o dpi, menor a escala

	if (dpi >= reference){
		initialScale = maxScale - ((dpi - reference) * scale);
	}

	document.getElementById("viewport").setAttribute("content", "viewport-fit=cover, width=device-width, initial-scale="+(initialScale>=1?initialScale:1).toString().substring(0,4));
}());
