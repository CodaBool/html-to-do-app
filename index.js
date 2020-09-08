const list = document.querySelector('#list')
const emptyText = document.querySelector('#empty')
const savedText = document.querySelector('#saved')

window.onload = genList()
window.onload = checkList()
// window.onload = createStore()

function checkList() {
    if (list.firstChild !== null) {
        emptyText.classList.toggle('hidden')
    }
}

function genList() {
    if (localStorage.length !== 0) {
        Object.keys(localStorage).forEach(function(key){
            list.innerHTML += `<li>${localStorage.getItem(key)}</li>`
        })
    }
}

// function printToConsole() {
//     console.log("DEBUG: list.innerHTML", list.innerHTML, "list", list)
//     if (list.firstChild === null) {
//         console.log("DEBUG: list empty")
//     } else {
//         console.log("DEBUG: list has items")
//     }
//     getAllCookies()
// }

// function getAllCookies() {
//     if (document.cookie !== "") {
//         const cookieArr = document.cookie.split(";")
//         for (const cookie of cookieArr) {
//             var cookiePair = cookie.split("=")
            
//         }
//     }
// }

// function removeCookies() {
//     var cookieArr2 = document.cookie.split(';'); 
//     for(var i = 0; i < cookieArr2.length; i++) {
//         var key = cookieArr2[i].split("=");
//         document.cookie = key[0]+" =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
//     }
// }
// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }
// function createStore() {
//     localStorage.clear()
//     localStorage.setItem(getRandomInt(99999999), "walk dog")
//     localStorage.setItem(getRandomInt(99999999), "see doctor")
//     localStorage.setItem(getRandomInt(99999999), "feed cats")
// }

