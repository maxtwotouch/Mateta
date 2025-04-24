import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="container mx-auto flex items-center justify-between p-4">
      <Link to="/" className="text-xl font-semibold text-blue-600">Hovding</Link>
      <ul className="flex space-x-6 items-center text-gray-600">
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/feed" className="hover:text-blue-600">Feed</Link></li>
        <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
        <li>
          <a
            href="https://www.instagram.com/sailing_mateta/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-pink-600"
          >
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </a>
        </li>
      </ul>
    </nav>
);
}