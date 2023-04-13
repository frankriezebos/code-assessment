document.getElementById('scrollTrigger').onclick = function(){
    document.getElementById('scrollTarget').scrollIntoView({ 
        behavior: 'smooth' 
    });
};