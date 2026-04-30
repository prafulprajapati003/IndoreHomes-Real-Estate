// Admin Panel JavaScript
let currentSection = 'dashboard';
let properties = [];
let users = [];
let inquiries = [];
let charts = {};

// Initialize Admin Panel
document.addEventListener('DOMContentLoaded', function() {
    initializeAdminPanel();
    loadDashboardData();
    setupEventListeners();
});

function initializeAdminPanel() {
    // Load data from localStorage or initialize with sample data
    loadDataFromStorage();
    
    // Initialize charts
    initializeCharts();
    
    // Show dashboard by default
    showSection('dashboard');
}

function loadDataFromStorage() {
    // Load properties from main website
    const mainProperties = localStorage.getItem('indoreHomesProperties');
    if (mainProperties) {
        properties = JSON.parse(mainProperties);
    } else {
        // Initialize with sample properties
        properties = [
            {
                id: 1,
                title: "Luxury 3BHK Apartment in Vijay Nagar",
                price: "85 Lakhs",
                location: "Vijay Nagar",
                type: "flat",
                bhk: "3bhk",
                area: "1850 sq ft",
                status: "active",
                images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"],
                virtualTour: true,
                verified: true,
                amenities: ["Parking", "Gym", "Swimming Pool", "Power Backup"],
                description: "Premium 3BHK apartment in the heart of Vijay Nagar with modern amenities and excellent connectivity.",
                bedrooms: 3,
                bathrooms: 2,
                balcony: 2,
                furnished: "Semi-Furnished",
                age: "2 years",
                facing: "North-East",
                floor: "5th floor out of 10",
                views: 1250,
                inquiries: 45,
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                title: "Spacious 2BHK in Super Corridor",
                price: "45 Lakhs",
                location: "Super Corridor",
                type: "flat",
                bhk: "2bhk",
                area: "1200 sq ft",
                status: "active",
                images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"],
                virtualTour: false,
                verified: true,
                amenities: ["Parking", "Lift", "Security", "Garden"],
                description: "Well-designed 2BHK apartment in Super Corridor with great investment potential.",
                bedrooms: 2,
                bathrooms: 2,
                balcony: 1,
                furnished: "Unfurnished",
                age: "1 year",
                facing: "East",
                floor: "3rd floor out of 8",
                views: 890,
                inquiries: 32,
                createdAt: new Date().toISOString()
            }
        ];
        saveDataToStorage();
    }
    
    // Load users
    const storedUsers = localStorage.getItem('indoreHomesUsers');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    } else {
        users = [
            {
                id: 1,
                name: "Rahul Sharma",
                email: "rahul@example.com",
                phone: "+91 98765 43210",
                registeredAt: new Date().toISOString(),
                properties: 3,
                status: "active"
            },
            {
                id: 2,
                name: "Priya Patel",
                email: "priya@example.com",
                phone: "+91 98765 43211",
                registeredAt: new Date().toISOString(),
                properties: 1,
                status: "active"
            }
        ];
        saveDataToStorage();
    }
    
    // Load inquiries
    const storedInquiries = localStorage.getItem('indoreHomesInquiries');
    if (storedInquiries) {
        inquiries = JSON.parse(storedInquiries);
    } else {
        inquiries = [
            {
                id: 1,
                name: "Amit Kumar",
                email: "amit@example.com",
                phone: "+91 98765 43212",
                propertyId: 1,
                propertyTitle: "Luxury 3BHK Apartment in Vijay Nagar",
                message: "I am interested in this property. Please provide more details.",
                status: "pending",
                createdAt: new Date().toISOString()
            },
            {
                id: 2,
                name: "Sneha Reddy",
                email: "sneha@example.com",
                phone: "+91 98765 43213",
                propertyId: 2,
                propertyTitle: "Spacious 2BHK in Super Corridor",
                message: "What is the expected possession date?",
                status: "resolved",
                createdAt: new Date().toISOString()
            }
        ];
        saveDataToStorage();
    }
}

function saveDataToStorage() {
    localStorage.setItem('indoreHomesProperties', JSON.stringify(properties));
    localStorage.setItem('indoreHomesUsers', JSON.stringify(users));
    localStorage.setItem('indoreHomesInquiries', JSON.stringify(inquiries));
    
    // Also update main website data
    localStorage.setItem('properties', JSON.stringify(properties));
}

function setupEventListeners() {
    // Property form submission
    const propertyForm = document.getElementById('addPropertyForm');
    if (propertyForm) {
        propertyForm.addEventListener('submit', handlePropertySubmit);
    }
    
    // Image upload
    const imageUploadArea = document.getElementById('imageUploadArea');
    const imageInput = document.getElementById('propertyImages');
    
    if (imageUploadArea && imageInput) {
        imageUploadArea.addEventListener('click', () => imageInput.click());
        imageInput.addEventListener('change', handleImageUpload);
        
        // Drag and drop
        imageUploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            imageUploadArea.style.borderColor = '#1e40af';
            imageUploadArea.style.background = '#f9fafb';
        });
        
        imageUploadArea.addEventListener('dragleave', (e) => {
            e.preventDefault();
            imageUploadArea.style.borderColor = '#e5e7eb';
            imageUploadArea.style.background = 'white';
        });
        
        imageUploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            imageUploadArea.style.borderColor = '#e5e7eb';
            imageUploadArea.style.background = 'white';
            handleImageUpload({ target: { files: e.dataTransfer.files } });
        });
    }
    
    // Search functionality
    const adminSearch = document.getElementById('adminSearch');
    if (adminSearch) {
        adminSearch.addEventListener('input', handleAdminSearch);
    }
}

// Section Management
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeNavLink = document.querySelector(`[href="#${sectionName}"]`);
    if (activeNavLink) {
        activeNavLink.classList.add('active');
    }
    
    // Update page title
    const pageTitle = document.querySelector('.page-title');
    if (pageTitle) {
        pageTitle.textContent = sectionName.charAt(0).toUpperCase() + sectionName.slice(1).replace('-', ' ');
    }
    
    currentSection = sectionName;
    
    // Load section-specific data
    loadSectionData(sectionName);
}

function loadSectionData(sectionName) {
    switch(sectionName) {
        case 'dashboard':
            loadDashboardData();
            break;
        case 'properties':
            loadPropertiesData();
            break;
        case 'users':
            loadUsersData();
            break;
        case 'inquiries':
            loadInquiriesData();
            break;
        case 'analytics':
            loadAnalyticsData();
            break;
    }
}

// Dashboard Functions
function loadDashboardData() {
    // Update stats
    document.getElementById('totalProperties').textContent = properties.length;
    document.getElementById('totalUsers').textContent = users.length;
    document.getElementById('totalInquiries').textContent = inquiries.length;
    document.getElementById('totalViews').textContent = properties.reduce((sum, prop) => sum + (prop.views || 0), 0);
    
    // Load recent properties
    loadRecentProperties();
    
    // Load recent inquiries
    loadRecentInquiries();
}

function loadRecentProperties() {
    const recentPropertiesList = document.getElementById('recentPropertiesList');
    if (!recentPropertiesList) return;
    
    const recentProperties = properties.slice(-5).reverse();
    
    recentPropertiesList.innerHTML = recentProperties.map(property => `
        <div class="property-item">
            <h4>${property.title}</h4>
            <p>${property.location} - ${property.price}</p>
            <div class="property-meta">
                <span><i class="fas fa-eye"></i> ${property.views || 0}</span>
                <span><i class="fas fa-envelope"></i> ${property.inquiries || 0}</span>
                <span><i class="fas fa-circle" style="color: ${getStatusColor(property.status)}"></i> ${property.status}</span>
            </div>
        </div>
    `).join('');
}

function loadRecentInquiries() {
    const recentInquiriesList = document.getElementById('recentInquiriesList');
    if (!recentInquiriesList) return;
    
    const recentInquiries = inquiries.slice(-5).reverse();
    
    recentInquiriesList.innerHTML = recentInquiries.map(inquiry => `
        <div class="inquiry-item">
            <h4>${inquiry.name}</h4>
            <p>${inquiry.propertyTitle}</p>
            <div class="inquiry-meta">
                <span><i class="fas fa-envelope"></i> ${inquiry.email}</span>
                <span><i class="fas fa-clock"></i> ${formatDate(inquiry.createdAt)}</span>
                <span><i class="fas fa-circle" style="color: ${getStatusColor(inquiry.status)}"></i> ${inquiry.status}</span>
            </div>
        </div>
    `).join('');
}

// Properties Management
function loadPropertiesData() {
    const propertiesTableBody = document.getElementById('propertiesTableBody');
    if (!propertiesTableBody) return;
    
    propertiesTableBody.innerHTML = properties.map(property => `
        <tr>
            <td>
                <div class="property-info">
                    <img src="${property.images[0]}" alt="${property.title}" class="property-thumbnail">
                    <div class="property-details">
                        <h4>${property.title}</h4>
                        <p>${property.area} - ${property.bhk}</p>
                    </div>
                </div>
            </td>
            <td>${property.type}</td>
            <td>${property.price}</td>
            <td>${property.location}</td>
            <td><span class="status-badge ${property.status}">${property.status}</span></td>
            <td>${property.views || 0}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action view" onclick="viewProperty(${property.id})" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-action edit" onclick="editProperty(${property.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-action delete" onclick="deleteProperty(${property.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function handlePropertySubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const propertyData = {
        id: Date.now(),
        title: formData.get('propertyTitle') || document.getElementById('propertyTitle').value,
        type: document.getElementById('propertyType').value,
        status: document.getElementById('propertyStatus').value,
        price: document.getElementById('propertyPrice').value,
        area: document.getElementById('propertyArea').value,
        bhk: document.getElementById('propertyBHK').value,
        location: document.getElementById('propertyLocation').value,
        address: document.getElementById('propertyAddress').value,
        city: document.getElementById('propertyCity').value,
        pincode: document.getElementById('propertyPincode').value,
        bedrooms: document.getElementById('propertyBedrooms').value,
        bathrooms: document.getElementById('propertyBathrooms').value,
        balconies: document.getElementById('propertyBalconies').value,
        floor: document.getElementById('propertyFloor').value,
        age: document.getElementById('propertyAge').value,
        facing: document.getElementById('propertyFacing').value,
        furnished: document.getElementById('propertyFurnished').value,
        description: document.getElementById('propertyDescription').value,
        amenities: Array.from(document.querySelectorAll('input[name="amenities"]:checked')).map(cb => cb.value),
        images: getUploadedImages(),
        virtualTour: document.getElementById('virtualTourEnabled').checked,
        virtualTourVideo: document.getElementById('virtualTourVideo').value,
        verified: true,
        views: 0,
        inquiries: 0,
        createdAt: new Date().toISOString()
    };
    
    // Add property
    properties.push(propertyData);
    saveDataToStorage();
    
    // Show success message
    showAdminSuccessMessage('Property added successfully!');
    
    // Reset form
    resetPropertyForm();
    
    // Redirect to properties section
    showSection('properties');
}

function editProperty(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    // Populate edit form (simplified - in production, this would open a modal)
    const modal = document.getElementById('editPropertyModal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <form id="editPropertyForm">
            <div class="form-grid">
                <div class="form-group">
                    <label>Property Title</label>
                    <input type="text" id="editTitle" value="${property.title}" required>
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input type="text" id="editPrice" value="${property.price}" required>
                </div>
                <div class="form-group">
                    <label>Status</label>
                    <select id="editStatus">
                        <option value="active" ${property.status === 'active' ? 'selected' : ''}>Active</option>
                        <option value="inactive" ${property.status === 'inactive' ? 'selected' : ''}>Inactive</option>
                        <option value="sold" ${property.status === 'sold' ? 'selected' : ''}>Sold</option>
                        <option value="rented" ${property.status === 'rented' ? 'selected' : ''}>Rented</option>
                    </select>
                </div>
            </div>
            <div class="form-actions">
                <button type="submit" class="btn-primary">Save Changes</button>
                <button type="button" class="btn-secondary" onclick="closeEditModal()">Cancel</button>
            </div>
        </form>
    `;
    
    modal.classList.add('active');
    
    // Setup form submission
    document.getElementById('editPropertyForm').addEventListener('submit', (e) => {
        e.preventDefault();
        updateProperty(propertyId);
    });
}

function updateProperty(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    property.title = document.getElementById('editTitle').value;
    property.price = document.getElementById('editPrice').value;
    property.status = document.getElementById('editStatus').value;
    
    saveDataToStorage();
    showAdminSuccessMessage('Property updated successfully!');
    closeEditModal();
    loadPropertiesData();
}

function deleteProperty(propertyId) {
    if (confirm('Are you sure you want to delete this property?')) {
        properties = properties.filter(p => p.id !== propertyId);
        saveDataToStorage();
        showAdminSuccessMessage('Property deleted successfully!');
        loadPropertiesData();
    }
}

function viewProperty(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    if (!property) return;
    
    // Open property in new tab (main website)
    window.open(`index.html#property-${propertyId}`, '_blank');
}

// Users Management
function loadUsersData() {
    const usersTableBody = document.getElementById('usersTableBody');
    if (!usersTableBody) return;
    
    usersTableBody.innerHTML = users.map(user => `
        <tr>
            <td>
                <div class="user-info">
                    <img src="https://picsum.photos/seed/${user.email}/40/40.jpg" alt="${user.name}" class="user-avatar">
                    <div>
                        <h4>${user.name}</h4>
                        <p>${user.email}</p>
                    </div>
                </div>
            </td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${formatDate(user.registeredAt)}</td>
            <td>${user.properties || 0}</td>
            <td><span class="status-badge ${user.status}">${user.status}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action view" onclick="viewUser(${user.id})" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-action edit" onclick="toggleUserStatus(${user.id})" title="Toggle Status">
                        <i class="fas fa-toggle-${user.status === 'active' ? 'on' : 'off'}"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function toggleUserStatus(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) return;
    
    user.status = user.status === 'active' ? 'inactive' : 'active';
    saveDataToStorage();
    showAdminSuccessMessage(`User ${user.status === 'active' ? 'activated' : 'deactivated'} successfully!`);
    loadUsersData();
}

// Inquiries Management
function loadInquiriesData() {
    const inquiriesTableBody = document.getElementById('inquiriesTableBody');
    if (!inquiriesTableBody) return;
    
    inquiriesTableBody.innerHTML = inquiries.map(inquiry => `
        <tr>
            <td>${inquiry.name}</td>
            <td>${inquiry.email}</td>
            <td>${inquiry.phone}</td>
            <td>${inquiry.propertyTitle}</td>
            <td>${inquiry.message.substring(0, 50)}...</td>
            <td>${formatDate(inquiry.createdAt)}</td>
            <td><span class="status-badge ${inquiry.status}">${inquiry.status}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action view" onclick="viewInquiry(${inquiry.id})" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn-action edit" onclick="updateInquiryStatus(${inquiry.id})" title="Update Status">
                        <i class="fas fa-check"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function updateInquiryStatus(inquiryId) {
    const inquiry = inquiries.find(i => i.id === inquiryId);
    if (!inquiry) return;
    
    inquiry.status = inquiry.status === 'pending' ? 'resolved' : 'pending';
    saveDataToStorage();
    showAdminSuccessMessage(`Inquiry marked as ${inquiry.status}!`);
    loadInquiriesData();
}

// Image Upload
function handleImageUpload(e) {
    const files = Array.from(e.target.files);
    const uploadedImagesContainer = document.getElementById('uploadedImages');
    
    files.forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageContainer = document.createElement('div');
                imageContainer.className = 'uploaded-image';
                imageContainer.innerHTML = `
                    <img src="${e.target.result}" alt="${file.name}">
                    <button class="remove-image" onclick="removeUploadedImage(this)">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                uploadedImagesContainer.appendChild(imageContainer);
            };
            reader.readAsDataURL(file);
        }
    });
}

function removeUploadedImage(button) {
    button.parentElement.remove();
}

function getUploadedImages() {
    const images = [];
    document.querySelectorAll('.uploaded-image img').forEach(img => {
        images.push(img.src);
    });
    return images.length > 0 ? images : ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'];
}

// Form Management
function resetPropertyForm() {
    const form = document.getElementById('addPropertyForm');
    if (form) {
        form.reset();
        document.getElementById('uploadedImages').innerHTML = '';
    }
}

// Analytics
function loadAnalyticsData() {
    updateCharts();
}

function initializeCharts() {
    // Views Chart
    const viewsCtx = document.getElementById('viewsChart');
    if (viewsCtx) {
        charts.views = new Chart(viewsCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Property Views',
                    data: [120, 150, 180, 200, 170, 220, 190],
                    borderColor: '#1e40af',
                    backgroundColor: 'rgba(30, 64, 175, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
    
    // Inquiries Chart
    const inquiriesCtx = document.getElementById('inquiriesChart');
    if (inquiriesCtx) {
        charts.inquiries = new Chart(inquiriesCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Inquiries',
                    data: [8, 12, 15, 18, 14, 20, 16],
                    backgroundColor: '#10b981'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
    
    // Locations Chart
    const locationsCtx = document.getElementById('locationsChart');
    if (locationsCtx) {
        charts.locations = new Chart(locationsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Vijay Nagar', 'Super Corridor', 'Rau', 'Palasia', 'Bhavarkuwa'],
                datasets: [{
                    data: [35, 25, 20, 12, 8],
                    backgroundColor: ['#1e40af', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
    
    // Types Chart
    const typesCtx = document.getElementById('typesChart');
    if (typesCtx) {
        charts.types = new Chart(typesCtx, {
            type: 'pie',
            data: {
                labels: ['Apartment', 'Villa', 'House', 'Plot'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: ['#1e40af', '#10b981', '#f59e0b', '#ef4444']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
}

function updateCharts() {
    // Update chart data based on current period
    const period = document.getElementById('analyticsPeriod')?.value || 7;
    
    // This would normally fetch data based on the period
    // For now, we'll use the sample data
}

// Utility Functions
function showAdminSuccessMessage(message) {
    const successMessage = document.getElementById('adminSuccessMessage');
    const messageText = document.getElementById('successMessageText');
    
    if (messageText) {
        messageText.textContent = message;
    }
    
    if (successMessage) {
        successMessage.classList.add('show');
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 3000);
    }
}

function getStatusColor(status) {
    const colors = {
        active: '#10b981',
        inactive: '#ef4444',
        sold: '#f59e0b',
        rented: '#1e40af',
        pending: '#6b7280',
        resolved: '#10b981'
    };
    return colors[status] || '#6b7280';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN');
}

function toggleSidebar() {
    const sidebar = document.querySelector('.admin-sidebar');
    const mainContent = document.querySelector('.admin-main');
    
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
}

function closeEditModal() {
    const modal = document.getElementById('editPropertyModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('adminLoggedIn');
        window.location.href = 'index.html';
    }
}

// Export Functions
function exportProperties() {
    const dataStr = JSON.stringify(properties, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `properties_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showAdminSuccessMessage('Properties exported successfully!');
}

function exportUsers() {
    const dataStr = JSON.stringify(users, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `users_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showAdminSuccessMessage('Users exported successfully!');
}

function exportInquiries() {
    const dataStr = JSON.stringify(inquiries, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `inquiries_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showAdminSuccessMessage('Inquiries exported successfully!');
}

// Filter Functions
function filterProperties() {
    const type = document.getElementById('propertyFilterType')?.value;
    const status = document.getElementById('propertyFilterStatus')?.value;
    const search = document.getElementById('propertySearch')?.value.toLowerCase();
    
    let filteredProperties = properties;
    
    if (type) {
        filteredProperties = filteredProperties.filter(p => p.type === type);
    }
    
    if (status) {
        filteredProperties = filteredProperties.filter(p => p.status === status);
    }
    
    if (search) {
        filteredProperties = filteredProperties.filter(p => 
            p.title.toLowerCase().includes(search) || 
            p.location.toLowerCase().includes(search)
        );
    }
    
    // Update table with filtered results
    const propertiesTableBody = document.getElementById('propertiesTableBody');
    if (propertiesTableBody) {
        propertiesTableBody.innerHTML = filteredProperties.map(property => `
            <tr>
                <td>
                    <div class="property-info">
                        <img src="${property.images[0]}" alt="${property.title}" class="property-thumbnail">
                        <div class="property-details">
                            <h4>${property.title}</h4>
                            <p>${property.area} - ${property.bhk}</p>
                        </div>
                    </div>
                </td>
                <td>${property.type}</td>
                <td>${property.price}</td>
                <td>${property.location}</td>
                <td><span class="status-badge ${property.status}">${property.status}</span></td>
                <td>${property.views || 0}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-action view" onclick="viewProperty(${property.id})" title="View">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn-action edit" onclick="editProperty(${property.id})" title="Edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-action delete" onclick="deleteProperty(${property.id})" title="Delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    }
    
    showAdminSuccessMessage(`Found ${filteredProperties.length} properties`);
}

// Search Functions
function handleAdminSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    if (currentSection === 'properties') {
        document.getElementById('propertySearch').value = searchTerm;
        filterProperties();
    } else if (currentSection === 'users') {
        const filteredUsers = users.filter(user => 
            user.name.toLowerCase().includes(searchTerm) || 
            user.email.toLowerCase().includes(searchTerm)
        );
        // Update users table with filtered results
    } else if (currentSection === 'inquiries') {
        const filteredInquiries = inquiries.filter(inquiry => 
            inquiry.name.toLowerCase().includes(searchTerm) || 
            inquiry.email.toLowerCase().includes(searchTerm)
        );
        // Update inquiries table with filtered results
    }
}

// Report Generation
function generateReport() {
    const reportData = {
        generatedAt: new Date().toISOString(),
        period: document.getElementById('analyticsPeriod')?.value || 30,
        properties: {
            total: properties.length,
            active: properties.filter(p => p.status === 'active').length,
            sold: properties.filter(p => p.status === 'sold').length,
            rented: properties.filter(p => p.status === 'rented').length
        },
        users: {
            total: users.length,
            active: users.filter(u => u.status === 'active').length
        },
        inquiries: {
            total: inquiries.length,
            pending: inquiries.filter(i => i.status === 'pending').length,
            resolved: inquiries.filter(i => i.status === 'resolved').length
        }
    };
    
    const dataStr = JSON.stringify(reportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `indorehomes_report_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showAdminSuccessMessage('Report generated successfully!');
}

// Check if admin is logged in
function checkAdminAuth() {
    const sessionData = localStorage.getItem('adminSession');
    
    if (!sessionData && window.location.pathname.includes('admin.html')) {
        // Redirect to login page
        window.location.href = 'admin-login.html';
        return false;
    }
    
    if (sessionData) {
        try {
            const session = JSON.parse(sessionData);
            const currentTime = new Date().getTime();
            const loginTime = new Date(session.loginTime).getTime();
            
            // Check if session is still valid
            if (currentTime - loginTime >= session.sessionTimeout) {
                // Session expired, redirect to login
                clearAdminSession();
                window.location.href = 'admin-login.html';
                return false;
            }
        } catch (error) {
            console.error('Error checking admin session:', error);
            clearAdminSession();
            window.location.href = 'admin-login.html';
            return false;
        }
    }
    
    return true;
}

function clearAdminSession() {
    localStorage.removeItem('adminSession');
    document.cookie = 'adminAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

// Initialize auth check
if (!checkAdminAuth()) {
    // This will redirect to login page if not authenticated
}
