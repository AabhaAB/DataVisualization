import React, { useEffect, useState } from 'react';
import { fetchData, API_BASE_URL } from '../API/Api';
import LoadingSpinner from './LoadingSpinner';
import '../styles/SalesTable.css';

const SalesTable = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSalesData = async () => {
      const data = await fetchData(`${API_BASE_URL}/regionalsalesdata`);
      setSalesData(data);
      setLoading(false);
    };

    fetchSalesData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="sales-table">
      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>UnitPrice</th>
            <th>Region</th>
            <th>UnitCost</th>
          </tr>
        </thead>
        <tbody>
          {salesData && salesData.map((sale, index) => (
            <tr key={`${sale.orderNumber}-${index}`}>
              <td>{sale.orderNumber}</td>
              <td>{sale.unitPrice}</td>
              <td>{sale.region}</td>
              <td>{sale.unitCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
