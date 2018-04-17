$(document).ready(function(){
	$('.orderstatus i').click(function(){
		$('.mc_flight_detail').css('display','block');
		$('.price').css('display','block');
		$('.app').css({'position':'fixed','top':'0px'});
	});
	$('.closepage').click(function(){
		$('.mc_flight_detail').css('display','none');
		$('.price').css('display','none');
		$('.tgqrule').css('display','none');
		$('.app').css({'position':'relative'});
	});
	$('.tgq_detail').click(function(){
		$('.mc_flight_detail').css('display','block');
		$('.tgqrule').css('display','block');
		$('.app').css({'position':'fixed','top':'0px'});
	});
	$('.orderstatus>em').click(function(){
		$('.mc_flight_detail').css('display','block');
		$('.tgqrule').css('display','block');
		$('.app').css({'position':'fixed','top':'0px'});
	});
	$('.imgtel>pos').click(function(){
		location.href='4008888888';
	});
	

	function countdown (){
		var payMinute = 30;
        var paySecond = 00;
	  var time = setInterval(function(){
       if(paySecond == 0){
        	paySecond =60;
       	    payMinute--;
       	    if(payMinute<10){
       	    	payMinute = '0'+payMinute;
       	    }
       }
       if(paySecond<=60){
           paySecond--;
           if(paySecond<10){
           	paySecond = '0'+paySecond;
           }

       }
       if(paySecond == 0 && payMinute == 0){
       	      clearInterval(time);
             $('.ontimebuy').css('display','none');
             $('.btn').css('display','block');
       }
       $('.payMinute').text(payMinute);
	   $('.paySecond').text(paySecond);

	},1000);
	
}      
     $('.orderFlagState').text('待出行'); //更改订单状态，相应的按钮状态改变
      if($('.orderFlagState').text() == '待支付'){
      	countdown();
      }else {
        $('.btn').css('display','block');
        $('.ontimebuy').css('display','none');
      }

     	

})