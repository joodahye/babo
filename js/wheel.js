$(document).ready(function(){

	//문서의 스크롤바높이를 0으로 설정
	$(document).scrollTop(0);
	//각 섹션의 높이를 변수에 할당.
	const s0 = $(".sec").eq(0).offset().top;//절대값(브라우저기준으로측정)
	const s1 = $(".sec").eq(1).offset().top;//100vh
	const s2 = $(".sec").eq(2).offset().top;//200vh
	console.log(s2);//예_1874(기본단위픽셀)
	const s3 = $(".sec").eq(3).offset().top;//300vh
	const s4 = $(".sec").eq(4).offset().top;//400vh
	const s5 = $(".sec").eq(5).offset().top;//500vh
		
	let st = 0;			
	let last = 0;
	
	$(window).scroll(function(){
	
				//스크롤내리면, 스크롤윗쪽 top값을 st변수에 할당함.
				st = $(this).scrollTop();
				
				//( 150 > 0 )
				if (st > last){
							   
					   if (st < s1){							
							move(1);
					   }
					   if( st > s1 && st < s2 ){
							move(2);							
					   }
					   if( st>s2 && st<s3 ){
							move(3);							
						}
					   if( st>s3 && st<s4 ){
							move(4);
					   }
					   if( st>s4 && st<s5 ){
							move(5);
					   }			   
				   
				} 
				if (st < last){	
						//console.log("위로 올림");				   
						if(st<=s5 && st>s4){							
							move(4);
						}
						if(st<=s4 && st>s3){							
							move(3);
						}
						if(st<=s3 && st>s2){							
							move(2);
						}
						if(st<=s2 && st>s1){							
							move(1);
						}
						if(st<=s1 ){							
							move(0);
						}
				}
				//스크롤 내렸을때의 top을   마지막의 스크롤 top에 값 넘겨줌
				last = st;				
	});//scroll()끝
			
	let p= 0 ;
	function move(i){
				switch(i){
					case 0: p = s0;
							break;
					case 1: p = s1;
							break;
					case 2: p = s2;
							break;
					case 3: p = s3;
							break;
					case 4: p = s4;
							break;
					case 5: p = s5;						
				}
				$("html,body").stop().animate({scrollTop:p},70);
	}//move()끝			

	
});////////////////end