//window.addEventListener("load", function() {
    //setTimeout(() => {
        //document.getElementById("logoPopup").style.opacity = "0";
        //setTimeout(() => {
            //document.getElementById("logoPopup").style.display = "none"; 
        //}, 500); 
    //}, 1500); 
//});

const imgElement = document.getElementById("hoverImage");

imgElement.addEventListener("mouseenter", function() {
    this.style.opacity = "0";
    setTimeout(() => {
        this.src = "images/Reflection.jpg";
        this.style.opacity = "1";
    }, 1000);
});

imgElement.addEventListener("mouseleave", function() {
    this.style.opacity = "0";
    setTimeout(() => {
        this.src = "images/profile-pic.jpg";
        this.style.opacity = "1"; 
    }, 1000); 
});


document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
      header.addEventListener("click", function () {
          const content = this.nextElementSibling;
          const isOpen = content.style.maxHeight;

          // Close all other sections
          document.querySelectorAll(".accordion-content").forEach(item => {
              item.style.maxHeight = null;
              item.style.paddingTop = "0";
              item.style.paddingBottom = "0";
          });

          document.querySelectorAll(".accordion-header").forEach(header => {
              header.classList.remove("active");
          });

          // Toggle current section
          if (!isOpen) {
              content.style.maxHeight = content.scrollHeight + "px";
              content.style.paddingTop = "20px";
              content.style.paddingBottom = content.scrollHeight + "px";
              this.classList.add("active");
          }
      });
  });
});