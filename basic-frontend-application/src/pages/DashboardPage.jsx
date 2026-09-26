import { useNavigate } from 'react';
import Dashboard from '../components/Dashboard';

export default function DashboardPage({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/signin');
  };

  const defaultUser = user || {
    name: 'Authenticated User',
    email: 'user@example.com',
    role: 'Member',
  };

  return <Dashboard user={defaultUser} onLogout={handleLogout} />;
}
