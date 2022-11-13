

const box = document.getElementById("box");

box.addEventListener("click", event => {
    let current = event.target;
    let readBtn = current.className.includes('read-btn');
    if(!readBtn) return;

    let text = event.target.parentNode.querySelector(".read-more");

    text.classList.toggle("read-more-show");
    current.textContent = current.textContent.includes("Read More") ? "Read Less..." : "Read More...";
})