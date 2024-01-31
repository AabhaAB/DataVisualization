import React, { useEffect, useState } from 'react';
import { fetchData, API_BASE_URL } from '../API/Api';
import LoadingSpinner from './LoadingSpinner';

const TotalSales = () => {
  const [totalSales, setTotalSales] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTotalSales = async () => {
      const data = await fetchData(`${API_BASE_URL}/regionalsalesdata`);
      if (data && data.totalUnitPrice && data.totalUnitCost) {
        const totalSalesValue = data.totalUnitPrice - data.totalUnitCost;
        setTotalSales(totalSalesValue);
      }
      setLoading(false);
    };

    fetchTotalSales();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="total-sales">
      <h3>Total Sales:</h3>
      <p>{totalSales}</p>
    </div>
  );
};

export default TotalSales;
