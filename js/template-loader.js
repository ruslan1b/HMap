/**
 * Template Loader - Loads unified navigation template into pages
 */

export class TemplateLoader {
    static async init(activePage = 'home') {
        try {
            // Dynamically import to handle errors gracefully
            const { Navigation } = await import('./components/navigation.js');
            
            // Find all navigation containers
            const navContainers = document.querySelectorAll('[data-nav-container]');
            
            navContainers.forEach(container => {
                const pageId = container.getAttribute('data-active-page') || activePage;
                container.innerHTML = Navigation.render(pageId);
            });
        } catch (error) {
            console.error('Failed to load navigation template:', error);
            // Fallback: render basic navigation
            const navContainers = document.querySelectorAll('[data-nav-container]');
            navContainers.forEach(container => {
                container.innerHTML = `
                    <ul class="nav nav-tabs">
                        <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/bookPages/timeLinePage.html">Time Line</a></li>
                        <li class="nav-item"><a class="nav-link" href="/bookPages/bookPage.html">Book</a></li>
                    </ul>
                `;
            });
        }
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        TemplateLoader.init().catch(error => {
            console.error('Template loader initialization failed:', error);
        });
    });
} else {
    TemplateLoader.init().catch(error => {
        console.error('Template loader initialization failed:', error);
    });
}

