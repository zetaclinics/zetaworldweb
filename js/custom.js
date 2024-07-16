(function($) {
 "use strict";

	$("#bltb").on("click", function(){ 
	//alert("test");
		var gonderilenform1 = $("#blt").serialize(); 
		$.ajax({
			url:'c-bulten.php', 
			type:'POST',
			data:gonderilenform1,
			success:function(e){ 
			    $("#sonucb").fadeIn(200).addClass("hata").html("");
				$("#sonucb").html("").html(e); 
		}
		});
	});
	
$(document).ready(function() {
window.onload = function() {
var rfH2=$('.mnh').height();
$('.mnh1').height(rfH2);
};

window.onresize = function(event) {
var rfH2=$('.mnh').height();
$('.mnh1').height(rfH2);
};
});
	

window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#353940d4",
      "text": "#ffffff" 
    },
    "button": {
      "background": "#59abe3", 
      "text": "#ffffff" 
    }
  },
  "theme": "edgeless", 
  "content": {
    "message": "Sitemizden en iyi şekilde faydalanabilmeniz için çerezler kullanılmaktadır. Bu siteye giriş yaparak çerez kullanımını kabul etmiş sayılıyorsunuz.",
    "dismiss": "Tamam",
    "link": "Daha fazla bilgi",
    "href": "./zetaworld/cerez-politikasi"
  }
})});

	
})(jQuery);