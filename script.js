function loginLogout(element) {
    if (element.innerHTML == "Login") {
        element.innerHTML = "Logout"
    }
    else {
        element.innerHTML = "Login"
    }

}

function eraser(element) {
    element.remove();
}

let count1 = 13;
function addLikes1(element) {
    count1++
    element.innerHTML = count1 + " likes"
    alert("Ninja was liked")

}
let count2 = 37;
function addLikes2(element) {
    count2++;
    element.innerHTML = count2 + " likes"
    alert("Ninja was liked")

}
