import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import useToken from './components/useToken';
import Booking from './components/Booking/Booking';
import BookingMain from './components/Booking/BookingMain';
import BookingDate from './components/Booking/BookingDate';
import BookingTech from './components/Booking/BookingTech';
import BookingServices from './components/Booking/BookingServices';
import Login from './components/Login';
import AdminBook from './components/Admin/Booking';
import AdminCheckin from './components/Admin/Checkin';
import AdminCustomer from './components/Admin/Customer';

function App() {
  const { token, removeToken, setToken } = useToken();
  const location = useLocation();
  const IsAdmin = location.pathname.includes('/Admin');

  return (    
    <Routes>
      {!IsAdmin ? (
        <>
          <Route path="/Booking/*" element={<BookingMain />}>
            <Route index element={<Navigate to="services" />} />
            <Route path="services" element={<BookingServices />} />
            <Route path="datetime" element={<BookingDate />} />
            <Route path="bookingtechnician" element={<BookingTech />} />
            <Route path="info" element={<Booking />} />
            <Route path="*" element={<Navigate to="/Booking/" />} />
          </Route>
          <Route path = "/Login" element = {<Login setToken = {setToken} />} />
          <Route path="*" element={<Navigate to="/Booking/" />}></Route>
        </>
      ) : (
        <>
          <Route path="/Admin/*">
            <Route index element={<Navigate to="/Login" />} />
            <Route path="Booking" element = {<AdminBook token={token} removeToken={removeToken} setToken={setToken}  />} />
            <Route path="Checkin" element={<AdminCheckin token={token} removeToken={removeToken} setToken={setToken} />} />
            <Route path="Customer" element={<AdminCustomer token={token} removeToken={removeToken} setToken={setToken} />} />

            <Route path="*" element={<Navigate to="/Admin/" />} />
          </Route>
        </>
      )}
      <Route path="/" element={<Navigate to="/Booking/" />} />
    </Routes>
  );
};

export default App;