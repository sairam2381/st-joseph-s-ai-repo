import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to="/dashboard" replace /> : <Navigate to="/signin" replace />
          }
        />
        <Route
          path="/signin"
          element={<SignIn onLoginSuccess={(userData) => setUser(userData)} />}
        />
        <Route
          path="/signup"
          element={<SignUp onRegisterSuccess={(userData) => setUser(userData)} />}
        />
        <Route
          path="/dashboard"
          element={<DashboardPage user={user} onLogout={() => setUser(null)} />}
        />
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
