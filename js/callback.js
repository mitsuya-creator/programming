let cardsTemplate = `<div class="card mt-5 ml-5">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-danger">Go somewhere</a>
  </div>
</div>`;
let container= document.getElementById("container");
let cards = []
for(i = 0; i<2; i++){
  cards.push(cardsTemplate);
}
