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
  const [currentRoute, setCurrentRoute] = useState(() => {
    return localStorage.getItem('lastRoute') || 'home';
  });

  const [animals, setAnimals] = useState([]);
  const [selectedAnimalId, setSelectedAnimalId] = useState(() => {

    const savedId = localStorage.getItem('lastSelectedAnimalId');
    return savedId ? parseInt(savedId, 10) : null;
  });
  
  const [loading, setLoading] = useState(true);
  const [priceFilter, setPriceFilter] = useState('all');

  const [user, setUser] = useState(() => {
    const savedActiveUser = localStorage.getItem('activeUser');
    return savedActiveUser ? JSON.parse(savedActiveUser) : {
      name: '',
      email: '',
      photo: '',
      isLoggedIn: false
    };
  });

  const [toast, setToast] = useState(null);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhoto, setRegPhoto] = useState('');
  const [regPassword, setRegPassword] = useState('');
  
  const [updateName, setUpdateName] = useState('');
  const [updatePhoto, setUpdatePhoto] = useState('');

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

  useEffect(() => {
    if (user.isLoggedIn) {
      setUpdateName(user.name);
      setUpdatePhoto(user.photo);
    }
  }, [user]);

  const showNotification = (msg, type = 'success') => {
    setToast({ text: msg, type });
    setTimeout(() => setToast(null), 4000);
  };


  const navigateTo = (route, id = null) => {
    const privateRoutes = ['details', 'profile', 'update-profile'];
    if (privateRoutes.includes(route) && !user.isLoggedIn) {
      showNotification('Please log in first to access this secure zone!', 'error');
      localStorage.setItem('lastRoute', 'login');
      setCurrentRoute('login');
      return;
    }
    
    if (id) {
      setSelectedAnimalId(id);
      localStorage.setItem('lastSelectedAnimalId', id.toString());
    }

    localStorage.setItem('lastRoute', route);
    setCurrentRoute(route);
    window.scrollTo(0, 0);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      showNotification('Please fill in all credentials!', 'error');
      return;
    }
    
    const savedUserData = localStorage.getItem('registeredUser');
    const parsedUser = savedUserData ? JSON.parse(savedUserData) : null;
    
    let loggedInUser = null;

    if (parsedUser && parsedUser.email === loginEmail) {
      loggedInUser = {
        name: parsedUser.name,
        email: parsedUser.email,
        photo: parsedUser.photo,
        isLoggedIn: true
      };
    } else {
      const fallbackName = loginEmail.split('@')[0];
      loggedInUser = {
        name: fallbackName.charAt(0).toUpperCase() + fallbackName.slice(1),
        email: loginEmail,
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        isLoggedIn: true
      };
    }
    
    setUser(loggedInUser);
    localStorage.setItem('activeUser', JSON.stringify(loggedInUser));
    showNotification('Logged in successfully!');
    navigateTo('home');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword) {
      showNotification('Required inputs are missing!', 'error');
      return;
    }
    
    localStorage.setItem('registeredUser', JSON.stringify({
      name: regName,
      email: regEmail,
      photo: regPhoto || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    }));
    
    showNotification('Registration successful! Please log in to activate account.');
    navigateTo('login');
  };


  const handleLogout = () => {
    setUser({ name: '', email: '', photo: '', isLoggedIn: false });
    setLoginEmail('');
    setLoginPassword('');
    
  
    localStorage.removeItem('activeUser');
    localStorage.removeItem('lastRoute');
    localStorage.removeItem('lastSelectedAnimalId');
    
    showNotification('Session cleared safely.', 'info');
    navigateTo('home');
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    showNotification('Alhamdulillah! Your booking form parameters are registered.');
    setBookPhone('');
    setBookAddress('');
    navigateTo('home');
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    const updatedUserData = { ...user, name: updateName, photo: updatePhoto };
    setUser(updatedUserData);
    localStorage.setItem('activeUser', JSON.stringify(updatedUserData));

    const savedUserData = localStorage.getItem('registeredUser');
    if (savedUserData) {
      const parsed = JSON.parse(savedUserData);
      parsed.name = updateName;
      parsed.photo = updatePhoto;
      localStorage.setItem('registeredUser', JSON.stringify(parsed));
    }
    
    showNotification('Profile data updated successfully.');
    navigateTo('profile');
  };

  const sortedAnimals = [...animals].sort((a, b) => {
    if (priceFilter === 'low-to-high') return a.price - b.price;
    if (priceFilter === 'high-to-low') return b.price - a.price;
    return 0;
  });

  const targetAnimal = animals.find(a => a.id === selectedAnimalId);

  const validRoutes = ['home', 'animals', 'details', 'login', 'register', 'profile', 'update-profile'];

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-slate-800 font-sans antialiased">
   
      {toast && (
        <div className={`fixed top-5 right-5 z-50 flex items-center p-4 rounded-xl shadow-2xl text-white transition-all duration-300 ${
          toast.type === 'error' ? 'bg-rose-600' : toast.type === 'info' ? 'bg-amber-600' : 'bg-emerald-800'
        }`}>
          <span className="font-bold text-xs tracking-wide">{toast.text}</span>
        </div>
      )}

      <Navbar currentRoute={currentRoute} navigateTo={navigateTo} user={user} handleLogout={handleLogout} />

      <main className="pb-24">
        {currentRoute === 'home' && (
          <Home animals={animals} loading={loading} navigateTo={navigateTo} />
        )}
        
        {currentRoute === 'animals' && (
          <AllAnimals sortedAnimals={sortedAnimals} priceFilter={priceFilter} setPriceFilter={setPriceFilter} navigateTo={navigateTo} />
        )}
        
        {currentRoute === 'details' && targetAnimal && (
          <AnimalDetails targetAnimal={targetAnimal} user={user} bookPhone={bookPhone} setBookPhone={setBookPhone} bookAddress={bookAddress} setBookAddress={setBookAddress} handleBookingSubmit={handleBookingSubmit} navigateTo={navigateTo} />
        )}
        
        {currentRoute === 'login' && (
          <Login loginEmail={loginEmail} setLoginEmail={setLoginEmail} loginPassword={loginPassword} setLoginPassword={setLoginPassword} handleLogin={handleLogin} navigateTo={navigateTo} />
        )}
        
        {currentRoute === 'register' && (
          <Register regName={regName} setRegName={setRegName} regEmail={regEmail} setRegEmail={setRegEmail} regPhoto={regPhoto} setRegPhoto={setRegPhoto} regPassword={regPassword} setRegPassword={setRegPassword} handleRegister={handleRegister} navigateTo={navigateTo} />
        )}
        
        {currentRoute === 'profile' && (
          <Profile user={user} navigateTo={navigateTo} />
        )}
        
        {currentRoute === 'update-profile' && (
          <UpdateProfile updateName={updateName} setUpdateName={setUpdateName} updatePhoto={updatePhoto} setUpdatePhoto={setUpdatePhoto} handleProfileUpdate={handleProfileUpdate} navigateTo={navigateTo} />
        )}

        {!validRoutes.includes(currentRoute) && (
          <section className="px-4 py-24 text-center max-w-md mx-auto space-y-4">
            <h1 className="text-6xl font-black text-stone-300 font-serif">404</h1>
            <p className="text-sm text-stone-500 font-medium">The livestock parameter route you are seeking does not exist.</p>
            <button onClick={() => navigateTo('home')} className="mt-2 inline-block bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-xl transition-all">Back to Home</button>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}