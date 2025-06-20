
    /* Application data */

    const products = [
      {
        id: 'p1',
        name: 'Gentle Hydrating Cleanser',
        description:
          'A mild cleanser that removes impurities while maintaining skin moisture balance.',
        price: 249.99,
        images: [
          'https://images.unsplash.com/photo-1748639320154-6ba118bccc74?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://media.istockphoto.com/id/1336334586/photo/studio-shot-of-a-beautiful-young-woman-washing-her-face.jpg?s=1024x1024&w=is&k=20&c=9UYorRUtob1-a_NP3NyB2mcYx0Yn5YQeESutg6XmS-8=',
          'https://media.istockphoto.com/id/1353334129/photo/cream-and-essence-oil-mixed-surrounded-by-warter-bubbles-on-a-white-background-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=gtwTpH38laxyNW_w_78tJu_hwDBrC8jyxK0hmSo3WbQ=',
        ],
        category: 'Cleanser',
        brand: 'GlowCo',
        rating: 4.5,
        reviews: [],
        stock: 45,
        variants: [
          { id: 'v1', name: '100ml', price: 249.99 },
          { id: 'v2', name: '200ml', price: 399.99 },
        ],
        tags: ['hydrating', 'gentle', 'daily'],
      },
      {
        id: 'p2',
        name: 'Ultra Moisturizing Cream',
        description:
          'Rich cream that intensely hydrates and nourishes dry skin.',
        price: 349.99,
        images: [
          'https://images.unsplash.com/photo-1629732047847-50219e9c5aef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://plus.unsplash.com/premium_photo-1677283511146-52fa442feb2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        category: 'Moisturizer',
        brand: 'PureSkin',
        rating: 4.8,
        reviews: [],
        stock: 30,
        variants: [{ id: 'v1', name: '50ml', price: 349.99 }],
        tags: ['moisturizing', 'dry skin', 'cream'],
      },
      {
        id: 'p3',
        name: 'Vitamin C Serum',
        description:
          'Brightening serum formulated with Vitamin C to improve skin tone and texture.',
        price: 299.99,
        images: [
          'https://images.unsplash.com/photo-1648712787778-1a521521bd1c?q=80&w=816&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://images.unsplash.com/photo-1743931787138-7529fc62fd3b?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          'https://media.istockphoto.com/id/1097005112/photo/bottle-with-essential-oil-orange.jpg?s=2048x2048&w=is&k=20&c=5aHqbDSAm8cDaiOEI4FoBFLWUqiDgd0nUNNeDLvyfrU=',
        
        ],
        category: 'Serum',
        brand: 'DermaLux',
        rating: 4.2,
        reviews: [],
        stock: 60,
        variants: [{ id: 'v1', name: '30ml', price: 299.99 }],
        tags: ['brightening', 'vitamin c', 'serum'],
      },
      {
        id: 'p4',
        name: 'Daily Sunscreen SPF50',
        description:
          'Broad-spectrum sunscreen providing high protection against UVA and UVB rays.',
        price: 199.99,
        images: [
          'https://images.unsplash.com/photo-1657023828553-18c23601c4d7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        category: 'Sunscreen',
        brand: 'GlowCo',
        rating: 4.7,
        reviews: [],
        stock: 80,
        variants: [{ id: 'v1', name: '75ml', price: 199.99 }],
        tags: ['sunscreen', 'spf50', 'daily'],
      },
      {
        id: 'p5',
        name: 'Soothing Aloe Vera Gel',
        description:
          'Cooling gel made with pure Aloe Vera to soothe irritated and sunburned skin.',
        price: 199.99,
        images: [
          'https://himalayawellness.in/cdn/shop/products/MOISTURIZIN-ALOE-VERA-FACE-GEL-100ML.jpg?v=1631178946',
          'https://smytten-image.gumlet.io/discover_product/1617178472_DRIV0060AB1.jpg',
        ],
        category: 'Moisturizer',
        brand: 'PureSkin',
        rating: 4.0,
        reviews: [],
        stock: 50,
        variants: [{ id: 'v1', name: '150ml', price: 199.99 }],
        tags: ['aloe', 'soothing', 'gel'],
      },
    ];

    // Pagination & filtering state
    let filteredProducts = [...products];
    let currentPage = 1;
    const productsPerPage = 8;

    // Bootstrap modal instance
    let productModalInstance;

    // Current product in quick view
    let currentProduct = null;
    let selectedVariantId = null;

    // DOM references for updating
    const productGrid = document.getElementById('product-grid');

    const priceRange = document.getElementById('priceRange');
    const priceRangeValue = document.getElementById('priceRangeValue');
    const ratingFilter = document.getElementById('ratingFilter');

    // Initialization on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
      productModalInstance = new bootstrap.Modal(document.getElementById('productModal'));

      priceRange.addEventListener('input', () => {
        priceRangeValue.textContent = priceRange.value;
      });

      renderProducts();
      applySorting();
    });

    // Render product cards for current filteredProducts and pagination
    function renderProducts() {
      productGrid.innerHTML = '';
      const start = (currentPage - 1) * productsPerPage;
      const end = start + productsPerPage;
      const pageProducts = filteredProducts.slice(start, end);

      if (pageProducts.length === 0) {
        productGrid.innerHTML = `<p class="text-center text-muted">No products match your filters.</p>`;
        renderPagination();
        return;
      }

      for (const product of pageProducts) {
        const card = createProductCard(product);
        productGrid.appendChild(card);
      }
      renderPagination();
    }

    // Create product card element
    function createProductCard(product) {
      const card = document.createElement('div');
      card.className = 'product-card';

      // Image
      const img = document.createElement('img');
      img.src = product.images[0];
      img.alt = `${product.name} product image`;
      img.loading = 'lazy';
      card.appendChild(img);

      // Info
      const info = document.createElement('div');
      info.className = 'product-info';

      // Title
      const title = document.createElement('h3');
      title.className = 'product-title';
      title.textContent = product.name;
      info.appendChild(title);

      // Price
      const price = document.createElement('div');
      price.className = 'product-price';
      price.innerHTML = `₹${product.price.toFixed(2)}`;
      info.appendChild(price);

      // Rating stars
      const ratingContainer = document.createElement('div');
      ratingContainer.className = 'mb-2';
      ratingContainer.setAttribute('aria-label', `Rating: ${product.rating.toFixed(1)} out of 5 stars`);
      ratingContainer.setAttribute('role', 'img');
      const fullStars = Math.floor(product.rating);
      const halfStar = product.rating - fullStars >= 0.5;
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'material-icons star';
        if (i <= fullStars) {
          star.textContent = 'star';
          star.classList.add('filled');
        } else if (i === fullStars + 1 && halfStar) {
          star.textContent = 'star_half';
          star.classList.add('filled');
        } else {
          star.textContent = 'star_border';
        }
        ratingContainer.appendChild(star);
      }
      info.appendChild(ratingContainer);

      // Actions container
      const actions = document.createElement('div');
      actions.className = 'product-actions';

      // Quick view button
      const quickViewBtn = document.createElement('button');
      quickViewBtn.className = 'btn-quick-view';
      quickViewBtn.type = 'button';
      quickViewBtn.textContent = 'Quick View';
      quickViewBtn.setAttribute('aria-label', `Quick view details for ${product.name}`);
      quickViewBtn.addEventListener('click', () => openProductModal(product.id));
      actions.appendChild(quickViewBtn);

      // Wishlist button
      const wishlistBtn = document.createElement('button');
      wishlistBtn.className = 'btn-wishlist';
      wishlistBtn.type = 'button';
      wishlistBtn.setAttribute('aria-label', `Add or remove ${product.name} from wishlist`);
      wishlistBtn.innerHTML = `<span class="material-icons">${isInWishlist(product.id) ? 'favorite' : 'favorite_border'}</span>`;
      if (isInWishlist(product.id)) wishlistBtn.classList.add('active');
      wishlistBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWishlist(product.id, wishlistBtn);
      });
      actions.appendChild(wishlistBtn);

      info.appendChild(actions);

      card.appendChild(info);

      return card;
    }

    /* Filtering and sorting */

    function applyFilters(event) {
      if (event) event.preventDefault();

      const selectedCategories = Array.from(document.querySelectorAll('.category-checkbox:checked')).map(
        (el) => el.value
      );
      const selectedBrands = Array.from(document.querySelectorAll('.brand-checkbox:checked')).map(
        (el) => el.value
      );

      const maxPrice = Number(priceRange.value);
      const minRating = Number(ratingFilter.value);

      filteredProducts = products.filter((p) => {
        return (
          (selectedCategories.length === 0 || selectedCategories.includes(p.category)) &&
          (selectedBrands.length === 0 || selectedBrands.includes(p.brand)) &&
          p.price <= maxPrice &&
          p.rating >= minRating
        );
      });
      currentPage = 1;
      applySorting();
    }

    function resetFilters() {
      document.querySelectorAll('input[type=checkbox]').forEach((el) => (el.checked = false));
      priceRange.value = 100;
      priceRangeValue.textContent = 100;
      ratingFilter.value = '0';

      filteredProducts = [...products];
      currentPage = 1;
      applySorting();
    }

    function applySorting() {
      const sortValue = document.getElementById('sortSelect').value;
      switch (sortValue) {
        case 'price-asc':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'rating-desc':
          filteredProducts.sort((a, b) => b.rating - a.rating);
          break;
        case 'rating-asc':
          filteredProducts.sort((a, b) => a.rating - b.rating);
          break;
        case 'name-asc':
          filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          filteredProducts.sort((a, b) => a.id.localeCompare(b.id));
      }
      renderProducts();
    }

    // On search form submit
    function filterProducts(event) {
      event.preventDefault();
      const query = document.getElementById('searchInput').value.trim().toLowerCase();
      if (!query) {
        filteredProducts = [...products];
      } else {
        filteredProducts = products.filter(
          (p) =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.brand.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );
      }
      currentPage = 1;
      applySorting();
    }

    /* Pagination rendering */
    function renderPagination() {
      const pagination = document.getElementById('pagination');
      pagination.innerHTML = '';

      const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

      if (totalPages <= 1) return;

      // Previous button
      const prevLi = document.createElement('li');
      prevLi.className = 'page-item' + (currentPage === 1 ? ' disabled' : '');
      prevLi.innerHTML = `<button class="page-link" aria-label="Previous page" ${
        currentPage === 1 ? 'tabindex="-1" aria-disabled="true"' : ''
      }>Previous</button>`;
      prevLi.querySelector('button').addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          renderProducts();
        }
      });
      pagination.appendChild(prevLi);

      // Page numbers (max 5 shown)
      const maxPagesToShow = 5;
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        const li = document.createElement('li');
        li.className = 'page-item' + (i === currentPage ? ' active' : '');
        li.innerHTML = `<button class="page-link" aria-current="${i === currentPage ? 'page' : undefined}">${i}</button>`;
        li.querySelector('button').addEventListener('click', () => {
          currentPage = i;
          renderProducts();
        });
        pagination.appendChild(li);
      }

      // Next button
      const nextLi = document.createElement('li');
      nextLi.className = 'page-item' + (currentPage === totalPages ? ' disabled' : '');
      nextLi.innerHTML = `<button class="page-link" aria-label="Next page" ${
        currentPage === totalPages ? 'tabindex="-1" aria-disabled="true"' : ''
      }>Next</button>`;
      nextLi.querySelector('button').addEventListener('click', () => {
        if (currentPage < totalPages) {
          currentPage++;
          renderProducts();
        }
      });
      pagination.appendChild(nextLi);
    }

    /* Wishlist functions */
    let wishlist = JSON.parse(localStorage.getItem('skincareWishlist')) || [];

    function isInWishlist(productId) {
      return wishlist.includes(productId);
    }

    function toggleWishlist(productId, btn) {
      const index = wishlist.indexOf(productId);
      if (index >= 0) {
        wishlist.splice(index, 1);
        btn.classList.remove('active');
        btn.innerHTML = '<span class="material-icons">favorite_border</span>';
      } else {
        wishlist.push(productId);
        btn.classList.add('active');
        btn.innerHTML = '<span class="material-icons">favorite</span>';
      }
      localStorage.setItem('skincareWishlist', JSON.stringify(wishlist));
    }

    /* Product Modal Quick View */

    function openProductModal(productId) {
      currentProduct = products.find((p) => p.id === productId);
      selectedVariantId = currentProduct.variants?.[0]?.id || null;

      if (!currentProduct) return;

      const modal = document.getElementById('productModal');
      document.getElementById('modalProductName').textContent = currentProduct.name;
      document.getElementById('modalProductDescription').textContent = currentProduct.description;
      document.getElementById('modalProductPrice').innerHTML = `₹${currentProduct.price.toFixed(2)}`;
      document.getElementById('modalProductRating').innerHTML = generateStars(currentProduct.rating);

      const modalMainImage = document.getElementById('modalMainImage');
      modalMainImage.src = currentProduct.images[0];
      modalMainImage.alt = `${currentProduct.name} product image main`;

      const thumbsContainer = document.getElementById('modalImageThumbs');
      thumbsContainer.innerHTML = '';
      currentProduct.images.forEach((imgSrc, i) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.alt = `${currentProduct.name} product image thumbnail ${i + 1}`;
        thumb.className = 'gallery-thumb' + (i === 0 ? ' selected' : '');
        thumb.addEventListener('click', () => {
          modalMainImage.src = imgSrc;
          modalMainImage.alt = `${currentProduct.name} product image main`;

          thumbsContainer.querySelectorAll('.gallery-thumb').forEach((el) =>
            el.classList.remove('selected')
          );
          thumb.classList.add('selected');
        });
        thumbsContainer.appendChild(thumb);
      });

      // Clear current reviews list and add existing from product
      renderReviews();

      productModalInstance.show();
    }

    // Generate star rating HTML string for display
    function generateStars(rating) {
      const fullStars = Math.floor(rating);
      const halfStar = rating - fullStars >= 0.5;
      let starsHTML = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
          starsHTML += '<span class="material-icons star filled" aria-hidden="true">star</span>';
        } else if (i === fullStars + 1 && halfStar) {
          starsHTML += '<span class="material-icons star filled" aria-hidden="true">star_half</span>';
        } else {
          starsHTML += '<span class="material-icons star" aria-hidden="true">star_border</span>';
        }
      }
      return starsHTML;
    }

    // Render reviews in modal
    function renderReviews() {
      const reviewsList = document.getElementById('reviewsList');
      reviewsList.innerHTML = '';

      if (!currentProduct.reviews || currentProduct.reviews.length === 0) {
        reviewsList.innerHTML = '<p class="text-muted">No reviews yet.</p>';
        return;
      }

      currentProduct.reviews.forEach((review) => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'mb-3';

        reviewDiv.innerHTML = `
          <div class="review-stars" aria-label="Rating: ${review.rating} stars">${generateStars(review.rating)}</div>
          <p>${escapeHtml(review.comment)}</p>
          <hr />
        `;
        reviewsList.appendChild(reviewDiv);
      });
    }

    // Submit review form handler
    function submitReview(event) {
      event.preventDefault();
      const ratingInput = document.getElementById('reviewRating');
      const commentInput = document.getElementById('reviewComment');

      const rating = Number(ratingInput.value);
      const comment = commentInput.value.trim();

      if (!rating || !comment) return;

      // Add to current product reviews
      currentProduct.reviews.unshift({
        id: crypto.randomUUID(),
        productId: currentProduct.id,
        userId: 'anonymous',
        rating,
        comment,
        helpful: 0,
        verified: true,
        createdAt: new Date().toISOString(),
      });

      // Update average rating
      const totalRating = currentProduct.reviews.reduce((sum, r) => sum + r.rating, 0);
      currentProduct.rating = totalRating / currentProduct.reviews.length;

      // Reset form and rerender reviews
      ratingInput.value = '';
      commentInput.value = '';
      renderReviews();

      // Update rating on modal display
      document.getElementById('modalProductRating').innerHTML = generateStars(currentProduct.rating);

      // Notify user
      alert('Thank you for your review!');
    }

    /* Escape html for user inputs */
    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

