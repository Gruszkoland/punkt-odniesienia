/**
 * Punkt Odniesienia - Digital Business Card
 * Web Share API + PWA Registration
 */

document.addEventListener('DOMContentLoaded', () => {
    initShareButton();
    initContactForm();
    initPlausibleGoals();
    initABTests();
    registerServiceWorker();
});

/**
 * Web Share API - udostępnianie wizytówki
 */
function initShareButton() {
    const shareBtn = document.getElementById('share-btn');

    if (!shareBtn) return;

    // Check if Web Share API is supported
    if (navigator.share) {
        shareBtn.addEventListener('click', async () => {
            try {
                await navigator.share({
                    title: 'Punkt Odniesienia',
                    text: 'Sprawdź naszą lokalizację w Poznaniu!',
                    url: window.location.href
                });
                console.log('Shared successfully');
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.error('Share failed:', err);
                    fallbackShare();
                }
            }
        });
    } else {
        // Fallback: copy to clipboard
        shareBtn.addEventListener('click', fallbackShare);
    }
}

/**
 * Fallback - kopiowanie linku do schowka
 */
async function fallbackShare() {
    try {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link skopiowany do schowka!');
    } catch (err) {
        // Final fallback
        prompt('Skopiuj ten link:', window.location.href);
    }
}

/**
 * Toast notification
 */
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background: #1e293b;
        color: white;
        padding: 1rem 2rem;
        border-radius: 9999px;
        font-size: 0.875rem;
        z-index: 1000;
        animation: fadeInUp 0.3s ease;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

/**
 * Service Worker Registration (PWA)
 */
async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('sw.js');
            console.log('SW registered:', registration.scope);
        } catch (err) {
            console.log('SW registration failed:', err);
        }
    }
}

/**
 * Contact Form handler (FormSubmit)
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        if (!btn) return;

        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="btn__icon">⏳</span> Wysyłanie...';
        btn.disabled = true;

        const formData = new FormData(form);
        const ajaxEndpoint = form.dataset.ajaxEndpoint || form.action;

        try {
            const response = await fetch(ajaxEndpoint, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Form submission failed');
            }

            showToast('Wiadomość wysłana! Odpowiemy w ciągu 24h.');
            form.reset();
            trackGoal('Contact Form Submit');
        } catch (error) {
            console.warn('Primary form submission failed, using fallback.', error);
            try {
                HTMLFormElement.prototype.submit.call(form);
                return;
            } catch {
                showToast('Błąd wysyłania. Napisz na adrian@punkt-odniesienia.com lub zadzwoń: 502 260 232');
            }
        } finally {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    });
}

/**
 * Plausible Analytics — Custom Goals
 * Events: Call Click, Email Click, Navigate Click, Share Click, Contact Form Submit, VCard Download
 */
function initPlausibleGoals() {
    const goals = [
        { selector: 'a[href^="tel:"]', event: 'Call Click' },
        { selector: 'a[href^="mailto:"]', event: 'Email Click' },
        { selector: 'a[href*="google.com/maps/dir"]', event: 'Navigate Click' },
        { selector: '#share-btn', event: 'Share Click' },
        { selector: 'a[href="kontakt.vcf"]', event: 'VCard Download' },
    ];

    goals.forEach(({ selector, event }) => {
        const el = document.querySelector(selector);
        if (el) {
            el.addEventListener('click', () => trackGoal(event));
        }
    });
}

/**
 * Track Plausible goal (no-op if Plausible not loaded)
 * @param {string} name - Goal name
 * @param {Object} [props] - Custom properties (for A/B testing etc.)
 */
function trackGoal(name, props) {
    if (typeof window.plausible === 'function') {
        if (props) {
            window.plausible(name, { props });
        } else {
            window.plausible(name);
        }
    }
}

// Add CSS for toast animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translate(-50%, 20px); }
        to { opacity: 1; transform: translate(-50%, 0); }
    }
    @keyframes fadeOut {
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

/**
 * A/B Testing Framework — Plausible Custom Props
 *
 * Usage:
 *   1. Define variants in AB_TESTS config below
 *   2. Variants are assigned by hashing a stable visitor ID (random, stored in localStorage)
 *   3. All Plausible events include the variant as a custom property
 *   4. Analyze in Plausible → Custom Properties → filter by "ab_variant"
 *
 * Current tests:
 *   - cta_text: Primary CTA button text variant (A: "Zadzwoń" vs B: "Umów rozmowę")
 *   - hero_tagline: Tagline variant (A: original vs B: alternative)
 */

const AB_TESTS = {
    cta_text: {
        variants: ['Zadzwoń: 502 260 232', 'Umów bezpłatną rozmowę'],
        selector: '.btn--primary',
        apply: (el, variant) => {
            // Keep the icon, replace text
            const icon = el.querySelector('.btn__icon');
            if (icon) {
                el.textContent = '';
                el.appendChild(icon);
                el.append(' ' + variant);
            }
        },
    },
    hero_tagline: {
        variants: ['Agencja Marketingowa AI | Poznań', 'Twoja firma na szczycie Google Maps'],
        selector: '.tagline',
        apply: (el, variant) => {
            el.textContent = variant;
        },
    },
};

function initABTests() {
    // Stable visitor ID for consistent variant assignment
    let visitorId;
    
    try {
        visitorId = localStorage.getItem('_ab_vid');
        if (!visitorId) {
            visitorId = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2);
            localStorage.setItem('_ab_vid', visitorId);
        }
    } catch (e) {
        // localStorage not available (private browsing, etc.)
        console.warn('localStorage not available for AB tests:', e);
        visitorId = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2);
    }

    const activeVariants = {};

    Object.entries(AB_TESTS).forEach(([testName, config]) => {
        const hash = simpleHash(visitorId + testName);
        const variantIndex = hash % config.variants.length;
        const variant = config.variants[variantIndex];

        activeVariants[testName] = variantIndex === 0 ? 'A' : 'B';

        // Apply variant to DOM
        const el = document.querySelector(config.selector);
        if (el && variantIndex > 0) {
            config.apply(el, variant);
        }
    });

    // Track variant assignment once per pageview
    trackGoal('AB Pageview', activeVariants);
}

/**
 * Simple string hash — deterministic, fast, non-crypto
 */
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
}
