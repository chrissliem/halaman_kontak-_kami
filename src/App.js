import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ContactForm from './kontak_kami';
import Confirmation from './konfirmasi';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
};

export default App;
