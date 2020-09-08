const input = document.querySelector('input')
input.onkeypress = enterValue
const list = document.querySelector('#list')
const savedText = document.querySelector('#saved')
var timer, timer2

window.onload = genList()

function enterValue(e) {
    if (e.keyCode === 13) {
        if (input.value.length > 0) {
            list.innerHTML += `<li>${input.value}</li>`
            input.value = '' // empty input value
            timer = setTimeout(function() {
                savedText.classList.toggle('hidden') 
                savedText.classList.remove("fade")
                void savedText.offsetWidth; // trigger a DOM reflow
                savedText.classList.add("fade")
            }, 1000)
            timer2 = setTimeout(function() {savedText.classList.toggle('hidden') }, 4000)
            localStorage.clear()
            for (const child of list.children) {
                localStorage.setItem(getRandomInt(9999999999), child.innerHTML)
            }
        }
    }
}

function genList() {
    if (localStorage.length !== 0) {
        Object.keys(localStorage).forEach(function(key){
            list.innerHTML += `<li>${localStorage.getItem(key)}</li>`
        })
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// function setCookies(id, value) { // Stores a cookie called filter using the value of the input. Cookie expires in 1 year
//     document.cookie = `${id}=${value};max-age=31536000;SameSite=None;path=/`
// }

// function deleteAllCookies() { // seting an expiration in the past deletes the cookie
//     if (document.cookie !== "") {
//         var cookieArr = document.cookie.split(';'); 
//         for (const cookie of cookieArr) {
//             var cookiePair = cookie.split("=")
//             console.log(cookiePair)
//             document.cookie = cookiePair[0] + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
//             console.log(document.cookie)
//         }


//     }
//     var cookieArrEnding = document.cookie.split(';'); 
//     console.log("After deletion", cookieArrEnding)
// }

// function removeCookies() {
//     var cookieArr2 = document.cookie.split(';'); 
//     for(var i = 0; i < cookieArr2.length; i++) {
//         var key = cookieArr2[i].split("=");
        
//         // document.cookie = key[0] + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
//         document.cookie = key[0] + "=" + key[1] + ";path=/add-item"
//         // console.log(document.cookie)
//     }
// }

// function getAllCookies() {
//     if (document.cookie !== "") {
//         const cookieArr = document.cookie.split(";")
//         for (const cookie of cookieArr) {
//             var cookiePair = cookie.split("=")
//             list.innerHTML += `<li>${cookiePair[1]}</li>`
//         }
//     }
// }