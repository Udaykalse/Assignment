import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import From from './components/Form';
import SecondPage from './components/Secondpage/SecondPage';
import DataTable from './components/DataTable';
import DepartmentList from './components/Department/DepartmentList';



function App() {
  const rows = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
   
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', width: 90 },
    
  ];

  const departments = [
    {
      department: 'customer_service',
      sub_departments: ['support', 'customer_success'],
    },
    {
      department: 'design',
      sub_departments: ['graphic_design', 'product_design', 'web_design'],
    },

  ];

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<From />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/data-table" element={<DataTable rows={rows} columns={columns} />} />
        <Route path="/department-list" element={<DepartmentList departments={departments} />} />
      </Routes>
    </Router>
  );
}

export default App;


