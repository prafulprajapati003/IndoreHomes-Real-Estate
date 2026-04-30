// Projects Data
const allProjects = [
    {
        id: 301,
        name: "Sunshine Heights",
        builder: "ABC Builders",
        location: "Vijay Nagar",
        type: "residential",
        propertyType: "apartment",
        status: "under-construction",
        price: "75 Lakhs Onwards",
        priceRange: { min: 75, max: 120, unit: "Lakhs" },
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Premium residential project with 2,3,4 BHK apartments",
        possession: "Dec 2024",
        rera: "P-MP-19-0001",
        configurations: ["2BHK - 1050 sq ft", "3BHK - 1450 sq ft", "4BHK - 1850 sq ft"],
        amenities: ["Swimming Pool", "Gym", "Club House", "Children's Play Area", "Landscaped Garden", "Power Backup", "Lift", "Security"],
        highlights: ["Prime Location", "Modern Amenities", "Vastu Compliant", "Earthquake Resistant"],
        featured: true,
        upcoming: false
    },
    {
        id: 302,
        name: "Green Valley Township",
        builder: "XYZ Developers",
        location: "Super Corridor",
        type: "township",
        propertyType: "apartment",
        status: "under-construction",
        price: "45 Lakhs Onwards",
        priceRange: { min: 45, max: 85, unit: "Lakhs" },
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Eco-friendly township with modern amenities and green living",
        possession: "Jun 2025",
        rera: "P-MP-19-0002",
        configurations: ["1BHK - 650 sq ft", "2BHK - 950 sq ft", "3BHK - 1350 sq ft"],
        amenities: ["Rain Water Harvesting", "Solar Panels", "Organic Garden", "Community Center", "Jogging Track", "Power Backup"],
        highlights: ["Eco-Friendly", "Sustainable Living", "Green Building", "Smart Home Features"],
        featured: true,
        upcoming: false
    },
    {
        id: 303,
        name: "Indore Business Park",
        builder: "Commercial Spaces Ltd",
        location: "AB Road",
        type: "commercial",
        propertyType: "office",
        status: "ready-to-move",
        price: "2 Cr Onwards",
        priceRange: { min: 200, max: 500, unit: "Lakhs" },
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Premium commercial spaces for offices and retail businesses",
        possession: "Immediate",
        rera: "P-MP-19-0003",
        configurations: ["Office Space - 1000-5000 sq ft", "Retail Shop - 200-2000 sq ft"],
        amenities: ["Central AC", "Power Backup", "Lift", "Security", "Parking", "Food Court"],
        highlights: ["Prime Commercial Location", "Modern Infrastructure", "High Footfall Area", "24/7 Security"],
        featured: true,
        upcoming: false
    },
    {
        id: 304,
        name: "Royal Residency",
        builder: "Royal Group",
        location: "Nipania",
        type: "residential",
        propertyType: "villa",
        status: "under-construction",
        price: "1.2 Cr Onwards",
        priceRange: { min: 120, max: 200, unit: "Lakhs" },
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Luxury independent villas with private gardens and modern amenities",
        possession: "Mar 2025",
        rera: "P-MP-19-0004",
        configurations: ["3BHK Villa - 2500 sq ft", "4BHK Villa - 3200 sq ft"],
        amenities: ["Private Garden", "Swimming Pool", "Personal Parking", "Security", "Power Backup"],
        highlights: ["Luxury Living", "Privacy", "Spacious", "Modern Design"],
        featured: false,
        upcoming: false
    },
    {
        id: 305,
        name: "Platinum Towers",
        builder: "Platinum Developers",
        location: "Bengali Square",
        type: "residential",
        propertyType: "apartment",
        status: "pre-launch",
        price: "60 Lakhs Onwards",
        priceRange: { min: 60, max: 95, unit: "Lakhs" },
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Premium residential towers with world-class amenities",
        possession: "Aug 2025",
        rera: "P-MP-19-0005",
        configurations: ["2BHK - 1100 sq ft", "3BHK - 1550 sq ft"],
        amenities: ["Sky Lounge", "Infinity Pool", "Gym", "Spa", "Indoor Games", "Power Backup"],
        highlights: ["Pre-Launch Offer", "Modern Architecture", "Prime Location", "Luxury Amenities"],
        featured: false,
        upcoming: true
    },
    {
        id: 306,
        name: "Tech Park Plaza",
        builder: "Tech Infrastructure",
        location: "Super Corridor",
        type: "commercial",
        propertyType: "office",
        status: "upcoming",
        price: "1.5 Cr Onwards",
        priceRange: { min: 150, max: 300, unit: "Lakhs" },
        image: "https://images.unsplash.com/photo-1497366210345-6360afe5e7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "State-of-the-art tech park for IT and technology companies",
        possession: "Dec 2025",
        rera: "P-MP-19-0006",
        configurations: ["Office Space - 2000-10000 sq ft"],
        amenities: ["High-Speed Internet", "Conference Rooms", "Cafeteria", "Parking", "Power Backup"],
        highlights: ["IT Hub", "Modern Infrastructure", "24/7 Access", "Tech-Ready"],
        featured: false,
        upcoming: true
    },
    {
        id: 307,
        name: "Garden City Apartments",
        builder: "Green Homes",
        location: "Rau",
        type: "residential",
        propertyType: "apartment",
        status: "under-construction",
        price: "35 Lakhs Onwards",
        priceRange: { min: 35, max: 65, unit: "Lakhs" },
        image: "https://images.unsplash.com/photo-1502672260266-1c1afe2c85d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Affordable apartments with green surroundings and modern amenities",
        possession: "Nov 2024",
        rera: "P-MP-19-0007",
        configurations: ["1BHK - 550 sq ft", "2BHK - 850 sq ft"],
        amenities: ["Garden", "Children's Play Area", "Community Hall", "Parking", "Security"],
        highlights: ["Affordable", "Green Environment", "Family Friendly", "Good Connectivity"],
        featured: false,
        upcoming: false
    },
    {
        id: 308,
        name: "Imperial Mall",
        builder: "Imperial Group",
        location: "Palasia",
        type: "commercial",
        propertyType: "retail",
        status: "ready-to-move",
        price: "80 Lakhs Onwards",
        priceRange: { min: 80, max: 200, unit: "Lakhs" },
        image: "https://images.unsplash.com/photo-1519420570681-3c4fdd926b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Premium retail spaces in the heart of the city",
        possession: "Immediate",
        rera: "P-MP-19-0008",
        configurations: ["Retail Shop - 300-1500 sq ft", "Food Court - 500-2000 sq ft"],
        amenities: ["Food Court", "Parking", "Security", "Power Backup", "Central AC"],
        highlights: ["Prime Location", "High Footfall", "Modern Mall", "Brand Visibility"],
        featured: false,
        upcoming: false
    }
];

// Builders Data
const builders = [
    {
        id: 401,
        name: "ABC Builders",
        logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Leading real estate developer with 15+ years of experience",
        projectsCount: 12,
        experience: "15+ Years",
        rating: 4.5,
        specialties: ["Residential", "Commercial"],
        reraRegistered: true
    },
    {
        id: 402,
        name: "XYZ Developers",
        logo: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Innovative developers focusing on sustainable and green projects",
        projectsCount: 8,
        experience: "10+ Years",
        rating: 4.3,
        specialties: ["Township", "Eco-Friendly"],
        reraRegistered: true
    },
    {
        id: 403,
        name: "Royal Group",
        logo: "https://images.unsplash.com/photo-1497366210345-6360afe5e7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Luxury segment developers known for premium projects",
        projectsCount: 6,
        experience: "12+ Years",
        rating: 4.7,
        specialties: ["Luxury", "Villas"],
        reraRegistered: true
    },
    {
        id: 404,
        name: "Commercial Spaces Ltd",
        logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Specialized in commercial and office space development",
        projectsCount: 15,
        experience: "20+ Years",
        rating: 4.4,
        specialties: ["Commercial", "Office"],
        reraRegistered: true
    }
];

// Global variables
let filteredProjects = [...allProjects];
let comparisonProjects = [];
let selectedComparisonSlot = null;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderFeaturedProjects();
    renderAllProjects();
    renderUpcomingProjects();
    renderBuilders();
    initializeScrollEffects();
});

// Navigation functionality
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

// Render featured projects
function renderFeaturedProjects() {
    const featuredProjectsGrid = document.getElementById('featuredProjectsGrid');
    const featured = allProjects.filter(project => project.featured);
    
    featuredProjectsGrid.innerHTML = '';
    
    featured.forEach(project => {
        const projectCard = createProjectCard(project, 'featured');
        featuredProjectsGrid.appendChild(projectCard);
    });
}

// Render all projects
function renderAllProjects() {
    const allProjectsList = document.getElementById('allProjectsList');
    
    allProjectsList.innerHTML = '';
    
    filteredProjects.forEach(project => {
        const projectCard = createProjectCard(project, 'list');
        allProjectsList.appendChild(projectCard);
    });
}

// Render upcoming projects
function renderUpcomingProjects() {
    const upcomingGrid = document.getElementById('upcomingGrid');
    const upcoming = allProjects.filter(project => project.upcoming);
    
    upcomingGrid.innerHTML = '';
    
    upcoming.forEach(project => {
        const projectCard = createProjectCard(project, 'upcoming');
        upcomingGrid.appendChild(projectCard);
    });
}

// Render builders
function renderBuilders() {
    const buildersGrid = document.getElementById('buildersGrid');
    
    buildersGrid.innerHTML = '';
    
    builders.forEach(builder => {
        const builderCard = document.createElement('div');
        builderCard.className = 'builder-card';
        builderCard.innerHTML = `
            <div class="builder-logo">
                <img src="${builder.logo}" alt="${builder.name}">
            </div>
            <div class="builder-info">
                <h3>${builder.name}</h3>
                <p>${builder.description}</p>
                <div class="builder-stats">
                    <div class="stat-item">
                        <span class="stat-value">${builder.projectsCount}</span>
                        <span class="stat-label">Projects</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${builder.experience}</span>
                        <span class="stat-label">Experience</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${builder.rating}</span>
                        <span class="stat-label">Rating</span>
                    </div>
                </div>
                <div class="builder-specialties">
                    ${builder.specialties.map(specialty => `<span class="specialty-tag">${specialty}</span>`).join('')}
                </div>
                <div class="builder-actions">
                    <button class="btn-primary" onclick="viewBuilderProjects(${builder.id})">View Projects</button>
                    <button class="btn-secondary" onclick="contactBuilder(${builder.id})">Contact</button>
                </div>
            </div>
        `;
        
        buildersGrid.appendChild(builderCard);
    });
}

// Create project card
function createProjectCard(project, type) {
    const projectCard = document.createElement('div');
    projectCard.className = `project-card ${type}`;
    
    if (type === 'featured' || type === 'upcoming') {
        projectCard.innerHTML = `
            <div class="project-image" style="background-image: url('${project.image}')">
                <span class="project-type">${project.type}</span>
                <span class="project-status">${formatStatus(project.status)}</span>
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
                <div class="project-actions">
                    <button class="btn-primary" onclick="showProjectDetails(${project.id})">View Details</button>
                    <button class="btn-secondary" onclick="addToComparison(${project.id})">Compare</button>
                </div>
            </div>
        `;
    } else if (type === 'list') {
        projectCard.innerHTML = `
            <div class="project-list-card">
                <div class="project-image" style="background-image: url('${project.image}')">
                    <span class="project-type">${project.type}</span>
                    <span class="project-status">${formatStatus(project.status)}</span>
                </div>
                <div class="project-content">
                    <div class="project-header">
                        <h3 class="project-name">${project.name}</h3>
                        <div class="project-price">${project.price}</div>
                    </div>
                    <div class="project-meta">
                        <span class="meta-item"><i class="fas fa-building"></i> ${project.builder}</span>
                        <span class="meta-item"><i class="fas fa-map-marker-alt"></i> ${project.location}</span>
                        <span class="meta-item"><i class="fas fa-calendar-check"></i> ${project.possession}</span>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-highlights">
                        ${project.highlights.slice(0, 3).map(highlight => `<span class="highlight-tag">${highlight}</span>`).join('')}
                    </div>
                    <div class="project-actions">
                        <button class="btn-primary" onclick="showProjectDetails(${project.id})">View Details</button>
                        <button class="btn-secondary" onclick="addToComparison(${project.id})">Compare</button>
                        <button class="btn-contact" onclick="contactBuilder(${project.id})">
                            <i class="fas fa-phone"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    return projectCard;
}

// Format status
function formatStatus(status) {
    const statusMap = {
        'under-construction': 'Under Construction',
        'pre-launch': 'Pre-Launch',
        'ready-to-move': 'Ready to Move',
        'upcoming': 'Upcoming'
    };
    return statusMap[status] || status;
}

// Apply project filters
function applyProjectFilters() {
    const location = document.getElementById('projectLocationFilter').value;
    const projectType = document.getElementById('projectTypeFilter').value;
    const propertyType = document.getElementById('propertyTypeFilter').value;
    const status = document.getElementById('projectStatusFilter').value;
    
    filteredProjects = allProjects.filter(project => {
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
            match = match && project.location === locationMap[location];
        }
        
        if (projectType) {
            match = match && project.type === projectType;
        }
        
        if (propertyType) {
            match = match && project.propertyType === propertyType;
        }
        
        if (status) {
            match = match && project.status === status;
        }
        
        return match;
    });
    
    renderAllProjects();
    
    if (filteredProjects.length === 0) {
        document.getElementById('allProjectsList').innerHTML = '<div class="no-results"><p>No projects found matching your criteria. Try adjusting your filters.</p></div>';
    }
}

// Reset project filters
function resetProjectFilters() {
    document.getElementById('projectLocationFilter').value = '';
    document.getElementById('projectTypeFilter').value = '';
    document.getElementById('propertyTypeFilter').value = '';
    document.getElementById('projectStatusFilter').value = '';
    
    filteredProjects = [...allProjects];
    renderAllProjects();
}

// Show project details
function showProjectDetails(projectId) {
    const project = allProjects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('projectModalBody');
    
    modalBody.innerHTML = `
        <div class="project-detail-modal">
            <div class="project-detail-image" style="background-image: url('${project.image}')">
                <span class="project-type">${project.type}</span>
                <span class="project-status">${formatStatus(project.status)}</span>
            </div>
            <div class="project-detail-content">
                <div class="project-detail-header">
                    <h2>${project.name}</h2>
                    <div class="project-detail-price">${project.price}</div>
                </div>
                
                <div class="project-detail-info">
                    <div class="info-grid">
                        <div class="info-item">
                            <i class="fas fa-building"></i>
                            <span>${project.builder}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${project.location}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-calendar-check"></i>
                            <span>${project.possession}</span>
                        </div>
                        <div class="info-item">
                            <i class="fas fa-certificate"></i>
                            <span>${project.rera}</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-detail-description">
                    <h3>About Project</h3>
                    <p>${project.description}</p>
                </div>
                
                <div class="project-configurations">
                    <h3>Configurations</h3>
                    <ul>
                        ${project.configurations.map(config => `<li>${config}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-amenities">
                    <h3>Amenities</h3>
                    <div class="amenities-list">
                        ${project.amenities.map(amenity => `<span class="amenity-tag">${amenity}</span>`).join('')}
                    </div>
                </div>
                
                <div class="project-highlights">
                    <h3>Highlights</h3>
                    <ul>
                        ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-detail-actions">
                    <button class="btn-primary" onclick="requestInfo(${project.id})">
                        <i class="fas fa-info-circle"></i> Request Info
                    </button>
                    <button class="btn-primary" onclick="scheduleVisit(${project.id})">
                        <i class="fas fa-calendar-check"></i> Schedule Visit
                    </button>
                    <button class="btn-secondary" onclick="downloadBrochure(${project.id})">
                        <i class="fas fa-download"></i> Download Brochure
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Project comparison functions
function addToComparison(projectId) {
    if (comparisonProjects.length >= 3) {
        showSuccessMessage('You can compare maximum 3 projects');
        return;
    }
    
    const project = allProjects.find(p => p.id === projectId);
    if (!project) return;
    
    if (comparisonProjects.find(p => p.id === projectId)) {
        showSuccessMessage('Project already added to comparison');
        return;
    }
    
    comparisonProjects.push(project);
    updateComparisonSlots();
    showSuccessMessage('Project added to comparison');
}

function updateComparisonSlots() {
    const slots = document.querySelectorAll('.comparison-slot');
    
    comparisonProjects.forEach((project, index) => {
        if (slots[index]) {
            slots[index].className = 'comparison-slot filled';
            slots[index].innerHTML = `
                <img src="${project.image}" alt="${project.name}">
                <span>${project.name}</span>
                <button class="remove-project" onclick="removeFromComparison(${project.id})">
                    <i class="fas fa-times"></i>
                </button>
            `;
        }
    });
    
    // Clear remaining slots
    for (let i = comparisonProjects.length; i < slots.length; i++) {
        slots[i].className = 'comparison-slot empty';
        slots[i].innerHTML = `
            <i class="fas fa-plus-circle"></i>
            <span>Select Project</span>
        `;
    }
    
    // Show/hide comparison table
    const comparisonTable = document.getElementById('comparisonTable');
    if (comparisonProjects.length > 1) {
        comparisonTable.style.display = 'block';
        renderComparisonTable();
    } else {
        comparisonTable.style.display = 'none';
    }
}

function removeFromComparison(projectId) {
    comparisonProjects = comparisonProjects.filter(p => p.id !== projectId);
    updateComparisonSlots();
    showSuccessMessage('Project removed from comparison');
}

function renderComparisonTable() {
    const comparisonTable = document.getElementById('comparisonTable');
    
    let tableHTML = `
        <table class="comparison-table-content">
            <thead>
                <tr>
                    <th>Features</th>
                    ${comparisonProjects.map(project => `<th>${project.name}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Builder</td>
                    ${comparisonProjects.map(project => `<td>${project.builder}</td>`).join('')}
                </tr>
                <tr>
                    <td>Location</td>
                    ${comparisonProjects.map(project => `<td>${project.location}</td>`).join('')}
                </tr>
                <tr>
                    <td>Type</td>
                    ${comparisonProjects.map(project => `<td>${project.type}</td>`).join('')}
                </tr>
                <tr>
                    <td>Price</td>
                    ${comparisonProjects.map(project => `<td>${project.price}</td>`).join('')}
                </tr>
                <tr>
                    <td>Possession</td>
                    ${comparisonProjects.map(project => `<td>${project.possession}</td>`).join('')}
                </tr>
                <tr>
                    <td>RERA</td>
                    ${comparisonProjects.map(project => `<td>${project.rera}</td>`).join('')}
                </tr>
                <tr>
                    <td>Configurations</td>
                    ${comparisonProjects.map(project => `<td>${project.configurations.join('<br>')}</td>`).join('')}
                </tr>
                <tr>
                    <td>Highlights</td>
                    ${comparisonProjects.map(project => `<td>${project.highlights.join('<br>')}</td>`).join('')}
                </tr>
            </tbody>
        </table>
    `;
    
    comparisonTable.innerHTML = tableHTML;
}

function selectProjectForCompare(slotNumber) {
    selectedComparisonSlot = slotNumber;
    const modal = document.getElementById('projectSelectionModal');
    const projectList = document.getElementById('projectSelectionList');
    
    projectList.innerHTML = '';
    
    allProjects.forEach(project => {
        const projectOption = document.createElement('div');
        projectOption.className = 'project-selection-option';
        projectOption.innerHTML = `
            <div class="project-option-image" style="background-image: url('${project.image}')"></div>
            <div class="project-option-info">
                <h4>${project.name}</h4>
                <p>${project.location} - ${project.price}</p>
            </div>
        `;
        projectOption.onclick = () => selectProjectForSlot(project);
        projectList.appendChild(projectOption);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function selectProjectForSlot(project) {
    if (comparisonProjects.find(p => p.id === project.id)) {
        showSuccessMessage('Project already in comparison');
        return;
    }
    
    if (selectedComparisonSlot) {
        // Remove existing project in this slot if any
        if (comparisonProjects[selectedComparisonSlot - 1]) {
            comparisonProjects[selectedComparisonSlot - 1] = project;
        } else {
            comparisonProjects.push(project);
        }
    }
    
    updateComparisonSlots();
    closeProjectSelectionModal();
}

function closeProjectSelectionModal() {
    const modal = document.getElementById('projectSelectionModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Action functions
function viewBuilderProjects(builderId) {
    const builder = builders.find(b => b.id === builderId);
    if (!builder) return;
    
    showSuccessMessage(`Viewing projects by ${builder.name}`);
}

function contactBuilder(builderId) {
    showSuccessMessage('Contact details sent to your phone!');
}

function requestInfo(projectId) {
    showSuccessMessage('Information request sent! We will contact you soon.');
    closeProjectModal();
}

function scheduleVisit(projectId) {
    showSuccessMessage('Visit request sent! We will contact you soon.');
    closeProjectModal();
}

function downloadBrochure(projectId) {
    showSuccessMessage('Brochure download started!');
}

function loadMoreProjects() {
    showSuccessMessage('Loading more projects...');
    // In real app, this would load more projects from server
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

// Modal close on outside click
window.onclick = function(event) {
    const projectModal = document.getElementById('projectModal');
    const selectionModal = document.getElementById('projectSelectionModal');
    
    if (event.target == projectModal) {
        closeProjectModal();
    }
    if (event.target == selectionModal) {
        closeProjectSelectionModal();
    }
}

// Add additional CSS styles for projects page
const projectsStyles = document.createElement('style');
projectsStyles.textContent = `
    .project-filters {
        padding: 3rem 0;
        background: #f9fafb;
        margin-top: -2rem;
    }
    
    .filter-container {
        background: white;
        padding: 2rem;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    
    .filter-container h2 {
        font-size: 1.5rem;
        color: #1f2937;
        margin-bottom: 1.5rem;
    }
    
    .filters-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        align-items: end;
    }
    
    .filter-group {
        display: flex;
        flex-direction: column;
    }
    
    .filter-group label {
        font-weight: 500;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }
    
    .filter-group select {
        padding: 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        transition: all 0.3s ease;
    }
    
    .filter-group select:focus {
        outline: none;
        border-color: #1e40af;
        box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
    }
    
    .filter-actions {
        display: flex;
        gap: 1rem;
        align-items: end;
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
    
    .featured-projects {
        padding: 5rem 0;
        background: white;
    }
    
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
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
    
    .project-status {
        position: absolute;
        top: 15px;
        right: 15px;
        background: #10b981;
        color: white;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
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
        margin-bottom: 1rem;
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
    
    .project-actions {
        display: flex;
        gap: 1rem;
    }
    
    .all-projects {
        padding: 5rem 0;
        background: #f9fafb;
    }
    
    .projects-list {
        margin-top: 3rem;
    }
    
    .project-list-card {
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 2rem;
        background: white;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        margin-bottom: 2rem;
        transition: all 0.3s ease;
    }
    
    .project-list-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }
    
    .project-list-card .project-image {
        height: 200px;
        border-radius: 0;
    }
    
    .project-content {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .project-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 1rem;
    }
    
    .project-header .project-name {
        font-size: 1.5rem;
        margin-bottom: 0;
    }
    
    .project-header .project-price {
        font-size: 1.3rem;
        margin-bottom: 0;
    }
    
    .project-meta {
        display: flex;
        gap: 1.5rem;
        margin-bottom: 1rem;
        flex-wrap: wrap;
    }
    
    .meta-item {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #6b7280;
        font-size: 0.9rem;
    }
    
    .project-highlights {
        margin: 1rem 0;
    }
    
    .highlight-tag {
        background: #f3f4f6;
        color: #1e40af;
        padding: 4px 10px;
        border-radius: 15px;
        font-size: 0.85rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        display: inline-block;
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
    
    .load-more-container {
        text-align: center;
        margin-top: 3rem;
    }
    
    .upcoming-projects {
        padding: 5rem 0;
        background: white;
    }
    
    .upcoming-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }
    
    .builder-spotlight {
        padding: 5rem 0;
        background: #f9fafb;
    }
    
    .builders-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }
    
    .builder-card {
        background: white;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
    }
    
    .builder-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }
    
    .builder-logo {
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f9fafb;
    }
    
    .builder-logo img {
        max-width: 120px;
        max-height: 80px;
        object-fit: contain;
    }
    
    .builder-info {
        padding: 1.5rem;
    }
    
    .builder-info h3 {
        font-size: 1.3rem;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }
    
    .builder-info p {
        color: #6b7280;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }
    
    .builder-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-bottom: 1.5rem;
    }
    
    .stat-item {
        text-align: center;
    }
    
    .stat-value {
        display: block;
        font-size: 1.2rem;
        font-weight: 600;
        color: #1e40af;
    }
    
    .stat-label {
        font-size: 0.85rem;
        color: #6b7280;
    }
    
    .builder-specialties {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
    }
    
    .specialty-tag {
        background: #f3f4f6;
        color: #1e40af;
        padding: 4px 10px;
        border-radius: 15px;
        font-size: 0.85rem;
    }
    
    .builder-actions {
        display: flex;
        gap: 1rem;
    }
    
    .project-comparison {
        padding: 5rem 0;
        background: white;
    }
    
    .comparison-container {
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .comparison-header {
        text-align: center;
        margin-bottom: 3rem;
    }
    
    .add-project-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: #1e40af;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        margin-bottom: 2rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .add-project-btn:hover {
        background: #2563eb;
        transform: translateY(-2px);
    }
    
    .comparison-slots {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-bottom: 3rem;
    }
    
    .comparison-slot {
        border: 2px dashed #e5e7eb;
        border-radius: 12px;
        padding: 2rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .comparison-slot.empty:hover {
        border-color: #1e40af;
        background: rgba(30, 64, 175, 0.05);
    }
    
    .comparison-slot.filled {
        border: 2px solid #1e40af;
        background: white;
        position: relative;
    }
    
    .comparison-slot.empty i {
        font-size: 2rem;
        color: #6b7280;
        margin-bottom: 1rem;
    }
    
    .comparison-slot.empty span {
        color: #6b7280;
        font-weight: 500;
    }
    
    .comparison-slot.filled img {
        width: 80px;
        height: 60px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 1rem;
    }
    
    .comparison-slot.filled span {
        font-weight: 600;
        color: #1f2937;
    }
    
    .remove-project {
        position: absolute;
        top: 10px;
        right: 10px;
        background: #ef4444;
        color: white;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .remove-project:hover {
        background: #dc2626;
        transform: scale(1.1);
    }
    
    .comparison-table {
        background: white;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    
    .comparison-table-content {
        width: 100%;
        border-collapse: collapse;
    }
    
    .comparison-table-content th,
    .comparison-table-content td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid #e5e7eb;
    }
    
    .comparison-table-content th {
        background: #f9fafb;
        font-weight: 600;
        color: #1f2937;
    }
    
    .comparison-table-content th:first-child {
        width: 200px;
    }
    
    .comparison-table-content tr:hover {
        background: #f9fafb;
    }
    
    .project-selection-content {
        padding: 2rem;
    }
    
    .project-selection-content h2 {
        font-size: 1.5rem;
        color: #1f2937;
        margin-bottom: 2rem;
    }
    
    .project-selection-list {
        max-height: 400px;
        overflow-y: auto;
    }
    
    .project-selection-option {
        display: grid;
        grid-template-columns: 100px 1fr;
        gap: 1rem;
        padding: 1rem;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-bottom: 1rem;
    }
    
    .project-selection-option:hover {
        background: #f9fafb;
    }
    
    .project-option-image {
        height: 60px;
        background-size: cover;
        background-position: center;
        border-radius: 8px;
    }
    
    .project-option-info h4 {
        font-size: 1.1rem;
        color: #1f2937;
        margin-bottom: 0.25rem;
    }
    
    .project-option-info p {
        color: #6b7280;
        font-size: 0.9rem;
    }
    
    .project-detail-modal {
        max-height: 80vh;
        overflow-y: auto;
    }
    
    .project-detail-image {
        height: 300px;
        background-size: cover;
        background-position: center;
        position: relative;
        border-radius: 16px 16px 0 0;
    }
    
    .project-detail-content {
        padding: 2rem;
    }
    
    .project-detail-header {
        margin-bottom: 2rem;
    }
    
    .project-detail-header h2 {
        font-size: 1.8rem;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }
    
    .project-detail-price {
        font-size: 2rem;
        font-weight: 700;
        color: #1e40af;
    }
    
    .project-detail-info {
        margin-bottom: 2rem;
    }
    
    .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
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
    
    .project-detail-description,
    .project-configurations,
    .project-amenities,
    .project-highlights {
        margin-bottom: 2rem;
    }
    
    .project-detail-description h3,
    .project-configurations h3,
    .project-amenities h3,
    .project-highlights h3 {
        font-size: 1.3rem;
        color: #1f2937;
        margin-bottom: 1rem;
    }
    
    .project-configurations ul,
    .project-highlights ul {
        list-style: none;
        padding: 0;
    }
    
    .project-configurations li,
    .project-highlights li {
        padding: 0.5rem 0;
        color: #4b5563;
        border-bottom: 1px solid #e5e7eb;
    }
    
    .project-configurations li:last-child,
    .project-highlights li:last-child {
        border-bottom: none;
    }
    
    .amenities-list {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
    
    .project-detail-actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }
    
    .project-detail-actions button {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
`;
document.head.appendChild(projectsStyles);
