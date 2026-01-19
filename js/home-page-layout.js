/**
 * Page Layout Manager - Applies to all pages
 * Ensures nav bar width matches background image width
 * and nav height + image height = viewport height
 */
export class PageLayoutManager {
    constructor() {
        this.imageUrl = '/img/titul_book.png';
        this.image = new Image();
        this.init();
    }

    init() {
        // Load image to get dimensions
        this.image.onload = () => this.calculateLayout();
        this.image.onerror = () => console.error('Failed to load background image');
        this.image.src = this.imageUrl;

        // Recalculate on window resize
        window.addEventListener('resize', () => this.calculateLayout());
    }

    calculateLayout() {
        const header = document.querySelector('header');
        if (!header) return;

        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        
        // Get header height first
        const headerHeight = header.offsetHeight;
        
        // Set CSS variable for header height
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);

        // Calculate image dimensions maintaining aspect ratio
        const imageAspectRatio = this.image.width / this.image.height;
        const availableHeight = viewportHeight - headerHeight;
        
        // Calculate dimensions: nav width = image width, nav height + image height = viewport height
        // Try width first, then check if height fits
        let finalWidth = Math.min(viewportWidth - 30, 1200); // Account for padding
        let finalHeight = finalWidth / imageAspectRatio;
        
        // If calculated height exceeds available height, scale down
        if (finalHeight > availableHeight) {
            finalHeight = availableHeight;
            finalWidth = finalHeight * imageAspectRatio;
        }

        // Ensure width doesn't exceed viewport
        finalWidth = Math.min(finalWidth, viewportWidth - 30);

        // Update header container width to match image width
        const headerContainer = header.querySelector('.container');
        if (headerContainer) {
            headerContainer.style.width = `${finalWidth}px`;
            headerContainer.style.maxWidth = `${finalWidth}px`;
            headerContainer.style.margin = '0 auto';
        }

        // Update all main containers to match the same width
        const mainContainers = document.querySelectorAll('main .container');
        mainContainers.forEach(container => {
            if (!container.classList.contains('hero-container')) {
                container.style.width = `${finalWidth}px`;
                container.style.maxWidth = `${finalWidth}px`;
                container.style.margin = '0 auto';
            }
        });

        // Handle hero container (home page)
        const heroContainer = document.querySelector('.hero-container');
        if (heroContainer) {
            heroContainer.style.width = `${finalWidth}px`;
            heroContainer.style.maxWidth = `${finalWidth}px`;
            heroContainer.style.height = `${finalHeight}px`;
            heroContainer.style.minHeight = `${finalHeight}px`;
            heroContainer.style.margin = '0 auto';

            // Verify total height equals viewport
            const actualHeaderHeight = header.offsetHeight;
            const actualImageHeight = heroContainer.offsetHeight;
            const totalHeight = actualHeaderHeight + actualImageHeight;
            
            if (Math.abs(totalHeight - viewportHeight) > 1) {
                // Adjust image height to make total = viewport
                const adjustedImageHeight = viewportHeight - actualHeaderHeight;
                heroContainer.style.height = `${adjustedImageHeight}px`;
                heroContainer.style.minHeight = `${adjustedImageHeight}px`;
            }
        } else {
            // For non-home pages, set main height to fill remaining viewport
            const main = document.querySelector('main');
            if (main) {
                main.style.height = `${availableHeight}px`;
                main.style.minHeight = `${availableHeight}px`;
            }
        }

        // Set body background image size to match calculated dimensions
        document.body.style.setProperty('--bg-image-width', `${finalWidth}px`);
        document.body.style.setProperty('--bg-image-height', `${finalHeight}px`);
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        try {
            new PageLayoutManager();
        } catch (error) {
            console.error('Failed to initialize page layout:', error);
        }
    });
} else {
    try {
        new PageLayoutManager();
    } catch (error) {
        console.error('Failed to initialize page layout:', error);
    }
}

