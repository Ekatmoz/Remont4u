import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
        defaultCenter={{ lat: 47.505489, lng: 19.061149 }}
        defaultZoom={15}
      >
      </GoogleMapReact>
    </div>
  );
}

export default Map;
