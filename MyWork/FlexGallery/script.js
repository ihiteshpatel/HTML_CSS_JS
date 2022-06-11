let boxes = document.getElementsByClassName('box');
for (box of boxes) {
    box.addEventListener('click', focusImg);
}
function focusImg() {
    if (this.classList.contains('focus')) {
        this.classList.remove('focus');
        this.children[0].style.transform="translateY(-100%)";
        this.children[1].style.transform="scale(0)";
        this.children[2].style.transform="translateY(100%)";
    } else {
        this.classList.add("focus");
        this.children[0].style.transform="translateY(-10%)";
        this.children[1].style.transform="scale(2)";
        this.children[2].style.transform="translateY(10%)";
    }
}