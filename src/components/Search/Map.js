import React, {useEffect, useRef, useState} from "react";
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';

export default function Map() {
  const mapElement = useRef();
  const [mapZoom, setMapZoom] = useState(4);
  const [map, setMap] = useState({});

  useEffect(() => {
    let map = tt.map({
      key: "ACv8oLgAGUizVo2vJWRcJcYDYxAAtd9c",
      container: mapElement.current,
      center: [42, -71],
      language: "fr-FR",
      zoom: mapZoom
    });
    setMap(map);
    return () => map.remove();
  }, []);
  return(
      <div ref={mapElement} className="map"></div>
  )
}