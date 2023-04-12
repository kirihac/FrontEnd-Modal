const openButton = document.querySelector('.open');
const closeButton = document.querySelector(".close");
const modal = document.querySelector(".modal");

openButton.addEventListener("click", () => {
    modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
      modal.style.display = "none";
});

document.addEventListener('click', (event) => {
    
    if (!event.target.closest('.modal') && modal.style.display === 'block' && event.target != openButton ) {
        modal.style.display = 'none';
    }
});