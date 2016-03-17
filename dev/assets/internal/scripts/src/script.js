/* Author: Emma Charpentier */

$(document).ready(function() {




/* !DEVELOPMENT MODE
----------------------------------------------- */
	if(window.location.href.indexOf("?") > -1) {
		var dev_mode = document.location.href.split("?")[1];
		$('a[href*="cmpop"], a[href*="../"], a[href*="./"]').each(function() {
			var link = $(this).attr('href');
			$(this).attr('href', link+'?'+dev_mode);
		 }
		);
	}		
});