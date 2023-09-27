const showModal = document.querySelector(".showModal");
const modal = document.querySelector(".modal");

modal.addEventListener("click", (event) => {
    event.stopPropagation();
});

document.body.addEventListener("click", () => {
    showModal.style.display = "none";
});

const onShow = (event) => {
    event.stopPropagation();
    showModal.style.display = "block";
};