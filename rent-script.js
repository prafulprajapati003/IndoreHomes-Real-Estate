// Rent Properties Data
const rentProperties = [
    {
        id: 201,
        title: "2BHK Flat for Rent - Vijay Nagar",
        rent: 15000,
        deposit: 45000,
        location: "Vijay Nagar",
        type: "flat",
        bhk: "2bhk",
        area: 1200,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Lift", "Security", "Water Supply", "Power Backup"],
        description: "Well-maintained 2BHK flat in Vijay Nagar with modern amenities.",
        bedrooms: 2,
        bathrooms: 2,
        balcony: 2,
        furnished: "Semi-Furnished",
        availableFrom: "Immediate",
        preferredTenants: "Family",
        postedBy: "owner",
        postedOn: "2024-01-28",
        views: 892
    },
    {
        id: 202,
        title: "1BHK Apartment - Super Corridor",
        rent: 8000,
        deposit: 24000,
        location: "Super Corridor",
        type: "flat",
        bhk: "1bhk",
        area: 650,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Lift", "Security"],
        description: "Affordable 1BHK perfect for bachelors and small families.",
        bedrooms: 1,
        bathrooms: 1,
        balcony: 1,
        furnished: "Unfurnished",
        availableFrom: "Immediate",
        preferredTenants: "Anyone",
        postedBy: "dealer",
        postedOn: "2024-01-30",
        views: 567
    },
    {
        id: 203,
        title: "3BHK Villa - Rau",
        rent: 25000,
        deposit: 75000,
        location: "Rau",
        type: "villa",
        bhk: "3bhk",
        area: 2000,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Private Garden", "Parking", "Security", "Power Backup", "Servant Room"],
        description: "Spacious 3BHK villa with private garden and modern amenities.",
        bedrooms: 3,
        bathrooms: 3,
        balcony: 2,
        furnished: "Fully Furnished",
        availableFrom: "15 days",
        preferredTenants: "Family",
        postedBy: "owner",
        postedOn: "2024-01-25",
        views: 1234
    },
    {
        id: 204,
        title: "PG for Boys - Palasia",
        rent: 6000,
        deposit: 12000,
        location: "Palasia",
        type: "pg",
        bhk: "1rk",
        area: 150,
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Food", "WiFi", "Laundry", "Security", "Common Room"],
        description: "Comfortable PG accommodation with food and all amenities included.",
        bedrooms: 1,
        bathrooms: 1,
        balcony: 0,
        furnished: "Fully Furnished",
        availableFrom: "Immediate",
        preferredTenants: "Boys",
        postedBy: "owner",
        postedOn: "2024-01-29",
        views: 1456
    },
    {
        id: 205,
        title: "Office Space - AB Road",
        rent: 35000,
        deposit: 105000,
        location: "AB Road",
        type: "commercial",
        bhk: "4bhk+",
        area: 1500,
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Lift", "Security", "Power Backup", "Prime Location"],
        description: "Prime commercial space on AB Road suitable for offices and showrooms.",
        bedrooms: 0,
        bathrooms: 2,
        balcony: 0,
        furnished: "Semi-Furnished",
        availableFrom: "Immediate",
        preferredTenants: "Business",
        postedBy: "owner",
        postedOn: "2024-01-27",
        views: 789
    },
    {
        id: 206,
        title: "3BHK Flat - Bengali Square",
        rent: 18000,
        deposit: 54000,
        location: "Bengali Square",
        type: "flat",
        bhk: "3bhk",
        area: 1650,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Gym", "Children's Play Area", "Security", "Community Hall"],
        description: "Modern 3BHK apartment with family-friendly amenities.",
        bedrooms: 3,
        bathrooms: 2,
        balcony: 2,
        furnished: "Semi-Furnished",
        availableFrom: "Immediate",
        preferredTenants: "Family",
        postedBy: "dealer",
        postedOn: "2024-01-26",
        views: 987
    },
    {
        id: 207,
        title: "1RK Studio - Bhawarkuan",
        rent: 4500,
        deposit: 9000,
        location: "Bhawarkuan",
        type: "flat",
        bhk: "1rk",
        area: 350,
        image: "https://images.unsplash.com/photo-1465146633011-14f8e078109e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Security"],
        description: "Compact studio perfect for students and working professionals.",
        bedrooms: 0,
        bathrooms: 1,
        balcony: 0,
        furnished: "Unfurnished",
        availableFrom: "Immediate",
        preferredTenants: "Anyone",
        postedBy: "dealer",
        postedOn: "2024-01-31",
        views: 432
    },
    {
        id: 208,
        title: "4BHK Luxury Flat - Nipania",
        rent: 35000,
        deposit: 105000,
        location: "Nipania",
        type: "flat",
        bhk: "4bhk+",
        area: 2400,
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Gym", "Swimming Pool", "Power Backup", "Club House", "Spa"],
        description: "Luxurious 4BHK apartment with premium amenities and facilities.",
        bedrooms: 4,
        bathrooms: 4,
        balcony: 3,
        furnished: "Fully Furnished",
        availableFrom: "30 days",
        preferredTenants: "Family",
        postedBy: "owner",
        postedOn: "2024-01-24",
        views: 1876
    },
    {
        id: 209,
        title: "PG for Girls - Vijay Nagar",
        rent: 7000,
        deposit: 14000,
        location: "Vijay Nagar",
        type: "pg",
        bhk: "1rk",
        area: 180,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Food", "WiFi", "Laundry", "Security", "Study Room"],
        description: "Safe and secure PG accommodation for girls with all facilities.",
        bedrooms: 1,
        bathrooms: 1,
        balcony: 0,
        furnished: "Fully Furnished",
        availableFrom: "Immediate",
        preferredTenants: "Girls",
        postedBy: "owner",
        postedOn: "2024-01-29",
        views: 2341
    },
    {
        id: 210,
        title: "2BHK Flat - Scheme 140",
        rent: 12000,
        deposit: 36000,
        location: "Scheme 140",
        type: "flat",
        bhk: "2bhk",
        area: 1050,
        image: "https://images.unsplash.com/photo-1502672260266-1c1afe2c85d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Lift", "Security", "Garden"],
        description: "Budget-friendly 2BHK in Scheme 140 with good connectivity.",
        bedrooms: 2,
        bathrooms: 1,
        balcony: 1,
        furnished: "Unfurnished",
        availableFrom: "Immediate",
        preferredTenants: "Family",
        postedBy: "dealer",
        postedOn: "2024-01-30",
        views: 654
    },
    {
        id: 211,
        title: "Retail Shop - MR 10",
        rent: 20000,
        deposit: 60000,
        location: "MR 10",
        type: "commercial",
        bhk: "4bhk+",
        area: 800,
        image: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Security", "High Footfall"],
        description: "Prime retail space on MR 10 with excellent visibility.",
        bedrooms: 0,
        bathrooms: 1,
        balcony: 0,
        furnished: "Unfurnished",
        availableFrom: "Immediate",
        preferredTenants: "Business",
        postedBy: "owner",
        postedOn: "2024-01-28",
        views: 543
    },
    {
        id: 212,
        title: "1BHK Flat - Palasia",
        rent: 9000,
        deposit: 27000,
        location: "Palasia",
        type: "flat",
        bhk: "1bhk",
        area: 550,
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Lift", "Security", "Water Supply"],
        description: "Well-located 1BHK in Palasia near commercial areas.",
        bedrooms: 1,
        bathrooms: 1,
        balcony: 1,
        furnished: "Semi-Furnished",
        availableFrom: "15 days",
        preferredTenants: "Anyone",
        postedBy: "dealer",
        postedOn: "2024-01-27",
        views: 789
    }
];

// Global variables
let currentRentPage = 1;
let propertiesPerPage = 12;
let filteredRentProperties = [...rentProperties];
let savedRentProperties = new Set();

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderRentProperties();
    initializeScrollEffects();
    initializeQuickSearch();
});

// Quick search functionality
function initializeQuickSearch() {
    // Add event listeners to quick search filters
    const quickFilters = ['quickLocationFilter', 'quickTypeFilter', 'quickBudgetFilter', 'quickBhkFilter'];
    quickFilters.forEach(filterId => {
        const filter = document.getElementById(filterId);
        if (filter) {
            filter.addEventListener('change', function() {
                // Auto-apply filters when changed
                quickSearchRentals();
            });
        }
    });
}

function quickSearchRentals() {
    const location = document.getElementById('quickLocationFilter').value;
    const type = document.getElementById('quickTypeFilter').value;
    const budget = document.getElementById('quickBudgetFilter').value;
    const bhk = document.getElementById('quickBhkFilter').value;
    
    // Apply filters to advanced search form
    if (location) {
        document.getElementById('rentLocationFilter').value = location;
    }
    if (type) {
        document.getElementById('rentPropertyTypeFilter').value = type;
    }
    if (budget) {
        // Convert budget range to min/max values
        const budgetRanges = {
            '0-10k': { min: '', max: '10000' },
            '10k-20k': { min: '10000', max: '20000' },
            '20k-35k': { min: '20000', max: '35000' },
            '35k-50k': { min: '35000', max: '50000' },
            '50k+': { min: '50000', max: '' }
        };
        
        const range = budgetRanges[budget];
        if (range) {
            document.getElementById('minRentFilter').value = range.min;
            document.getElementById('maxRentFilter').value = range.max;
        }
    }
    if (bhk) {
        document.getElementById('rentBhkFilter').value = bhk;
    }
    
    // Apply filters and scroll to results
    applyRentFilters();
    
    // Scroll to properties section
    const propertiesSection = document.querySelector('.properties-listing');
    if (propertiesSection) {
        propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    showSuccessMessage('Search applied successfully!');
}

// Navigation functionality (same as homepage)
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
    
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Render rent properties
function renderRentProperties() {
    const propertiesGrid = document.getElementById('rentPropertiesGrid');
    const startIndex = (currentRentPage - 1) * propertiesPerPage;
    const endIndex = startIndex + propertiesPerPage;
    const pageProperties = filteredRentProperties.slice(startIndex, endIndex);
    
    propertiesGrid.innerHTML = '';
    
    pageProperties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <div class="property-image" style="background-image: url('${property.image}')">
                ${property.verified ? '<span class="property-badge"><i class="fas fa-check-circle"></i> Verified</span>' : ''}
                <span class="available-badge">${property.availableFrom}</span>
                <button class="property-save ${savedRentProperties.has(property.id) ? 'active' : ''}" onclick="toggleSave(this, ${property.id})">
                    <i class="${savedRentProperties.has(property.id) ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="property-info">
                <div class="rent-price">
                    <span class="rent-amount"> ${property.rent.toLocaleString('en-IN')}</span>
                    <span class="rent-period">/month</span>
                    <span class="deposit-amount">Deposit: ${property.deposit.toLocaleString('en-IN')}</span>
                </div>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-details">
                    <span class="property-detail"><i class="fas fa-bed"></i> ${property.bedrooms} Bed</span>
                    <span class="property-detail"><i class="fas fa-bath"></i> ${property.bathrooms} Bath</span>
                    <span class="property-detail"><i class="fas fa-ruler-combined"></i> ${property.area} sq ft</span>
                </div>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i> ${property.location}
                </div>
                <div class="property-meta">
                    <span class="meta-item"><i class="fas fa-couch"></i> ${property.furnished}</span>
                    <span class="meta-item"><i class="fas fa-users"></i> ${property.preferredTenants}</span>
                    <span class="meta-item"><i class="fas fa-eye"></i> ${property.views} views</span>
                </div>
                <div class="property-amenities">
                    ${property.amenities.slice(0, 3).map(amenity => `<span class="amenity-tag">${amenity}</span>`).join('')}
                </div>
                <div class="property-actions">
                    <button class="btn-view-details" onclick="showPropertyDetails(${property.id})">View Details</button>
                    <button class="btn-contact" onclick="contactOwner(${property.id})">
                        <i class="fas fa-phone"></i>
                    </button>
                </div>
            </div>
        `;
        
        propertiesGrid.appendChild(propertyCard);
    });
    
    updateRentResultsCount();
    updateRentPagination();
}

// Filter by category
function filterByCategory(category) {
    document.getElementById('rentPropertyTypeFilter').value = category;
    applyRentFilters();
}

// Apply filters
function applyRentFilters() {
    const location = document.getElementById('rentLocationFilter').value;
    const propertyType = document.getElementById('rentPropertyTypeFilter').value;
    const minRent = document.getElementById('minRentFilter').value;
    const maxRent = document.getElementById('maxRentFilter').value;
    const bhk = document.getElementById('rentBhkFilter').value;
    const furnishing = document.getElementById('furnishingFilter').value;
    const available = document.getElementById('availableFilter').value;
    
    filteredRentProperties = rentProperties.filter(property => {
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
        
        if (furnishing) {
            match = match && property.furnished.toLowerCase().includes(furnishing.replace('-', ' '));
        }
        
        if (available) {
            if (available === 'immediate') match = match && property.availableFrom === 'Immediate';
            else if (available === 'within-15') match = match && (property.availableFrom === 'Immediate' || property.availableFrom === '15 days');
            else if (available === 'within-30') match = match && ['Immediate', '15 days', '30 days'].includes(property.availableFrom);
            else if (available === 'within-60') match = match && ['Immediate', '15 days', '30 days', '60 days'].includes(property.availableFrom);
        }
        
        if (minRent) {
            match = match && property.rent >= parseInt(minRent);
        }
        
        if (maxRent) {
            match = match && property.rent <= parseInt(maxRent);
        }
        
        return match;
    });
    
    currentRentPage = 1;
    renderRentProperties();
    
    if (filteredRentProperties.length === 0) {
        document.getElementById('rentPropertiesGrid').innerHTML = '<div class="no-results"><p>No properties found matching your criteria. Try adjusting your filters.</p></div>';
    }
}

// Reset filters
function resetRentFilters() {
    document.getElementById('rentLocationFilter').value = '';
    document.getElementById('rentPropertyTypeFilter').value = '';
    document.getElementById('minRentFilter').value = '';
    document.getElementById('maxRentFilter').value = '';
    document.getElementById('rentBhkFilter').value = '';
    document.getElementById('furnishingFilter').value = '';
    document.getElementById('availableFilter').value = '';
    
    filteredRentProperties = [...rentProperties];
    currentRentPage = 1;
    renderRentProperties();
}

// Sort properties
function sortRentProperties() {
    const sortOption = document.getElementById('rentSortOptions').value;
    
    switch(sortOption) {
        case 'price-low':
            filteredRentProperties.sort((a, b) => a.rent - b.rent);
            break;
        case 'price-high':
            filteredRentProperties.sort((a, b) => b.rent - a.rent);
            break;
        case 'newest':
            filteredRentProperties.sort((a, b) => new Date(b.postedOn) - new Date(a.postedOn));
            break;
        case 'area-low':
            filteredRentProperties.sort((a, b) => a.area - b.area);
            break;
        case 'area-high':
            filteredRentProperties.sort((a, b) => b.area - a.area);
            break;
        default:
            // Relevance - keep original order
            filteredRentProperties = [...rentProperties];
    }
    
    renderRentProperties();
}

// Toggle save property
function toggleSave(button, propertyId) {
    button.classList.toggle('active');
    const icon = button.querySelector('i');
    
    if (button.classList.contains('active')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        savedRentProperties.add(propertyId);
        showSuccessMessage('Property saved successfully!');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        savedRentProperties.delete(propertyId);
        showSuccessMessage('Property removed from saved list');
    }
}

// Show property details
function showPropertyDetails(propertyId) {
    const property = rentProperties.find(p => p.id === propertyId);
    if (!property) return;
    
    const modal = document.getElementById('propertyModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="property-detail-modal">
            <div class="property-detail-image" style="background-image: url('${property.image}')">
                ${property.verified ? '<span class="property-badge"><i class="fas fa-check-circle"></i> Verified</span>' : ''}
                <span class="available-badge">${property.availableFrom}</span>
            </div>
            <div class="property-detail-content">
                <div class="property-detail-header">
                    <h2>${property.title}</h2>
                    <div class="rent-detail-price">
                        <span class="rent-amount">${property.rent.toLocaleString('en-IN')}</span>
                        <span class="rent-period">/month</span>
                        <div class="deposit-detail">Deposit: ${property.deposit.toLocaleString('en-IN')}</div>
                    </div>
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
                            <span>${property.area} sq ft</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-couch"></i>
                            <span>${property.furnished}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-users"></i>
                            <span>${property.preferredTenants}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-calendar-check"></i>
                            <span>${property.availableFrom}</span>
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
                
                <div class="rental-terms">
                    <h3>Rental Terms</h3>
                    <ul>
                        <li>Monthly Rent: ${property.rent.toLocaleString('en-IN')}</li>
                        <li>Security Deposit: ${property.deposit.toLocaleString('en-IN')}</li>
                        <li>Lease Duration: 11 months (renewable)</li>
                        <li>Maintenance: Included in rent</li>
                        <li>Preferred Tenants: ${property.preferredTenants}</li>
                    </ul>
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

// Close modal
function closeModal() {
    const modal = document.getElementById('propertyModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Pagination functions
function updateRentResultsCount() {
    const resultsCount = document.getElementById('rentResultsCount');
    const totalResults = filteredRentProperties.length;
    const startResult = (currentRentPage - 1) * propertiesPerPage + 1;
    const endResult = Math.min(currentRentPage * propertiesPerPage, totalResults);
    
    resultsCount.textContent = `${startResult}-${endResult} of ${totalResults}`;
}

function updateRentPagination() {
    const totalPages = Math.ceil(filteredRentProperties.length / propertiesPerPage);
    const pageNumbers = document.querySelector('.pagination-numbers');
    
    pageNumbers.innerHTML = '';
    
    for (let i = 1; i <= Math.min(totalPages, 4); i++) {
        const pageNumber = document.createElement('span');
        pageNumber.className = `page-number ${i === currentRentPage ? 'active' : ''}`;
        pageNumber.textContent = i;
        pageNumber.onclick = () => goToRentPage(i);
        pageNumbers.appendChild(pageNumber);
    }
}

function goToRentPage(page) {
    currentRentPage = page;
    renderRentProperties();
}

function previousRentPage() {
    if (currentRentPage > 1) {
        currentRentPage--;
        renderRentProperties();
    }
}

function nextRentPage() {
    const totalPages = Math.ceil(filteredRentProperties.length / propertiesPerPage);
    if (currentRentPage < totalPages) {
        currentRentPage++;
        renderRentProperties();
    }
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

// Scroll effects
function initializeScrollEffects() {
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
}

// Modal close on outside click
window.onclick = function(event) {
    const modal = document.getElementById('propertyModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Add additional CSS styles for rent page
const rentStyles = document.createElement('style');
rentStyles.textContent = `
    .rental-categories {
        padding: 4rem 0;
        background: white;
    }
    
    .categories-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }
    
    .category-card {
        background: white;
        border: 2px solid #e5e7eb;
        border-radius: 16px;
        padding: 2rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .category-card:hover {
        border-color: #1e40af;
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(30, 64, 175, 0.15);
    }
    
    .category-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #1e40af, #2563eb);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        font-size: 2rem;
        color: white;
    }
    
    .category-card h3 {
        font-size: 1.3rem;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }
    
    .category-card p {
        color: #6b7280;
        margin-bottom: 1rem;
    }
    
    .category-count {
        display: inline-block;
        background: #f3f4f6;
        color: #1e40af;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
    }
    
    .available-badge {
        position: absolute;
        top: 15px;
        left: 15px;
        background: #10b981;
        color: white;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
    }
    
    .rent-price {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
    }
    
    .rent-amount {
        font-size: 1.8rem;
        font-weight: 700;
        color: #1e40af;
    }
    
    .rent-period {
        font-size: 0.9rem;
        color: #6b7280;
        margin-left: 5px;
    }
    
    .deposit-amount {
        font-size: 0.95rem;
        color: #6b7280;
        margin-top: 0.25rem;
    }
    
    .rent-detail-price {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-bottom: 1rem;
    }
    
    .rent-detail-price .rent-amount {
        font-size: 2.5rem;
    }
    
    .deposit-detail {
        font-size: 1.1rem;
        color: #6b7280;
        margin-top: 0.5rem;
    }
    
    .rental-terms {
        background: #f9fafb;
        padding: 1.5rem;
        border-radius: 12px;
        margin-bottom: 2rem;
    }
    
    .rental-terms h3 {
        font-size: 1.3rem;
        color: #1f2937;
        margin-bottom: 1rem;
    }
    
    .rental-terms ul {
        list-style: none;
        padding: 0;
    }
    
    .rental-terms li {
        padding: 0.5rem 0;
        color: #4b5563;
        border-bottom: 1px solid #e5e7eb;
    }
    
    .rental-terms li:last-child {
        border-bottom: none;
    }
    
    .rental-guide {
        padding: 5rem 0;
        background: #f9fafb;
    }
    
    .guide-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }
    
    .guide-card {
        background: white;
        padding: 2rem;
        border-radius: 16px;
        text-align: center;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
    }
    
    .guide-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }
    
    .guide-icon {
        width: 70px;
        height: 70px;
        background: linear-gradient(135deg, #1e40af, #2563eb);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        font-size: 1.8rem;
        color: white;
    }
    
    .guide-card h3 {
        font-size: 1.2rem;
        color: #1f2937;
        margin-bottom: 1rem;
    }
    
    .guide-card p {
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }
    
    .guide-link {
        color: #1e40af;
        text-decoration: none;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        transition: all 0.3s ease;
    }
    
    .guide-link:hover {
        color: #2563eb;
        transform: translateX(3px);
    }
`;
document.head.appendChild(rentStyles);
