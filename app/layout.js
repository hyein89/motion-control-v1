import './globals.css';

// ==========================================
// 🚀 KONFIGURASI SEO TINGKAT DEWA (BAHASA INGGRIS)
// ==========================================
export const metadata = {
  title: 'Motion Control AI - Free Pro Video Generator',
  description: 'Create stunning spatial animations and motion control videos for free. Powered by the Kling 2.6 neural network to animate static character images with cinematic precision.',
  keywords: 'AI video generator, motion control AI, animate image, Kling 2.6 framework, AI spatial animation, free AI animation tool, image to video AI',
  
  // Konfigurasi Open Graph (Biar preview link bagus saat di-share ke Telegram/FB/WA)
  openGraph: {
    title: 'Motion Control AI - Free Pro Video Generator',
    description: 'Easily extract complex physical movements from reference videos and project them onto static images. Try it for free!',
    url: 'https://motion-control-v1.vercel.app', // Ganti dengan domain asli kamu nanti
    siteName: 'Motion Control AI',
    images: [
      {
        // Pastikan nama file ini sesuai dengan gambar yang kamu upload di folder "public"
        url: '/kling-2.6-motion-control.png', 
        width: 1200,
        height: 630,
        alt: 'Motion Control AI Interface Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Konfigurasi Twitter Card (Biar preview link bagus di Twitter/X)
  twitter: {
    card: 'summary_large_image',
    title: 'Motion Control AI - Free Pro Video Generator',
    description: 'Animate static character images with cinematic precision using our free AI engine.',
    images: ['/kling-2.6-motion-control.png'], // Samakan dengan nama gambar di atas
  },

  // Konfigurasi Favicon & Icon Web
  icons: {
    icon: '/kling-ai-icon.webp', // Bisa pakai gambar yang sama atau upload icon khusus (contoh: /icon.png)
    apple: '/kling-ai-icon.webp',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ========================================== */}
        // SCRIPT TELEGRAM MINI APP
        {/* ========================================== */}
        <script src="https://telegram.org/js/telegram-web-app.js" async></script>
        
        {/* ========================================== */}
        // SCRIPT IKLAN MONETAG
        {/* ========================================== */}
        <script src="//libtl.com/sdk.js" data-zone="11100367" data-sdk="show_11100367" async></script>
        
        {/* ========================================== */}
        // SCRIPT & FONT BAWAAN DESAIN
        {/* ========================================== */}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        
        {/* Script external wajib ditaruh di sini agar bisa diakses oleh halaman utama */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </body>
    </html>
  );
}
