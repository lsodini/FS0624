document.addEventListener("DOMContentLoaded", () => {
	const API_URL = 'https://striveschool-api.herokuapp.com/books';
	const bookList = document.getElementById('bookList');
	const cartList = document.getElementById('cartList');
	const cart = JSON.parse(localStorage.getItem('cart')) || [];

	function addToCart(book) {
	  cart.push(book);
	  localStorage.setItem('cart', JSON.stringify(cart));
	  updateCartUI();
	}

	function removeFromCart(bookId) {
	  const bookIndex = cart.findIndex(book => book.id === bookId);
	  if (bookIndex > -1) {
		cart.splice(bookIndex, 1);
		localStorage.setItem('cart', JSON.stringify(cart));
		updateCartUI();
	  }
	}

	function updateCartUI() {
	  cartList.innerHTML = '';
	  cart.forEach(book => {
		const cartItem = document.createElement('li');
		cartItem.className = 'dropdown-item d-flex justify-content-between align-items-center';
		cartItem.innerText = `${book.title} - $${book.price}`;

		const removeButton = document.createElement('button');
		removeButton.className = 'btn btn-danger btn-sm';
		removeButton.innerText = 'Rimuovi';
		removeButton.onclick = () => removeFromCart(book.id);

		cartItem.appendChild(removeButton);
		cartList.appendChild(cartItem);
	  });
	}

	function createBookCard(book) {
	  const col = document.createElement('div');
	  col.className = 'col-md-3 mb-4';

	  const card = document.createElement('div');
	  card.className = 'card h-100';

	  const img = document.createElement('img');
	  img.className = 'card-img-top';
	  img.src = book.img;
	  img.alt = book.title;

	  const cardBody = document.createElement('div');
	  cardBody.className = 'card-body';

	  const cardTitle = document.createElement('h5');
	  cardTitle.className = 'card-title';
	  cardTitle.innerText = book.title;

	  const cardPrice = document.createElement('p');
	  cardPrice.className = 'card-text';
	  cardPrice.innerText = `$${book.price}`;

	  const discardButton = document.createElement('button');
	  discardButton.className = 'btn btn-danger me-2';
	  discardButton.innerText = 'Scarta';
	  discardButton.onclick = () => card.remove();

	  const buyButton = document.createElement('button');
	  buyButton.className = 'btn btn-primary';
	  buyButton.innerText = 'Compra ora';
	  buyButton.onclick = () => addToCart(book);

	  cardBody.appendChild(cardTitle);
	  cardBody.appendChild(cardPrice);
	  cardBody.appendChild(discardButton);
	  cardBody.appendChild(buyButton);
	  card.appendChild(img);
	  card.appendChild(cardBody);
	  col.appendChild(card);
	  return col;
	}

	fetch(API_URL)
	  .then(response => {
		if (!response.ok) {
		  throw new Error('Network response was not ok');
		}
		return response.json();
	  })
	  .then(data => {
		console.log('Data received:', data); // Verifica che i dati siano ricevuti
		data.forEach(book => {
		  const bookCard = createBookCard(book);
		  bookList.appendChild(bookCard);
		});
	  })
	  .catch(error => console.error('Errore nel recuperare i dati:', error));

	updateCartUI();
  });
