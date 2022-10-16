// adding backdrop to every other element
// var mybackdrop = document.querySelector(".backdrop")

// function kaisen() {
//     mybackdrop.classList.toggle("show-backdrop")
// }

// var contact= "https://wa.me/message/SQWCD3JZAO36B1"

// function contactus() {
//     window.open (contact)
// }
var unsupportedscreen = "Webpage is not optimized for your device"
var unavailablefeature = "This feature is not yet available"
var hamburgerdiv = document.querySelector(".hamburger")
var mobileLinks = document.querySelector(".mobile-link-holder")
var mybackdrop = document.querySelector(".backdrop")


function kaisen() {
    hamburgerdiv.classList.toggle("showburger")
    mobileLinks.classList.toggle("show-mobile-link-holder")
    mybackdrop.classList.toggle("show-backdrop")
}
function dosomething() {
    alert(unavailablefeature)
}
function invalidscreen() {
    alert(unsupportedscreen)
}

