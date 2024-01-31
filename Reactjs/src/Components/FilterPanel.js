import React from 'react';
import '../styles/FilterPanel.css';

const FilterPanel = ({
  regions,
  selectedRegion,
  salesChannels,
  selectedSalesChannel,
  productNames,
  selectedProductName,
  cities,
  selectedCity,
  industries,
  selectedIndustry,
  onRegionChange,
  onSalesChannelChange,
  onProductNameChange,
  onCityChange,
  onIndustryChange,
  onDateRangeChange,
}) => {
  return (
    <div className="filter-panel">
      <h2>Filters</h2>
      
      <div>
        <label htmlFor="region">Region:</label>
        <select id="region" value={selectedRegion} onChange={onRegionChange}>
          <option value="all">All Regions</option>
          <option value="South">South</option>
          {regions && regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="salesChannel">Sales Channel:</label>
        <select id="salesChannel" value={selectedSalesChannel} onChange={onSalesChannelChange}>
          <option value="all">All Sales Channels</option>
          {salesChannels && salesChannels.map((channel) => (
            <option key={channel} value={channel}>
              {channel}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="productName">Product Name:</label>
        <select id="productName" value={selectedProductName} onChange={onProductNameChange}>
          <option value="all">All Products</option>
          {productNames && productNames.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="city">City:</label>
        <select id="city" value={selectedCity} onChange={onCityChange}>
          <option value="all">All Cities</option>
          {cities && cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="industry">Industry:</label>
        <select id="industry" value={selectedIndustry} onChange={onIndustryChange}>
          <option value="all">All Industries</option>
          {industries && industries.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="dateRange">Date Range:</label>
        <input type="date" id="dateRange" onChange={onDateRangeChange} />
      </div>
      
    </div>
  );
};

export default FilterPanel;
