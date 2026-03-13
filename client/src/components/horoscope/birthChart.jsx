import React, { useState, useEffect } from 'react';

const BirthChart = () => {
    const [svgHtml, setSvgHtml] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchChart = async () => {
            try {
                const response = await fetch('https://json.freeastrologyapi.com/western/natal-wheel-chart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': 'vKWZlB0Q1U3ZfnmaAkvbT1kB5Ncf3kUA6zwGShSr'
                    },
                    body: JSON.stringify({
    year: 1990,
    month: 5,
    date: 15,        // Must be 'date'
    hours: 12,       // Must be 'hours'
    minutes: 0,      // Must be 'minutes'
    seconds: 0,      // Must be 'seconds'
    latitude: 40.7128,
    longitude: -74.0060,
    timezone: -4.0,   // Ensure this is a float/number
    config: {         // Optional but good for Unisoul customization
      language: "en",
      house_system: "Placidus" 
    }
  })
});
                const result = await response.json();
                
                // The API returns the SVG string in a field called 'chart'
                if (result.status && result.chart) {
                    setSvgHtml(result.chart);
                } else {
                    setError("Chart data missing from response");
                }
            } catch (err) {
                setError("Failed to fetch: Check CORS or API Key");
            }
        };

        fetchChart();
    }, []);

    if (error) return <div>Error: {error}</div>;

    return (
        <div 
            className="chart-container"
            style={{ width: '100%', maxWidth: '600px', margin: 'auto' }}
            dangerouslySetInnerHTML={{ __html: svgHtml }} 
        />
    );
};

export default BirthChart;