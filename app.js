
//The plus button
const plus = document.querySelector(".fa-plus")

// adds an eventlistener to button
plus.addEventListener("click", function () {
    const list = document.querySelector("#other")

    //Creates a checkbox and input place
    //Sets attributes to the elements
    const formCheck = document.createElement("div")
    formCheck.classList.add("form-check")

    const checkInput = document.createElement("input")
    checkInput.classList.add("form-check-input")
    checkInput.setAttribute("type", "checkbox")
    checkInput.setAttribute("id", "flexCheckDefault")

    checkInput.addEventListener("click", function (e) {
        done(e.target)
    })

    /*
    checkInput.onclick = function () {
        done(this)
    }*/
    const label = document.createElement("label")
    label.classList.add("form-check-label")
    label.setAttribute("for", "flexCheckDefault")

    const input = document.createElement("textarea")
    input.classList.add("input")
    input.setAttribute("autofocus", "")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", " Text (enter to save)")

    const x = document.createElement("i")
    x.classList.add("fa-x")
    x.classList.add("fa-solid")
    x.classList.add("hidden")

    x.onclick = function () {
        del(this)
    }

    //Puts the elements in the right parent
    label.appendChild(input)
    formCheck.appendChild(checkInput)
    formCheck.appendChild(label)
    list.appendChild(formCheck)
    formCheck.appendChild(x)

})

//Makes the x dissapare and reappare
let showDelete = false

//Sees if Trash has been click on 
function toggleTrash() {
    const del = document.querySelectorAll(".fa-x")

    if (showDelete == false) {
        for (let i = 0; i < del.length; i++) {
            del[i].classList.remove("hidden")
        }
        showDelete = true
    } else {
        for (let i = 0; i < del.length; i++) {
            del[i].classList.add("hidden")
        }
        showDelete = false
    }
}


function del(el) {
    el.parentElement.remove()
    console.log(el)
}

// Sees if the box is checked or not
function done(el) {
    const otherEl = document.querySelector("#other")
    const doneEl = document.querySelector("#done")

    if (el.checked) {
        // Move to done
        otherEl.removeChild(el.parentElement)
        doneEl.appendChild(el.parentElement)
    } else {
        // Move back to other
        doneEl.removeChild(el.parentElement)
        otherEl.appendChild(el.parentElement)
    }
}
