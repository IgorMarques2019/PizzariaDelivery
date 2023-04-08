function menuMobile() {
  let searchContainer = document.querySelector(".search-header")
  let insertSearch = document.querySelector("header nav ul")

  let mobileWidth = window.matchMedia("(max-width:768px)").matches;
  let menuMobile = document.querySelector("header nav")
  let menuToggle = document.querySelector("header #menu_toggle");
  let menuClose = document.querySelector("header #menu-exit");
  if (mobileWidth) {

    insertSearch.prepend(searchContainer)
    menuMobile.classList.add("menu-mobile", "menu-off")
    menuToggle.addEventListener('click', () => {
      menuMobile.classList.remove("menu-off")
      menuMobile.classList.add("menu-on")
    })

    menuClose.addEventListener('click', () => {
      menuMobile.classList.remove("menu-on")
      menuMobile.classList.add("menu-off")
    })
  }


}
document.onload(menuMobile())