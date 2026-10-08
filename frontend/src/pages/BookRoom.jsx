import React, { useState } from 'react';
import axios from 'axios';

function BookRoom() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'Big Suite',
    guests: 1
  });
  
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/bookings', formData);
      setStatus('Booking successful!');
      setFormData({ name: '', email: '', phone: '', checkIn: '', checkOut: '', roomType: 'Big Suite', guests: 1 });
    } catch (error) {
      console.error(error);
      setStatus('Error submitting booking.');
    }
  };

  return (
    <div className="container" style={{ paddingTop: '150px', minHeight: '60vh' }}>
      <h1 className="text-center">Book a Room</h1>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          {status && <div className="alert alert-info">{status}</div>}
          <form onSubmit={handleSubmit} style={{ background: '#f9f9f9', padding: '30px', borderRadius: '10px' }}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="row">
              <div className="col-md-6 form-group">
                <label>Check In</label>
                <input type="date" className="form-control" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
              </div>
              <div className="col-md-6 form-group">
                <label>Check Out</label>
                <input type="date" className="form-control" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label>Room Type</label>
              <select className="form-control" name="roomType" value={formData.roomType} onChange={handleChange}>
                <option value="Big Suite">Big Suite</option>
                <option value="Classic Deluxe">Classic Deluxe</option>
                <option value="Conference Hall">Conference Hall</option>
              </select>
            </div>
            <div className="form-group">
              <label>Guests</label>
              <input type="number" min="1" className="form-control" name="guests" value={formData.guests} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit Booking</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookRoom;