// Auto display
fetch('../Data_Produk.json')
	.then(response => response.json())
	.then(data => {
	    
		const keringContainer = document.getElementById('kering-container');
		const keringData = data.filter(({ jenis }) => jenis === 'kering');
		keringData.forEach(({ name, image, price }) => {
			keringContainer.innerHTML += `
				<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
					<div class="product-item bg-light mb-4">
						<div class="product-img position-relative overflow-hidden">
							<img class="img-fluid w-100" src="../${image}" alt="${name}">
							<div class="product-action">
								<a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-shopping-cart"></i></a>
							</div>
						</div>
						<div class="text-center py-4">
							<a class="h6 text-decoration-none text-truncate" href="#">${name}</a>
							<div class="d-flex align-items-center justify-content-center mt-2">
								<h5>${price}</h5>
							</div>
						</div>
					</div>
				</div>
			`;
		});

		const basahContainer = document.getElementById('basah-container');
		const basahData = data.filter(({ jenis }) => jenis === 'basah');
		basahData.forEach(({ name, image, price }) => {
			basahContainer.innerHTML += `
				<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
					<div class="product-item bg-light mb-4">
						<div class="product-img position-relative overflow-hidden">
							<img class="img-fluid w-100" src="../${image}" alt="${name}">
							<div class="product-action">
								<a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-shopping-cart"></i></a>
							</div>
						</div>
						<div class="text-center py-4">
							<a class="h6 text-decoration-none text-truncate" href="#">${name}</a>
							<div class="d-flex align-items-center justify-content-center mt-2">
								<h5>${price}</h5>
							</div>
						</div>
					</div>
				</div>
			`;
		});
	})
	.catch(error => {
		console.error(error);
	});
