import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Spinner } from './ui/spinner';
import { useGetCoordinate } from '@/features/mapcoordinate/api/get-coordinate';
// Fix Leaflet marker icons
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapWithMarkers() {
  const address = `University of Nigeria Nsukka, Enugu State, Nigeria`;
  const coordQuery = useGetCoordinate({ address });
  const coords = coordQuery.data;

  if (coordQuery.isLoading) return <Spinner />;
  if (!coords) return <div>Location not found</div>;

  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <MapContainer
        center={coords!}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          eventHandlers={{
            add: (marker) => {
              //open popup immediately on mount
              marker.target.openPopup();
            },
          }}
          position={coords!}
          icon={customIcon}
        >
          <Popup autoPan={false}>
            <div className="text-sm bg-white py-2 px-3 font-avenir">
              📍 <b>You can also reach us at:</b> <br />
              {address}
            </div>
            <div className="text-sm bg-white py-1 px-3">
              <p className="font-avenir font-semibold">📞 +234 812 345 6789</p>
              <p className="font-avenir font-semibold">
                ✉️ info@adadafoundation.org
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
