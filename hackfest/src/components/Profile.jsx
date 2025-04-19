import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const [user, setUser] = useState({
    username: '',
    name: '',
    email: ''
  });

  useEffect(() => {
    if (!userId) {
      alert("User not logged in");
      navigate('/');
      return;
    }

    fetch(`http://localhost:3001/api/profile?id=${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser({
          username: data.username,
          name: data.name,
          email: data.email
        });
      })
      .catch(err => {
        console.error('Error fetching profile:', err);
      });
  }, [userId, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/');
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <h2 className="profile-title">User Profile</h2>
        <div className="profile-details">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
        <button className="logout-button" onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
}

export default Profile;
