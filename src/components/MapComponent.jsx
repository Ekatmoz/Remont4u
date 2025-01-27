import React, { useRef } from 'react';

const MapComponent = () => {
  const iframeRef = useRef(null);

  const handleIframeLoad = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentDocument) {
      iframe.style.height = (iframe.contentDocument.body.scrollHeight + 45) + 'px';
    }
  };

  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#f0f0f0' }}>
      <iframe 
        ref={iframeRef}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84400.1022088992!2d22.19706517582728!3d48.61935223707254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919b944b6e3d9%3A0xda6ae0130042a3c!2sUzhhorod%2C%20Zakarpattia%20Oblast%2C%20Ukraine!5e0!3m2!1sen!2shu!4v1737812142519!5m2!1sen!2shu"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
        onLoad={handleIframeLoad}
      >
      </iframe>
    </div>
  );
}

export default MapComponent;
