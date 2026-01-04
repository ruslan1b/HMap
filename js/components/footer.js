/**
 * Footer component - reusable footer
 */
export class Footer {
    constructor() {
        this.links = [
            { text: 'SDARM UA', href: 'http://sdarm.com.ua', external: true },
            { text: 'Privacy', href: '/bookPages/privacy.html', external: false }
        ];
    }

    render() {
        return `
            <ul class="nav nav-tabs">
                ${this.links.map(link => `
                    <li>
                        <a class="btn btn-info" 
                           href="${link.href}" 
                           role="button"
                           ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                            ${link.text}
                        </a>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    static render() {
        const footer = new Footer();
        return footer.render();
    }
}

