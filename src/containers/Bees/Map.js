import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

const Map = ({ data }) => {
  return (
    <MapContainer
      className="markercluster-map"
      center={[40.416729, -3.703339]}
      zoom={6}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup>
        {data.map((marker) => {
          const id = marker[''];
          return (
            <Marker
              key={id}
              position={[marker.decimalLatitude, marker.decimalLongitude]}
            />
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};
export default Map;
