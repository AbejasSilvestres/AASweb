import { Icon } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import { getBasePath } from '../../lib/utils';
import { MapPopup } from './Popup';

const MarkerIcon = new Icon({
  iconUrl: `${getBasePath()}/assets/marker-solid.svg`,
  iconSize: [32, 32],
});

const Map = ({ data }) => (
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
