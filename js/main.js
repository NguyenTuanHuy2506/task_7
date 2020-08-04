//----------window load resize scroll function-------//
$(window).on('load resize scroll', function(){
	var _top = $(window).scrollTop();
	// var _thisTop = $('.contact-rectc').offset().top;
	var _toTopButton = $('.to-top-button');
	var _contact = $('.contact-rect');
	_top > 1 ? _contact.addClass('active') : _contact.removeClass('active');
	if(_top > 400)
	{
		if(!_toTopButton.hasClass('active')){
			_toTopButton.addClass('active');
		}
	} else{
		_toTopButton.removeClass('active');
	}
	$(".passing").each(function(){
		var _position = $(this).offset().top;    
		var _wh = $(window).height();
		if (_top > _position - _wh + _wh / 4){
			$(this).addClass('move');
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
$('.on-link').click(function(e){
	var _tar = $(this).attr('href');
	if(_tar !== '#link'){
		$('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 120
	    }, 500, 'swing');
	    var _hambuger = $('.hambuger-button');
	    _hambuger.hasClass('active') ? _hambuger.click() : _hambuger = null;
	    return false;
	}
	else{
		return false;
	}	
});

//----------open sub menu-------//
var _subMenuOpen = 0;
$('.drop-link').click(function(e){
	var _tar = $(this).parents('.drop__item').find('.drop__sub-menu');
	var _this = $(this);
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
});

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
