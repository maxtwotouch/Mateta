import { Link } from 'react-router-dom';
import { anchorages } from '../data/anchorages';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Explore Anchorages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {anchorages.map(a => (
          <Link to={`/anchorages/${a.id}`} key={a.id} className="block bg-white rounded-lg shadow hover:shadow-lg transition p-6">
            <h2 className="text-2xl font-semibold text-gray-800">{a.name}</h2>
            <p className="mt-2 text-gray-600 line-clamp-3">{a.description}</p>
            <span className="mt-4 inline-block text-blue-600 hover:underline">View Details →</span>
          </Link>
        ))}
      </div>
    </div>
);
}