import { useEffect, useState } from "react";


const  CurrentLocation=()=> {
    const [position, setPosition] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);
  return (
    <section>
      <h1>useGeolocation:{position.latitude},{position.longitude}</h1>

    </section>
  );
}
export default CurrentLocation;

