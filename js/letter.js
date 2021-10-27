
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: [
			"Gửi cô bé của anh,<br>&nbsp;&nbsp;&nbsp;&nbsp;Vào ngày này 2 năm trước, trong một buổi chiều mưa, em đã chính thức bước vào thế giới của anh, nơi mà chỉ có anh và em. Hai năm không phải là 1 khoảng thời gian dài nhưng với anh, khoảng thời gian 2 năm này đủ anh hiểu về em nhiều hơn. Nhưng anh muốn hiểu hết về em nên anh muốn được yêu em và bên em thật lâu, thật lâu và mãi mãi…",
			"&nbsp;&nbsp;&nbsp;&nbsp; Chúng ta đã cùng nhau đi khắp con đường của Sài Gòn, trải qua nhiều cung bậc cảm xúc cùng nhau. Từ những lần đầu đi xem phim và không còn cảm giác lạnh nữa khi có em, những lần đi café đến chiều tối ở đường Lê Văn Lương, làm thợ chụp ảnh của em trong lần đi sinh nhật Chanyeol, cùng nhau xem đường lên đỉnh, đi ăn nướng và lẩu khi thèm, thuê xe đi Vũng Tàu cùng nhau, ở bên nhau như một nhà khi em vừa chuyển trọ, bay về Nghệ An bên nhau, còn đi Đồng Nai với nhau nữa và ngắm hoàng hôn ở GongCha nữa ….rất nhiều nữa, anh không",
			"thể kể hết được.<br>&nbsp;&nbsp;&nbsp;&nbsp; Hai năm qua, anh và em đã cùng nhau trải qua rất nhiều chuyện, cùng nhau thay đổi để hoàn thiện mình hơn. Về cô gái của anh, rất tuyệt… một cô gái ngày càng xinh đẹp, luôn nỗ lực từ học tập, làm việc và đến cả việc em tập luyện nữa. Anh thật sự rất may mắn khi được làm người yêu của em, bạn trai của một cô gái xinh đẹp về nhan sắc lẫn ngoại hình và rất giỏi.",
			"&nbsp;&nbsp;&nbsp;&nbsp; Anh biết là trong 2 năm qua, em thì ngày càng hoàn thiện hơn, còn anh giống như giậm chân tại chỗ. Kết quả học tập của anh không được tốt như của em. Anh cũng không kiếm việc làm để kiếm tiền như em. Anh cũng cố hết sức, không để em phải đợi anh, anh cảm nhận được em nghĩ anh là người không biết suy nghĩ, mãi không lớn nổi trong mỗi lần em nói “Em phải đợi anh đến khi mô”. Anh biết ở hiện tại anh không xứng với em tí nào, không đạt được những kì vọng của em, điều đó luôn làm em cả thấy buồn và khó chịu. Nhưng mong rằng",
			"em hãy luôn tin ở anh, anh sẽ làm được cả thôi, những ước mơ hay mục tiêu mà anh đặt ra và hướng đến. <br>&nbsp;&nbsp;&nbsp;&nbsp; Làm người yêu của em thật tuyệt, nên là anh không muốn ta chỉ có 2 năm, 3 năm hay 5 năm, anh muốn đến khi làm chồng em. Thật tuyệt khi có em luôn ở bên và trải qua mọi chuyện cùng anh. Anh sẽ luôn cố gắng thay đổi để không làm em buồn và khó chịu nữa, cố gắng hơn để ta có một cuộc sống tốt. Cùng anh vượt qua khoảng thời gian đối với anh là khó khăn này nha. Hãy luôn ở bên nhau, cùng nhau đi tiếp và",
			"cùng nhau trải qua nhiều ngày kỉ niệm hơn nữa nha em.<br>&nbsp;&nbsp;&nbsp;&nbsp; Chúc mừng kỉ niệm hai năm yêu nhau của ta!!!<br><br><p style='float:right; display:block; width:120px;'>Anh Yêu Em</p>"],
			typeSpeed: 100,
			backSpeed: 0
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	
	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
