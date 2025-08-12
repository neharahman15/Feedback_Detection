import React from 'react';
import EmotionDetector from './EmotionDetector';
import { useNavigate } from 'react-router-dom';

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export default function Home() {
  const navigate = useNavigate();

  const logout = async () => {
    const csrftoken = getCookie('csrftoken');
    try {
      const res = await fetch('http://localhost:8000/api/accounts/logout/', {
        method: 'POST',  // or 'GET' if your logout view expects GET
        headers: {
          'X-CSRFToken': csrftoken,
        },
        credentials: 'include',
      });
      if (res.ok) {
        navigate('/login');
      } else {
        alert('Logout failed');
      }
    } catch (error) {
      alert('Logout error');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <h1>Welcome to Emotion Detector</h1>
        <button onClick={logout}>Logout</button>
      </header>

      <EmotionDetector />
    </div>
  );
}
