/**
 * Pages.js - Main entry point for book page functionality
 * Refactored to use modular components
 */
import { AudiobookManager } from './audiobook-manager.js';

// Initialize audiobook manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const selection = document.getElementById('selection');
    const audioForm = document.forms.namedItem('audioForm');
    const downloadForm = document.forms.namedItem('downloadForm');
    
    if (selection && audioForm && downloadForm) {
        const audioSelect = audioForm.elements.namedItem('formSelect');
        const downloadSelect = downloadForm.elements.namedItem('selectDownload');
        
        if (audioSelect && downloadSelect) {
            new AudiobookManager(selection, audioSelect, downloadSelect);
        }
    }
});