(function($){
	$(document).ready(function(){
			
		// Menu mobile 
		$('.menu-btn').click(function(){
			if($('body').hasClass('showMenu')){
				$('body').removeClass('showMenu');
			}else{
				$('body').addClass('showMenu');
			return false;
			}
		});		

			$('.sidebar-menu ul.mainmenu li.parent').each(function(){
			     var 
                    p = $(this),
                    btn = $('<span>',{'class':'showsubmenu  icon-add', text : '' }).click(function(){
        				if(p.hasClass('parent-showsub')){
        				    menu.slideUp(300,function(){
        				        p.removeClass('parent-showsub');
        				    });        										
        				}else{
                            $('.sidebar-menu ul.mainmenu li.parent').children('ul').slideUp();
                            menu.slideDown(300,function(){
                                $('.sidebar-menu ul.mainmenu li.parent').removeClass('parent-showsub')
        				        p.addClass('parent-showsub');
        				    });        										
        				};	
        			}),
                    menu = p.children('ul')
                 ;
                 p.prepend(btn) 
			});	



		// show phone mobile 
		$('#header .phone-btn').click(function(){
			$('#header .phone').slideToggle(300);
		});			




	    // Min Height
		if ($(".management-tab .menu-tabs .images").length > 0) {
		    equalHeight(".management-tab .menu-tabs .images", 0); 
		}


	    // Min Height
		if ($(".pricingTable.pricing-style2.no-active ").length > 0) {
		    equalHeight(".pricingTable.no-active  .row.domain", 0); 
		    equalHeight(".pricingTable.no-active  .equalHeight", 70); 
		}



if ($(window).width() > 767) {
    // Min Height
    var equalItem = $(".pricingTable:not(.no-active) .equalHeight");
    var equalActive = $(".pricingTable:not(.no-active) .equalHeight.active");
    var equalNotActive = $(".pricingTable:not(.no-active) .equalHeight:not(.active)");

	if (equalItem.length > 0) {
	    equalHeight(equalItem, 70); 
	}
	equalActive.addClass('fixheight');
	equalNotActive.each(function(){
		$(this).hover(
		  function () {
		    $(this).addClass("fixheight");
		    equalActive.removeClass("fixheight");
		  },
		  function () {
		    $(this).removeClass("fixheight");
		    equalActive.addClass("fixheight");
		  }
		);
	});

}


		// section background
		$('.section-background').each(function(){
			var filename = $(this).find('.img-background').attr('src').replace( /^.*?([^\/]+)\.jpg?$/, '$1' );
			$(this).css('background-image', 'url(images/' + filename + '.jpg)');
		});

		// Back to top	
		  $(window).scroll(function () {
		    if ($(this).scrollTop() > 100) {
		      $('#back-top').addClass('show');
		    } else {
		      $('#back-top').removeClass('show');
		    }
		  });
  		
		$('#back-top').click(function () {
		$('body,html').animate({
		  scrollTop: 0
		}, 800);
		return false;
		});

		// OWL
		$('.testimonials .owl-carousel').owlCarousel({
		    loop:true,
		    margin:0,
		    nav:true,
		    items:1,
		    navText:["<i class='iconprev icon-arrow-1'></i>","<i class='iconnext icon-arrow-1'></i>"],
		    responsive:{
		        0:{
		            nav:false
		        },
		        1200:{
		            nav:true,
		        }
		    }


		});

		var responsive = $(window).width();

		if ( responsive < 991)  {
			$('.list-steps .inner .price').each(function(){
				$(this).parent().find('.text .line-value').appendTo($(this));
			});
		}

		if ($(window).width() <= 767) {

			$('.pricingTable:not(.no-active)').owlCarousel({
			    loop:true,
			    center: true,
			    autoWidth:true,
			    startPosition:1,
			    nav:false,
			    margin:15,
			    items:2
			});

			// Move
			$('.list-steps .top').each(function(){
					$(this).children('.toptext').hide();
					$(this).parent().find('.price .title').prependTo($(this));
			});




			// Move title
			$('.menu-tabs-mobile').each(function(){
			     var 
			     	textTitle = $(this).children('li.active').text();
                    title = $('<h1>',{'class':'h2', text : textTitle });
                 ;
                 $(this).after(title);  
                 $(this).hide();
			});	



		}	

	});	


function equalHeight(className, padding) {
  var tempHeight = 0;
  $(className).each(function () {
    current = $(this).height();
    if (parseInt(tempHeight) < parseInt(current)) {
      tempHeight = current;
    }
  });
  $(className).css("height", tempHeight + padding + "px");
}





})(jQuery);	