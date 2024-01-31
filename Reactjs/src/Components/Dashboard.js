import React, { useState } from 'react';
import Header from './Header';
import FilterPanel from './FilterPanel';
import SalesTable from './SalesTable';
import TotalSales from './TotalSales';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedSalesChannel, setSelectedSalesChannel] = useState('all');
  const [selectedProductName, setSelectedProductName] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedDateRange, setSelectedDateRange] = useState(null);

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleSalesChannelChange = (event) => {
    setSelectedSalesChannel(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setSelectedProductName(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleIndustryChange = (event) => {
    setSelectedIndustry(event.target.value);
  };

  const handleDateRangeChange = (event) => {
    setSelectedDateRange(event.target.value);
  };

  return (
    <div className="dashboard">
      <Header />
      
        <div className="content">
          <FilterPanel
            selectedRegion={selectedRegion}
            selectedSalesChannel={selectedSalesChannel}
            selectedProductName={selectedProductName}
            selectedCity={selectedCity}
            selectedIndustry={selectedIndustry}
            selectedDateRange={selectedDateRange}
            onRegionChange={handleRegionChange}
            onSalesChannelChange={handleSalesChannelChange}
            onProductNameChange={handleProductNameChange}
            onCityChange={handleCityChange}
            onIndustryChange={handleIndustryChange}
            onDateRangeChange={handleDateRangeChange}
          />
          <div className="data-section">
            <SalesTable
              selectedRegion={selectedRegion}
              selectedSalesChannel={selectedSalesChannel}
              selectedProductName={selectedProductName}
              selectedCity={selectedCity}
              selectedIndustry={selectedIndustry}
              selectedDateRange={selectedDateRange}
            />
            <TotalSales
              selectedRegion={selectedRegion}
              selectedSalesChannel={selectedSalesChannel}
              selectedProductName={selectedProductName}
              selectedCity={selectedCity}
              selectedIndustry={selectedIndustry}
              selectedDateRange={selectedDateRange}
            />
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
