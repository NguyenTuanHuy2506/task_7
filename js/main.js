//----------window load resize scroll function-------//
$(window).on('load resize scroll', function(){
	var _scroll = $(window).scrollTop();
	var _toTopButton = $('.to-top-button');
	var _contact = $('.contact-rect');
	var _wh = $(window).height();
	//--------to top button
	_scroll > 1 ? _contact.addClass('active') : _contact.removeClass('active');
	if(_scroll > 400)
	{
		if(!_toTopButton.hasClass('active')){
			_toTopButton.addClass('active');
		}
	} else{
		_toTopButton.removeClass('active');
	}

	//--passing bar
	$(".passing").each(function(){
		var _position = $(this).offset().top;
		if (_scroll > _position - _wh + _wh / 4){
			$(this).addClass('move');
		}
	});

	//------to id
	$('.visiable-area').each(function(){
		let _top = $(this).offset().top;
		let _bottom = $(this).offset().top + $(this).height();
		if (_top < _scroll + _wh/2 && _bottom > _scroll + _wh/2){
			var _id = '#' + $(this).attr('id');
			$('.drop__item').each(function(){
				if($(this).find('.drop__sub-title > .on-link').attr('href') ===  _id)
				{
				 	$(this).addClass('active');
				}
				else{$(this).hasClass('active') ? $(this).removeClass('active') : null;}
			});
		}
	});
});

//----------hambuger button-------//
var _menuOpen = 0;
$('.hambuger-button').click(function(){
	var _this = $(this);
	var _menu = $('.header__menu');
	if(_menuOpen == 0)
	{
		if(!_this.hasClass('active')){
			_menu.addClass('active');
			_menu.addClass('bounceInLeft');
			_this.addClass('active');
			delayF(function(){
				_menuOpen = 1;
				_menu.removeClass('bounceInLeft')}, 1000)();
		}
		else{
			return false;
		}
		
	}
	else{
		if(_this.hasClass('active')){
			_menu.addClass('bounceOutLeft');
			delayF(function(){
				_this.removeClass('active');
				_menu.removeClass('active');
				_menu.removeClass('bounceOutLeft');
				_menuOpen = 0;}, 1000)();
		}
		else {return false;}
	}		
});

//----------mv scroll-------//
var _mvScroll = 0;
$('.mv').bind('mousewheel', function(e) {
	if(e.originalEvent.wheelDelta < 0 && _mvScroll == 0) 
	{
		_mvScroll = 1;
		$('html, body').animate({
	 		scrollTop: $('.message').offset().top - 100 }, 300, 'linear', function(){
	 			_mvScroll = 0;});
	}
});

//----------on link goto id-------//
var _subMenuOpen = 0;
$('.on-link').click(function(e){
	let _tar = $(this).attr('href');
	let _wiw = window.innerWidth;
	//------
	if(_tar !== '#link'){
		//--------body's animate
		$('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 120},
	        500,
	        'swing'
	    );
		//------close hambuger if it is open
	    let _hambuger = $('.hambuger-button');
	    _hambuger.hasClass('active') ? _hambuger.click() : _hambuger = null;

	    //--------add parent active
	    let _parItem = $(this).parents('.drop__item');
	    if(_parItem.hasClass('active')){
	    	return false;
	    }
	    else{
	    	$('.drop__item').removeClass('active');
	    	_parItem.addClass('active');
	    }

	    //------open submenu
	    /*let _tar = $(this).parents('.drop__item').find('.drop__sub-menu');
		console.log(_tar.length);
		if(_wiw < 1025 &&_tar.length != 0) {
			if(_subMenuOpen == 0)
				{
					if(!_tar.hasClass('active')){
						_tar.addClass('active');
						_tar.toggle("400");
						delayF(function(){_subMenuOpen = -1;},400)();
					}
					else{
						return false;
					}
				}
				else{
					if(_tar.hasClass('active')){
						_tar.toggle("400");
						_tar.removeClass('active');
						delayF(function(){_subMenuOpen = 0;},400)();
					}
					else{
						return false;
					}
				}
			}

		    return false;
		}
		else{
			return false;
		}*/	
	}
});

//----------open sub menu-------//

// $('.drop-link').click(function(e){
// 	var _tar = $(this).parents('.drop__item').find('.drop__sub-menu');
// 	console.log(_tar.length);
// 	var _this = $(this);
// 	if(_subMenuOpen == 0)
// 	{
// 		if(!_tar.hasClass('active')){
// 			_tar.addClass('active');
// 			_tar.toggle("400");
// 			delayF(function(){_subMenuOpen = -1;},400)();
// 		}
// 		else{
// 			return false;
// 		}
// 	}
// 	else{

// 		if(_tar.hasClass('active')){
// 			_tar.toggle("400");
// 			_tar.removeClass('active');
// 			delayF(function(){_subMenuOpen = 0;},400)();
// 		}
// 		else{
// 			return false;
// 		}
// 	}	
// });

//----------to top button-------//
$('.to-top-button').click(function(event) {
    /* Act on the event */
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400, 'linear');
    return false;
});

//----------delay function-------//
function delayF(func, timed){
	let timeout;
	return function(){
		let _f = func;
		clearTimeout(timeout);
		timeout = setTimeout(_f, timed);
	};
}
