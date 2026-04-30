// Property Data
const properties = [
    {
        id: 1,
        title: "Luxury 3BHK Apartment in Vijay Nagar",
        price: "85 Lakhs",
        location: "Vijay Nagar",
        type: "flat",
        bhk: "3bhk",
        area: "1850 sq ft",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1502672260266-1c1afe2c85d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        ],
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        virtualTour: true,
        verified: true,
        amenities: ["Parking", "Gym", "Swimming Pool", "Power Backup", "Club House", "Children's Play Area"],
        description: "Premium 3BHK apartment in the heart of Vijay Nagar with modern amenities and excellent connectivity.",
        bedrooms: 3,
        bathrooms: 2,
        balcony: 2,
        furnished: "Semi-Furnished",
        age: "2 years",
        facing: "North-East",
        floor: "5th floor out of 10"
    },
    {
        id: 2,
        title: "Spacious 2BHK in Super Corridor",
        price: "45 Lakhs",
        location: "Super Corridor",
        type: "flat",
        bhk: "2bhk",
        area: "1200 sq ft",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Lift", "Security", "Garden"],
        description: "Well-designed 2BHK apartment in Super Corridor with great investment potential.",
        bedrooms: 2,
        bathrooms: 2,
        balcony: 1,
        furnished: "Unfurnished",
        age: "1 year",
        facing: "East",
        floor: "3rd floor out of 8"
    },
    {
        id: 3,
        title: "Independent Villa in Rau",
        price: "1.2 Crore",
        location: "Rau",
        type: "villa",
        bhk: "4bhk+",
        area: "3500 sq ft",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Private Garden", "Swimming Pool", "Parking", "Security"],
        description: "Luxurious independent villa with private garden and modern amenities.",
        bedrooms: 4,
        bathrooms: 4,
        balcony: 2,
        furnished: "Fully Furnished",
        age: "New",
        facing: "South",
        floor: "Ground + 2"
    },
    {
        id: 4,
        title: "1BHK Flat in Palasia",
        price: "28 Lakhs",
        location: "Palasia",
        type: "flat",
        bhk: "1bhk",
        area: "650 sq ft",
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Lift", "Security"],
        description: "Compact and well-located 1BHK perfect for small families or bachelors.",
        bedrooms: 1,
        bathrooms: 1,
        balcony: 1,
        furnished: "Unfurnished",
        age: "3 years",
        facing: "West",
        floor: "2nd floor out of 5"
    },
    {
        id: 5,
        title: "Commercial Space in AB Road",
        price: "2.5 Crore",
        location: "AB Road",
        type: "commercial",
        bhk: "4bhk+",
        area: "5000 sq ft",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Lift", "Security", "Power Backup"],
        description: "Prime commercial space on AB Road with excellent visibility and accessibility.",
        bedrooms: 0,
        bathrooms: 4,
        balcony: 0,
        furnished: "Unfurnished",
        age: "5 years",
        facing: "North",
        floor: "Ground floor"
    },
    {
        id: 6,
        title: "3BHK in Bengali Square",
        price: "75 Lakhs",
        location: "Bengali Square",
        type: "flat",
        bhk: "3bhk",
        area: "1650 sq ft",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Gym", "Children's Play Area", "Security"],
        description: "Modern 3BHK apartment in Bengali Square with family-friendly amenities.",
        bedrooms: 3,
        bathrooms: 2,
        balcony: 2,
        furnished: "Semi-Furnished",
        age: "1 year",
        facing: "North",
        floor: "7th floor out of 12"
    }
];

// Localities Data
const localities = [
    {
        name: "Vijay Nagar",
        price: "Avg: 8,500/sq ft",
        demand: "High",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Premium residential area with excellent infrastructure and connectivity."
    },
    {
        name: "Super Corridor",
        price: "Avg: 6,200/sq ft",
        demand: "Very High",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Fast-growing area with IT parks and modern infrastructure development."
    },
    {
        name: "Rau",
        price: "Avg: 4,800/sq ft",
        demand: "Medium",
        image: "https://images.unsplash.com/photo-1502672260266-1c1afe2c85d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Peaceful locality with green surroundings and affordable housing options."
    },
    {
        name: "Palasia",
        price: "Avg: 7,200/sq ft",
        demand: "High",
        image: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Central location with commercial hubs and excellent transport links."
    },
    {
        name: "Bhawarkuan",
        price: "Avg: 5,500/sq ft",
        demand: "Medium",
        image: "https://images.unsplash.com/photo-1465146633011-14f8e078109e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Educational hub with proximity to colleges and universities."
    },
    {
        name: "Nipania",
        price: "Avg: 6,800/sq ft",
        demand: "High",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Upscale area with premium residential projects and amenities."
    }
];

// Image Gallery Lightbox
let currentGallery = [];
let currentImageIndex = 0;

function openImageGallery(images, startIndex = 0) {
    currentGallery = images;
    currentImageIndex = startIndex;
    
    const gallery = document.createElement('div');
    gallery.className = 'image-gallery';
    gallery.innerHTML = `
        <div class="gallery-content">
            <img src="${images[currentImageIndex]}" alt="Property Image" class="gallery-image">
            <div class="gallery-controls">
                <button class="gallery-btn" onclick="previousImage()">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="gallery-btn" onclick="nextImage()">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <button class="gallery-close" onclick="closeGallery()">
                <i class="fas fa-times"></i>
            </button>
            <div class="gallery-thumbnails">
                ${images.map((img, index) => `
                    <img src="${img}" alt="Thumbnail ${index + 1}" 
                         class="gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}" 
                         onclick="goToImage(${index})">
                `).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(gallery);
    gallery.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Keyboard navigation
    document.addEventListener('keydown', handleGalleryKeyboard);
}

function closeGallery() {
    const gallery = document.querySelector('.image-gallery');
    if (gallery) {
        gallery.remove();
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleGalleryKeyboard);
    }
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
    updateGalleryImage();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
    updateGalleryImage();
}

function goToImage(index) {
    currentImageIndex = index;
    updateGalleryImage();
}

function updateGalleryImage() {
    const galleryImage = document.querySelector('.gallery-image');
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    
    if (galleryImage) {
        galleryImage.style.opacity = '0';
        setTimeout(() => {
            galleryImage.src = currentGallery[currentImageIndex];
            galleryImage.style.opacity = '1';
        }, 200);
    }
    
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

function handleGalleryKeyboard(e) {
    switch(e.key) {
        case 'ArrowLeft':
            previousImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
        case 'Escape':
            closeGallery();
            break;
    }
}

// Virtual Tour Simulation
function startVirtualTour(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property || !property.virtualTour) return;
    
    const tourModal = document.createElement('div');
    tourModal.className = 'virtual-tour-modal';
    tourModal.innerHTML = `
        <div class="tour-content">
            <div class="tour-header">
                <h2>Virtual Tour - ${property.title}</h2>
                <button class="tour-close" onclick="closeVirtualTour()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="tour-viewer">
                <div class="tour-room" id="tourRoom">
                    <div class="tour-scene">
                        <img src="${property.images[0]}" alt="Living Room" class="tour-image">
                        <div class="tour-hotspots">
                            <div class="hotspot" style="top: 40%; left: 30%;" onclick="moveToRoom(1)">
                                <i class="fas fa-arrow-right"></i>
                                <span>Move to Kitchen</span>
                            </div>
                            <div class="hotspot" style="top: 60%; left: 70%;" onclick="moveToRoom(2)">
                                <i class="fas fa-arrow-right"></i>
                                <span>Move to Bedroom</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tour-controls">
                    <button class="tour-btn" onclick="rotateTour('left')">
                        <i class="fas fa-undo"></i>
                    </button>
                    <button class="tour-btn" onclick="rotateTour('right')">
                        <i class="fas fa-redo"></i>
                    </button>
                    <button class="tour-btn" onclick="toggleFullscreen()">
                        <i class="fas fa-expand"></i>
                    </button>
                </div>
                <div class="tour-info">
                    <div class="room-name">Living Room</div>
                    <div class="room-description">Spacious living area with modern furnishings</div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(tourModal);
    tourModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeVirtualTour() {
    const tourModal = document.querySelector('.virtual-tour-modal');
    if (tourModal) {
        tourModal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderLocalities();
    renderProperties();
    initializeTestimonials();
    initializeContactForm();
    initializeScrollEffects();
    initializeEnhancedFeatures();
});

// Advanced Search with Autocomplete
const searchSuggestions = [
    { text: 'Vijay Nagar', type: 'location', icon: 'fa-map-marker-alt' },
    { text: 'Super Corridor', type: 'location', icon: 'fa-map-marker-alt' },
    { text: '3BHK Apartments', type: 'property', icon: 'fa-building' },
    { text: 'Luxury Villas', type: 'property', icon: 'fa-home' },
    { text: 'Under 50 Lakhs', type: 'budget', icon: 'fa-rupee-sign' },
    { text: 'Ready to Move', type: 'status', icon: 'fa-check-circle' },
    { text: 'Swimming Pool', type: 'amenity', icon: 'fa-swimming-pool' },
    { text: 'Parking Available', type: 'amenity', icon: 'fa-parking' },
    { text: 'Gym and Fitness', type: 'amenity', icon: 'fa-dumbbell' },
    { text: 'Children Play Area', type: 'amenity', icon: 'fa-child' },
    { text: 'Power Backup', type: 'amenity', icon: 'fa-bolt' },
    { text: '24/7 Security', type: 'amenity', icon: 'fa-shield-alt' }
];

function initializeAdvancedSearch() {
    const searchInputs = document.querySelectorAll('input[type="text"], input[type="search"]');
    
    searchInputs.forEach(input => {
        // Create suggestions container
        const suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'search-suggestions';
        input.parentNode.style.position = 'relative';
        input.parentNode.appendChild(suggestionsContainer);
        
        // Add search functionality
        input.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            if (query.length > 0) {
                const filteredSuggestions = searchSuggestions.filter(suggestion => 
                    suggestion.text.toLowerCase().includes(query)
                );
                
                if (filteredSuggestions.length > 0) {
                    showSuggestions(filteredSuggestions, suggestionsContainer, input);
                } else {
                    hideSuggestions(suggestionsContainer);
                }
            } else {
                hideSuggestions(suggestionsContainer);
            }
        });
        
        // Hide suggestions on click outside
        document.addEventListener('click', function(e) {
            if (!input.contains(e.target) && !suggestionsContainer.contains(e.target)) {
                hideSuggestions(suggestionsContainer);
            }
        });
        
        // Keyboard navigation
        input.addEventListener('keydown', function(e) {
            const items = suggestionsContainer.querySelectorAll('.suggestion-item');
            let currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
            
            switch(e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    currentIndex = Math.min(currentIndex + 1, items.length - 1);
                    updateActiveSuggestion(items, currentIndex);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    currentIndex = Math.max(currentIndex - 1, 0);
                    updateActiveSuggestion(items, currentIndex);
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (currentIndex >= 0 && items[currentIndex]) {
                        selectSuggestion(items[currentIndex], input);
                    }
                    break;
                case 'Escape':
                    hideSuggestions(suggestionsContainer);
                    break;
            }
        });
    });
}

function showSuggestions(suggestions, container, input) {
    container.innerHTML = suggestions.map((suggestion, index) => `
        <div class="suggestion-item ${index === 0 ? 'active' : ''}" data-value="${suggestion.text}">
            <i class="fas ${suggestion.icon}"></i>
            <span>${highlightMatch(suggestion.text, input.value)}</span>
            <small>${suggestion.type}</small>
        </div>
    `).join('');
    
    container.classList.add('active');
    
    // Add click handlers
    container.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', function() {
            selectSuggestion(this, input);
        });
    });
}

function hideSuggestions(container) {
    container.classList.remove('active');
    container.innerHTML = '';
}

function updateActiveSuggestion(items, currentIndex) {
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
}

function selectSuggestion(item, input) {
    input.value = item.dataset.value;
    hideSuggestions(item.closest('.search-suggestions'));
    input.focus();
    
    // Trigger search if it's a search input
    if (input.closest('.search-bar')) {
        searchProperties();
    }
}

function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
}

// Enhanced Features Initialization
function initializeEnhancedFeatures() {
    initializeAdvancedSearch();
    
    // Add click handlers for property images
    document.addEventListener('click', function(e) {
        if (e.target.closest('.property-image')) {
            const propertyCard = e.target.closest('.property-card');
            const propertyId = parseInt(propertyCard.dataset.propertyId);
            const property = properties.find(p => p.id === propertyId);
            
            if (property && property.images) {
                openImageGallery(property.images);
            }
        }
    });
    
    // Add hover effects with sound simulation
    const propertyCards = document.querySelectorAll('.property-card');
    propertyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) rotateX(2deg) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) scale(1)';
        });
    });
    
    // Add loading states simulation
    simulateLoadingStates();
}

// Loading States Simulation
function simulateLoadingStates() {
    const propertyCards = document.querySelectorAll('.property-card');
    
    propertyCards.forEach((card, index) => {
        // Add loading state initially
        card.classList.add('loading');
        
        // Remove loading state with delay for staggered effect
        setTimeout(() => {
            card.classList.remove('loading');
            card.style.animation = 'fadeInUp 0.6s ease forwards';
        }, 100 + (index * 100));
    });
}

// Virtual Tour Controls
function rotateTour(direction) {
    const tourImage = document.querySelector('.tour-image');
    if (tourImage) {
        const currentRotation = parseInt(tourImage.style.transform.replace('rotateY(', '').replace('deg)', '') || 0);
        const newRotation = direction === 'left' ? currentRotation - 45 : currentRotation + 45;
        tourImage.style.transform = `rotateY(${newRotation}deg)`;
    }
}

function toggleFullscreen() {
    const tourModal = document.querySelector('.virtual-tour-modal');
    if (tourModal) {
        if (!document.fullscreenElement) {
            tourModal.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }
}

function moveToRoom(roomIndex) {
    const rooms = [
        { name: 'Living Room', description: 'Spacious living area with modern furnishings' },
        { name: 'Kitchen', description: 'Modern kitchen with appliances and storage' },
        { name: 'Master Bedroom', description: 'Comfortable bedroom with attached bathroom' },
        { name: 'Bathroom', description: 'Modern bathroom with premium fixtures' }
    ];
    
    const room = rooms[roomIndex];
    if (room) {
        const roomName = document.querySelector('.room-name');
        const roomDescription = document.querySelector('.room-description');
        const tourImage = document.querySelector('.tour-image');
        
        if (roomName) roomName.textContent = room.name;
        if (roomDescription) roomDescription.textContent = room.description;
        
        // Simulate room change with animation
        if (tourImage) {
            tourImage.style.opacity = '0';
            setTimeout(() => {
                tourImage.style.opacity = '1';
            }, 300);
        }
    }
}

// Mortgage Calculator Functions
function calculateEMI() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value) * 100000; // Convert lakhs to rupees
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 12 / 100; // Monthly rate
    const loanTenure = parseFloat(document.getElementById('loanTenure').value) * 12; // Convert years to months
    
    if (!loanAmount || !interestRate || !loanTenure) {
        showSuccessMessage('Please fill in all fields correctly');
        return;
    }
    
    // EMI calculation formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1)
    const emi = loanAmount * interestRate * Math.pow(1 + interestRate, loanTenure) / 
                (Math.pow(1 + interestRate, loanTenure) - 1);
    
    const totalAmount = emi * loanTenure;
    const totalInterest = totalAmount - loanAmount;
    
    // Update results with animation
    updateCalculatorResults(emi, totalInterest, totalAmount);
}

function updateCalculatorResults(emi, totalInterest, totalAmount) {
    const emiElement = document.getElementById('monthlyEMI');
    const interestElement = document.getElementById('totalInterest');
    const amountElement = document.getElementById('totalAmount');
    
    // Animate the results
    animateValue(emiElement, 0, emi, 1000, 'currency');
    animateValue(interestElement, 0, totalInterest, 1200, 'currency');
    animateValue(amountElement, 0, totalAmount, 1400, 'currency');
}

function animateValue(element, start, end, duration, format) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = start + (end - start) * easeOutQuart(progress);
        
        if (format === 'currency') {
            element.textContent = 'Rs. ' + Math.round(current).toLocaleString('en-IN');
        } else {
            element.textContent = Math.round(current).toLocaleString();
        }
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
}

function checkAffordability() {
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    const existingEMI = parseFloat(document.getElementById('existingEMI').value) || 0;
    const downPayment = parseFloat(document.getElementById('downPayment').value);
    const loanAmount = parseFloat(document.getElementById('loanAmount').value) * 100000;
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 12 / 100;
    const loanTenure = parseFloat(document.getElementById('loanTenure').value) * 12;
    
    if (!monthlyIncome) {
        showSuccessMessage('Please enter your monthly income');
        return;
    }
    
    // Calculate EMI
    const emi = loanAmount * interestRate * Math.pow(1 + interestRate, loanTenure) / 
                (Math.pow(1 + interestRate, loanTenure) - 1);
    
    // Check affordability (generally, EMI should not exceed 40-50% of monthly income)
    const maxAffordableEMI = monthlyIncome * 0.5;
    const totalEMI = emi + existingEMI;
    const isAffordable = totalEMI <= maxAffordableEMI;
    
    const resultElement = document.getElementById('affordabilityResult');
    
    if (isAffordable) {
        const remainingIncome = monthlyIncome - totalEMI;
        resultElement.className = 'affordability-result affordable';
        resultElement.innerHTML = `
            <div>
                <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 1rem; color: #10b981;"></i>
                <h4 style="color: #065f46; margin-bottom: 0.5rem;">Congratulations! This property is affordable for you</h4>
                <p>Monthly EMI: Rs. ${Math.round(emi).toLocaleString('en-IN')}</p>
                <p>Total Monthly EMI: Rs. ${Math.round(totalEMI).toLocaleString('en-IN')}</p>
                <p>Remaining Income: Rs. ${Math.round(remainingIncome).toLocaleString('en-IN')}</p>
            </div>
        `;
    } else {
        const neededIncome = totalEMI / 0.5;
        resultElement.className = 'affordability-result not-affordable';
        resultElement.innerHTML = `
            <div>
                <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem; color: #ef4444;"></i>
                <h4 style="color: #991b1b; margin-bottom: 0.5rem;">This property may not be affordable for you</h4>
                <p>Monthly EMI: Rs. ${Math.round(emi).toLocaleString('en-IN')}</p>
                <p>Total Monthly EMI: Rs. ${Math.round(totalEMI).toLocaleString('en-IN')}</p>
                <p>Required Monthly Income: Rs. ${Math.round(neededIncome).toLocaleString('en-IN')}</p>
                <p style="margin-top: 1rem; font-size: 0.9rem;">Consider increasing down payment or looking for lower-priced properties</p>
            </div>
        `;
    }
}

// Initialize mortgage calculator sliders
function initializeMortgageCalculator() {
    // Loan amount slider sync
    const loanAmountInput = document.getElementById('loanAmount');
    const loanAmountSlider = document.getElementById('loanAmountSlider');
    
    if (loanAmountInput && loanAmountSlider) {
        loanAmountSlider.addEventListener('input', function() {
            loanAmountInput.value = this.value;
        });
        
        loanAmountInput.addEventListener('input', function() {
            loanAmountSlider.value = this.value;
        });
    }
    
    // Interest rate slider sync
    const interestRateInput = document.getElementById('interestRate');
    const interestRateSlider = document.getElementById('interestRateSlider');
    
    if (interestRateInput && interestRateSlider) {
        interestRateSlider.addEventListener('input', function() {
            interestRateInput.value = this.value;
        });
        
        interestRateInput.addEventListener('input', function() {
            interestRateSlider.value = this.value;
        });
    }
    
    // Loan tenure slider sync
    const loanTenureInput = document.getElementById('loanTenure');
    const loanTenureSlider = document.getElementById('loanTenureSlider');
    
    if (loanTenureInput && loanTenureSlider) {
        loanTenureSlider.addEventListener('input', function() {
            loanTenureInput.value = this.value;
        });
        
        loanTenureInput.addEventListener('input', function() {
            loanTenureSlider.value = this.value;
        });
    }
}

// Chat Support Functions
let chatOpen = false;
let chatMessages = [];

function initializeChatSupport() {
    // Create chat widget
    const chatWidget = document.createElement('div');
    chatWidget.className = 'chat-widget';
    chatWidget.innerHTML = `
        <button class="chat-button pulse" onclick="toggleChat()">
            <i class="fas fa-comments"></i>
        </button>
        <div class="chat-box" id="chatBox">
            <div class="chat-header">
                <h3>Property Assistant</h3>
                <button class="chat-close" onclick="toggleChat()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="chat-messages" id="chatMessages">
                <div class="chat-message bot">
                    <div class="chat-avatar">AI</div>
                    <div class="chat-bubble">
                        Hello! I'm your property assistant. How can I help you find your dream home today?
                    </div>
                </div>
            </div>
            <div class="chat-input">
                <input type="text" id="chatInput" placeholder="Type your message..." onkeypress="handleChatKeyPress(event)">
                <button class="chat-send" onclick="sendChatMessage()">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(chatWidget);
    
    // Add initial bot messages
    setTimeout(() => {
        addBotMessage("I can help you with property searches, pricing information, and answer any questions about real estate in Indore!");
    }, 2000);
}

function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    const chatButton = document.querySelector('.chat-button');
    
    chatOpen = !chatOpen;
    
    if (chatOpen) {
        chatBox.classList.add('active');
        chatButton.classList.remove('pulse');
        document.getElementById('chatInput').focus();
    } else {
        chatBox.classList.remove('active');
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addUserMessage(message);
    input.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const response = generateBotResponse(message);
        addBotMessage(response);
    }, 1000);
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function addUserMessage(message) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message user';
    messageElement.innerHTML = `
        <div class="chat-avatar">U</div>
        <div class="chat-bubble">${message}</div>
    `;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addBotMessage(message) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message bot';
    messageElement.innerHTML = `
        <div class="chat-avatar">AI</div>
        <div class="chat-bubble">${message}</div>
    `;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('price') || message.includes('cost') || message.includes('rate')) {
        return "Property prices in Indore vary by location. Vijay Nagar averages around Rs. 6,800/sq ft, while Super Corridor is around Rs. 4,500/sq ft. Would you like specific area pricing?";
    } else if (message.includes('loan') || message.includes('emi') || message.includes('mortgage')) {
        return "For home loans, most banks offer 80-90% of property value. Current interest rates range from 8.5% to 9.5%. Use our mortgage calculator above to estimate your EMI!";
    } else if (message.includes('vijay nagar')) {
        return "Vijay Nagar is a premium residential area with excellent connectivity. Average prices are Rs. 6,800-7,500/sq ft. It has good schools, hospitals, and shopping centers.";
    } else if (message.includes('buy') || message.includes('purchase')) {
        return "I can help you find the perfect property! What type of property are you looking for? (2BHK, 3BHK, villa, etc.) and what's your budget range?";
    } else if (message.includes('sell')) {
        return "For selling your property, we offer free listing and marketing services. Our team can help you get the best price. Would you like to know more about our selling process?";
    } else if (message.includes('rent')) {
        return "We have many rental options across Indore. 2BHK apartments typically rent for Rs. 8,000-15,000/month depending on location and amenities. What area are you interested in?";
    } else {
        return "I'm here to help! You can ask me about property prices, locations, loan information, or any real estate questions. What would you like to know?";
    }
}

// Wishlist Functions
let wishlist = [];

function initializeWishlist() {
    // Create wishlist widget
    const wishlistWidget = document.createElement('div');
    wishlistWidget.innerHTML = `
        <div class="wishlist-btn" onclick="toggleWishlist()">
            <i class="fas fa-heart"></i>
            <span class="wishlist-count" id="wishlistCount">0</span>
        </div>
        <div class="wishlist-panel" id="wishlistPanel">
            <div class="wishlist-header">
                <h3>My Wishlist</h3>
                <button class="chat-close" onclick="toggleWishlist()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="wishlist-items" id="wishlistItems">
                <div class="wishlist-empty">
                    <i class="fas fa-heart"></i>
                    <p>Your wishlist is empty</p>
                    <small>Click the heart icon on properties to add them here</small>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(wishlistWidget);
}

function toggleWishlist() {
    const wishlistPanel = document.getElementById('wishlistPanel');
    wishlistPanel.classList.toggle('active');
}

function toggleWishlistItem(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    const index = wishlist.findIndex(item => item.id === propertyId);
    
    if (index === -1) {
        wishlist.push(property);
        showSuccessMessage('Property added to wishlist');
    } else {
        wishlist.splice(index, 1);
        showSuccessMessage('Property removed from wishlist');
    }
    
    updateWishlistDisplay();
    updateWishlistButtons();
}

function updateWishlistDisplay() {
    const wishlistItems = document.getElementById('wishlistItems');
    const wishlistCount = document.getElementById('wishlistCount');
    
    wishlistCount.textContent = wishlist.length;
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = `
            <div class="wishlist-empty">
                <i class="fas fa-heart"></i>
                <p>Your wishlist is empty</p>
                <small>Click the heart icon on properties to add them here</small>
            </div>
        `;
    } else {
        wishlistItems.innerHTML = wishlist.map(property => `
            <div class="wishlist-item">
                <img src="${property.image}" alt="${property.title}">
                <div class="wishlist-item-info">
                    <div class="wishlist-item-title">${property.title}</div>
                    <div class="wishlist-item-price">${property.price}</div>
                    <div class="wishlist-item-location">${property.location}</div>
                </div>
                <button class="wishlist-remove" onclick="toggleWishlistItem(${property.id})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
    }
}

function updateWishlistButtons() {
    const saveButtons = document.querySelectorAll('.property-save');
    saveButtons.forEach(button => {
        const propertyId = parseInt(button.closest('.property-card').dataset.propertyId);
        const isInWishlist = wishlist.some(item => item.id === propertyId);
        
        button.classList.toggle('active', isInWishlist);
        button.innerHTML = isInWishlist ? 
            '<i class="fas fa-heart"></i>' : 
            '<i class="far fa-heart"></i>';
    });
}

// Enhanced initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderLocalities();
    renderProperties();
    initializeTestimonials();
    initializeContactForm();
    initializeScrollEffects();
    initializeEnhancedFeatures();
    initializeMortgageCalculator();
    initializeChatSupport();
    initializeWishlist();
    initializeDataSync();
    initializeAdminAccess();
});

// Admin Access Functions
function initializeAdminAccess() {
    // Check if admin session exists
    checkAdminSession();
    
    // Setup admin login button
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', function() {
            window.location.href = 'admin-login.html';
        });
    }
    
    // Setup keyboard shortcut for admin login (Ctrl+Shift+A)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            e.preventDefault();
            window.location.href = 'admin-login.html';
        }
    });
    
    // Setup hidden admin access (click logo 5 times)
    let logoClickCount = 0;
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('click', function() {
            logoClickCount++;
            if (logoClickCount >= 5) {
                logoClickCount = 0;
                window.location.href = 'admin-login.html';
            }
            
            // Reset counter after 3 seconds
            setTimeout(() => {
                logoClickCount = 0;
            }, 3000);
        });
    }
}

function checkAdminSession() {
    const sessionData = localStorage.getItem('adminSession');
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    
    if (sessionData) {
        try {
            const session = JSON.parse(sessionData);
            const currentTime = new Date().getTime();
            const loginTime = new Date(session.loginTime).getTime();
            
            // Check if session is still valid
            if (currentTime - loginTime < session.sessionTimeout) {
                // Show admin button
                if (adminLoginBtn) {
                    adminLoginBtn.style.display = 'flex';
                }
                
                // Add admin logout functionality
                addAdminLogout();
            } else {
                // Session expired, remove it
                clearAdminSession();
            }
        } catch (error) {
            console.error('Error checking admin session:', error);
            clearAdminSession();
        }
    }
}

function addAdminLogout() {
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    if (adminLoginBtn) {
        adminLoginBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
        adminLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Are you sure you want to logout from admin panel?')) {
                clearAdminSession();
                window.location.href = 'index.html';
            }
        });
    }
}

function clearAdminSession() {
    localStorage.removeItem('adminSession');
    document.cookie = 'adminAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    // Hide admin button
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    if (adminLoginBtn) {
        adminLoginBtn.style.display = 'none';
        adminLoginBtn.innerHTML = '<i class="fas fa-shield-alt"></i> Admin';
    }
}

// Data Sync with Admin Panel
function initializeDataSync() {
    // Load properties from admin panel data
    loadPropertiesFromStorage();
    
    // Save inquiries when form is submitted
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveInquiryToStorage();
        });
    }
    
    // Track property views
    trackPropertyViews();
}

function loadPropertiesFromStorage() {
    const storedProperties = localStorage.getItem('indoreHomesProperties');
    if (storedProperties) {
        try {
            const adminProperties = JSON.parse(storedProperties);
            // Update the properties array with admin data
            properties.length = 0; // Clear existing properties
            properties.push(...adminProperties);
            
            // Re-render properties with new data
            renderProperties();
        } catch (error) {
            console.error('Error loading properties from storage:', error);
        }
    }
}

function saveInquiryToStorage() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const message = document.getElementById('contactMessage').value;
    
    if (!name || !email || !message) {
        showSuccessMessage('Please fill in all required fields');
        return;
    }
    
    // Get existing inquiries
    let inquiries = [];
    const storedInquiries = localStorage.getItem('indoreHomesInquiries');
    if (storedInquiries) {
        inquiries = JSON.parse(storedInquiries);
    }
    
    // Add new inquiry
    const newInquiry = {
        id: Date.now(),
        name: name,
        email: email,
        phone: phone || 'Not provided',
        propertyId: null, // General inquiry
        propertyTitle: 'General Inquiry',
        message: message,
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    
    inquiries.push(newInquiry);
    
    // Save to localStorage
    localStorage.setItem('indoreHomesInquiries', JSON.stringify(inquiries));
    
    // Show success message
    showSuccessMessage('Your inquiry has been submitted successfully!');
    
    // Reset form
    document.getElementById('contactForm').reset();
}

function trackPropertyViews() {
    // Track when property details are viewed
    const originalShowPropertyDetails = window.showPropertyDetails;
    window.showPropertyDetails = function(propertyId) {
        // Increment view count
        const property = properties.find(p => p.id === propertyId);
        if (property) {
            property.views = (property.views || 0) + 1;
            
            // Save updated properties to storage
            localStorage.setItem('indoreHomesProperties', JSON.stringify(properties));
        }
        
        // Call original function
        if (originalShowPropertyDetails) {
            originalShowPropertyDetails(propertyId);
        }
    };
    
    // Track when property is saved to wishlist
    const originalToggleWishlistItem = window.toggleWishlistItem;
    window.toggleWishlistItem = function(propertyId) {
        const property = properties.find(p => p.id === propertyId);
        if (property) {
            property.inquiries = (property.inquiries || 0) + 1;
            
            // Save updated properties to storage
            localStorage.setItem('indoreHomesProperties', JSON.stringify(properties));
        }
        
        // Call original function
        if (originalToggleWishlistItem) {
            originalToggleWishlistItem(propertyId);
        }
    };
}

// Enhanced contact form handler for property-specific inquiries
function showPropertyDetails(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    // Increment view count
    property.views = (property.views || 0) + 1;
    localStorage.setItem('indoreHomesProperties', JSON.stringify(properties));
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${property.title}</h2>
                <button class="modal-close" onclick="closeModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="property-gallery">
                    <img src="${property.images[0]}" alt="${property.title}" class="main-image">
                    <div class="gallery-thumbnails">
                        ${property.images.map((img, index) => `
                            <img src="${img}" alt="Property ${index + 1}" class="thumbnail" onclick="changeMainImage('${img}')">
                        `).join('')}
                    </div>
                </div>
                
                <div class="property-details">
                    <div class="price-section">
                        <h3>${property.price}</h3>
                        <span class="status-badge ${property.status}">${property.status}</span>
                    </div>
                    
                    <div class="basic-info">
                        <div class="info-item">
                            <i class="fas fa-home"></i>
                            <span>${property.type} - ${property.bhk}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-expand"></i>
                            <span>${property.area}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${property.location}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-bed"></i>
                            <span>${property.bedrooms} Bedrooms</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-bath"></i>
                            <span>${property.bathrooms} Bathrooms</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-car"></i>
                            <span>${property.balcony} Balconies</span>
                        </div>
                    </div>
                    
                    <div class="description">
                        <h4>Description</h4>
                        <p>${property.description}</p>
                    </div>
                    
                    <div class="amenities">
                        <h4>Amenities</h4>
                        <div class="amenities-list">
                            ${property.amenities.map(amenity => `
                                <span class="amenity-tag">${amenity}</span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="additional-details">
                        <h4>Additional Details</h4>
                        <div class="details-grid">
                            <div class="detail-item">
                                <label>Furnishing:</label>
                                <span>${property.furnished}</span>
                            </div>
                            <div class="detail-item">
                                <label>Age:</label>
                                <span>${property.age}</span>
                            </div>
                            <div class="detail-item">
                                <label>Facing:</label>
                                <span>${property.facing}</span>
                            </div>
                            <div class="detail-item">
                                <label>Floor:</label>
                                <span>${property.floor}</span>
                            </div>
                        </div>
                    </div>
                    
                    ${property.virtualTour ? `
                        <div class="virtual-tour-section">
                            <button class="btn-virtual-tour" onclick="startVirtualTour(${property.id})">
                                <i class="fas fa-vr-cardboard"></i> Start Virtual Tour
                            </button>
                        </div>
                    ` : ''}
                    
                    <div class="inquiry-section">
                        <h4>Interested in this property?</h4>
                        <form id="propertyInquiryForm">
                            <input type="hidden" id="inquiryPropertyId" value="${property.id}">
                            <div class="form-row">
                                <div class="form-group">
                                    <input type="text" id="inquiryName" placeholder="Your Name" required>
                                </div>
                                <div class="form-group">
                                    <input type="email" id="inquiryEmail" placeholder="Your Email" required>
                                </div>
                                <div class="form-group">
                                    <input type="tel" id="inquiryPhone" placeholder="Your Phone">
                                </div>
                            </div>
                            <textarea id="inquiryMessage" placeholder="Your message..." rows="3" required></textarea>
                            <button type="submit" class="btn-primary">Send Inquiry</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Setup property inquiry form
    const inquiryForm = document.getElementById('propertyInquiryForm');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            savePropertyInquiry(propertyId);
        });
    }
}

function savePropertyInquiry(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    const name = document.getElementById('inquiryName').value;
    const email = document.getElementById('inquiryEmail').value;
    const phone = document.getElementById('inquiryPhone').value;
    const message = document.getElementById('inquiryMessage').value;
    
    // Get existing inquiries
    let inquiries = [];
    const storedInquiries = localStorage.getItem('indoreHomesInquiries');
    if (storedInquiries) {
        inquiries = JSON.parse(storedInquiries);
    }
    
    // Add new inquiry
    const newInquiry = {
        id: Date.now(),
        name: name,
        email: email,
        phone: phone || 'Not provided',
        propertyId: propertyId,
        propertyTitle: property.title,
        message: message,
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    
    inquiries.push(newInquiry);
    
    // Save to localStorage
    localStorage.setItem('indoreHomesInquiries', JSON.stringify(inquiries));
    
    // Update property inquiry count
    property.inquiries = (property.inquiries || 0) + 1;
    localStorage.setItem('indoreHomesProperties', JSON.stringify(properties));
    
    // Show success message
    showSuccessMessage('Your inquiry has been submitted successfully! We will contact you soon.');
    
    // Reset form and close modal
    document.getElementById('propertyInquiryForm').reset();
    closeModal();
}

function changeMainImage(imageSrc) {
    const mainImage = document.querySelector('.main-image');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    // ... (rest of the code remains the same)
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
    
    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Render localities
function renderLocalities() {
    const localitiesGrid = document.getElementById('localitiesGrid');
    
    localities.forEach(locality => {
        const localityCard = document.createElement('div');
        localityCard.className = 'locality-card';
        localityCard.innerHTML = `
            <div class="locality-image" style="background-image: url('${locality.image}')">
                <span class="locality-badge">${locality.demand} Demand</span>
            </div>
            <div class="locality-info">
                <h3 class="locality-name">${locality.name}</h3>
                <p class="locality-price">${locality.price}</p>
                <p class="locality-description">${locality.description}</p>
            </div>
        `;
        
        localityCard.addEventListener('click', function() {
            filterByLocality(locality.name);
        });
        
        localitiesGrid.appendChild(localityCard);
    });
}

// Render properties
function renderProperties(filteredProperties = properties) {
    const propertiesGrid = document.querySelector('.properties-grid');
    
    propertiesGrid.innerHTML = '';
    
    filteredProperties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.dataset.propertyId = property.id;
        
        propertyCard.innerHTML = `
            <div class="property-image" style="background-image: url('${property.image}')">
                <span class="property-badge">Verified</span>
                <button class="property-save" onclick="toggleWishlistItem(${property.id})">
                    <i class="far fa-heart"></i>
                </button>
                ${property.virtualTour ? '<div class="virtual-tour-badge">360° Tour</div>' : ''}
            </div>
            <div class="property-info">
                <div class="property-price">${property.price}</div>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-details">
                    <span><i class="fas fa-bed"></i> ${property.bedrooms} Beds</span>
                    <span><i class="fas fa-bath"></i> ${property.bathrooms} Baths</span>
                    <span><i class="fas fa-expand"></i> ${property.area}</span>
                </div>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i> ${property.location}
                </div>
                <div class="property-amenities">
                    ${property.amenities.slice(0, 3).map(amenity => `<span>${amenity}</span>`).join('')}
                </div>
                <div class="property-actions">
                    <button class="btn-view-details" onclick="showPropertyDetails(${property.id})">View Details</button>
                    ${property.virtualTour ? `<button class="btn-virtual-tour" onclick="startVirtualTour(${property.id})">
                        <i class="fas fa-vr-cardboard"></i> Virtual Tour
                    </button>` : ''}
                </div>
            </div>
        `;
        
        propertiesGrid.appendChild(propertyCard);
    });
    
    // Update wishlist buttons after rendering
    setTimeout(() => updateWishlistButtons(), 100);
}

// Search properties
function searchProperties() {
    const location = document.getElementById('locationFilter').value;
    const propertyType = document.getElementById('propertyTypeFilter').value;
    const budget = document.getElementById('budgetFilter').value;
    const bhk = document.getElementById('bhkFilter').value;
    
    let filteredProperties = properties.filter(property => {
        let match = true;
        
        if (location) {
            const locationMap = {
                'vijay-nagar': 'Vijay Nagar',
                'super-corridor': 'Super Corridor',
                'rau': 'Rau',
                'nipania': 'Nipania',
                'palasia': 'Palasia',
                'bhawarkuan': 'Bhawarkuan',
                'bengali-square': 'Bengali Square',
                'ab-road': 'AB Road',
                'scheme-140': 'Scheme 140',
                'mr-10': 'MR 10'
            };
            match = match && property.location === locationMap[location];
        }
        
        if (propertyType) {
            match = match && property.type === propertyType;
        }
        
        if (bhk) {
            match = match && property.bhk === bhk;
        }
        
        if (budget) {
            const price = parseInt(property.price.replace(/[^0-9]/g, ''));
            if (budget === '0-20') match = match && price < 20;
            else if (budget === '20-50') match = match && price >= 20 && price <= 50;
            else if (budget === '50-1cr') match = match && price >= 50 && price <= 100;
            else if (budget === '1cr-2cr') match = match && price >= 100 && price <= 200;
            else if (budget === '2cr+') match = match && price > 200;
        }
        
        return match;
    });
    
    renderProperties(filteredProperties);
    
    if (filteredProperties.length === 0) {
        document.getElementById('propertiesGrid').innerHTML = '<div class="no-results"><p>No properties found matching your criteria. Try adjusting your filters.</p></div>';
    }
}

// Filter by locality
function filterByLocality(localityName) {
    document.getElementById('locationFilter').value = localityName.toLowerCase().replace(' ', '-');
    searchProperties();
    
    // Scroll to properties section
    document.querySelector('.featured-properties').scrollIntoView({ behavior: 'smooth' });
}

// Toggle save property
function toggleSave(button, propertyId) {
    button.classList.toggle('active');
    const icon = button.querySelector('i');
    
    if (button.classList.contains('active')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        showSuccessMessage('Property saved successfully!');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        showSuccessMessage('Property removed from saved list');
    }
}

// Show property details modal
function showPropertyDetails(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    const modal = document.getElementById('propertyModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="property-detail-modal">
            <div class="property-detail-image" style="background-image: url('${property.image}')">
                ${property.verified ? '<span class="property-badge"><i class="fas fa-check-circle"></i> Verified</span>' : ''}
            </div>
            <div class="property-detail-content">
                <div class="property-detail-header">
                    <h2>${property.title}</h2>
                    <div class="property-detail-price">${property.price}</div>
                </div>
                
                <div class="property-detail-info">
                    <div class="info-grid">
                        <div class="info-item">
                            <i class="fas fa-bed"></i>
                            <span>${property.bedrooms} Bedrooms</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-bath"></i>
                            <span>${property.bathrooms} Bathrooms</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-ruler-combined"></i>
                            <span>${property.area}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-building"></i>
                            <span>${property.furnished}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-calendar"></i>
                            <span>${property.age}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-compass"></i>
                            <span>${property.facing} Facing</span>
                        </div>
                    </div>
                </div>
                
                <div class="property-detail-description">
                    <h3>Description</h3>
                    <p>${property.description}</p>
                </div>
                
                <div class="property-detail-amenities">
                    <h3>Amenities</h3>
                    <div class="amenities-list">
                        ${property.amenities.map(amenity => `<span class="amenity-tag">${amenity}</span>`).join('')}
                    </div>
                </div>
                
                <div class="property-detail-location">
                    <h3>Location</h3>
                    <p><i class="fas fa-map-marker-alt"></i> ${property.location}</p>
                </div>
                
                <div class="property-detail-actions">
                    <button class="btn-primary" onclick="contactOwner(${property.id})">
                        <i class="fas fa-phone"></i> Contact Owner
                    </button>
                    <button class="btn-primary" onclick="scheduleVisit(${property.id})">
                        <i class="fas fa-calendar-check"></i> Schedule Visit
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('propertyModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('propertyModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Contact owner
function contactOwner(propertyId) {
    showSuccessMessage('Contact details sent to your phone!');
    closeModal();
}

// Schedule visit
function scheduleVisit(propertyId) {
    showSuccessMessage('Visit request sent! We will contact you soon.');
    closeModal();
}

// Load more properties
function loadMoreProperties() {
    showSuccessMessage('Loading more properties...');
    // In a real application, this would load more properties from the server
    setTimeout(() => {
        showSuccessMessage('All properties loaded!');
    }, 1000);
}

// Testimonials functionality
function initializeTestimonials() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    
    window.changeSlide = function(slideIndex) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = slideIndex;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    };
    
    // Auto-slide functionality
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (currentSlide + 1) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }, 5000);
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            fullName: document.getElementById('fullName').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Validate form
        if (!formData.fullName || !formData.phone || !formData.email || !formData.message) {
            showSuccessMessage('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showSuccessMessage('Please enter a valid email address');
            return;
        }
        
        // Phone validation
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone.replace(/[^0-9]/g, ''))) {
            showSuccessMessage('Please enter a valid 10-digit phone number');
            return;
        }
        
        // Simulate form submission
        showSuccessMessage('Message sent successfully! We will contact you soon.');
        contactForm.reset();
    });
}

// Scroll effects
function initializeScrollEffects() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Scroll to top button
    const scrollTopBtn = document.createElement('div');
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // Fade-in animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Show success message
function showSuccessMessage(message) {
    const successMessage = document.getElementById('successMessage');
    const successText = document.getElementById('successText');
    
    successText.textContent = message;
    successMessage.classList.add('show');
    
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 3000);
}

// Add CSS for no-results message
const style = document.createElement('style');
style.textContent = `
    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 3rem;
        background: #f9fafb;
        border-radius: 16px;
    }
    
    .no-results p {
        font-size: 1.2rem;
        color: #6b7280;
    }
    
    .property-detail-modal {
        max-height: 80vh;
        overflow-y: auto;
    }
    
    .property-detail-image {
        height: 300px;
        background-size: cover;
        background-position: center;
        position: relative;
        border-radius: 16px 16px 0 0;
    }
    
    .property-detail-content {
        padding: 2rem;
    }
    
    .property-detail-header {
        margin-bottom: 2rem;
    }
    
    .property-detail-header h2 {
        font-size: 1.8rem;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }
    
    .property-detail-price {
        font-size: 2rem;
        font-weight: 700;
        color: #1e40af;
    }
    
    .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
    }
    
    .info-grid .info-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 1rem;
        background: #f9fafb;
        border-radius: 8px;
    }
    
    .info-grid .info-item i {
        color: #1e40af;
        font-size: 1.2rem;
    }
    
    .property-detail-description,
    .property-detail-amenities,
    .property-detail-location {
        margin-bottom: 2rem;
    }
    
    .property-detail-description h3,
    .property-detail-amenities h3,
    .property-detail-location h3 {
        font-size: 1.3rem;
        color: #1f2937;
        margin-bottom: 1rem;
    }
    
    .amenities-list {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
    
    .property-detail-actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }
    
    .property-detail-actions button {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
`;
document.head.appendChild(style);
}
}
