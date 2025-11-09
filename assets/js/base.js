/**
 * Ocean FG - Base JavaScript (Master File)
 * This file imports and initializes all JavaScript modules
 *
 * Architecture:
 * 1. Navigation - Smooth scroll, mobile menu, sticky navbar
 * 2. Animations - Intersection Observer for scroll effects
 * 3. Components - Interactive cards, logos, stats counter
 * 4. Form - Contact form validation and submission
 */

// Import modules
import { initNavigation } from './navigation.js';
import { initAnimations, setupParallax } from './animations.js';
import { initComponents, enhanceInteractivity } from './components.js';
import { initForm } from './form.js';

/**
 * Initialize All Modules
 */
function init() {
    console.log('🚀 Ocean FG Website - Initializing...');

    // Check if DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeModules);
    } else {
        initializeModules();
    }
}

/**
 * Initialize All Modules After DOM Ready
 */
function initializeModules() {
    try {
        // 1. Navigation (smooth scroll, mobile menu)
        initNavigation();

        // 2. Scroll Animations (Intersection Observer)
        initAnimations();

        // 3. Parallax Effect (subtle)
        setupParallax();

        // 4. Interactive Components (cards, logos, stats)
        initComponents();

        // 5. Enhanced Interactivity (button ripples)
        enhanceInteractivity();

        // 6. Contact Form (validation, submission)
        initForm();

        // 7. Service Modals (popup details)
        initModals();

        console.log('✅ All modules initialized successfully');

        // Optional: Add page load animation
        addPageLoadAnimation();

    } catch (error) {
        console.error('❌ Error initializing modules:', error);
    }
}

/**
 * Page Load Animation
 * Fade in the page after all content is loaded
 */
function addPageLoadAnimation() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';

    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
}

/**
 * Performance Monitoring (Optional)
 */
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;

            console.log('📊 Performance Metrics:');
            console.log(`  Page Load Time: ${pageLoadTime}ms`);
            console.log(`  Server Connect Time: ${connectTime}ms`);
            console.log(`  Render Time: ${renderTime}ms`);
        });
    }
}

// Optional: Enable performance monitoring in development
// monitorPerformance();

/**
 * Service Modals System
 * Handles popup modals for service details
 */
function initModals() {
    // Make modal functions globally available for onclick handlers
    window.openModal = openModal;
    window.closeModal = closeModal;

    // Close modal on ESC key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.service-modal.active');
            if (activeModal) {
                closeModal(activeModal.id);
            }
        }
    });
}

/**
 * Open Modal by ID
 * @param {string} modalId - The ID of the modal to open
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close Modal by ID
 * @param {string} modalId - The ID of the modal to close
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        // Restore body scroll
        document.body.style.overflow = '';
    }
}

// Start initialization
init();

/**
 * Export utilities for external use
 */
export { init, initializeModules, openModal, closeModal };

console.log('✅ Base module loaded - Ocean FG Website Ready');
