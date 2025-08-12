// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import Register from './Register';
// import Login from './Login';
// import Home from './Home';

// function App() {
//   // Simple auth check: you can enhance this by checking a session API or cookie
//   const [isAuthenticated, setIsAuthenticated] = React.useState(false);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/login"
//           element={<Login onLogin={() => setIsAuthenticated(true)} />}
//         />
//         <Route
//           path="/register"
//           element={<Register onRegister={() => setIsAuthenticated(true)} />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

