//11
$('article').hide().slideDown(1000); 
//12
$('article').click(function (){
$(this).remove();	
});
//13
document.getElementById('cart').onclick = function() {
      document.getElementById('article').hidden = true;
  }