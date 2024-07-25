  // Recupera i dettagli dell'immagine dal localStorage e aggiorna la pagina
 
document.addEventListener('DOMContentLoaded', function() {
	const imageDetail = JSON.parse(localStorage.getItem('imageDetail'));
  
	if (imageDetail) {
	  document.getElementById('detailImage').src = imageDetail.imageSrc;
	  document.getElementById('detailPhotographer').textContent = imageDetail.photographer;
	  document.getElementById('photographerPage').href = `https://www.pexels.com/@${imageDetail.photographer.replace(/\s+/g, '-').toLowerCase()}`;
	} else {
	  document.getElementById('detailPhotographer').textContent = 'No details available';
	}
  });
  
  // Calcola la media dei colori dell'immagine per il background
  function averageColor(imageSrc) {
	return new Promise((resolve) => {
	  const img = new Image();
	  img.crossOrigin = 'Anonymous';
	  img.src = imageSrc;
	  img.onload = () => {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		canvas.width = img.width;
		canvas.height = img.height;
		context.drawImage(img, 0, 0);
		const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
		let r = 0, g = 0, b = 0, count = 0;
		for (let i = 0; i < imgData.data.length; i += 4) {
		  r += imgData.data[i];
		  g += imgData.data[i + 1];
		  b += imgData.data[i + 2];
		  count++;
		}
		r = Math.floor(r / count);
		g = Math.floor(g / count);
		b = Math.floor(b / count);
		resolve(`rgb(${r}, ${g}, ${b})`);
	  };
	});
  }
  
  averageColor(imageDetail.imageSrc).then(color => {
	document.body.style.backgroundColor = color;
  });