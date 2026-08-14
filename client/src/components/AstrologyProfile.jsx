import React, { useEffect, useRef, useState } from 'react';
import { Chart } from '@astrodraw/astrochart';

// 1. The Visual Wheel Component
const NatalChartWheel = ({ astrologyData, userId = "user" }) => {
  const chartRef = useRef(null);
  const chartId = `astrochart-container-${userId}`;
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    try {
      const parsedData = typeof astrologyData === 'string' ? JSON.parse(astrologyData) : astrologyData;

      if (!window.Snap) throw new Error("Snap.svg is not loaded from index.html");
      if (!parsedData || !parsedData.planets) throw new Error("No planet data received from API");
      if (!chartRef.current) return;

      chartRef.current.innerHTML = '';
      const width = chartRef.current.offsetWidth > 0 ? chartRef.current.offsetWidth : 500;
      
const chartInstance = new Chart(chartId, width, width);
      const SUPPORTED_PLANETS = [
        "Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", 
        "Saturn", "Uranus", "Neptune", "Pluto", "Chiron", "NNode", "Lilith"
      ];

      const planetsData = {};
      parsedData.planets.forEach(planet => {
        let planetName = planet.name;
        if (planetName === "North Node") planetName = "NNode";
        
        if (SUPPORTED_PLANETS.includes(planetName)) {
          planetsData[planetName] = [planet.abs_pos];
        }
      });

      // FIX: Extract the 12 house boundaries (cusps) from the API data
      // If the API fails to send exactly 12, use a standard 30-degree equal house fallback
      let cuspsData = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
      if (parsedData.houses && parsedData.houses.length === 12) {
        cuspsData = parsedData.houses.map(house => house.abs_pos);
      }

      // Add the cusps array to the payload
      const astrochartPayload = {
        planets: planetsData,
        cusps: cuspsData
      };

      const radix = chartInstance.radix(astrochartPayload);

      if (parsedData.angles_details?.asc) {
        radix.addPointsOfInterest({ 
          "As": [parsedData.angles_details.asc.abs_pos] 
        });
      }

      radix.aspects(); 

    } catch (err) {
      console.error("Astrochart Error:", err);
      setErrorMsg(err.message);
    }
  }, [astrologyData, chartId]);

  if (errorMsg) {
    return (
      <div className="w-full flex justify-center items-center p-8 bg-red-50 rounded-2xl border border-red-100">
        <p className="text-red-500 font-bold text-sm">Chart Error: {errorMsg}</p>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center p-4">
      <div 
        id={chartId} 
        ref={chartRef} 
        className="w-full max-w-[500px] aspect-square drop-shadow-xl"
      ></div>
    </div>
  );
};

// 2. The Main Container Component
const AstrologyProfile = ({ userData }) => {
  // If the user didn't opt-in or the API failed, don't show the section
  if (!userData?.sunSign) return null;

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-[32px] p-6 lg:p-10 shadow-lg border border-gray-100 mt-6">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Cosmic Identity</h2>
        <p className="text-sm font-medium text-gray-500 mt-1">
          Based on birth coordinates in {userData.birthCity}
        </p>
      </div>

      {/* The Big Three Highlight Cards */}
      <div className="grid grid-cols-3 gap-3 lg:gap-6 mb-10">
        <div className="flex flex-col items-center justify-center p-4 lg:p-6 bg-orange-50 rounded-2xl border border-orange-100 hover:-translate-y-1 transition-transform">
          <span className="text-3xl lg:text-4xl mb-2 drop-shadow-sm">☀️</span>
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Main Sign</span>
          <span className="text-lg lg:text-xl font-extrabold text-orange-900 mt-1">{userData.sunSign}</span>
        </div>

        <div className="flex flex-col items-center justify-center p-4 lg:p-6 bg-indigo-50 rounded-2xl border border-indigo-100 hover:-translate-y-1 transition-transform">
          <span className="text-3xl lg:text-4xl mb-2 drop-shadow-sm">🌙</span>
          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Inner Self</span>
          <span className="text-lg lg:text-xl font-extrabold text-indigo-900 mt-1">{userData.moonSign}</span>
        </div>

        <div className="flex flex-col items-center justify-center p-4 lg:p-6 bg-emerald-50 rounded-2xl border border-emerald-100 hover:-translate-y-1 transition-transform">
          <span className="text-3xl lg:text-4xl mb-2 drop-shadow-sm">✨</span>
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Ascendant</span>
       <span className="text-lg lg:text-xl font-extrabold text-emerald-900 mt-1">
  {userData.ascendantSign || userData.fullAstrologyData?.angles_details?.asc?.sign || "Unknown Time"}
</span>
        </div>
      </div>

      {/* The Visual Wheel */}
      {userData.fullAstrologyData && (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-inner p-4">
          <NatalChartWheel astrologyData={userData.fullAstrologyData} />
        </div>
      )}
    </div>
  );
};

export default AstrologyProfile;