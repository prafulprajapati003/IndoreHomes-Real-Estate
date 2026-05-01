// Buy Properties Data
const buyProperties = [
    {
        id: 101,
        title: "Luxury 3BHK Apartment - Vijay Nagar",
        price: 85,
        priceUnit: "Lakhs",
        location: "Vijay Nagar",
        type: "flat",
        bhk: "3bhk",
        area: 1850,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Gym", "Swimming Pool", "Power Backup", "Club House"],
        description: "Premium 3BHK apartment in the heart of Vijay Nagar with modern amenities and excellent connectivity.",
        bedrooms: 3,
        bathrooms: 2,
        balcony: 2,
        furnished: "Semi-Furnished",
        age: "2 years",
        facing: "North-East",
        floor: "5th floor out of 10",
        postedBy: "owner",
        postedOn: "2024-01-15",
        views: 1245
    },
    {
        id: 102,
        title: "Spacious 2BHK - Super Corridor",
        price: 45,
        priceUnit: "Lakhs",
        location: "Super Corridor",
        type: "flat",
        bhk: "2bhk",
        area: 1200,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Lift", "Security", "Garden", "Children's Play Area"],
        description: "Well-designed 2BHK apartment in Super Corridor with great investment potential.",
        bedrooms: 2,
        bathrooms: 2,
        balcony: 1,
        furnished: "Unfurnished",
        age: "1 year",
        facing: "East",
        floor: "3rd floor out of 8",
        postedBy: "dealer",
        postedOn: "2024-01-20",
        views: 892
    },
    {
        id: 103,
        title: "Independent Villa - Rau",
        price: 120,
        priceUnit: "Lakhs",
        location: "Rau",
        type: "villa",
        bhk: "4bhk+",
        area: 3500,
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Private Garden", "Swimming Pool", "Parking", "Security", "Servant Room"],
        description: "Luxurious independent villa with private garden and modern amenities.",
        bedrooms: 4,
        bathrooms: 4,
        balcony: 2,
        furnished: "Fully Furnished",
        age: "New",
        facing: "South",
        floor: "Ground + 2",
        postedBy: "owner",
        postedOn: "2024-01-10",
        views: 2156
    },
    {
        id: 104,
        title: "1BHK Flat - Palasia",
        price: 28,
        priceUnit: "Lakhs",
        location: "Palasia",
        type: "flat",
        bhk: "1bhk",
        area: 650,
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
        floor: "2nd floor out of 5",
        postedBy: "dealer",
        postedOn: "2024-01-25",
        views: 567
    },
    {
        id: 105,
        title: "Commercial Space - AB Road",
        price: 250,
        priceUnit: "Lakhs",
        location: "AB Road",
        type: "commercial",
        bhk: "4bhk+",
        area: 5000,
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Lift", "Security", "Power Backup", "Prime Location"],
        description: "Prime commercial space on AB Road with excellent visibility and accessibility.",
        bedrooms: 0,
        bathrooms: 4,
        balcony: 0,
        furnished: "Unfurnished",
        age: "5 years",
        facing: "North",
        floor: "Ground floor",
        postedBy: "owner",
        postedOn: "2024-01-18",
        views: 3421
    },
    {
        id: 106,
        title: "3BHK Apartment - Bengali Square",
        price: 75,
        priceUnit: "Lakhs",
        location: "Bengali Square",
        type: "flat",
        bhk: "3bhk",
        area: 1650,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Gym", "Children's Play Area", "Security", "Community Hall"],
        description: "Modern 3BHK apartment in Bengali Square with family-friendly amenities.",
        bedrooms: 3,
        bathrooms: 2,
        balcony: 2,
        furnished: "Semi-Furnished",
        age: "1 year",
        facing: "North",
        floor: "7th floor out of 12",
        postedBy: "builder",
        postedOn: "2024-01-22",
        views: 1876
    },
    {
        id: 107,
        title: "Residential Plot - Scheme 140",
        price: 35,
        priceUnit: "Lakhs",
        location: "Scheme 140",
        type: "plot",
        bhk: "4bhk+",
        area: 3000,
        image: "https://images.unsplash.com/photo-1502672260266-1c1afe2c85d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Corner Plot", "Gated Community", "Wide Road", "Development Ready"],
        description: "Premium residential plot in Scheme 140 ready for construction.",
        bedrooms: 0,
        bathrooms: 0,
        balcony: 0,
        furnished: "NA",
        age: "NA",
        facing: "East",
        floor: "NA",
        postedBy: "owner",
        postedOn: "2024-01-12",
        views: 1432
    },
    {
        id: 108,
        title: "4BHK Luxury Flat - Nipania",
        price: 150,
        priceUnit: "Lakhs",
        location: "Nipania",
        type: "flat",
        bhk: "4bhk+",
        area: 2400,
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Gym", "Swimming Pool", "Power Backup", "Club House", "Spa"],
        description: "Ultra-luxury 4BHK apartment in Nipania with premium amenities.",
        bedrooms: 4,
        bathrooms: 4,
        balcony: 3,
        furnished: "Fully Furnished",
        age: "New",
        facing: "North-East",
        floor: "8th floor out of 15",
        postedBy: "builder",
        postedOn: "2024-01-08",
        views: 2987
    },
    {
        id: 109,
        title: "2BHK Flat - Bhawarkuan",
        price: 38,
        priceUnit: "Lakhs",
        location: "Bhawarkuan",
        type: "flat",
        bhk: "2bhk",
        area: 980,
        image: "https://images.unsplash.com/photo-1465146633011-14f8e078109e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Lift", "Security", "Water Supply"],
        description: "Budget-friendly 2BHK in Bhawarkuan near educational institutions.",
        bedrooms: 2,
        bathrooms: 1,
        balcony: 1,
        furnished: "Unfurnished",
        age: "4 years",
        facing: "South",
        floor: "4th floor out of 6",
        postedBy: "dealer",
        postedOn: "2024-01-28",
        views: 723
    },
    {
        id: 110,
        title: "3BHK Villa - MR 10",
        price: 95,
        priceUnit: "Lakhs",
        location: "MR 10",
        type: "villa",
        bhk: "3bhk",
        area: 2800,
        image: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Private Garden", "Parking", "Security", "Power Backup", "Servant Room"],
        description: "Beautiful 3BHK villa in MR 10 with modern architecture.",
        bedrooms: 3,
        bathrooms: 3,
        balcony: 2,
        furnished: "Semi-Furnished",
        age: "2 years",
        facing: "West",
        floor: "Ground + 1",
        postedBy: "owner",
        postedOn: "2024-01-16",
        views: 1654
    },
    {
        id: 111,
        title: "1RK Studio - Vijay Nagar",
        price: 18,
        priceUnit: "Lakhs",
        location: "Vijay Nagar",
        type: "flat",
        bhk: "1rk",
        area: 450,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Parking", "Security"],
        description: "Compact studio apartment perfect for students and working professionals.",
        bedrooms: 0,
        bathrooms: 1,
        balcony: 0,
        furnished: "Unfurnished",
        age: "5 years",
        facing: "East",
        floor: "1st floor out of 4",
        postedBy: "dealer",
        postedOn: "2024-01-30",
        views: 432
    },
    {
        id: 112,
        title: " penthouse 5BHK - Super Corridor",
        price: 280,
        priceUnit: "Lakhs",
        location: "Super Corridor",
        type: "flat",
        bhk: "4bhk+",
        area: 4200,
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        verified: true,
        amenities: ["Private Terrace", "Swimming Pool", "Gym", "Power Backup", "Club House", "Spa", "Jacuzzi"],
        description: "Luxurious penthouse with private terrace and premium amenities.",
        bedrooms: 5,
        bathrooms: 5,
        balcony: 4,
        furnished: "Fully Furnished",
        age: "New",
        facing: "North",
        floor: "Top floor",
        postedBy: "builder",
        postedOn: "2024-01-05",
        views: 4521
    }
];

// Featured Projects Data
const featuredProjects = [
    {
        id: 201,
        name: "Sunshine Heights",
        builder: "ABC Builders",
        location: "Vijay Nagar",
        price: "75 Lakhs Onwards",
        type: "Residential",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Premium residential project with 2,3,4 BHK apartments",
        possession: "Dec 2024",
        rera: "P-MP-19-0001"
    },
    {
        id: 202,
        name: "Green Valley",
        builder: "XYZ Developers",
        location: "Super Corridor",
        price: "45 Lakhs Onwards",
        type: "Residential",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Eco-friendly township with modern amenities",
        possession: "Jun 2025",
        rera: "P-MP-19-0002"
    },
    {
        id: 203,
        name: "Business Park",
        builder: "Commercial Spaces Ltd",
        location: "AB Road",
        price: "2 Cr Onwards",
        type: "Commercial",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Premium commercial spaces for offices and retail",
        possession: "Mar 2025",
        rera: "P-MP-19-0003"
    }
];

// Global variables
let currentPage = 1;
let propertiesPerPage = 12;
let filteredProperties = [...buyProperties];
let savedProperties = new Set();

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderBuyProperties();
    renderFeaturedProjects();
    initializeScrollEffects();
});

// Quick search function
function quickSearchBuy() {
    const location = document.getElementById('quickLocationFilter').value;
    const type = document.getElementById('quickTypeFilter').value;
    const budget = document.getElementById('quickBudgetFilter').value;
    const bhk = document.getElementById('quickBhkFilter').value;
    
    console.log('Quick search:', { location, type, budget, bhk });
    
    // Apply filters and search
    applyQuickSearchFilters(location, type, budget, bhk);
}

// Apply quick search filters
function applyQuickSearchFilters(location, type, budget, bhk) {
    filteredProperties = buyProperties.filter(property => {
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
        
        if (type) {
            match = match && property.type === type;
        }
        
        if (bhk) {
            match = match && property.bhk === bhk;
        }
        
        if (budget) {
            if (budget === '0-20lakh') match = match && property.price <= 20;
            else if (budget === '20lakh-50lakh') match = match && property.price >= 20 && property.price <= 50;
            else if (budget === '50lakh-1cr') match = match && property.price >= 50 && property.price <= 100;
            else if (budget === '1cr-2cr') match = match && property.price >= 100 && property.price <= 200;
            else if (budget === '2cr+') match = match && property.price > 200;
        }
        
        return match;
    });
    
    currentPage = 1;
    renderBuyProperties();
    
    if (filteredProperties.length === 0) {
        document.getElementById('buyPropertiesGrid').innerHTML = '<div class="no-results"><p>No properties found matching your criteria. Try adjusting your filters.</p></div>';
    }
}

// Filter by category
function filterByCategory(category) {
    filteredProperties = buyProperties.filter(property => property.type === category);
    currentPage = 1;
    renderBuyProperties();
    
    // Update active category
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    event.target.closest('.category-card').classList.add('active');
}

// Sort buy properties
function sortBuyProperties() {
    const sortOption = document.getElementById('buySortOptions').value;
    
    switch(sortOption) {
        case 'price-low':
            filteredProperties.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProperties.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filteredProperties.sort((a, b) => new Date(b.postedOn) - new Date(a.postedOn));
            break;
        case 'area-low':
            filteredProperties.sort((a, b) => a.area - b.area);
            break;
        case 'area-high':
            filteredProperties.sort((a, b) => b.area - a.area);
            break;
        default:
            // Relevance - keep original order
            filteredProperties = [...buyProperties];
    }
    
    renderBuyProperties();
}

// Pagination functions for buy properties
function previousBuyPage() {
    if (currentPage > 1) {
        currentPage--;
        renderBuyProperties();
    }
}

function nextBuyPage() {
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderBuyProperties();
    }
}

function goToBuyPage(page) {
    currentPage = page;
    renderBuyProperties();
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

// Render buy properties
function renderBuyProperties() {
    const propertiesGrid = document.getElementById('buyPropertiesGrid');
    const startIndex = (currentPage - 1) * propertiesPerPage;
    const endIndex = startIndex + propertiesPerPage;
    const pageProperties = filteredProperties.slice(startIndex, endIndex);
    
    propertiesGrid.innerHTML = '';
    
    pageProperties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <div class="property-image" style="background-image: url('${property.image}')">
                ${property.verified ? '<span class="property-badge"><i class="fas fa-check-circle"></i> Verified</span>' : ''}
                <span class="posted-by-badge">${getPostedByLabel(property.postedBy)}</span>
                <button class="property-save ${savedProperties.has(property.id) ? 'active' : ''}" onclick="toggleSave(this, ${property.id})">
                    <i class="${savedProperties.has(property.id) ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="property-info">
                <div class="property-price"> ${property.price} ${property.priceUnit}</div>
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
                    <span class="meta-item"><i class="fas fa-calendar"></i> ${formatDate(property.postedOn)}</span>
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
    
    updateResultsCount();
    updatePagination();
}

// Render featured projects
function renderFeaturedProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    featuredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image" style="background-image: url('${project.image}')">
                <span class="project-type">${project.type}</span>
            </div>
            <div class="project-info">
                <h3 class="project-name">${project.name}</h3>
                <div class="project-builder">${project.builder}</div>
                <div class="project-location">
                    <i class="fas fa-map-marker-alt"></i> ${project.location}
                </div>
                <div class="project-price">${project.price}</div>
                <div class="project-details">
                    <span class="detail-item"><i class="fas fa-calendar-check"></i> Possession: ${project.possession}</span>
                    <span class="detail-item"><i class="fas fa-certificate"></i> RERA: ${project.rera}</span>
                </div>
                <p class="project-description">${project.description}</p>
                <button class="btn-primary" onclick="showProjectDetails(${project.id})">Know More</button>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Apply filters
function applyBuyFilters() {
    const location = document.getElementById('buyLocationFilter').value;
    const propertyType = document.getElementById('buyPropertyTypeFilter').value;
    const minBudget = document.getElementById('minBudgetFilter').value;
    const maxBudget = document.getElementById('maxBudgetFilter').value;
    const bhk = document.getElementById('buyBhkFilter').value;
    const area = document.getElementById('areaFilter').value;
    const postedBy = document.getElementById('postedByFilter').value;
    
    filteredProperties = buyProperties.filter(property => {
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
        
        if (postedBy) {
            match = match && property.postedBy === postedBy;
        }
        
        if (minBudget) {
            const minPrice = parseFloat(minBudget.replace('cr', '')) * (minBudget.includes('cr') ? 100 : 1);
            match = match && property.price >= minPrice;
        }
        
        if (maxBudget) {
            const maxPrice = parseFloat(maxBudget.replace('cr', '')) * (maxBudget.includes('cr') ? 100 : 1);
            match = match && property.price <= maxPrice;
        }
        
        if (area) {
            if (area === '0-500') match = match && property.area < 500;
            else if (area === '500-1000') match = match && property.area >= 500 && property.area < 1000;
            else if (area === '1000-1500') match = match && property.area >= 1000 && property.area < 1500;
            else if (area === '1500-2000') match = match && property.area >= 1500 && property.area < 2000;
            else if (area === '2000-3000') match = match && property.area >= 2000 && property.area < 3000;
            else if (area === '3000+') match = match && property.area >= 3000;
        }
        
        return match;
    });
    
    currentPage = 1;
    renderBuyProperties();
    
    if (filteredProperties.length === 0) {
        document.getElementById('buyPropertiesGrid').innerHTML = '<div class="no-results"><p>No properties found matching your criteria. Try adjusting your filters.</p></div>';
    }
}

// Reset filters
function resetBuyFilters() {
    document.getElementById('buyLocationFilter').value = '';
    document.getElementById('buyPropertyTypeFilter').value = '';
    document.getElementById('minBudgetFilter').value = '';
    document.getElementById('maxBudgetFilter').value = '';
    document.getElementById('buyBhkFilter').value = '';
    document.getElementById('areaFilter').value = '';
    document.getElementById('postedByFilter').value = '';
    
    filteredProperties = [...buyProperties];
    currentPage = 1;
    renderBuyProperties();
}

// Sort properties
function sortProperties() {
    const sortOption = document.getElementById('sortOptions').value;
    
    switch(sortOption) {
        case 'price-low':
            filteredProperties.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProperties.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filteredProperties.sort((a, b) => new Date(b.postedOn) - new Date(a.postedOn));
            break;
        case 'area-low':
            filteredProperties.sort((a, b) => a.area - b.area);
            break;
        case 'area-high':
            filteredProperties.sort((a, b) => b.area - a.area);
            break;
        default:
            // Relevance - keep original order
            filteredProperties = [...buyProperties];
    }
    
    renderBuyProperties();
}

// Toggle save property
function toggleSave(button, propertyId) {
    button.classList.toggle('active');
    const icon = button.querySelector('i');
    
    if (button.classList.contains('active')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        savedProperties.add(propertyId);
        showSuccessMessage('Property saved successfully!');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        savedProperties.delete(propertyId);
        showSuccessMessage('Property removed from saved list');
    }
}

// Show property details (reuse from homepage)
function showPropertyDetails(propertyId) {
    const property = buyProperties.find(p => p.id === propertyId);
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
                    <div class="property-detail-price">${property.price} ${property.priceUnit}</div>
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

// Show project details
function showProjectDetails(projectId) {
    const project = featuredProjects.find(p => p.id === projectId);
    if (!project) return;
    
    showSuccessMessage(`Opening details for ${project.name}...`);
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
function updateResultsCount() {
    const resultsCount = document.getElementById('buyResultsCount');
    const totalResults = filteredProperties.length;
    const startResult = (currentPage - 1) * propertiesPerPage + 1;
    const endResult = Math.min(currentPage * propertiesPerPage, totalResults);
    
    resultsCount.textContent = `${startResult}-${endResult}`;
}

function updatePagination() {
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    const pageNumbers = document.querySelector('.pagination-numbers');
    
    pageNumbers.innerHTML = '';
    
    for (let i = 1; i <= Math.min(totalPages, 4); i++) {
        const pageNumber = document.createElement('span');
        pageNumber.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageNumber.textContent = i;
        pageNumber.onclick = () => goToPage(i);
        pageNumbers.appendChild(pageNumber);
    }
}

function goToPage(page) {
    currentPage = page;
    renderBuyProperties();
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderBuyProperties();
    }
}

function nextPage() {
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderBuyProperties();
    }
}

// Utility functions
function getPostedByLabel(postedBy) {
    const labels = {
        'owner': 'Owner',
        'dealer': 'Dealer',
        'builder': 'Builder'
    };
    return labels[postedBy] || 'Unknown';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
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

// Add additional CSS styles for buy page
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    /* Buy Hero Section */
    .buy-hero {
        background: linear-gradient(135deg, #1e40af, #3b82f6);
        position: relative;
        overflow: hidden;
    }
    
    .buy-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') center/cover;
        opacity: 0.15;
        z-index: 0;
    }
    
    .buy-hero .hero-content {
        position: relative;
        z-index: 1;
    }
    
    /* Property Categories */
    .property-categories {
        padding: 4rem 0;
        background: #f9fafb;
    }
    
    .categories-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }
    
    .category-card {
        background: white;
        padding: 2rem;
        border-radius: 16px;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 2px solid transparent;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    
    .category-card:hover {
        transform: translateY(-5px);
        border-color: #1e40af;
        box-shadow: 0 10px 30px rgba(30, 64, 175, 0.15);
    }
    
    .category-card.active {
        border-color: #1e40af;
        background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
    }
    
    .category-icon {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #1e40af, #3b82f6);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
        font-size: 1.5rem;
        color: white;
    }
    
    .category-card h3 {
        font-size: 1.3rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }
    
    .category-card p {
        color: #6b7280;
        margin-bottom: 1rem;
    }
    
    .category-count {
        background: #1e40af;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
    }
    
    /* Buying Guide */
    .buying-guide {
        padding: 4rem 0;
        background: white;
    }
    
    .guide-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }
    
    .guide-card {
        background: #f9fafb;
        padding: 2rem;
        border-radius: 16px;
        text-align: center;
        transition: all 0.3s ease;
        border: 2px solid transparent;
    }
    
    .guide-card:hover {
        transform: translateY(-5px);
        border-color: #1e40af;
        background: white;
        box-shadow: 0 10px 30px rgba(30, 64, 175, 0.15);
    }
    
    .guide-icon {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #10b981, #059669);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
        font-size: 1.5rem;
        color: white;
    }
    
    .guide-card h3 {
        font-size: 1.3rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }
    
    .guide-card p {
        color: #6b7280;
        margin-bottom: 1rem;
        line-height: 1.6;
    }
    
    .guide-link {
        color: #1e40af;
        text-decoration: none;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s ease;
    }
    
    .guide-link:hover {
        gap: 0.75rem;
    }
    
    /* No Results */
    .no-results {
        text-align: center;
        padding: 3rem;
        background: #f9fafb;
        border-radius: 16px;
        margin: 2rem 0;
    }
    
    .no-results p {
        color: #6b7280;
        font-size: 1.1rem;
    }
    
    .btn-secondary {
        background: #6b7280;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .btn-secondary:hover {
        background: #4b5563;
        transform: translateY(-2px);
    }
    
    .properties-listing {
        padding: 3rem 0;
    }
    
    .listing-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    }
    
    .results-info h2 {
        font-size: 2rem;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }
    
    .results-count {
        color: #6b7280;
        font-size: 1.1rem;
    }
    
    .sort-options {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .sort-options label {
        font-weight: 500;
        color: #1f2937;
    }
    
    .sort-options select {
        padding: 8px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
    }
    
    .posted-by-badge {
        position: absolute;
        top: 15px;
        left: 15px;
        background: rgba(30, 64, 175, 0.9);
        color: white;
        padding: 4px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    .property-meta {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        color: #6b7280;
    }
    
    .meta-item {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .btn-contact {
        background: #10b981;
        color: white;
        border: none;
        width: 50px;
        height: 45px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .btn-contact:hover {
        background: #059669;
        transform: translateY(-2px);
    }
    
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 3rem;
    }
    
    .pagination-btn {
        background: white;
        border: 2px solid #e5e7eb;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .pagination-btn:hover {
        border-color: #1e40af;
        color: #1e40af;
    }
    
    .pagination-numbers {
        display: flex;
        gap: 0.5rem;
    }
    
    .page-number {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 2px solid #e5e7eb;
    }
    
    .page-number:hover {
        border-color: #1e40af;
        color: #1e40af;
    }
    
    .page-number.active {
        background: #1e40af;
        color: white;
        border-color: #1e40af;
    }
    
    .featured-projects {
        padding: 5rem 0;
        background: #f9fafb;
    }
    
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
    }
    
    .project-card {
        background: white;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
    }
    
    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }
    
    .project-image {
        height: 200px;
        background-size: cover;
        background-position: center;
        position: relative;
    }
    
    .project-type {
        position: absolute;
        top: 15px;
        left: 15px;
        background: rgba(255, 255, 255, 0.9);
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
        color: #1e40af;
    }
    
    .project-info {
        padding: 1.5rem;
    }
    
    .project-name {
        font-size: 1.3rem;
        font-weight: 600;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }
    
    .project-builder {
        color: #6b7280;
        font-size: 0.95rem;
        margin-bottom: 0.5rem;
    }
    
    .project-location {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #6b7280;
        margin-bottom: 0.5rem;
    }
    
    .project-price {
        font-size: 1.2rem;
        font-weight: 600;
        color: #1e40af;
        margin-bottom: 1rem;
    }
    
    .project-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    
    .detail-item {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #6b7280;
        font-size: 0.9rem;
    }
    
    .project-description {
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }
`;
document.head.appendChild(additionalStyles);
