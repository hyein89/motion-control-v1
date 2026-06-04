export default function NotFound() {
  return (
    <div className="container">
      <div className="flex-container">
        <div className="main-box" style={{ borderTop: '4px solid #e74c3c' }}>
          <h1 className="text-danger text-glow" style={{ fontSize: '90px', fontWeight: 'bold', margin: '0' }}>
            404
          </h1>
          <h2 style={{ marginTop: '10px', fontWeight: '600', color: '#ffffff' }}>
            Waduh, Halaman Ga Ketemu!
          </h2>
          <p style={{ color: '#bdc3c7', marginBottom: '35px', fontSize: '15px' }}>
            Alamat URL yang lo masukin salah atau halaman ini emang udah ga ada.
          </p>
          
          {/* Tombol kembali pakai icon bawaan Bootstrap 3 */}
          <a href="/" className="btn btn-info btn-lg" style={{ borderRadius: '25px', padding: '10px 35px', fontWeight: '600' }}>
            <span className="glyphicon glyphicon-home" aria-hidden="true" style={{ marginRight: '8px' }}></span> 
            Balik ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}
