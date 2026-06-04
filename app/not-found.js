"use client";
import { linkOffer } from '../config'; 

export default function NotFound() {
  return (
    <div className="app-container" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        padding: '20px',
        backgroundColor: '#f8fafc' 
    }}>
      
      {/* SVG Icon 404 Illustration */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="150" 
        height="150" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#4f46e5" /* Warna senada dengan tema tombol Pro kamu */
        strokeWidth="1" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        style={{ marginBottom: '20px' }}
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
        <path d="M15.5 15.5L19 19"></path>
        <circle cx="10" cy="10" r="3"></circle>
      </svg>

      {/* Teks 404 dalam Bahasa Inggris */}
      <h1 className="brand-font" style={{ fontSize: '72px', color: '#1e293b', margin: '0', lineHeight: '1' }}>
        404
      </h1>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#334155', marginTop: '10px', marginBottom: '15px' }}>
        Page Not Found
      </h2>
      <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '400px', marginBottom: '35px', lineHeight: '1.5' }}>
        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* Tombol Navigasi dengan SVG */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {/* Tombol Back to Home */}
        <a href="/" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            backgroundColor: '#1e293b', 
            color: '#ffffff', 
            padding: '12px 24px', 
            borderRadius: '30px', 
            textDecoration: 'none',
            fontWeight: '600'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Back to Home
        </a>

       
      </div>

    </div>
  );
}
