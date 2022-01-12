import { Popup } from 'react-leaflet';

export const MapPopup = ({
  species,
  family,
  recordedBy,
  identifiedBy,
  date,
}) => (
  <Popup>
    <div className="p-1">
      <span className="block italic text-neutral-700 font-raleway font-bold text-base mb-0.5">
        {species}
      </span>
      <span className="block text-neutral-500 font-raleway text-sm mb-3">
        {family}
      </span>
      <span className="block text-neutral-700 font-raleway text-sm m-0">
        {recordedBy ? (
          <>
            <span>Capturado por </span>
            <span className="font-semibold text-neutral-600">{recordedBy}</span>
            {date && (
              <>
                <span> el </span>
                <span className="font-semibold text-neutral-600">{date}</span>
              </>
            )}
            {identifiedBy && (
              <>
                <span> e indentificado por </span>
                <span className="font-semibold text-neutral-600">
                  {identifiedBy}
                </span>
              </>
            )}
          </>
        ) : identifiedBy ? (
          <>
            <span>Indentificado por </span>
            <span className="font-semibold text-neutral-600">
              {identifiedBy}
            </span>
            {date && (
              <>
                <span> el </span>
                <span className="font-semibold text-neutral-600">{date}</span>
              </>
            )}
          </>
        ) : date ? (
          <>
            <span>Capturado </span>
            {date && (
              <>
                <span>el </span>
                <span className="font-semibold text-neutral-600">{date}</span>
              </>
            )}
          </>
        ) : null}
      </span>
    </div>
  </Popup>
);
