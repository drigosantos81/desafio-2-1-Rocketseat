const modalPage = document.querySelector('.modal-1');
const cards = document.querySelectorAll('.card-content');

for (card of cards) {
    document.addEventListener("click", function(){
        const conteudo = card.getAttribute("conteudo");
        modalPage.classList.add("active");
        modalPage.querySelector("iframe").src=`https://rocketseat.com.br/${conteudo}`;
    })
}