$(function(){

var jianli=$('.jianli');
jianli.on('click',function(){
	$('.jian-photo').addClass('active')
})
$('.jian-photo .button').on('click',function(){
	$('.jian-photo').removeClass('active')
})
})




