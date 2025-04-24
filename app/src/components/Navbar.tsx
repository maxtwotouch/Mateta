import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="container mx-auto flex items-center justify-between p-4">
      <Link to="/" className="text-xl font-semibold text-blue-600">Hovding</Link>
      <ul className="flex space-x-6 text-gray-600">
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
      </ul>
    </nav>
  );
}