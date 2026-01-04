/**
 * Template Loader - Loads unified navigation template into pages
 */
import { Navigation } from './components/navigation.js';

export class TemplateLoader {
    static init(activePage = 'home') {
        // Find all navigation containers
        const navContainers = document.querySelectorAll('[data-nav-container]');
        
        navContainers.forEach(container => {
            const pageId = container.getAttribute('data-active-page') || activePage;
            container.innerHTML = Navigation.render(pageId);
        });
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => TemplateLoader.init());
} else {
    TemplateLoader.init();
}

