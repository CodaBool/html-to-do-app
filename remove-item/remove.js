const input = document.querySelector('input')
// const list = document.querySelector('#list')
const savedText = document.querySelector('#saved')

var timer, timer2

window.onload = genList()
window.onload = generateList()


/* save icon




*/

function generateList() {
    const arr = genList()
    const list = document.querySelector('#list')
    for (var i = 0; i < arr.length; i++) {
        let item = document.createElement('li');
        item.innerText = arr[i];
        let remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerText = 'X';
        remove.addEventListener("click", removeItem);
        remove.classList.add("btn");
        remove.classList.add("btn-danger");
        remove.classList.add("ml-5");
        item.appendChild(remove);
        list.appendChild(item);
    }
}

function removeItem() {
    timer = setTimeout(function() {
        savedText.classList.toggle('hidden') 
        savedText.classList.remove("fade")
        void savedText.offsetWidth; // trigger a DOM reflow
        savedText.classList.add("fade")
    }, 1000)
    timer2 = setTimeout(function() {savedText.classList.toggle('hidden') }, 4000)
    let item = this.parentNode
    let title = item.innerText
    title = title.substring(0, title.length - 1);
    console.log("removing " + title);
    for (let i of genList()) {
        if (title === i) {
            Object.keys(localStorage).forEach(function(key){
                if (localStorage.getItem(key) === i) {
                    localStorage.removeItem(key);
                }
            })
        }
    }
    let parent = item.parentNode;
    parent.removeChild(item);
}

function genList() {
    let listArr = []
    if (localStorage.length !== 0) {
        Object.keys(localStorage).forEach(function(key){
            listArr.push(localStorage.getItem(key))
        })
    }
    return listArr
}