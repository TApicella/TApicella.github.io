$(document).ready(function(){
	$("#skills-seeMetridoc").click(function(){
		if($(this).hasClass("glyphicon-remove")){
			$("#skills-ridAdminForm-TM").slideUp("slow");
			$("#skills-manageControllers-TM").slideUp("slow");
			$("#skills-ridAdminForm-MD").slideUp("slow");
			$("#skills-manageControllers-MD").slideUp("slow");
		}
		else{
			$("#skills-ridAdminForm-TM").slideDown("slow");
			$("#skills-manageControllers-TM").slideDown("slow");
		}
		refresh_X();
		$(this).toggleClass("glyphicon-remove").toggleClass("glyphicon-eye-open");
	});
	$("[class^='img-controls']").hover(function(){
		$(this).find("[class^='img-ctrlbar']").slideDown("slow");
	}, function(){
		$(this).find("[class^='img-ctrlbar']").slideUp("slow");
	});
	$("#skills-ridAdminForm-expand").click(function(){
		if($(this).hasClass("glyphicon-remove")){
			$("#skills-ridAdminForm-MD").slideUp("slow");
			$("#skills-manageControllers-MD").slideUp("slow");
		}
		else{
			$("#skills-ridAdminForm-MD").slideDown("slow");
			$("#skills-manageControllers-MD").slideUp("slow");
			$("#skills-ridAdminForm-TM").slideUp("slow");
			$("#skills-manageControllers-TM").slideUp("slow");
		}
		$("#skills-manageControllers-expand").toggleClass("glyphicon-remove", false).toggleClass("glyphicon-fullscreen", true);
		$(this).toggleClass("glyphicon-remove").toggleClass("glyphicon-fullscreen");
	});

	$("#skills-manageControllers-expand").click(function(){
		if($(this).hasClass("glyphicon-remove")){
			$("#skills-ridAdminForm-MD").slideUp("slow");
			$("#skills-manageControllers-MD").slideUp("slow");
		}
		else{
			$("#skills-ridAdminForm-MD").slideUp("slow");
			$("#skills-manageControllers-MD").slideDown("slow");
			$("#skills-ridAdminForm-TM").slideUp("slow");
			$("#skills-manageControllers-TM").slideUp("slow");
		}
		$("#skills-ridAdminForm-expand").toggleClass("glyphicon-remove", false).toggleClass("glyphicon-fullscreen", true);
		$(this).toggleClass("glyphicon-remove").toggleClass("glyphicon-fullscreen");
	});

	$("#skills-manageControllers-close").click(function(){
		$(this).closest(".img-wrapper-MD").slideUp("slow");
		refresh_X();
		$("#skills-ridAdminForm-TM").slideDown("slow");
		$("#skills-manageControllers-TM").slideDown("slow");
	});
	$("#skills-ridAdminForm-close").click(function(){
		$(this).closest(".img-wrapper-MD").slideUp("slow");
		refresh_X();
		$("#skills-ridAdminForm-TM").slideDown("slow");
		$("#skills-manageControllers-TM").slideDown("slow");
	});

	function refresh_X(){
		$("#skills-manageControllers-expand").toggleClass("glyphicon-remove", false).toggleClass("glyphicon-fullscreen", true);
		$("#skills-ridAdminForm-expand").toggleClass("glyphicon-remove", false).toggleClass("glyphicon-fullscreen", true);
	}
});