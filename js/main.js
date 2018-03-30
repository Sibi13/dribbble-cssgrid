(function($){

	var $navbarToggle = $("#navbar-toggle");
	var $navLinks = $(".nav-links");
	var $navLink = $(".nav-link");
	var $submenuLabel = $(".submenu-label");

	$navbarToggle.on("click", function(){
		$navLinks.toggleClass("is-open");
	});

	$submenuLabel.on("click", function(){
		var $parent = $(this).parent();
		$parent.toggleClass("is-open");
		$navLink.filter(":not(.nav-link--sign-in)").not($parent).toggleClass("is-hidden");
	});

})(Zepto);