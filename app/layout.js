import './globals.css';

export const metadata = {
  title: 'Coming Soon - Project Baru',
  description: 'Website sedang dalam tahap pengembangan',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Memanggil Bootstrap 3 CSS via CDN Resmi */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
