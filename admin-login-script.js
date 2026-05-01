// Unified Login JavaScript - Handles both User and Admin
document.addEventListener('DOMContentLoaded', function() {
    initializeLoginForm();
    initializeRoleSelection();
    checkExistingSession();
});

// Role Selection
function initializeRoleSelection() {
    const roleButtons = document.querySelectorAll('.role-btn');
    const loginRoleInput = document.getElementById('loginRole');
    
    roleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            roleButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update hidden input
            const role = this.getAttribute('data-role');
            if (loginRoleInput) {
                loginRoleInput.value = role;
            }
            
            // Update UI based on role
            updateLoginUI(role);
        });
    });
}

function updateLoginUI(role) {
    const loginTitle = document.querySelector('.login-title');
    const loginSubtitle = document.querySelector('.login-subtitle');
    
    if (role === 'admin') {
        if (loginTitle) loginTitle.textContent = 'Admin Login';
        if (loginSubtitle) loginSubtitle.textContent = 'Access your property management dashboard';
    } else {
        if (loginTitle) loginTitle.textContent = 'User Login';
        if (loginSubtitle) loginSubtitle.textContent = 'Access your account and saved properties';
    }
}

function initializeLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    
    // Form submission
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Password visibility toggle
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', togglePasswordVisibility);
    }
    
    // Forgot password handler
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', handleForgotPassword);
    }
    
    // Input field animations
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('passwordToggle');
    const icon = passwordToggle.querySelector('i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const role = document.getElementById('loginRole').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    const loginButton = document.getElementById('loginButton');
    
    // Hide previous messages
    hideMessages();
    
    // Validate inputs
    if (!username || !password) {
        showError('Please enter both username and password');
        return;
    }
    
    // Show loading state
    loginButton.classList.add('loading');
    loginButton.disabled = true;
    
    // Simulate authentication delay
    setTimeout(() => {
        // Authenticate based on role
        const isAuthenticated = authenticateUser(username, password, role);
        
        if (isAuthenticated) {
            // Show success message
            showSuccess(`Login successful! Redirecting to ${role} dashboard...`);
            
            // Create session
            createSession(username, role, rememberMe);
            
            // Redirect based on role
            setTimeout(() => {
                if (role === 'admin') {
                    window.location.href = 'admin.html';
                } else {
                    window.location.href = 'index.html';
                }
            }, 1500);
        } else {
            // Show error message
            showError('Invalid username or password. Please try again.');
            
            // Reset loading state
            loginButton.classList.remove('loading');
            loginButton.disabled = false;
            
            // Clear password field
            document.getElementById('password').value = '';
            document.getElementById('password').focus();
        }
    }, 1500);
}

function authenticateUser(username, password, role) {
    // Admin credentials
    const adminCredentials = [
        { username: 'admin', password: 'admin123' },
        { username: 'indorehomes', password: 'indore@2024' },
        { username: 'superadmin', password: 'super@123' }
    ];
    
    // User credentials (demo users)
    const userCredentials = [
        { username: 'user', password: 'user123' },
        { username: 'rahul', password: 'rahul123' },
        { username: 'priya', password: 'priya123' },
        { username: 'amit', password: 'amit123' }
    ];
    
    if (role === 'admin') {
        return adminCredentials.some(cred => cred.username === username && cred.password === password);
    } else {
        return userCredentials.some(cred => cred.username === username && cred.password === password);
    }
}

function createSession(username, role, rememberMe) {
    const sessionData = {
        username: username,
        role: role,
        loginTime: new Date().toISOString(),
        rememberMe: rememberMe,
        sessionTimeout: rememberMe ? 7 * 24 * 60 * 60 * 1000 : 30 * 60 * 1000 // 7 days or 30 minutes
    };
    
    // Store session
    localStorage.setItem('userSession', JSON.stringify(sessionData));
    
    // Set session cookie for additional security
    const expires = rememberMe ? '; expires=' + new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString() : '';
    document.cookie = role + 'Auth=true' + expires + '; path=/; SameSite=Strict';
}

function checkExistingSession() {
    const sessionData = localStorage.getItem('userSession');
    
    if (sessionData) {
        try {
            const session = JSON.parse(sessionData);
            const currentTime = new Date().getTime();
            const loginTime = new Date(session.loginTime).getTime();
            
            // Check if session is still valid
            if (currentTime - loginTime < session.sessionTimeout) {
                // Session is valid, redirect based on role
                const role = session.role || 'user';
                showSuccess('Session found! Redirecting...');
                setTimeout(() => {
                    if (role === 'admin') {
                        window.location.href = 'admin.html';
                    } else {
                        window.location.href = 'index.html';
                    }
                }, 1000);
            } else {
                // Session expired, remove it
                clearAdminSession();
            }
        } catch (error) {
            console.error('Error parsing session data:', error);
            clearAdminSession();
        }
    }
}

function clearAdminSession() {
    localStorage.removeItem('userSession');
    document.cookie = 'adminAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'userAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

function handleForgotPassword(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    
    if (!username) {
        showError('Please enter your username first');
        document.getElementById('username').focus();
        return;
    }
    
    // Show password reset info (in production, this would send an email)
    const role = document.getElementById('loginRole').value;
    const resetInfo = `
Password Reset Information:

Username: ${username}
Role: ${role}

For demo purposes, you can use these credentials:

ADMIN ACCOUNTS:
- Username: admin, Password: admin123
- Username: indorehomes, Password: indore@2024
- Username: superadmin, Password: super@123

USER ACCOUNTS:
- Username: user, Password: user123
- Username: rahul, Password: rahul123
- Username: priya, Password: priya123
- Username: amit, Password: amit123

In production, a password reset link would be sent to your registered email.
    `;
    
    alert(resetInfo);
}

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    
    errorText.textContent = message;
    errorMessage.classList.add('show');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        errorMessage.classList.remove('show');
    }, 5000);
}

function showSuccess(message) {
    const successMessage = document.getElementById('successMessage');
    const successText = document.getElementById('successText');
    
    successText.textContent = message;
    successMessage.classList.add('show');
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 3000);
}

function hideMessages() {
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    
    errorMessage.classList.remove('show');
    successMessage.classList.remove('show');
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl+Enter to submit form
    if (e.ctrlKey && e.key === 'Enter') {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.dispatchEvent(new Event('submit'));
        }
    }
    
    // Escape to clear form
    if (e.key === 'Escape') {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.reset();
            hideMessages();
        }
    }
});

// Auto-focus username field on load
window.addEventListener('load', function() {
    const usernameField = document.getElementById('username');
    if (usernameField) {
        usernameField.focus();
    }
});

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// Session timeout warning
function setupSessionTimeoutWarning() {
    const sessionData = localStorage.getItem('adminSession');
    
    if (sessionData) {
        try {
            const session = JSON.parse(sessionData);
            const timeout = session.sessionTimeout;
            const warningTime = timeout - (5 * 60 * 1000); // 5 minutes before timeout
            
            if (warningTime > 0) {
                setTimeout(() => {
                    if (document.visibilityState === 'visible') {
                        showWarning('Your session will expire in 5 minutes. Please save your work.');
                    }
                }, warningTime);
            }
        } catch (error) {
            console.error('Error setting up session timeout warning:', error);
        }
    }
}

function showWarning(message) {
    // Create warning element
    const warningDiv = document.createElement('div');
    warningDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #f59e0b;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    warningDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-exclamation-triangle"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(warningDiv);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        if (warningDiv.parentNode) {
            warningDiv.parentNode.removeChild(warningDiv);
        }
    }, 10000);
}

// Initialize session timeout warning
setupSessionTimeoutWarning();
