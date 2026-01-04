/**
 * Navigation component - reusable navigation bar with unified template
 */
export class Navigation {
    constructor(activePage = 'home') {
        this.activePage = activePage;
        this.pages = [
            { name: 'Home', href: '/', id: 'home' },
            { name: 'Time Line', href: '/bookPages/timeLinePage.html', id: 'timeline' },
            { name: 'Book', href: '/bookPages/bookPage.html', id: 'book' }
        ];
        this.infoLinks = [
            { name: 'SDARM UA', href: 'http://sdarm.com.ua', external: true },
            { name: 'Privacy', href: '/bookPages/privacy.html', external: false }
        ];
    }

    render() {
        return `
            <ul class="nav nav-tabs">
                ${this.pages.map(page => `
                    <li class="nav-item">
                        <a class="nav-link ${this.activePage === page.id ? 'active' : ''}" 
                           aria-current="${this.activePage === page.id ? 'page' : ''}" 
                           href="${page.href}">${page.name}</a>
                    </li>
                `).join('')}
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle ${this.activePage === 'info' ? 'active' : ''}" 
                       href="#" 
                       id="infoDropdown" 
                       role="button" 
                       data-bs-toggle="dropdown" 
                       aria-expanded="false">
                        Info
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="infoDropdown">
                        ${this.infoLinks.map(link => `
                            <li>
                                <a class="dropdown-item" 
                                   href="${link.href}"
                                   ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                                    ${link.name}
                                </a>
                            </li>
                        `).join('')}
                    </ul>
                </li>
            </ul>
        `;
    }

    static render(activePage = 'home') {
        const nav = new Navigation(activePage);
        return nav.render();
    }
}

