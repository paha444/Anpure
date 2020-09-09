function setNavigation() {
     let current_location = location.pathname.split('/')[1];
     if (current_location === "") return;
     let menu_items = document.querySelector(".nav-bar").getElementsByTagName("a");
     for (let i = 0, len = menu_items.length; i < len; i++) {
          if (menu_items[i].getAttribute("href").indexOf(current_location) !== -1) {
               menu_items[i].className = "active-href";
          }
     }
}
setNavigation();