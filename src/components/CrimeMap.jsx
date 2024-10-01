import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function CrimeMap({ crimeData })
{
    const center = [51.5074, -0.1278]; // Central London

    return (
        <MapContainer center={center} zoom={13} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {crimeData.map((crime, index) => (
                <Marker key={index} position={[crime.location.latitude, crime.location.longitude]}>
                    <Popup>
                        {crime.category}<br />
                        {crime.location.street.name}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default CrimeMap;