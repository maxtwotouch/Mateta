import { useParams, Link } from 'react-router-dom';
import { anchorages, Anchorage as AnchorageType } from '../data/anchorages';

export default function Anchorage() {
  const { id } = useParams<{ id: string }>();
  const anchorage: AnchorageType | undefined = anchorages.find(a => a.id === id);

  if (!anchorage) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Anchorage Not Found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Back Home</Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{anchorage.name}</h1>
      <p className="mt-4">{anchorage.description}</p>
      <p className="mt-2 text-sm text-gray-500">Region: {anchorage.region}</p>
      <Link to="/" className="mt-6 inline-block text-blue-600 hover:underline">Back Home</Link>
    </div>
  );
}