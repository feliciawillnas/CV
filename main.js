window.addEventListener("DOMContentLoaded", main); 

function main() {
    activeTab();
}

/**
 * Skapar en click event, då användaren klickar i nav-baren skall active-klassen läggas på den klickade länken.
 * For-loopen går igenom länkarna för att lägga till "active"-klassen samt ta bort den.
 */
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
