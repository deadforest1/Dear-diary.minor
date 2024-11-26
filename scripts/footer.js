
const intervalId = setInterval(function() {
    if ($("body").height() < $(window).height()) 
    document.querySelector('.footer').classList.add('fixed-bottom');
    else document.querySelector('.footer').classList.remove('fixed-bottom') 
   
    
  }, 1)

