import { Icon } from 'leaflet';
import { useEffect } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import { cities } from '../../utils/cities';
import { MapPopup } from './Popup';

const MarkerIcon = new Icon({
  iconUrl: '/assets/marker-solid.svg',
  iconSize: [32, 32],
});

const defaultCenter = cities.find(({ name }) => name === 'Madrid').geo;

const ReCenterMap = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, 8);
    } else {
      map.setView(defaultCenter, 6);
    }
  }, [center, map]);

  return null;
};

const Map = ({ data, center }) => (
  <MapContainer className="markercluster-map">
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <ReCenterMap center={center} />
    <MarkerClusterGroup>
      {data.map(
        ({
          field1,
          decimalLatitude,
          decimalLongitude,
          species,
          family,
          date,
          identifiedBy,
          recordedBy,
        }) => (
          <Marker
            key={field1}
            position={[decimalLatitude, decimalLongitude]}
            icon={MarkerIcon}
          >
            <MapPopup
              family={family}
              species={species}
              date={date}
              identifiedBy={identifiedBy}
              recordedBy={recordedBy}
            />
          </Marker>
        )
      )}
    </MarkerClusterGroup>
  </MapContainer>
);

export default Map;
