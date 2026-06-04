export default function Home() {
  return (
    <div className="container">
      <div className="flex-container">
        <div className="main-box">
          <div className="brand-title">COMING SOON</div>
          <h1 style={{ fontSize: '38px', fontWeight: '700', marginBottom: '15px' }}>
            🚀 We Are Under Construction
          </h1>
          <p style={{ color: '#bdc3c7', fontSize: '16px', marginBottom: '30px' }}>
            Website kami sedang dalam proses pengerjaan intensif. Kami akan segera hadir membawa sesuatu yang luar biasa untuk kamu!
          </p>
          
          {/* Progress Bar dekorasi dari Bootstrap 3 */}
          <div className="progress" style={{ backgroundColor: 'rgba(255,255,255,0.1)', height: '12px', borderRadius: '6px' }}>
            <div 
              className="progress-bar progress-bar-info progress-bar-striped active" 
              role="progressbar" 
              style={{ width: '75%' }}
            ></div>
          </div>
          <p style={{ color: '#7f8c8d', fontSize: '13px', margin: '0' }}>Development Progress: 75%</p>
        </div>
      </div>
    </div>
  );
}
