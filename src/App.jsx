import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllAnimals from './pages/AllAnimals';
import AnimalDetails from './pages/AnimalDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [animals, setAnimals] = useState([]);
  const [selectedAnimalId, setSelectedAnimalId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [priceFilter, setPriceFilter] = useState('all');
  
  const [user, setUser] = useState({
    name: 'Tina',
    email: 'tina@varsity.edu',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    isLoggedIn: true
  });

  const [toast, setToast] = useState(null);

  // Form states mapping
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhoto, setRegPhoto] = useState('');
  const [regPassword, setRegPassword] = useState('');
  
  const [updateName, setUpdateName] = useState(user.name);
  const [updatePhoto, setUpdatePhoto] = useState(user.photo);

  const [bookPhone, setBookPhone] = useState('');
  const [bookAddress, setBookAddress] = useState('');

  useEffect(() => {
    fetch('/animals.json')
      .then(res => res.json())
      .then(data => {
        setAnimals(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const showNotification = (msg, type = 'success') => {
    setToast({ text: msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const navigateTo = (route, id = null) => {
    const privateRoutes = ['details', 'profile', 'update-profile'];
    if (privateRoutes.includes(route) && !user.isLoggedIn) {
      showNotification('Please log in first to access this secure zone!', 'error');
      setCurrentRoute('login');
      return;
    }
    if (id) setSelectedAnimalId(id);
    setCurrentRoute(route);
    window.scrollTo(0, 0);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      showNotification('Fill all inputs!', 'error');
      return;
    }
    setUser({
      name: 'Tina Developer',
      email: loginEmail,
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      isLoggedIn: true
    });
    showNotification('Welcome back! Verified successfully.');
    navigateTo('home');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword) {
      showNotification('Required registration inputs missing!', 'error');
      return;
    }
    setUser({
      name: regName,
      email: regEmail,
      photo: regPhoto || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
      isLoggedIn: true
    });
    showNotification('Account onboarding authenticated cleanly!');
    navigateTo('home');
  };

  const handleSocialLogin = () => {
    setUser({
      name: 'Tina (Google SSO)',
      email: 'tina.google@gmail.com',
      photo: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200',
      isLoggedIn: true
    });
    showNotification('Google Authentication complete.');
    navigateTo('home');
  };

  const handleLogout = () => {
    setUser({ name: '', email: '', photo: '', isLoggedIn: false });
    showNotification('Session logs destroyed safely.', 'info');
    navigateTo('home');
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    showNotification('Alhamdulillah! Your Qurbani booking is tracked.');
    setBookPhone('');
    setBookAddress('');
    navigateTo('home');
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setUser(prev => ({ ...prev, name: updateName, photo: updatePhoto }));
    showNotification('Profile updated perfectly.');
    navigateTo('profile');
  };

  const sortedAnimals = [...animals].sort((a, b) => {
    if (priceFilter === 'low-to-high') return a.price - b.price;
    if (priceFilter === 'high-to-low') return b.price - a.price;
    return 0;
  });

  const targetAnimal = animals.find(a => a.id === selectedAnimalId);

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-slate-800 font-sans antialiased">
      {/* TOAST SYSTEM */}
      {toast && (
        <div className={`fixed top-5 right-5 z-50 flex items-center p-4 rounded-xl shadow-2xl text-white ${
          toast.type === 'error' ? 'bg-rose-600' : toast.type === 'info' ? 'bg-amber-600' : 'bg-emerald-800'
        }`}>
          <span className="font-medium text-sm">{toast.text}</span>
        </div>
      )}

      <Navbar currentRoute={currentRoute} navigateTo={navigateTo} user={user} handleLogout={handleLogout} />

      <main className="pb-24">
        {currentRoute === 'home' && <Home animals={animals} loading={loading} navigateTo={navigateTo} />}
        {currentRoute === 'animals' && <AllAnimals sortedAnimals={sortedAnimals} priceFilter={priceFilter} setPriceFilter={setPriceFilter} navigateTo={navigateTo} />}
        {currentRoute === 'details' && targetAnimal && <AnimalDetails targetAnimal={targetAnimal} user={user} bookPhone={bookPhone} setBookPhone={setBookPhone} bookAddress={bookAddress} setBookAddress={setBookAddress} handleBookingSubmit={handleBookingSubmit} navigateTo={navigateTo} />}
        {currentRoute === 'login' && <Login loginEmail={loginEmail} setLoginEmail={setLoginEmail} loginPassword={loginPassword} setLoginPassword={loginPassword} handleLogin={handleLogin} handleSocialLogin={handleSocialLogin} navigateTo={navigateTo} />}
        {currentRoute === 'register' && <Register regName={regName} setRegName={setRegName} regEmail={regEmail} setRegEmail={setRegEmail} regPhoto={regPhoto} setRegPhoto={setRegPhoto} regPassword={regPassword} setRegPassword={setRegPassword} handleRegister={handleRegister} handleSocialLogin={handleSocialLogin} navigateTo={navigateTo} />}
        {currentRoute === 'profile' && <Profile user={user} navigateTo={navigateTo} />}
        {currentRoute === 'update-profile' && <UpdateProfile updateName={updateName} setUpdateName={setUpdateName} updatePhoto={updatePhoto} setUpdatePhoto={setUpdatePhoto} handleProfileUpdate={handleProfileUpdate} navigateTo={navigateTo} />}
      </main>

      <Footer />
    </div>
  );
}