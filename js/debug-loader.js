/**
 * Debug script to check if modules are loading correctly
 * Add this temporarily to identify issues
 */
console.log('Debug loader started');

// Check if modules can be loaded
async function testModuleLoading() {
    const tests = [
        { name: 'template-loader', path: './template-loader.js' },
        { name: 'navigation', path: './components/navigation.js' },
        { name: 'home-page-layout', path: './home-page-layout.js' }
    ];

    for (const test of tests) {
        try {
            await import(test.path);
            console.log(`✓ ${test.name} loaded successfully`);
        } catch (error) {
            console.error(`✗ ${test.name} failed to load:`, error);
            console.error('  Path:', test.path);
            console.error('  Error message:', error.message);
        }
    }
}

// Run tests when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', testModuleLoading);
} else {
    testModuleLoading();
}
