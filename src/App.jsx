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
    name: '',
    email: '',
    photo: '',
    isLoggedIn: false
  });

  const [toast, setToast] = useState(null);

  // Core Form states
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
      showNotification('Please fill in all credentials!', 'error');
      return;
    }
    
    // ব্রাউজারের সাময়িক মেমোরি থেকে ডাটা চেক করা হচ্ছে
    const savedUserData = localStorage.getItem('registeredUser');
    const parsedUser = savedUserData ? JSON.parse(savedUserData) : null;
    
    // রেজিস্ট্রেশন করা ইমেইল ম্যাচ করলে তার প্রোফাইল ডেটা ডায়নামিকালি লোড হবে
    if (parsedUser && parsedUser.email === loginEmail) {
      setUser({
        name: parsedUser.name,
        email: parsedUser.email,
        photo: parsedUser.photo,
        isLoggedIn: true
      });
    } else {
      // যদি অন্য কোনো ইমেইল দিয়ে ট্রাই করা হয়, তবে ইমেইলের প্রথমাংশ নাম হিসেবে জেনারেট হবে
      const fallbackName = loginEmail.split('@')[0];
      setUser({
        name: fallbackName.charAt(0).toUpperCase() + fallbackName.slice(1),
        email: loginEmail,
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
        isLoggedIn: true
      });
    }
    
    showNotification('Logged in successfully!');
    navigateTo('home');
  };


  const handleRegister = (e) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword) {
      showNotification('Required inputs are missing!', 'error');
      return;
    }
    
    // রেজিস্ট্রেশনের ইনপুট মেমোরিতে সেভ করা হচ্ছে
    localStorage.setItem('registeredUser', JSON.stringify({
      name: regName,
      email: regEmail,
      photo: regPhoto || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    }));
    
    // রিকোয়ারমেন্ট গাইডলাইন অনুযায়ী সফল রেজিস্ট্রেশন শেষে লগইন পেজে ট্রান্সফার করা হলো
    showNotification('Registration successful! Please log in to activate account.');
    navigateTo('login');
  };

  const handleLogout = () => {
    setUser({ name: '', email: '', photo: '', isLoggedIn: false });
    setLoginEmail('');
    setLoginPassword('');
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
    setUser(prev => ({ ...prev, name: updateName, photo: updatePhoto }));
    
    // প্রোফাইল আপডেট করলে লোকাল স্টোরেজের ডেটাও সিঙ্ক করে নেওয়া হচ্ছে
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
      </main>

      <Footer />
    </div>
  );
}