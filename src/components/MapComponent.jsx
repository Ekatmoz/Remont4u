import React from 'react';

const MapComponent = () => {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#f0f0f0' }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.523439359208!2d17.172080875816697!3d48.157992149740465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8f2e2088b03b%3A0xf2b336aaa983068f!2zUnXFvmlub3Zza8OhIDU4ODkvNDIsIDgyMSAwMSBSdcW-aW5vdiwgU2xvdmFraWE!5e0!3m2!1sen!2shu!4v1717492578463!5m2!1sen!2shu" 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
      >
      </iframe>
    </div>
  );
}

export default MapComponent;
