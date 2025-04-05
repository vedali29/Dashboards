import React, {useState} from 'react';
import {ComposableMap, Geographies, Geography, Marker} from 'react-simple-maps';

const markers = [
  {
    coordinates: [77.2090, 28.6139],
    color: '#6366F1',
    name: 'India',
  },
  {
    coordinates: [-95.7129, 37.0902],
    color: '#EF4444',
    name: 'USA',
  },
  {
    coordinates: [-106.3468, 56.1304],
    color: '#F59E0B',
    name: 'Canada',
  },
  {
    coordinates: [53.8478, 23.4241],
    color: '#10B981',
    name: 'UAE',
  },
];

const countryData = [
  {name: 'INDIA', percentage: 40, color: '#6366F1', flag: '🇮🇳'},
  {name: 'USA', percentage: 25, color: '#EF4444', flag: '🇺🇸'},
  {name: 'CANADA', percentage: 10, color: '#F59E0B', flag: '🇨🇦'},
  {name: 'UAE', percentage: 7, color: '#10B981', flag: '🇦🇪'},
];

const DemographicsSection = () => {
  const [metricType, setMetricType] = useState ('Visitors');

  return (
    <div className="pl-2 pr-2 mt-3 mb-20 md:mb-6 md:pr-9 bg-[#1D1D1D]">
      <div className="bg-[#141414] rounded-xl p-4 h-auto md:h-[320px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-col items-start mb-4">
          <h2 className="text-lg md:text-xl mb-2">Demographics</h2>
          {/* Removed md:mb-0 to maintain spacing consistency */}

          <select
            className="bg-[#1D1D1D] border border-gray-700 rounded-full px-2 py-1 text-xs w-full md:w-24"
            value={metricType}
            onChange={e => setMetricType (e.target.value)}
          >
            <option value="Visitors">Visitors</option>
            <option value="Connections">Connections</option>
            <option value="Impressions">Impressions</option>
            <option value="Interactions">Interactions</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row h-[calc(100%-70px)]">
          {/* Left side - Map */}
          <div className="w-full md:w-[65%] relative h-[250px] md:h-auto">
            <ComposableMap
              projectionConfig={{scale: 250}}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(0.9)',
              }}
              className="md:scale-100" // Reset scale on desktop
            >
              <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                {({geographies}) =>
                  geographies.map (geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#2A2A2A"
                      stroke="#404040"
                      strokeWidth={0.5}
                    />
                  ))}
              </Geographies>
              {markers.map (({coordinates, color, name}) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={3} fill={color} className="md:r-[5px]" />
                  {' '}
                  {/* Smaller circles on mobile */}
                </Marker>
              ))}
            </ComposableMap>

            <div className="absolute bottom-2 left-0 right-0 md:left-2 md:bottom-4 md:right-auto overflow-x-auto">
              <div className="flex gap-3 md:gap-6 border border-gray-700 rounded-full px-4 py-1 mx-auto md:ml-0 md:w-fit w-max">
                {countryData.map ((country, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                      style={{backgroundColor: country.color}}
                    />
                    <span className="text-[10px] md:text-[12px] text-white">
                      {country.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Country List */}
          <div className="w-full md:w-[35%] flex flex-col justify-center space-y-3 md:space-y-4 pl-0 mb-0 md:pl-8 pb-4 md:pb-8 mt-4 md:mt-0 md:mb-4">
            {countryData.map ((country, index) => (
              <div key={index} className="px-2">
                <div className="flex items-center justify-between mb-1 md:mb-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={`/flags/${country.name.toLowerCase ()}.png`}
                      alt={country.name}
                      className="w-6 h-4 object-cover"
                    />
                    <span className="text-sm md:text-[16px]">
                      {country.name}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm">
                    {country.percentage}%
                  </span>
                </div>
                <div className="w-full h-1.5 md:h-2 bg-gray-800 rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: country.color,
                      width: `${country.percentage}%`,
                    }}
                  />
                </div>
              </div>
            ))}
            <div className="text-right border-t border-gray-700 mt-4 md:mt-8 pt-4">
              <button className="text-xs text-white inline-flex items-center">
                View all countries
                <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographicsSection;
