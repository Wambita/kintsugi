import React, { useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Footer from './Footer';
import Header from './Header';
import './statistics.css'


const regions = [
  {
    name: 'Nairobi Region',
    coords: [-1.2921, 36.8219],
    incidents: {
      'Physical Violence': 245,
      'Sexual Harassment': 180,
      'Domestic Abuse': 125,
      'Economic Abuse': 89,
      total: 639
    }
  },
  {
    name: 'Coast Region',
    coords: [-3.3500, 39.5833],
    incidents: {
      'Physical Violence': 156,
      'Sexual Harassment': 98,
      'Domestic Abuse': 86,
      'Economic Abuse': 45,
      total: 385
    }
  },
  {
    name: 'Western Region',
    coords: [0.2827, 34.7519],
    incidents: {
      'Physical Violence': 134,
      'Sexual Harassment': 89,
      'Domestic Abuse': 77,
      'Economic Abuse': 56,
      total: 356
    }
  },
  {
    name: 'Rift Valley',
    coords: [0.5143, 35.2698],
    incidents: {
      'Physical Violence': 178,
      'Sexual Harassment': 145,
      'Domestic Abuse': 167,
      'Economic Abuse': 89,
      total: 579
    }
  },
  {
    name: 'Central Region',
    coords: [-0.4167, 36.9500],
    incidents: {
      'Physical Violence': 123,
      'Sexual Harassment': 98,
      'Domestic Abuse': 87,
      'Economic Abuse': 45,
      total: 353
    }
  },
  {
    name: 'Eastern Region',
    coords: [-0.5333, 37.4500],
    incidents: {
      'Physical Violence': 145,
      'Sexual Harassment': 112,
      'Domestic Abuse': 98,
      'Economic Abuse': 67,
      total: 422
    }
  }
];

const incidentData = [
  { name: 'Physical Abuse', incidents: 450 },
  { name: 'Sexual Harassment', incidents: 290 },
  { name: 'Domestic Violence', incidents: 380 },
  { name: 'Emotional Abuse', incidents: 220 },
  { name: 'Economic Abuse', incidents: 180 }
];

const KintaraStatisticsDashboard = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map
    const map = L.map(mapContainerRef.current).setView([-0.023559, 37.906193], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 10,
      minZoom: 5
    }).addTo(map);

    // Color function for map markers
    const getColor = (total) => {
      return total > 600 ? '#4c1d95' :
             total > 500 ? '#5b21b6' :
             total > 400 ? '#6d28d9' :
             total > 300 ? '#7c3aed' :
             total > 200 ? '#8b5cf6' :
                          '#a78bfa';
    };

    // Add map markers
    regions.forEach(region => {
      const circle = L.circle(region.coords, {
        color: getColor(region.incidents.total),
        fillColor: getColor(region.incidents.total),
        fillOpacity: 0.6,
        radius: 40000,
        weight: 2
      }).addTo(map);

      // Popup content
      const popupContent = `
        <div style="padding: 12px; min-width: 200px;">
          <h3 style="margin: 0 0 10px 0; color: #4c1d95; font-size: 16px; border-bottom: 2px solid #4c1d95; padding-bottom: 5px;">
            ${region.name}
          </h3>
          <div style="font-size: 14px;">
            <p style="margin: 0 0 5px 0;"><strong>Physical Violence:</strong> ${region.incidents['Physical Violence']}</p>
            <p style="margin: 0 0 5px 0;"><strong>Sexual Harassment:</strong> ${region.incidents['Sexual Harassment']}</p>
            <p style="margin: 0 0 5px 0;"><strong>Domestic Abuse:</strong> ${region.incidents['Domestic Abuse']}</p>
            <p style="margin: 0 0 5px 0;"><strong>Economic Abuse:</strong> ${region.incidents['Economic Abuse']}</p>
            <p style="margin: 8px 0 0 0; border-top: 1px solid #ddd; padding-top: 8px; font-weight: bold;">
              Total Cases: ${region.incidents.total}
            </p>
          </div>
        </div>
      `;

      circle.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'custom-popup'
      });

      // Hover effects
      circle.on('mouseover', function(e) {
        this.setStyle({
          fillOpacity: 0.8,
          weight: 3,
          color: '#4c1d95'
        });
        this.openPopup();
      });
      
      circle.on('mouseout', function(e) {
        this.setStyle({
          fillOpacity: 0.6,
          weight: 2,
          color: getColor(region.incidents.total)
        });
        this.closePopup();
      });
    });

    // Cleanup on unmount
    mapRef.current = map;
    return () => map.remove();
  }, []);

 
  return (
    <main>
       <Header/>
    <div>
      <h1 className="section-title">GBV Statistics Dashboard</h1>
      
      <div className="stats-grid grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { icon: 'fa-file-alt', value: '1,234', label: 'Total Reports' },
          { icon: 'fa-check-circle', value: '856', label: 'Cases Resolved' },
          { icon: 'fa-chart-line', value: '89%', label: 'Response Rate' },
          { icon: 'fa-map-marked-alt', value: '47', label: 'Counties Covered' }
        ].map((stat, index) => (
          <div key={index} className="stat-card bg-white rounded-lg shadow-md p-6 text-center">
            <i className={`fas ${stat.icon} text-4xl text-purple-600 mb-4`}></i>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="chart-section mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8 text-purple-900">Incident Types Distribution</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={incidentData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="incidents" fill="#8b5cf6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="map-section">
        <h2 className="text-2xl font-semibold text-center mb-8 text-purple-900">Geographic Distribution</h2>
        <div 
          ref={mapContainerRef} 
          className="kenya-map w-full h-[500px] rounded-lg shadow-md"
        ></div>
      </div>
    </div>
    <Footer/>
 </main>
  );
  
};


export default KintaraStatisticsDashboard;