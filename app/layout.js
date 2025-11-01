export const metadata = {
  title: {
    default: 'MoneyWise ? Finance Education',
    template: '%s ? MoneyWise',
  },
  description: 'Learn personal finance, investing, and money management with interactive calculators and practical guides.',
  metadataBase: new URL('https://agentic-415bda6b.vercel.app'),
  openGraph: {
    title: 'MoneyWise ? Finance Education',
    description: 'Interactive finance education with calculators, articles, and courses.',
    url: 'https://agentic-415bda6b.vercel.app',
    siteName: 'MoneyWise',
    type: 'website'
  }
};

import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
