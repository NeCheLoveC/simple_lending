$(document).ready(function(){
	$(`.fairy-tail--slaider`).slick({
		arrows:false,
		dots:true
	});
	$(`.our-trip-slaider`).slick({
		arrows:false,
		dots:true
	})
	let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

	if((posTop > ($(`.header`).height() + $(`.fairy-tail`).height() + 200)) && (posTop <= ($(`.header`).height() + $(`.fairy-tail`).height() + $(`.our-trip`).height() + 400))){
		$(`#mark_1`).css(`border-bottom`,`none`);
		$(`#mark_2`).css(`border-bottom`,`none`);
		$(`.header__item--menu--underline-on`).css(`border-bottom`,`2px solid black`);
	}
	else if((posTop > ($(`.header`).height() + $(`.fairy-tail`).height() + $(`.our-trip`).height() + 400)) && (posTop <= ($(`.header`).height() + $(`.fairy-tail`).height() + $(`.our-trip`).height() + $(`.hotel`).height() + 600))){
		$(`#mark_1`).css(`border-bottom`,`2px solid black`);
		$(`#mark_2`).css(`border-bottom`,`none`);
		$(`.header__item--menu--underline-on`).css(`border-bottom`,`none`);
	}	
	else if((posTop > ($(`.header`).height() + $(`.fairy-tail`).height() + $(`.our-trip`).height() + $(`.hotel`).height() + 600)) && (posTop <= ($(`.header`).height() + $(`.fairy-tail`).height() + $(`.our-trip`).height() + $(`.hotel`).height() + $(`.price`).height() + 800))){
		$(`#mark_1`).css(`border-bottom`,`none`);
		$(`#mark_2`).css(`border-bottom`,`2px solid black`);
		$(`.header__item--menu--underline-on`).css(`border-bottom`,`none`);
	}		
	else{
		$(`#mark_1`).css(`border-bottom`,`none`);
		$(`#mark_2`).css(`border-bottom`,`none`);
		$(`.header__item--menu--underline-on`).css(`border-bottom`,`none`);
	}



	if(posTop > 100){
		$(`.button_up`).css(`bottom`,`20px`);
	}	
	else{
		$(`.button_up`).css(`bottom`,`-100px`);
	}
	
	$(`.button_up`).click(function(){
		$('html, body').stop().animate({scrollTop : 0}, 350);
	});	

	window.onscroll = function() {
		posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		if((posTop > ($(`.header`).height() + $(`.fairy-tail`).height() + 200)) && (posTop <= ($(`.header`).height() + $(`.fairy-tail`).height() + $(`.our-trip`).height() + 400))){
			$(`#mark_1`).css(`border-bottom`,`none`);
			$(`#mark_2`).css(`border-bottom`,`none`);
			$(`.header__item--menu--underline-on`).css(`border-bottom`,`2px solid black`);
		}
		else if((posTop > ($(`.header`).height() + $(`.fairy-tail`).height() + $(`.our-trip`).height() + 400)) && (posTop <= ($(`.header`).height() + $(`.fairy-tail`).height() + $(`.our-trip`).height() + $(`.hotel`).height() + 600))){
			$(`#mark_1`).css(`border-bottom`,`2px solid black`);
			$(`#mark_2`).css(`border-bottom`,`none`);
			$(`.header__item--menu--underline-on`).css(`border-bottom`,`none`);
		}	
		else if((posTop > ($(`.header`).height() + $(`.fairy-tail`).height() + $(`.our-trip`).height() + $(`.hotel`).height() + 600)) && (posTop <= ($(`.header`).height() + $(`.fairy-tail`).height() + $(`.our-trip`).height() + $(`.hotel`).height() + $(`.price`).height() + 800))){
			$(`#mark_1`).css(`border-bottom`,`none`);
			$(`#mark_2`).css(`border-bottom`,`2px solid black`);
			$(`.header__item--menu--underline-on`).css(`border-bottom`,`none`);
		}		
		else{
			$(`#mark_1`).css(`border-bottom`,`none`);
			$(`#mark_2`).css(`border-bottom`,`none`);
			$(`.header__item--menu--underline-on`).css(`border-bottom`,`none`);
		}
		if(posTop > 100){
			$(`.button_up`).css(`bottom`,`20px`);

		}	
		else{
			$(`.button_up`).css(`bottom`,`-100px`);

		}
	}

	
	

	window.addEventListener('resize', function(event){
		if((posTop > ($(`.header`).height() + $(`.fairy-tail`).height() + 200)) && (posTop <= ($(`.header`).height() + $(`.fairy-tail`).height() + $(`.our-trip`).height() + 400))){
			$(`#mark_1`).css(`border-bottom`,`none`);
			$(`#mark_2`).css(`border-bottom`,`none`);
			$(`.header__item--menu--underline-on`).css(`border-bottom`,`2px solid black`);
		}
		else if((posTop > ($(`.header`).height() + $(`.fairy-tail`).height() + $(`.our-trip`).height() + 400)) && (posTop <= ($(`.header`).height() + $(`.fairy-tail`).height() + $(`.our-trip`).height() + $(`.hotel`).height() + 600))){
			$(`#mark_1`).css(`border-bottom`,`2px solid black`);
			$(`#mark_2`).css(`border-bottom`,`none`);
			$(`.header__item--menu--underline-on`).css(`border-bottom`,`none`);
		}	
		else if((posTop > ($(`.header`).height() + $(`.fairy-tail`).height() + $(`.our-trip`).height() + $(`.hotel`).height() + 600)) && (posTop <= ($(`.header`).height() + $(`.fairy-tail`).height() + $(`.our-trip`).height() + $(`.hotel`).height() + $(`.price`).height() + 800))){
			$(`#mark_1`).css(`border-bottom`,`none`);
			$(`#mark_2`).css(`border-bottom`,`2px solid black`);
			$(`.header__item--menu--underline-on`).css(`border-bottom`,`none`);
		}		
		else{
			$(`#mark_1`).css(`border-bottom`,`none`);
			$(`#mark_2`).css(`border-bottom`,`none`);
			$(`.header__item--menu--underline-on`).css(`border-bottom`,`none`);
		}
		if(posTop > 100){
			$(`.button_up`).css(`bottom`,`20px`);
		}	
		else{
			$(`.button_up`).css(`bottom`,`-100px`);
		}	

		
	});

	$(`.bottom-left-reservation-link`).click(function (){
		if(/^[А-яа-я][а-я]{1,15}$/.test($(`#user-name_1`).val()) && /^\+7[0-9]{10}$|^8[0-9]{10}$/.test($(`#user-tel_1`).val())){

			let elem = document.createElement(`div`);
			elem.innerHTML = "Ваша заявка успешно отправлена!Ожидайте звонка.";
			elem.className = "Message_1";
			document.body.append(elem);
			document.getElementsByClassName(`bottom-left-reservation-link`)[0].className = "disabled";

			setTimeout(function (){
				elem.remove();
				$(`.disabled`).attr("class", "bottom-left-reservation-link");
			},7000);
		}
		else{
			let elem = document.createElement(`div`);
			elem.innerHTML = "Проверьте поля \"Телефон\" и \"Имя\"";
			elem.className = "Message_2";
			document.body.append(elem);
			document.getElementsByClassName(`bottom-left-reservation-link`)[0].className = "disabled";

			setTimeout(function (){
				elem.remove();
				$(`.disabled`).attr("class", "bottom-left-reservation-link");
			},7000);
		}


	});


});


