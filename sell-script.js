// Global variables
let selectedSellOption = '';
let uploadedImages = [];
let currentFormData = {};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeImageUpload();
    initializeFormValidation();
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

// Select sell option
function selectSellOption(option) {
    selectedSellOption = option;
    
    // Show the listing form
    const listingForm = document.getElementById('listingForm');
    listingForm.style.display = 'block';
    
    // Scroll to form
    listingForm.scrollIntoView({ behavior: 'smooth' });
    
    // Update form based on option
    updateFormForOption(option);
    
    showSuccessMessage(`Selected: ${option.charAt(0).toUpperCase() + option.slice(1)} selling option`);
}

// Update form based on selected option
function updateFormForOption(option) {
    const form = document.getElementById('sellPropertyForm');
    
    switch(option) {
        case 'owner':
            // Show full form for owner selling
            form.style.display = 'block';
            break;
        case 'agent':
            // Show simplified form for agent
            form.style.display = 'block';
            showSuccessMessage('Our verified agents will contact you within 24 hours');
            break;
        case 'instant':
            // Show instant sale form
            form.style.display = 'block';
            showSuccessMessage('Get instant cash offer for your property');
            break;
    }
}

// Initialize image upload
function initializeImageUpload() {
    const uploadArea = document.getElementById('uploadArea');
    const imageInput = document.getElementById('imageInput');
    const uploadedImagesContainer = document.getElementById('uploadedImages');
    
    // Click to upload
    uploadArea.addEventListener('click', function() {
        imageInput.click();
    });
    
    // Drag and drop
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.classList.add('drag-over');
    });
    
    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');
        
        const files = e.dataTransfer.files;
        handleImageUpload(files);
    });
    
    // File input change
    imageInput.addEventListener('change', function(e) {
        handleImageUpload(e.target.files);
    });
}

// Handle image upload
function handleImageUpload(files) {
    const uploadedImagesContainer = document.getElementById('uploadedImages');
    
    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
            if (uploadedImages.length < 10) { // Limit to 10 images
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    const imageId = Date.now() + Math.random();
                    uploadedImages.push({
                        id: imageId,
                        url: e.target.result,
                        name: file.name
                    });
                    
                    // Display uploaded image
                    const imageDiv = document.createElement('div');
                    imageDiv.className = 'uploaded-image';
                    imageDiv.innerHTML = `
                        <img src="${e.target.result}" alt="${file.name}">
                        <button type="button" class="remove-image" onclick="removeImage(${imageId})">
                            <i class="fas fa-times"></i>
                        </button>
                    `;
                    
                    uploadedImagesContainer.appendChild(imageDiv);
                };
                
                reader.readAsDataURL(file);
            } else {
                showSuccessMessage('Maximum 10 images allowed');
            }
        }
    });
}

// Remove uploaded image
function removeImage(imageId) {
    uploadedImages = uploadedImages.filter(img => img.id !== imageId);
    
    // Re-render uploaded images
    const uploadedImagesContainer = document.getElementById('uploadedImages');
    uploadedImagesContainer.innerHTML = '';
    
    uploadedImages.forEach(image => {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'uploaded-image';
        imageDiv.innerHTML = `
            <img src="${image.url}" alt="${image.name}">
            <button type="button" class="remove-image" onclick="removeImage(${image.id})">
                <i class="fas fa-times"></i>
            </button>
        `;
        uploadedImagesContainer.appendChild(imageDiv);
    });
}

// Initialize form validation
function initializeFormValidation() {
    const form = document.getElementById('sellPropertyForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitPropertyListing();
        }
    });
    
    // Real-time validation
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        field.addEventListener('blur', function() {
            validateField(field);
        });
    });
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Phone validation
    if (field.id === 'ownerPhone' && value) {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value.replace(/[^0-9]/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid 10-digit phone number';
        }
    }
    
    // Pincode validation
    if (field.id === 'pincode' && value) {
        const pincodeRegex = /^[0-9]{6}$/;
        if (!pincodeRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid 6-digit pincode';
        }
    }
    
    // Show/hide error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    if (!isValid) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        field.parentNode.appendChild(errorDiv);
        field.classList.add('error');
    } else {
        field.classList.remove('error');
    }
    
    return isValid;
}

// Validate entire form
function validateForm() {
    const form = document.getElementById('sellPropertyForm');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    // Check if at least one image is uploaded
    if (uploadedImages.length === 0) {
        showSuccessMessage('Please upload at least one property image');
        isValid = false;
    }
    
    // Check terms agreement
    const termsAgreed = document.getElementById('termsAgreed');
    if (!termsAgreed.checked) {
        showSuccessMessage('Please agree to the terms and conditions');
        isValid = false;
    }
    
    return isValid;
}

// Submit property listing
function submitPropertyListing() {
    // Collect form data
    const formData = {
        propertyCategory: document.querySelector('input[name="propertyCategory"]:checked')?.value,
        propertyType: document.getElementById('propertyType').value,
        listingType: document.getElementById('listingType').value,
        propertyTitle: document.getElementById('propertyTitle').value,
        propertyDescription: document.getElementById('propertyDescription').value,
        locality: document.getElementById('locality').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        pincode: document.getElementById('pincode').value,
        bedrooms: document.getElementById('bedrooms').value,
        bathrooms: document.getElementById('bathrooms').value,
        area: document.getElementById('area').value,
        furnishing: document.getElementById('furnishing').value,
        totalFloors: document.getElementById('totalFloors').value,
        floorNumber: document.getElementById('floorNumber').value,
        expectedPrice: document.getElementById('expectedPrice').value,
        priceNegotiable: document.getElementById('priceNegotiable').value,
        maintenanceCharge: document.getElementById('maintenanceCharge').value,
        bookingAmount: document.getElementById('bookingAmount').value,
        amenities: getSelectedAmenities(),
        images: uploadedImages,
        ownerName: document.getElementById('ownerName').value,
        ownerPhone: document.getElementById('ownerPhone').value,
        ownerEmail: document.getElementById('ownerEmail').value,
        postedBy: document.getElementById('postedBy').value,
        sellOption: selectedSellOption,
        postedOn: new Date().toISOString()
    };
    
    // Simulate API call
    showSuccessMessage('Submitting your property listing...');
    
    setTimeout(() => {
        // Show success modal
        showSuccessModal(formData);
        
        // Store form data (in real app, this would be sent to server)
        currentFormData = formData;
        
        // Reset form
        resetForm();
    }, 2000);
}

// Get selected amenities
function getSelectedAmenities() {
    const amenities = [];
    const amenityCheckboxes = document.querySelectorAll('.amenities-grid input[type="checkbox"]:checked');
    
    amenityCheckboxes.forEach(checkbox => {
        amenities.push(checkbox.value);
    });
    
    return amenities;
}

// Show success modal
function showSuccessModal(formData) {
    const modal = document.getElementById('successModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// View posted property
function viewProperty() {
    closeModal();
    showSuccessMessage('Redirecting to your property listing...');
    // In real app, redirect to property details page
}

// Post another property
function postAnother() {
    closeModal();
    resetForm();
    document.getElementById('listingForm').scrollIntoView({ behavior: 'smooth' });
}

// Reset form
function resetForm() {
    const form = document.getElementById('sellPropertyForm');
    form.reset();
    
    // Clear uploaded images
    uploadedImages = [];
    document.getElementById('uploadedImages').innerHTML = '';
    
    // Clear error messages
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    // Remove error classes
    const errorFields = form.querySelectorAll('.error');
    errorFields.forEach(field => field.classList.remove('error'));
    
    showSuccessMessage('Form reset successfully');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
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
    const modal = document.getElementById('successModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Add additional CSS styles for sell page
const sellStyles = document.createElement('style');
sellStyles.textContent = `
    .sell-options {
        padding: 4rem 0;
        background: white;
    }
    
    .options-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }
    
    .option-card {
        background: white;
        border: 2px solid #e5e7eb;
        border-radius: 16px;
        padding: 2rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .option-card:hover {
        border-color: #1e40af;
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(30, 64, 175, 0.15);
    }
    
    .option-icon {
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
    
    .option-card h3 {
        font-size: 1.5rem;
        color: #1f2937;
        margin-bottom: 1rem;
    }
    
    .option-card p {
        color: #6b7280;
        margin-bottom: 1.5rem;
    }
    
    .option-features {
        list-style: none;
        padding: 0;
        margin-bottom: 2rem;
    }
    
    .option-features li {
        padding: 0.5rem 0;
        color: #4b5563;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .option-features li i {
        color: #10b981;
    }
    
    .listing-form {
        padding: 4rem 0;
        background: #f9fafb;
    }
    
    .form-container {
        max-width: 800px;
        margin: 0 auto;
        background: white;
        padding: 3rem;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    
    .form-title {
        font-size: 2rem;
        color: #1f2937;
        margin-bottom: 0.5rem;
        text-align: center;
    }
    
    .form-subtitle {
        color: #6b7280;
        text-align: center;
        margin-bottom: 2rem;
    }
    
    .form-section {
        margin-bottom: 3rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid #e5e7eb;
    }
    
    .form-section:last-child {
        border-bottom: none;
        margin-bottom: 0;
    }
    
    .form-section h3 {
        font-size: 1.3rem;
        color: #1f2937;
        margin-bottom: 1.5rem;
    }
    
    .property-type-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }
    
    .type-option {
        position: relative;
    }
    
    .type-option input[type="radio"] {
        position: absolute;
        opacity: 0;
    }
    
    .type-option label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1.5rem;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .type-option input[type="radio"]:checked + label {
        border-color: #1e40af;
        background: rgba(30, 64, 175, 0.05);
    }
    
    .type-option label:hover {
        border-color: #1e40af;
    }
    
    .type-option label i {
        font-size: 2rem;
        color: #1e40af;
    }
    
    .form-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
    }
    
    .form-group {
        margin-bottom: 1.5rem;
    }
    
    .form-group label {
        display: block;
        font-weight: 500;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        transition: all 0.3s ease;
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #1e40af;
        box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
    }
    
    .form-group textarea {
        resize: vertical;
        min-height: 120px;
    }
    
    .error-message {
        color: #ef4444;
        font-size: 0.9rem;
        margin-top: 0.5rem;
    }
    
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #ef4444;
    }
    
    .amenities-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
    }
    
    .amenity-option {
        position: relative;
    }
    
    .amenity-option input[type="checkbox"] {
        position: absolute;
        opacity: 0;
    }
    
    .amenity-option label {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
    }
    
    .amenity-option input[type="checkbox"]:checked + label {
        border-color: #1e40af;
        background: rgba(30, 64, 175, 0.05);
        color: #1e40af;
    }
    
    .amenity-option label:hover {
        border-color: #1e40af;
    }
    
    .image-upload {
        margin-top: 1rem;
    }
    
    .upload-area {
        border: 2px dashed #e5e7eb;
        border-radius: 12px;
        padding: 3rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .upload-area:hover,
    .upload-area.drag-over {
        border-color: #1e40af;
        background: rgba(30, 64, 175, 0.05);
    }
    
    .upload-area i {
        font-size: 3rem;
        color: #6b7280;
        margin-bottom: 1rem;
    }
    
    .upload-area p {
        color: #6b7280;
        margin-bottom: 1rem;
    }
    
    .upload-area input {
        display: none;
    }
    
    .uploaded-images {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }
    
    .uploaded-image {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
    }
    
    .uploaded-image img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
    
    .remove-image {
        position: absolute;
        top: 5px;
        right: 5px;
        background: rgba(239, 68, 68, 0.9);
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
    
    .remove-image:hover {
        background: #dc2626;
        transform: scale(1.1);
    }
    
    .terms-agreement {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 2rem;
    }
    
    .terms-agreement input[type="checkbox"] {
        width: auto;
    }
    
    .terms-agreement label {
        margin-bottom: 0;
    }
    
    .terms-agreement a {
        color: #1e40af;
        text-decoration: none;
    }
    
    .terms-agreement a:hover {
        text-decoration: underline;
    }
    
    .form-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
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
    }
    
    .btn-secondary:hover {
        background: #4b5563;
        transform: translateY(-2px);
    }
    
    .seller-benefits {
        padding: 5rem 0;
        background: white;
    }
    
    .benefits-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }
    
    .benefit-card {
        background: white;
        padding: 2rem;
        border-radius: 16px;
        text-align: center;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease;
    }
    
    .benefit-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }
    
    .benefit-icon {
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
    
    .benefit-card h3 {
        font-size: 1.2rem;
        color: #1f2937;
        margin-bottom: 1rem;
    }
    
    .benefit-card p {
        color: #6b7280;
        line-height: 1.6;
    }
    
    .success-modal-content {
        text-align: center;
        padding: 3rem;
    }
    
    .success-icon {
        width: 80px;
        height: 80px;
        background: #10b981;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 2rem;
        font-size: 2.5rem;
        color: white;
    }
    
    .success-modal-content h2 {
        font-size: 2rem;
        color: #1f2937;
        margin-bottom: 1rem;
    }
    
    .success-modal-content p {
        color: #6b7280;
        margin-bottom: 2rem;
    }
    
    .success-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }
`;
document.head.appendChild(sellStyles);
