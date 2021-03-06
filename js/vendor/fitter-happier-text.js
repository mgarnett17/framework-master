// https://github.com/jxnblk/fitter-happier-text
// fitter-happier-text.js Plugin *Pure JS

!function (t) {
	if ("object" == typeof exports) module.exports = t();
	else if ("function" == typeof define && define.amd) define(t);
	else {
		var e;
		"undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.fitterHappierText = t()
	}
}(function() {
	return function t(e, r, i) {
		function n(f, u) {
			if (!r[f]) {
				if (!e[f]) {
					var s = "function" == typeof require && require;
					if (!u && s) return s(f, !0);
					if (o) return o(f, !0);
					throw new Error("Cannot find module '" + f + "'")
				}
				var l = r[f] = {
					exports: {}
				};
				e[f][0].call(l.exports, function(t) {
					var r = e[f][1][t];
					return n(r ? r : t)
				}, l, l.exports, t, e, r, i)
			}
			return r[f].exports
		}
		for (var o = "function" == typeof require && require, f = 0; f < i.length; f++) n(i[f]);
		return n
	}({
		1: [function(t, e) {
			e.exports = function(t, e) {
				for (var e = e || {}, r = e.baseline || 16, i = e.paddingY || 0, n = e.paddingX || 0, o = e.doc || document, f = 0; f < t.length; f++) {
					var u, s, l = t[f].textContent,
						a = o.createElementNS("http://www.w3.org/2000/svg", "svg"),
						d = o.createElementNS("http://www.w3.org/2000/svg", "text");
					d.textContent = l, d.setAttribute("x", "50%"), d.setAttribute("y", r), d.setAttribute("font-family", "inherit"), d.setAttribute("font-size", "1rem"), d.setAttribute("font-weight", "inherit"), d.setAttribute("style", "text-anchor:middle");
					for (var p = 0; p < t[f].attributes.length; p++) a.setAttribute(t[f].attributes[p].name, t[f].attributes[p].value);
					a.setAttribute("width", "100%"), a.setAttribute("style", "max-height:100%"), a.setAttribute("fill", "currentcolor"), a.setAttribute("overflow", "visible"), a.appendChild(d), t[f].parentNode.replaceChild(a, t[f]), u = d.offsetWidth || d.getComputedTextLength(), s = d.offsetHeight || 24, a.setAttribute("viewBox", "0 0 " + (u + 2 * n) + " " + (s + i))
				}
			}
		}, {}]
	}, {}, [1])(1)
});

// Initialize fitter-happier-text.js
var nodes = document.querySelectorAll('[data-fitter-happier-text]');
fitterHappierText(nodes, { baseline: 14, paddingY: 0, paddingX: 0 });