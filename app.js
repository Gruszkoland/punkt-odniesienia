/**
 * Punkt Odniesienia - Digital Business Card
 * Web Share API + PWA Registration
 */

document.addEventListener('DOMContentLoaded', () => {
    initShareButton();
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
