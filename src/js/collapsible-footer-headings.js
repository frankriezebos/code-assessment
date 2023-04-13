if (window.innerWidth < 768) {
    console.log('mobile');

    var footerLink = document.getElementsByClassName("footer-block--menu__link");
    var i;
    
    for (i = 0; i < footerLink.length; i++) {
      footerLink[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }

} else {
    console.log('desktop');
}