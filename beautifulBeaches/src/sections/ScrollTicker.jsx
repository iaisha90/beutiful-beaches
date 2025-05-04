import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

const ScrollTicker = () => {
  const [coords, setCoords] = useState(null);
  const date = new Date();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <Marquee>
      Today&apos;s date is {date.toDateString()} and location is {' '}
      {coords
        ? `Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`
        : 'Fetching location...'}

Today&apos;s date is {date.toDateString()} and location is{' '}
      {coords
        ? `Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`
        : 'Fetching location...'}
    </Marquee>
  );
};

export default ScrollTicker;