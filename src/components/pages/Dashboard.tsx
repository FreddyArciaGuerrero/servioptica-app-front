// src/components/Dashboard.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id'); // Obtener el parámetro "id" si está presente

  return (
    <div>
      <h1>Dashboard Page</h1>
      {id ? (
        <p>Showing data for ID: {id}</p>
      ) : (
        <p>No ID provided. Showing default dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
