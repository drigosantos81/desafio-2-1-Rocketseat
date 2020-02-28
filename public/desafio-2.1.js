const modalPage = document.querySelector('.modal_1');
const cards = document.querySelectorAll('.card__image-content');

for (card of cards) {
    card.addEventListener("click", function(){
        const conteudo = card.getAttribute("id");
        modalPage.classList.add("active");
        modalPage.querySelector("iframe").src = `https://rocketseat.com.br/${conteudo}`;
    })
}

document.querySelector('.close-modal').addEventListener("click", function(event){
    event.preventDefault();
    modalPage.classList.remove("active");
    modalPage.querySelector("iframe").src="";
})