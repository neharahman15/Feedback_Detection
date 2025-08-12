// import React, { useState } from 'react';

// function EmotionDetector() {
//   const [text, setText] = useState('');
//   const [emotion, setEmotion] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setEmotion('');

//     try {
//       const response = await fetch('http://localhost:8000/accounts/api/emotion/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ text }),
//       });

//       if (!response.ok) {
//         throw new Error('API error');
//       }

//       const data = await response.json();
//       setEmotion(data.emotion);
//     } catch (err) {
//       setError('Failed to get emotion. Try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
//       <h2>Emotion Detector</h2>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           rows={4}
//           placeholder="Type your text here"
//           required
//           style={{ width: '100%', padding: 8 }}
//         />
//         <button type="submit" disabled={loading} style={{ marginTop: 10 }}>
//           {loading ? 'Detecting...' : 'Detect Emotion'}
//         </button>
//       </form>

//       {emotion && (
//         <div style={{ marginTop: 20 }}>
//           <strong>Predicted Emotion:</strong> {emotion}
//         </div>
//       )}
//       {error && <div style={{ marginTop: 20, color: 'red' }}>{error}</div>}
//     </div>
//   );
// }

// export default EmotionDetector;

import React, { useState } from 'react';

function EmotionDetector() {
  const [text, setText] = useState('');
  const [emotion, setEmotion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setEmotion('');

    try {
      const response = await fetch('http://localhost:8000/api/accounts/emotion/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',  // Include cookies for session auth
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        if (response.status === 403) {
          setError('CSRF token missing or incorrect. Please login again.');
        } else {
          setError('API error. Try again.');
        }
        setLoading(false);
        return;
      }

      const data = await response.json();
      setEmotion(data.emotion);
    } catch (err) {
      setError('Failed to get emotion. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Emotion Detector</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          placeholder="Type your text here"
          required
          style={{ width: '100%', padding: 8 }}
        />
        <button type="submit" disabled={loading} style={{ marginTop: 10 }}>
          {loading ? 'Detecting...' : 'Detect Emotion'}
        </button>
      </form>

      {emotion && (
        <div style={{ marginTop: 20 }}>
          <strong>Predicted Emotion:</strong> {emotion}
        </div>
      )}
      {error && <div style={{ marginTop: 20, color: 'red' }}>{error}</div>}
    </div>
  );
}

export default EmotionDetector;
