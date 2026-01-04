/**
 * Audiobook Manager - handles audiobook selection and rendering
 */
import { audiobookData, downloadOptions } from './data/audiobook-data.js';

export class AudiobookManager {
    constructor(selectionElement, audioSelectElement, downloadSelectElement) {
        this.selectionElement = selectionElement;
        this.audioSelectElement = audioSelectElement;
        this.downloadSelectElement = downloadSelectElement;
        this.init();
    }

    init() {
        if (this.audioSelectElement) {
            this.audioSelectElement.addEventListener('change', (e) => this.handleAudioChange(e));
        }
        if (this.downloadSelectElement) {
            this.downloadSelectElement.addEventListener('change', (e) => this.handleDownloadChange(e));
        }
    }

    handleAudioChange(event) {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const chapterKey = selectedOption.text;
        
        if (audiobookData[chapterKey]) {
            this.renderAudiobookChapter(chapterKey);
        }
    }

    handleDownloadChange(event) {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const format = selectedOption.text;
        
        if (downloadOptions[format]) {
            this.renderDownloadButton(format);
        }
    }

    renderAudiobookChapter(chapterKey) {
        const chapters = audiobookData[chapterKey];
        if (!chapters) return;

        const html = chapters.map(chapter => `
            <div class="audiobook-item">
                <p>${chapter.title}</p>
                <p class="audio-wrapper">
                    <audio src="/audiobook/${chapter.file}" controls></audio>
                </p>
            </div>
        `).join('');

        this.selectionElement.innerHTML = html;
    }

    renderDownloadButton(format) {
        const option = downloadOptions[format];
        if (!option) return;

        const html = `
            <div class="download-container">
                <form method="get" action="${option.file}">
                    <button type="submit" class="btn btn-outline-success">
                        ${option.label}
                    </button>
                </form>
            </div>
        `;

        this.selectionElement.innerHTML = html;
    }
}

