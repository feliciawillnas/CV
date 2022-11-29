window.addEventListener("DOMContentLoaded", main); 

function main() {
    activeTab();
}

function activeTab() {
    let navItems = document.querySelectorAll(".nav-li");
    for (let i = 0; i < navItems.length; i++) {
       navItems[i].addEventListener("click", function(event) {
          const activeNavItem = document.querySelector(".nav-li.active");  
          activeNavItem?.classList.remove("active"); 
          event.currentTarget.classList.add("active");
       });
    }

}

//? fungerar som en if sats OM detta är sant gör detta 