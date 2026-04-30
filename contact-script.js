// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeContactForms();
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

// Initialize contact forms
function initializeContactForms() {
    // Main contact form
    const mainContactForm = document.getElementById('mainContactForm');
    mainContactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitMainContactForm();
    });
    
    // Quick contact forms
    const valuationForm = document.getElementById('valuationForm');
    valuationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitQuickForm('valuation');
    });
    
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitQuickForm('search');
    });
    
    const visitForm = document.getElementById('visitForm');
    visitForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitQuickForm('visit');
    });
    
    // Form validation
    initializeFormValidation();
}

// Initialize form validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(field);
            });
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
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value.replace(/[^0-9]/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid 10-digit phone number';
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
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Submit main contact form
function submitMainContactForm() {
    const form = document.getElementById('mainContactForm');
    
    if (!validateForm(form)) {
        showSuccessMessage('Please fill in all required fields correctly');
        return;
    }
    
    // Collect form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        preferredContact: document.getElementById('preferredContact').value,
        bestTime: document.getElementById('bestTime').value,
        newsletter: document.getElementById('newsletter').checked,
        submittedAt: new Date().toISOString()
    };
    
    // Simulate form submission
    showSuccessMessage('Sending your message...');
    
    setTimeout(() => {
        showSuccessMessage('Message sent successfully! We will contact you within 24 hours.');
        form.reset();
        
        // Store form data (in real app, this would be sent to server)
        console.log('Contact form submitted:', formData);
    }, 1500);
}

// Submit quick contact forms
function submitQuickForm(formType) {
    let form, formData, successMessage;
    
    switch(formType) {
        case 'valuation':
            form = document.getElementById('valuationForm');
            formData = {
                propertyLocation: form.querySelector('input[type="text"]').value,
                propertyType: form.querySelectorAll('input[type="text"]')[1].value,
                type: 'valuation',
                submittedAt: new Date().toISOString()
            };
            successMessage = 'Property valuation request submitted! Our team will contact you soon.';
            break;
            
        case 'search':
            form = document.getElementById('searchForm');
            formData = {
                requirements: form.querySelector('input[type="text"]').value,
                budget: form.querySelectorAll('input[type="text"]')[1].value,
                type: 'search',
                submittedAt: new Date().toISOString()
            };
            successMessage = 'Property search request submitted! We\'ll find the perfect property for you.';
            break;
            
        case 'visit':
            form = document.getElementById('visitForm');
            formData = {
                propertyId: form.querySelector('input[type="text"]').value,
                preferredDateTime: form.querySelector('input[type="datetime-local"]').value,
                type: 'visit',
                submittedAt: new Date().toISOString()
            };
            successMessage = 'Visit request submitted! We\'ll confirm the appointment shortly.';
            break;
    }
    
    if (!validateForm(form)) {
        showSuccessMessage('Please fill in all required fields');
        return;
    }
    
    // Simulate form submission
    showSuccessMessage('Processing your request...');
    
    setTimeout(() => {
        showSuccessMessage(successMessage);
        form.reset();
        
        // Store form data (in real app, this would be sent to server)
        console.log('Quick form submitted:', formData);
    }, 1000);
}

// Reset contact form
function resetContactForm() {
    const form = document.getElementById('mainContactForm');
    form.reset();
    
    // Clear error messages
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    // Remove error classes
    const errorFields = form.querySelectorAll('.error');
    errorFields.forEach(field => field.classList.remove('error'));
    
    showSuccessMessage('Form reset successfully');
}

// Toggle FAQ
function toggleFAQ(questionElement) {
    const faqItem = questionElement.parentNode;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = questionElement.querySelector('i');
    
    // Close other FAQs
    const allFAQItems = document.querySelectorAll('.faq-item');
    allFAQItems.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
            item.querySelector('.faq-answer').style.maxHeight = null;
            item.querySelector('.faq-question i').classList.remove('fa-chevron-up');
            item.querySelector('.faq-question i').classList.add('fa-chevron-down');
        }
    });
    
    // Toggle current FAQ
    faqItem.classList.toggle('active');
    
    if (faqItem.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        answer.style.maxHeight = null;
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

// Open Google Maps
function openGoogleMaps() {
    const address = '123, AB Road, Vijay Nagar, Indore, Madhya Pradesh 452010';
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
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

// Add additional CSS styles for contact page
const contactStyles = document.createElement('style');
contactStyles.textContent = `
    .contact-info {
        padding: 4rem 0;
        background: white;
    }
    
    .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }
    
    .contact-card {
        background: white;
        border: 2px solid #e5e7eb;
        border-radius: 16px;
        padding: 2.5rem;
        text-align: center;
        transition: all 0.3s ease;
    }
    
    .contact-card:hover {
        border-color: #1e40af;
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(30, 64, 175, 0.15);
    }
    
    .contact-icon {
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
    
    .contact-card h3 {
        font-size: 1.5rem;
        color: #1f2937;
        margin-bottom: 1rem;
    }
    
    .contact-card p {
        color: #1f2937;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        font-weight: 500;
    }
    
    .contact-subtitle {
        display: block;
        color: #6b7280;
        font-size: 0.95rem;
        font-weight: 400;
        margin-top: 0.5rem;
    }
    
    .contact-form-section {
        padding: 4rem 0;
        background: #f9fafb;
    }
    
    .contact-form-wrapper {
        max-width: 800px;
        margin: 0 auto;
        background: white;
        padding: 3rem;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
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
    
    .form-checkbox {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }
    
    .form-checkbox input[type="checkbox"] {
        width: auto;
        margin: 0;
    }
    
    .form-checkbox label {
        margin-bottom: 0;
        font-weight: 400;
        color: #4b5563;
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
    
    .quick-contact {
        padding: 4rem 0;
        background: white;
    }
    
    .quick-contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }
    
    .quick-contact-card {
        background: white;
        border: 2px solid #e5e7eb;
        border-radius: 16px;
        padding: 2rem;
        text-align: center;
        transition: all 0.3s ease;
    }
    
    .quick-contact-card:hover {
        border-color: #1e40af;
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(30, 64, 175, 0.15);
    }
    
    .quick-contact-icon {
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
    
    .quick-contact-card h3 {
        font-size: 1.3rem;
        color: #1f2937;
        margin-bottom: 1rem;
    }
    
    .quick-contact-card p {
        color: #6b7280;
        margin-bottom: 1.5rem;
    }
    
    .quick-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .quick-form input {
        padding: 12px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        transition: all 0.3s ease;
    }
    
    .quick-form input:focus {
        outline: none;
        border-color: #1e40af;
        box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
    }
    
    .map-section {
        padding: 4rem 0;
        background: #f9fafb;
    }
    
    .map-container {
        margin-top: 3rem;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
    
    .map-placeholder {
        background: linear-gradient(135deg, #1e40af, #2563eb);
        color: white;
        padding: 4rem 2rem;
        text-align: center;
        min-height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .map-placeholder i {
        font-size: 4rem;
        margin-bottom: 1.5rem;
    }
    
    .map-placeholder h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    
    .map-placeholder p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
    }
    
    .team-section {
        padding: 4rem 0;
        background: white;
    }
    
    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }
    
    .team-member {
        background: white;
        border: 2px solid #e5e7eb;
        border-radius: 16px;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .team-member:hover {
        border-color: #1e40af;
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(30, 64, 175, 0.15);
    }
    
    .member-image {
        height: 200px;
        overflow: hidden;
    }
    
    .member-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .member-info {
        padding: 1.5rem;
    }
    
    .member-info h3 {
        font-size: 1.3rem;
        color: #1f2937;
        margin-bottom: 0.5rem;
    }
    
    .member-position {
        color: #1e40af;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    
    .member-experience {
        color: #6b7280;
        font-size: 0.95rem;
        margin-bottom: 1rem;
    }
    
    .member-contact {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .member-contact span {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #4b5563;
        font-size: 0.9rem;
    }
    
    .faq-section {
        padding: 4rem 0;
        background: #f9fafb;
    }
    
    .faq-container {
        max-width: 800px;
        margin: 3rem auto 0;
    }
    
    .faq-item {
        background: white;
        border-radius: 12px;
        margin-bottom: 1rem;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
    }
    
    .faq-item:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    
    .faq-item.active {
        box-shadow: 0 4px 20px rgba(30, 64, 175, 0.15);
    }
    
    .faq-question {
        padding: 1.5rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s ease;
    }
    
    .faq-question:hover {
        background: #f9fafb;
    }
    
    .faq-question h3 {
        font-size: 1.1rem;
        color: #1f2937;
        margin: 0;
        font-weight: 600;
    }
    
    .faq-question i {
        color: #1e40af;
        transition: transform 0.3s ease;
    }
    
    .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }
    
    .faq-answer p {
        padding: 0 1.5rem 1.5rem;
        color: #4b5563;
        line-height: 1.6;
        margin: 0;
    }
    
    @media (max-width: 768px) {
        .contact-grid {
            grid-template-columns: 1fr;
        }
        
        .quick-contact-grid {
            grid-template-columns: 1fr;
        }
        
        .team-grid {
            grid-template-columns: 1fr;
        }
        
        .form-row {
            grid-template-columns: 1fr;
        }
        
        .form-actions {
            flex-direction: column;
        }
        
        .member-contact {
            font-size: 0.85rem;
        }
        
        .faq-question h3 {
            font-size: 1rem;
        }
        
        .map-placeholder {
            padding: 3rem 1.5rem;
        }
        
        .map-placeholder i {
            font-size: 3rem;
        }
        
        .map-placeholder h3 {
            font-size: 1.5rem;
        }
    }
`;
document.head.appendChild(contactStyles);
