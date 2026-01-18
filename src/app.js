// Router and State Management
const app = {
    currentPage: 'home',
    isLoggedIn: false,
    user: null,
    mobileMenuOpen: false
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initRouter();
    initNavigation();
    initMobileMenu();
    loadPage('home');
});

// Mobile Menu
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileToggle.addEventListener('click', function() {
        app.mobileMenuOpen = !app.mobileMenuOpen;
        mobileMenu.classList.toggle('active');
        
        const icon = mobileToggle.querySelector('i');
        icon.className = app.mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars';
    });
}

// Navigation
function initNavigation() {
    // Desktop nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateTo(page);
        });
    });

    // Mobile nav links
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateTo(page);
            
            // Close mobile menu
            document.getElementById('mobileMenu').classList.remove('active');
            app.mobileMenuOpen = false;
            document.getElementById('mobileToggle').querySelector('i').className = 'fas fa-bars';
        });
    });
}

// Router
function initRouter() {
    window.addEventListener('popstate', function(e) {
        if (e.state && e.state.page) {
            loadPage(e.state.page);
        }
    });
}

function navigateTo(page) {
    if (app.currentPage === page) return;
    
    app.currentPage = page;
    history.pushState({ page: page }, '', `#${page}`);
    loadPage(page);
    
    // Update active nav links
    document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });
}

// Page Loader
function loadPage(page) {
    const container = document.getElementById('pageContainer');
    
    // Fade out
    container.style.opacity = '0';
    
    setTimeout(() => {
        // Load new page
        switch(page) {
            case 'home':
                container.innerHTML = getHomePage();
                break;
            case 'dashboard':
                container.innerHTML = getDashboardPage();
                initDashboard();
                break;
            case 'about':
                container.innerHTML = getAboutPage();
                break;
            case 'privacy':
                container.innerHTML = getPrivacyPage();
                break;
            case 'terms':
                container.innerHTML = getTermsPage();
                break;
            case 'contact':
                container.innerHTML = getContactPage();
                initContact();
                break;
            case 'signin':
                container.innerHTML = getSignInPage();
                initSignIn();
                break;
            case 'signup':
                container.innerHTML = getSignUpPage();
                initSignUp();
                break;
            case 'account':
                container.innerHTML = getAccountPage();
                initAccount();
                break;
            default:
                container.innerHTML = getHomePage();
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Fade in
        setTimeout(() => {
            container.style.opacity = '1';
            initFloatingCubes();
        }, 50);
    }, 300);
}

// Floating Cubes Animation
function initFloatingCubes() {
    const cubesContainer = document.querySelector('.floating-cubes');
    if (!cubesContainer) return;
    
    cubesContainer.innerHTML = '';
    
    for (let i = 0; i < 8; i++) {
        const cube = document.createElement('div');
        cube.className = 'cube';
        cube.style.width = Math.random() * 100 + 50 + 'px';
        cube.style.height = cube.style.width;
        cube.style.left = Math.random() * 100 + '%';
        cube.style.top = Math.random() * 100 + '%';
        cube.style.animationDelay = Math.random() * 2 + 's';
        cube.style.animationDuration = Math.random() * 10 + 10 + 's';
        cubesContainer.appendChild(cube);
    }
}

// Page Templates
function getHomePage() {
    return `
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-bg"></div>
            <div class="floating-cubes"></div>
            
            <div class="hero-content">
                <div class="hero-logo">
                    <i class="fas fa-cloud"></i>
                    <h1 class="hero-title">Freeless.cloud</h1>
                </div>
                
                <h2 class="hero-title">
                    Your Data. <span class="gradient-text">Your Privacy.</span>
                </h2>
                
                <p class="hero-subtitle">
                    Zero-knowledge cloud storage with military-grade encryption. 
                    No logs. No tracking. No compromise. Starting at 10GB free.
                </p>
                
                <div class="hero-buttons">
                    <button class="btn-primary" onclick="navigateTo('signup')">Get Started Free</button>
                    <button class="btn-secondary" onclick="navigateTo('about')">Learn More</button>
                </div>
                
                <div class="trust-indicators">
                    <div class="trust-item">
                        <i class="fas fa-shield-alt" style="color: #10b981;"></i>
                        <span>End-to-End Encrypted</span>
                    </div>
                    <div class="trust-item">
                        <i class="fas fa-lock" style="color: #3b82f6;"></i>
                        <span>Zero-Knowledge Architecture</span>
                    </div>
                    <div class="trust-item">
                        <i class="fas fa-cloud" style="color: #a855f7;"></i>
                        <span>No Logs Policy</span>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Features Section -->
        <section class="section">
            <div class="section-bg"></div>
            <div class="section-content">
                <div class="section-header">
                    <h2 class="section-title gradient-text">Why Choose Freeless?</h2>
                    <p class="section-subtitle">Privacy-first cloud storage built by one developer who cares</p>
                </div>
                
                <div class="feature-grid">
                    ${getFeatureCards()}
                </div>
            </div>
        </section>
        
        <!-- Security Section -->
        <section class="section">
            <div class="section-content">
                <div class="section-header">
                    <h2 class="section-title gradient-text">Privacy by Design</h2>
                    <p class="section-subtitle">Built from the ground up with a single mission: protect your digital life</p>
                </div>
                
                <div class="feature-grid">
                    ${getSecurityFeatures()}
                </div>
            </div>
        </section>
        
        <!-- Pricing Section -->
        <section class="section">
            <div class="section-bg"></div>
            <div class="section-content">
                <div class="section-header">
                    <h2 class="section-title gradient-text">Simple, Transparent Pricing</h2>
                    <p class="section-subtitle">No hidden fees. No vendor lock-in. Cancel anytime.</p>
                </div>
                
                <div class="feature-grid">
                    ${getPricingCards()}
                </div>
            </div>
        </section>
        
        ${getFooter()}
    `;
}

function getFeatureCards() {
    const features = [
        { icon: 'fa-shield-alt', title: 'Military-Grade Encryption', desc: 'AES-256 encryption ensures your files are protected with the same standards used by governments worldwide.', gradient: 'gradient-red' },
        { icon: 'fa-lock', title: 'Zero-Knowledge Architecture', desc: 'We never see your data. Your files are encrypted before they leave your device.', gradient: 'gradient-orange' },
        { icon: 'fa-eye-slash', title: 'Absolute No-Log Policy', desc: 'We don\'t track, monitor, or log your activity. What you store is yours alone.', gradient: 'gradient-green' },
        { icon: 'fa-bolt', title: 'Lightning Fast', desc: 'High-speed servers worldwide ensure quick uploads and downloads, without compromising security.', gradient: 'gradient-cyan' },
        { icon: 'fa-hdd', title: 'Generous Storage', desc: 'Start with 10GB free storage and upgrade as you grow. No hidden fees or surprises.', gradient: 'gradient-blue' },
        { icon: 'fa-globe', title: 'Open Source & Transparent', desc: 'Our code is open for audit. No backdoors, no secret access. Trust through transparency.', gradient: 'gradient-purple' }
    ];
    
    return features.map((f, i) => `
        <div class="feature-card" style="animation-delay: ${i * 0.1}s">
            <div class="feature-icon ${f.gradient}">
                <div class="feature-icon-inner">
                    <i class="fas ${f.icon}"></i>
                </div>
            </div>
            <h3 class="feature-title">${f.title}</h3>
            <p class="feature-description">${f.desc}</p>
        </div>
    `).join('');
}

function getSecurityFeatures() {
    const features = [
        { icon: 'fa-file-shield', title: 'Client-Side Encryption', desc: 'Files are encrypted on your device before upload. We never have access to unencrypted data.', gradient: 'gradient-green' },
        { icon: 'fa-server', title: 'Distributed Infrastructure', desc: 'Your encrypted data is distributed across multiple secure locations for redundancy.', gradient: 'gradient-cyan' },
        { icon: 'fa-user-shield', title: 'Independent & Solo', desc: 'No investors, no board members, no pressure to monetize your data. Just one developer committed to privacy.', gradient: 'gradient-purple' }
    ];
    
    return features.map((f, i) => `
        <div class="feature-card" style="animation-delay: ${i * 0.1}s">
            <div class="feature-icon ${f.gradient}">
                <div class="feature-icon-inner">
                    <i class="fas ${f.icon}"></i>
                </div>
            </div>
            <h3 class="feature-title">${f.title}</h3>
            <p class="feature-description">${f.desc}</p>
        </div>
    `).join('');
}

function getPricingCards() {
    const plans = [
        { name: 'Free', price: '0', storage: '10 GB', features: ['End-to-end encryption', 'Zero-knowledge architecture', 'No-log policy', 'Basic file sharing'], gradient: 'gradient-purple', popular: false },
        { name: 'Personal', price: '5', storage: '100 GB', features: ['Everything in Free', 'Priority support', 'Advanced sharing controls', 'Version history (30 days)'], gradient: 'gradient-purple', popular: true },
        { name: 'Pro', price: '12', storage: '500 GB', features: ['Everything in Personal', 'Extended version history', 'Advanced file recovery', 'Priority bandwidth'], gradient: 'gradient-cyan', popular: false },
        { name: 'Ultimate', price: '25', storage: '2 TB', features: ['Everything in Pro', 'Unlimited version history', 'Premium support', 'API access'], gradient: 'gradient-purple', popular: false }
    ];
    
    return plans.map((p, i) => `
        <div class="feature-card" style="animation-delay: ${i * 0.1}s">
            ${p.popular ? '<div style="text-align: center; margin-bottom: 1rem;"><span style="background: linear-gradient(to right, #7c3aed, #ec4899); padding: 0.25rem 1rem; border-radius: 1rem; font-size: 0.75rem; font-weight: 600;"><i class="fas fa-star"></i> Most Popular</span></div>' : ''}
            <h3 class="feature-title">${p.name}</h3>
            <div style="margin: 1rem 0;">
                <span style="font-size: 3rem; font-weight: bold; background: linear-gradient(to right, #a855f7, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">$${p.price}</span>
                <span style="color: #6b7280;">/month</span>
            </div>
            <p style="color: #a855f7; font-weight: 600; margin-bottom: 1.5rem;">${p.storage} Storage</p>
            <ul style="list-style: none; margin-bottom: 1.5rem;">
                ${p.features.map(f => `<li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: #10b981; margin-right: 0.5rem;"></i>${f}</li>`).join('')}
            </ul>
            <button class="btn-primary btn-full">Get Started</button>
        </div>
    `).join('');
}

function getFooter() {
    return `
        <footer class="footer">
            <div class="footer-bg"></div>
            <div class="footer-content">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <div class="footer-brand-logo">
                            <i class="fas fa-cloud"></i>
                            <span class="logo-text">Freeless.cloud</span>
                        </div>
                        <p class="footer-description">
                            Privacy-first cloud storage built by one developer who believes in your right to digital privacy.
                            No logs, no tracking, no compromise.
                        </p>
                        <div class="social-links">
                            <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-link"><i class="fas fa-envelope"></i></a>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Product</h3>
                        <div class="footer-links">
                            <a href="#" class="footer-link">Features</a>
                            <a href="#" class="footer-link">Pricing</a>
                            <a href="#" class="footer-link">Security</a>
                            <a href="#" class="footer-link">Documentation</a>
                        </div>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Legal</h3>
                        <div class="footer-links">
                            <a href="#" class="footer-link" onclick="navigateTo('privacy'); return false;">Privacy Policy</a>
                            <a href="#" class="footer-link" onclick="navigateTo('terms'); return false;">Terms of Service</a>
                            <a href="#" class="footer-link">Transparency Report</a>
                            <a href="#" class="footer-link" onclick="navigateTo('contact'); return false;">Contact</a>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p class="footer-copyright">© 2026 Freeless.cloud. Built with privacy in mind.</p>
                    <div class="status-indicator">
                        <div class="status-dot"></div>
                        <span>All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

function getDashboardPage() {
    return `
        <div class="dashboard">
            <div class="stats-bar">
                <div class="stats-grid">
                    <div class="stat-card" style="background: linear-gradient(135deg, rgba(109, 40, 217, 0.3), rgba(109, 40, 217, 0.2));">
                        <div class="stat-icon gradient-purple">
                            <i class="fas fa-hdd"></i>
                        </div>
                        <div class="stat-info">
                            <p class="stat-label">Storage Used</p>
                            <p class="stat-value">4.2 GB <span style="font-size: 0.875rem; color: #6b7280;">/ 10 GB</span></p>
                        </div>
                    </div>
                    
                    <div class="stat-card" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(6, 182, 212, 0.2));">
                        <div class="stat-icon gradient-cyan">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <div class="stat-info">
                            <p class="stat-label">Encrypted Files</p>
                            <p class="stat-value">127</p>
                        </div>
                    </div>
                    
                    <div class="stat-card" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(16, 185, 129, 0.2));">
                        <div class="stat-icon gradient-green">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="stat-info">
                            <p class="stat-label">Last Backup</p>
                            <p class="stat-value">2h ago</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-main">
                <div class="dashboard-actions">
                    <div class="action-buttons">
                        <button class="btn-primary btn-icon" onclick="uploadFile()">
                            <i class="fas fa-upload"></i>
                            Upload Files
                        </button>
                        <button class="btn-secondary btn-icon" onclick="createFolder()">
                            <i class="fas fa-folder-plus"></i>
                            New Folder
                        </button>
                    </div>
                    
                    <div class="search-box">
                        <i class="fas fa-search search-icon"></i>
                        <input type="text" class="form-input" placeholder="Search files..." id="fileSearch">
                    </div>
                </div>
                
                <div class="upload-zone" id="uploadZone">
                    <i class="fas fa-upload upload-icon"></i>
                    <h3>Drop files here to upload</h3>
                    <p style="color: #9ca3af;">or click the Upload Files button above</p>
                </div>
                
                <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">Your Files</h2>
                <div class="file-grid" id="fileGrid">
                    ${getFileCards()}
                </div>
            </div>
        </div>
    `;
}

function getFileCards() {
    const files = [
        { name: 'Documents', type: 'folder', size: '2.4 GB', modified: '2 days ago', icon: 'fa-folder', gradient: 'gradient-blue' },
        { name: 'Photos', type: 'folder', size: '5.8 GB', modified: '1 week ago', icon: 'fa-folder', gradient: 'gradient-blue' },
        { name: 'Project_Proposal.pdf', type: 'file', size: '1.2 MB', modified: 'Today', icon: 'fa-file-pdf', gradient: 'gradient-purple' },
        { name: 'Budget_2026.xlsx', type: 'file', size: '456 KB', modified: 'Yesterday', icon: 'fa-file-excel', gradient: 'gradient-purple' },
        { name: 'Backup', type: 'folder', size: '1.1 GB', modified: '3 days ago', icon: 'fa-folder', gradient: 'gradient-blue' },
        { name: 'Presentation.pptx', type: 'file', size: '8.9 MB', modified: 'Today', icon: 'fa-file-powerpoint', gradient: 'gradient-purple' }
    ];
    
    return files.map((f, i) => `
        <div class="file-card" style="animation-delay: ${i * 0.05}s">
            <div class="file-header">
                <div class="file-icon ${f.gradient}">
                    <i class="fas ${f.icon}"></i>
                </div>
                <button class="file-menu"><i class="fas fa-ellipsis-v"></i></button>
            </div>
            <div class="file-info">
                <h3>${f.name}</h3>
                <p>${f.size} • ${f.modified}</p>
            </div>
            <div class="file-actions">
                <button class="file-action-btn" onclick="downloadFile('${f.name}')">
                    <i class="fas fa-download"></i>
                </button>
                <button class="file-action-btn" onclick="deleteFile('${f.name}')" style="background: #dc2626;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function initDashboard() {
    const uploadZone = document.getElementById('uploadZone');
    const fileSearch = document.getElementById('fileSearch');
    
    // Drag and drop
    uploadZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('drag-over');
    });
    
    uploadZone.addEventListener('dragleave', function() {
        this.classList.remove('drag-over');
    });
    
    uploadZone.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        uploadFile();
    });
    
    // Search functionality
    fileSearch.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        document.querySelectorAll('.file-card').forEach(card => {
            const fileName = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = fileName.includes(searchTerm) ? 'block' : 'none';
        });
    });
}

function uploadFile() {
    alert('Upload functionality would connect to backend API');
}

function createFolder() {
    const folderName = prompt('Enter folder name:');
    if (folderName) {
        alert(`Folder "${folderName}" would be created`);
    }
}

function downloadFile(name) {
    alert(`Downloading ${name}...`);
}

function deleteFile(name) {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
        alert(`${name} deleted`);
    }
}

function getSignInPage() {
    return `
        <div class="auth-container">
            <div class="auth-card">
                <div class="auth-header">
                    <div class="auth-icon">
                        <i class="fas fa-lock"></i>
                    </div>
                    <h2 class="auth-title">Welcome Back</h2>
                    <p class="auth-subtitle">Sign in to your Freeless account</p>
                </div>
                
                <form id="signinForm" onsubmit="handleSignIn(event)">
                    <div class="form-group">
                        <label class="form-label">Email Address</label>
                        <input type="email" class="form-input" placeholder="your@email.com" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-input" placeholder="••••••••" required>
                    </div>
                    
                    <div class="checkbox-wrapper" style="margin-bottom: 1rem;">
                        <input type="checkbox" id="remember">
                        <label for="remember" style="color: #9ca3af; cursor: pointer;">Remember me</label>
                    </div>
                    
                    <button type="submit" class="btn-primary btn-full">
                        Sign In
                    </button>
                </form>
                
                <div class="auth-divider">or</div>
                
                <div class="auth-footer">
                    <p>Don't have an account? <a href="#" class="auth-link" onclick="navigateTo('signup'); return false;">Sign Up</a></p>
                    <p style="margin-top: 0.5rem;"><a href="#" class="auth-link">Forgot password?</a></p>
                </div>
            </div>
        </div>
    `;
}

function initSignIn() {
    // Form is handled by onsubmit in HTML
}

function handleSignIn(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // Simulate login
    setTimeout(() => {
        app.isLoggedIn = true;
        app.user = { email: email, name: email.split('@')[0] };
        alert('Sign in successful!');
        navigateTo('dashboard');
    }, 1000);
    
    return false;
}

function getSignUpPage() {
    return `
        <div class="auth-container">
            <div class="auth-card">
                <div class="auth-header">
                    <div class="auth-icon">
                        <i class="fas fa-user-plus"></i>
                    </div>
                    <h2 class="auth-title">Create Account</h2>
                    <p class="auth-subtitle">Start your privacy journey with 10GB free</p>
                </div>
                
                <form id="signupForm" onsubmit="handleSignUp(event)">
                    <div class="form-group">
                        <label class="form-label">Full Name</label>
                        <input type="text" class="form-input" placeholder="John Doe" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Email Address</label>
                        <input type="email" class="form-input" placeholder="your@email.com" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-input" placeholder="••••••••" required minlength="8">
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Confirm Password</label>
                        <input type="password" class="form-input" placeholder="••••••••" required minlength="8">
                    </div>
                    
                    <div class="checkbox-wrapper" style="margin-bottom: 1rem;">
                        <input type="checkbox" id="terms" required>
                        <label for="terms" style="color: #9ca3af; cursor: pointer;">
                            I agree to the <a href="#" class="auth-link" onclick="navigateTo('terms'); return false;">Terms of Service</a> 
                            and <a href="#" class="auth-link" onclick="navigateTo('privacy'); return false;">Privacy Policy</a>
                        </label>
                    </div>
                    
                    <button type="submit" class="btn-primary btn-full">
                        Create Account
                    </button>
                </form>
                
                <div class="auth-divider">or</div>
                
                <div class="auth-footer">
                    <p>Already have an account? <a href="#" class="auth-link" onclick="navigateTo('signin'); return false;">Sign In</a></p>
                </div>
            </div>
        </div>
    `;
}

function initSignUp() {
    // Form is handled by onsubmit in HTML
}

function handleSignUp(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }
    
    // Simulate signup
    setTimeout(() => {
        app.isLoggedIn = true;
        app.user = { email: email, name: form.querySelector('input[type="text"]').value };
        alert('Account created successfully!');
        navigateTo('dashboard');
    }, 1000);
    
    return false;
}

function getAccountPage() {
    return `
        <div class="account-container">
            <div class="account-header">
                <div class="account-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 0.5rem;">Account Settings</h1>
                <p style="color: #9ca3af;">john.doe@email.com</p>
            </div>
            
            <div class="account-sections">
                <!-- Profile Section -->
                <div class="account-section">
                    <div class="section-header-row">
                        <h3>Profile Information</h3>
                        <button class="btn-secondary" onclick="editProfile()">Edit</button>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Full Name</label>
                        <input type="text" class="form-input" value="John Doe" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Email Address</label>
                        <input type="email" class="form-input" value="john.doe@email.com" readonly>
                    </div>
                </div>
                
                <!-- Security Section -->
                <div class="account-section">
                    <h3 style="margin-bottom: 1.5rem;">Security & Privacy</h3>
                    
                    <div class="security-options">
                        <div class="security-option">
                            <div class="option-info">
                                <div class="option-icon gradient-purple">
                                    <i class="fas fa-key"></i>
                                </div>
                                <div class="option-text">
                                    <h4>Two-Factor Authentication</h4>
                                    <p>Add an extra layer of security to your account</p>
                                </div>
                            </div>
                            <div class="toggle-switch" id="toggle2fa" onclick="toggle2FA()">
                                <div class="toggle-slider"></div>
                            </div>
                        </div>
                        
                        <div class="security-option">
                            <div class="option-info">
                                <div class="option-icon gradient-cyan">
                                    <i class="fas fa-fingerprint"></i>
                                </div>
                                <div class="option-text">
                                    <h4>Biometric Authentication</h4>
                                    <p>Use fingerprint or face recognition to sign in</p>
                                </div>
                            </div>
                            <div class="toggle-switch" id="toggleBio" onclick="toggleBiometric()">
                                <div class="toggle-slider"></div>
                            </div>
                        </div>
                        
                        <div class="security-option">
                            <div class="option-info">
                                <div class="option-icon gradient-green">
                                    <i class="fas fa-shield-alt"></i>
                                </div>
                                <div class="option-text">
                                    <h4>End-to-End Encryption</h4>
                                    <p>All files encrypted before upload (Always On)</p>
                                </div>
                            </div>
                            <div class="toggle-switch active">
                                <div class="toggle-slider"></div>
                            </div>
                        </div>
                        
                        <div class="security-option">
                            <div class="option-info">
                                <div class="option-icon gradient-blue">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div class="option-text">
                                    <h4>Session Timeout</h4>
                                    <p>Automatically sign out after inactivity</p>
                                </div>
                            </div>
                            <div class="toggle-switch active" id="toggleTimeout" onclick="toggleTimeout()">
                                <div class="toggle-slider"></div>
                            </div>
                        </div>
                        
                        <div class="security-option">
                            <div class="option-info">
                                <div class="option-icon gradient-orange">
                                    <i class="fas fa-bell"></i>
                                </div>
                                <div class="option-text">
                                    <h4>Security Alerts</h4>
                                    <p>Get notified of suspicious account activity</p>
                                </div>
                            </div>
                            <div class="toggle-switch active" id="toggleAlerts" onclick="toggleAlerts()">
                                <div class="toggle-slider"></div>
                            </div>
                        </div>
                        
                        <div class="security-option">
                            <div class="option-info">
                                <div class="option-icon gradient-red">
                                    <i class="fas fa-user-lock"></i>
                                </div>
                                <div class="option-text">
                                    <h4>Private Browsing Mode</h4>
                                    <p>Don't save file access history</p>
                                </div>
                            </div>
                            <div class="toggle-switch" id="togglePrivate" onclick="togglePrivate()">
                                <div class="toggle-slider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Password Section -->
                <div class="account-section">
                    <h3 style="margin-bottom: 1.5rem;">Change Password</h3>
                    
                    <form onsubmit="changePassword(event)">
                        <div class="form-group">
                            <label class="form-label">Current Password</label>
                            <input type="password" class="form-input" placeholder="••••••••" required>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">New Password</label>
                            <input type="password" class="form-input" placeholder="••••••••" required minlength="8">
                        </div>
                        
                        <div class="form-group">
                            <label class="form-label">Confirm New Password</label>
                            <input type="password" class="form-input" placeholder="••••••••" required minlength="8">
                        </div>
                        
                        <button type="submit" class="btn-primary">Update Password</button>
                    </form>
                </div>
                
                <!-- Danger Zone -->
                <div class="account-section" style="border-color: rgba(239, 68, 68, 0.3);">
                    <h3 style="margin-bottom: 1.5rem; color: #ef4444;">Danger Zone</h3>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <div>
                            <h4 style="font-weight: 600; margin-bottom: 0.25rem;">Export All Data</h4>
                            <p style="font-size: 0.875rem; color: #9ca3af;">Download all your files and account data</p>
                        </div>
                        <button class="btn-secondary" onclick="exportData()">Export</button>
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <h4 style="font-weight: 600; margin-bottom: 0.25rem;">Delete Account</h4>
                            <p style="font-size: 0.875rem; color: #9ca3af;">Permanently delete your account and all data</p>
                        </div>
                        <button class="btn-secondary" style="border-color: #ef4444; color: #ef4444;" onclick="deleteAccount()">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initAccount() {
    // Account page initialized
}

function toggle2FA() {
    const toggle = document.getElementById('toggle2fa');
    toggle.classList.toggle('active');
    const isActive = toggle.classList.contains('active');
    alert(isActive ? '2FA enabled!' : '2FA disabled!');
}

function toggleBiometric() {
    const toggle = document.getElementById('toggleBio');
    toggle.classList.toggle('active');
    const isActive = toggle.classList.contains('active');
    alert(isActive ? 'Biometric authentication enabled!' : 'Biometric authentication disabled!');
}

function toggleTimeout() {
    const toggle = document.getElementById('toggleTimeout');
    toggle.classList.toggle('active');
    const isActive = toggle.classList.contains('active');
    alert(isActive ? 'Session timeout enabled!' : 'Session timeout disabled!');
}

function toggleAlerts() {
    const toggle = document.getElementById('toggleAlerts');
    toggle.classList.toggle('active');
    const isActive = toggle.classList.contains('active');
    alert(isActive ? 'Security alerts enabled!' : 'Security alerts disabled!');
}

function togglePrivate() {
    const toggle = document.getElementById('togglePrivate');
    toggle.classList.toggle('active');
    const isActive = toggle.classList.contains('active');
    alert(isActive ? 'Private browsing enabled!' : 'Private browsing disabled!');
}

function editProfile() {
    alert('Profile editing would open a modal or make fields editable');
}

function changePassword(e) {
    e.preventDefault();
    alert('Password changed successfully!');
    return false;
}

function exportData() {
    if (confirm('Export all your data? This will create a download package.')) {
        alert('Your data export is being prepared. You will receive an email when ready.');
    }
}

function deleteAccount() {
    const confirmation = prompt('Type "DELETE" to confirm account deletion:');
    if (confirmation === 'DELETE') {
        alert('Your account has been scheduled for deletion. You have 30 days to cancel.');
        navigateTo('home');
    }
}

// Additional page templates (abbreviated for space)
function getAboutPage() {
    return `
        <div class="section" style="min-height: calc(100vh - 73px);">
            <div class="section-content" style="padding: 4rem 2rem;">
                <div class="section-header">
                    <h1 class="section-title gradient-text">Built for Privacy</h1>
                    <p class="section-subtitle" style="max-width: 800px; margin: 0 auto;">
                        Freeless.cloud is a solo project created by one developer who believes 
                        your data should remain yours—and yours alone.
                    </p>
                </div>
                
                <div style="max-width: 800px; margin: 3rem auto; color: #d1d5db; line-height: 1.8;">
                    <h2 style="font-size: 2rem; margin-bottom: 1rem; color: #fff;">The Story</h2>
                    <p style="margin-bottom: 1rem;">
                        In a world where cloud storage providers collect, analyze, and profit from your data, 
                        I decided to build something different. Freeless.cloud emerged from a simple belief: 
                        privacy is not a luxury—it's a fundamental right.
                    </p>
                    <p style="margin-bottom: 1rem;">
                        As a solo developer, I'm not beholden to investors demanding user growth metrics or 
                        engagement tracking. There's no board pressuring me to monetize your behavior. 
                        It's just me, building a service I'd want to use myself.
                    </p>
                </div>
            </div>
        </div>
        ${getFooter()}
    `;
}

function getPrivacyPage() {
    return `
        <div class="section" style="min-height: calc(100vh - 73px);">
            <div class="section-content" style="padding: 4rem 2rem;">
                <div class="section-header">
                    <i class="fas fa-shield-alt" style="font-size: 4rem; color: #a855f7; margin-bottom: 1rem;"></i>
                    <h1 class="section-title gradient-text">Privacy Policy</h1>
                    <p class="section-subtitle">Last updated: January 18, 2026</p>
                </div>
                
                <div style="max-width: 800px; margin: 3rem auto; color: #d1d5db; line-height: 1.8;">
                    <div style="padding: 2rem; background: linear-gradient(to right, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.2)); border: 1px solid rgba(16, 185, 129, 0.5); border-radius: 1rem; margin-bottom: 2rem;">
                        <h3 style="color: #10b981; margin-bottom: 1rem;">TL;DR</h3>
                        <p>✓ We use zero-knowledge encryption—we can't see your files</p>
                        <p>✓ We don't log, track, or analyze your activity</p>
                        <p>✓ We don't sell, share, or monetize your data</p>
                    </div>
                    
                    <h2 style="font-size: 2rem; margin: 2rem 0 1rem; color: #fff;">What We Collect</h2>
                    <p>When you create an account, we collect your email address and a hashed version of your password. 
                    We never store your password in plain text. Your files are encrypted on your device before being uploaded.</p>
                </div>
            </div>
        </div>
        ${getFooter()}
    `;
}

function getTermsPage() {
    return `
        <div class="section" style="min-height: calc(100vh - 73px);">
            <div class="section-content" style="padding: 4rem 2rem;">
                <div class="section-header">
                    <i class="fas fa-file-contract" style="font-size: 4rem; color: #22d3ee; margin-bottom: 1rem;"></i>
                    <h1 class="section-title gradient-text">Terms of Service</h1>
                    <p class="section-subtitle">Last updated: January 18, 2026</p>
                </div>
                
                <div style="max-width: 800px; margin: 3rem auto; color: #d1d5db; line-height: 1.8;">
                    <h2 style="font-size: 2rem; margin: 2rem 0 1rem; color: #fff;">1. Acceptance of Terms</h2>
                    <p>By accessing or using Freeless.cloud, you agree to be bound by these Terms of Service.</p>
                    
                    <h2 style="font-size: 2rem; margin: 2rem 0 1rem; color: #fff;">2. Acceptable Use</h2>
                    <p>You may use Freeless.cloud to store your personal and business files. 
                    You may NOT use it to store or distribute illegal content.</p>
                </div>
            </div>
        </div>
        ${getFooter()}
    `;
}

function getContactPage() {
    return `
        <div class="section" style="min-height: calc(100vh - 73px);">
            <div class="section-content" style="padding: 4rem 2rem;">
                <div class="section-header">
                    <i class="fas fa-envelope" style="font-size: 4rem; color: #a855f7; margin-bottom: 1rem;"></i>
                    <h1 class="section-title gradient-text">Get in Touch</h1>
                    <p class="section-subtitle" style="max-width: 800px; margin: 0 auto;">
                        I'm a solo developer, which means you're talking directly to the person who builds 
                        and maintains Freeless.cloud.
                    </p>
                </div>
                
                <div style="max-width: 600px; margin: 3rem auto;">
                    <div class="auth-card">
                        <form id="contactForm" onsubmit="handleContact(event)">
                            <div id="contactSuccess" style="display: none;"></div>
                            
                            <div class="form-group">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-input" placeholder="Your name" required>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-input" placeholder="your@email.com" required>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">Subject</label>
                                <input type="text" class="form-input" placeholder="What's this about?" required>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">Message</label>
                                <textarea class="form-input" rows="6" placeholder="Tell me what's on your mind..." required></textarea>
                            </div>
                            
                            <button type="submit" class="btn-primary btn-full btn-icon" id="contactBtn">
                                <i class="fas fa-paper-plane"></i>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        ${getFooter()}
    `;
}

function initContact() {
    // Contact form is handled by onsubmit
}

function handleContact(e) {
    e.preventDefault();
    const form = e.target;
    const btn = document.getElementById('contactBtn');
    const successDiv = document.getElementById('contactSuccess');
    
    btn.innerHTML = '<div class="loading"></div> Sending...';
    btn.disabled = true;
    
    setTimeout(() => {
        successDiv.innerHTML = `
            <div class="success-message">
                <p><i class="fas fa-check-circle"></i> Message sent successfully! I'll get back to you soon.</p>
            </div>
        `;
        successDiv.style.display = 'block';
        
        form.reset();
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        btn.disabled = false;
        
        setTimeout(() => {
            successDiv.style.display = 'none';
        }, 5000);
    }, 1500);
    
    return false;
}
