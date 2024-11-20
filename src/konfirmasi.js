import React from 'react';
import { Link } from 'react-router-dom';
import './konfirmasi.css';

const Confirmation = () => {
  return (
    <div className='confirmation-body'>
    <div className="container">
      <img src="/images/logosukses.svg" alt="Success Icon" />
      <h2>Yeay! Pesan kamu sudah terkirim</h2>
      <p>Terima kasih telah memakai jasa layanan kami.</p>
      <Link to="/" className="back-button">
        Kembali Ke Beranda
      </Link>
    </div>
    </div>
  );
};

export default Confirmation;
