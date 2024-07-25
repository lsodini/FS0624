const API_KEY = 'HmEnfz3S0tyzJrYKkacGU50SPjqXz5xI6Y3LCHciLwbb2XV50OUb34Ax';
const API_URL = 'https://api.pexels.com/v1/search?query=';

// Funzione per recuperare le immagini dall'API
function fetchImages(query) {
  return fetch(`${API_URL}${query}`, {
    headers: {
      Authorization: API_KEY
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => data.photos);
}

// Funzione per creare una card per ogni immagine
function createCard(image) {
  return `
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="${image.src.medium}" class="bd-placeholder-img card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${image.photographer}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary view-btn" data-id="${image.id}" data-src="${image.src.large}">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary hide-btn">Hide</button>
            </div>
            <small class="text-muted">${image.id}</small>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Funzione per visualizzare le immagini nella pagina
function displayImages(images) {
  const container = document.getElementById('imageContainer');
  container.innerHTML = images.map(createCard).join('');
}

// Event listener per il bottone "Load Images"
document.getElementById('loadImages').addEventListener('click', function() {
  fetchImages('nature').then(displayImages).catch(error => console.error('Error loading images:', error));
});

// Event listener per il bottone "Load Secondary Images"
document.getElementById('loadSecondaryImages').addEventListener('click', function() {
  fetchImages('city').then(displayImages).catch(error => console.error('Error loading images:', error));
});

// Event listener per il bottone "Search"
document.getElementById('searchImages').addEventListener('click', function() {
  const query = document.getElementById('searchQuery').value;
  fetchImages(query).then(displayImages).catch(error => console.error('Error searching images:', error));
});

// Event listener per la gestione dei click su immagine e bottoni
document.getElementById('imageContainer').addEventListener('click', function(e) {
  if (e.target.classList.contains('hide-btn')) {
    e.target.closest('.col-md-4').remove();
  }
  
  if (e.target.classList.contains('view-btn')) {
    const imageId = e.target.dataset.id;
    const imageSrc = e.target.dataset.src;
    const photographer = e.target.closest('.card').querySelector('.card-title').textContent;

    // Aggiorna il modale con i dettagli dell'immagine
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalPhotographer').textContent = photographer;

    // Mostra il modale
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  }
  
  if (e.target.classList.contains('card-img-top') || e.target.classList.contains('card-title')) {
    const card = e.target.closest('.card');
    const imageId = card.querySelector('.view-btn').dataset.id;
    const imageSrc = card.querySelector('.view-btn').dataset.src;
    const photographer = card.querySelector('.card-title').textContent;

    // Salva i dettagli dell'immagine nel localStorage
    localStorage.setItem('imageDetail', JSON.stringify({ imageId, imageSrc, photographer }));

    // Reindirizza alla pagina di dettaglio
    window.location.href = 'detail.html';
  }
});
