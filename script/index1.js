function drag() {
	document.getElementById("nav-drag").offsetWidth
}
$("#close-navbar").click(function () {
	var e = document.getElementById("nav-drag");
	e.style.width = "0", e.style.visibility = "hidden", document.getElementById("box-2").style.width = "100%", trage.style.visibility = "visible"
}), $("#trage").click(function () {
	var e = document.getElementById("nav-drag"),
		n = document.getElementById("trage");
	e.style.visibility = "visible", e.style.display = "inline-block", e.style.width = "320px", n.style.visibility = "hidden"
}), $(document).ready(function () {
	$(window).scroll(function () {
		$(this).scrollTop() > 100 ? $(".mergisus").fadeIn() : $(".mergisus").fadeOut()
	}), $(".mergisus").click(function () {
		return $("html, body").animate({
			scrollTop: 0
		}, 600), !1
	})
}), window.addEventListener("load", function () {
	document.querySelector(".animatie").className += " hidden"
}), $("#copiazaIP").click(function () {
	swal({
		title: "Вы скопировали IP!",
		text: "Заходите на наш сервер и веселитесь",
		icon: "success",
		button: "Закрыть",
		timer: 1500
	}), document.getElementById("ipServer").select(), document.execCommand("copy")
}), $("#open-nav").on("click", function () {
	$("#shadow-open").addClass("shadow-open"), document.getElementById("mobile-nav").style.left = "0px"
});
var _0x2180 = ["241894", "log"];
! function (e, n) {
	! function (n) {
		for (; --n;) e.push(e.shift())
	}(++n)
}(_0x2180, 216);
var _0x183c = function (e, n) {
	return _0x2180[e -= 0]
};

function getId() {
	console[_0x183c("0x1")](_0x183c("0x0"))
}
$("#close-nav").on("click", function () {
	$("#shadow-open").removeClass("shadow-open"), document.getElementById("mobile-nav").style.left = "-300px"
}), $(document).keyup(function (e) {
	27 === e.keyCode && ($("#shadow-open").removeClass("shadow-open"), document.getElementById("mobile-nav").style.left = "-300px")
}), $(function () {
	$("html").click(function (e) {
		"shadow-open" == e.target.id && ($("#shadow-open").removeClass("shadow-open"), document.getElementById("mobile-nav").style.left = "-300px")
	})
}), window.onload = function () {
	var e = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
	console.log("Page load time is " + e + " ms")
};