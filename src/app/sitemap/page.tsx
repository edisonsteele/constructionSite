import Link from 'next/link';

const sitemapLinks = [
  { href: '/', label: 'Home' },
  { href: '/construction', label: 'Ruis Construction' },
  { href: '/holding', label: 'Ruis Holding' },
  { href: '/team', label: 'Meet the Team' },
  { href: '/vacation-rentals', label: 'Vacation Rentals' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/privacy', label: 'Privacy Policy' },
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Sitemap</h1>
        <ul className="mb-8 space-y-2">
          {sitemapLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-lg text-primary hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 