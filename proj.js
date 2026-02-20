// ============================================
// Mobile Accessories Store - JavaScript
// ============================================
// This file handles all interactive functionality
// for the mobile accessories e-commerce store

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
  initializePage();
});

// ============================================
// INITIALIZATION FUNCTION
// ============================================
/**
 * Initialize all page features when DOM is ready
 */
function initializePage() {
  setupBuyButtons();
  setupCategoryNavigation();
  setupSearchFunctionality();
  console.log('✓ Page initialized successfully');
}

// ============================================
// BUY NOW BUTTON FUNCTIONALITY
// ============================================
/**
 * Setup event listeners for all Buy Now buttons
 */
function setupBuyButtons() {
  const buyButtons = document.querySelectorAll('.buy-btn');

  buyButtons.forEach(button => {
    button.addEventListener('click', handleBuyButtonClick);
  });

  console.log(`✓ ${buyButtons.length} Buy buttons initialized`);
}

/**
 * Handle Buy Now button click event
 * @param {Event} event - The click event
 */
function handleBuyButtonClick(event) {
  event.preventDefault();

  // Get the product card container
  const card = event.target.closest('.card');
  
  // Extract product information
  const productName = card.querySelector('h3').textContent;
  const priceElement = card.querySelector('.price').textContent.trim();
  
  // Create a friendly confirmation message
  const message = `Thank you for your interest in ${productName}!\n\nPrice: ${priceElement}\n\nOur customer care team will contact you shortly with payment and delivery options.`;
  
  // Show alert to user
  alert(message);

  // Log interaction for tracking
  console.log(`Transaction: ${productName} added to cart`);
}

// ============================================
// CATEGORY NAVIGATION FUNCTIONALITY
// ============================================
/**
 * Setup category navigation buttons
 */
function setupCategoryNavigation() {
  const navButtons = document.querySelectorAll('nav button');

  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      const categoryId = this.getAttribute('onclick')
        .replace("showCategory('", "")
        .replace("')", "");
      showCategory(categoryId);
    });
  });

  console.log(`✓ ${navButtons.length} category buttons initialized`);
}

/**
 * Display products for selected category
 * @param {string} categoryId - The category ID to show
 */
function showCategory(categoryId) {
  // Hide all product sections
  const allSections = document.querySelectorAll('.products');
  allSections.forEach(section => {
    section.classList.remove('active');
  });

  // Show the selected category section
  const selectedSection = document.getElementById(categoryId);
  if (selectedSection) {
    selectedSection.classList.add('active');
    console.log(`Category changed to: ${categoryId}`);
  }
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
/**
 * Setup search feature
 */
function setupSearchFunctionality() {
  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');

  if (searchButton) {
    searchButton.addEventListener('click', performSearch);
  }

  if (searchInput) {
    // Allow Enter key to trigger search
    searchInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        performSearch();
      }
    });
  }

  console.log('✓ Search functionality initialized');
}

/**
 * Perform search across all products
 */
function performSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (searchTerm === '') {
    alert('Please enter a product name to search');
    return;
  }

  // Get all product cards
  const allCards = document.querySelectorAll('.card');
  let foundCount = 0;

  // Search through products
  allCards.forEach(card => {
    const productName = card.querySelector('h3').textContent.toLowerCase();
    const section = card.closest('.products');

    if (productName.includes(searchTerm)) {
      // Show the product section
      section.classList.add('active');
      foundCount++;
    }
  });

  if (foundCount === 0) {
    alert(`No products found matching "${searchTerm}". Please try a different search.`);
  } else {
    console.log(`Found ${foundCount} product(s) matching "${searchTerm}"`);
  }
}

// ============================================
// UTILITY & LOGGING FUNCTIONS
// ============================================
/**
 * Log user interactions for analytics
 * @param {string} action - The action performed
 * @param {string} details - Details about the action
 */
function logInteraction(action, details) {
  const timestamp = new Date().toLocaleString();
  console.log(`[${timestamp}] ${action}: ${details}`);
}

// Example usage in console: logInteraction('BUY_CLICK', 'AirPods Pro');





 