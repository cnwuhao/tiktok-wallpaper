function handleDownload() {
    const urlInput = document.getElementById('tiktok-url');
    const url = urlInput.value.trim();
    
    if (!url) {
        alert('Please enter a TikTok video URL');
        return;
    }
    
    // Send GA event
    gtag('event', 'download_attempt', {
        'event_category': 'User Interaction',
        'event_label': url
    });
    
    // Show under construction message
    alert('This feature is coming soon! Stay tuned for updates.');
    urlInput.value = '';
} 