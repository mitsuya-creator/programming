let cardsTemplate = `<div class="card mt-5 redfill">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="www.google.com" target="_blank" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
let cards = []
for(i = 0; i<4; i++){
  cards.push(cardsTemplate);
}
for(m of cards){
  document.getElementById("container").appendChild(document.createElement("div")).innerHTML = m;
}