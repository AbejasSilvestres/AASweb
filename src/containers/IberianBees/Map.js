import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { getBasePath } from '../../lib/utils';

const filterOutEmpty = (marker) =>
  Object.keys(marker).reduce(
    (acc, next) => ({
      ...acc,
      [next]: marker[next] === 'NA' ? '' : marker[next],
    }),
    {}
  );

const formatDate = (day, month, year) =>
  day && month && year
    ? `${day}/${month}/${year}`
    : month && year
    ? `${month}/${year}`
    : year;

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
      {data.map((marker) => {
        const {
          field1,
          decimalLatitude,
          decimalLongitude,
          species,
          family,
          year,
          month,
          day,
          identifiedBy,
        } = filterOutEmpty(marker);
        const date = formatDate(day, month, year);
        return (
          <Marker
            key={field1}
            position={[decimalLatitude, decimalLongitude]}
            icon={MarkerIcon}
          >
            <Popup>
              <div className="p-2">
                <span className="block text-neutral-700 font-raleway font-bold text-base mb-0.5">
                  {species}
                </span>
                <span className="block text-neutral-500 font-raleway text-sm mb-3">
                  {family}
                </span>
                <span className="block text-neutral-700 font-raleway text-sm m-0">
                  {identifiedBy && (
                    <>
                      <span>Identificado por </span>
                      <span className="font-semibold text-neutral-600">
                        {identifiedBy}
                      </span>
                    </>
                  )}
                  {date && (
                    <>
                      <span>{identifiedBy ? ' en ' : 'Identificado en '}</span>
                      <span className="font-semibold text-neutral-600">
                        {date}
                      </span>
                    </>
                  )}
                </span>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MarkerClusterGroup>
  </MapContainer>
);

export default Map;
