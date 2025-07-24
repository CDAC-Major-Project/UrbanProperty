import React, { useState } from 'react';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    role: 'Administrator',
    password: '********',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log('Saved User Data:', userData);
    alert('Profile saved successfully!');
  };

  return (
    <div className="container-fluid" style={{ marginTop: '160px' }}>
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title mb-2 d-flex align-items-center">
            <i className="bi bi-person me-2"></i> Profile Information
          </h4>
          <p className="text-muted mb-4">Click on any field to edit your information</p>

          <div className="row">         
            <div className="mb-3 col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={userData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={userData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={userData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Role</label>
              <input
                type="text"
                name="role"
                className="form-control"
                value={userData.role}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={userData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button className="btn btn-primary" onClick={handleSave}>
              <i className="bi bi-save me-2"></i> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
