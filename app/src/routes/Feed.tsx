// src/routes/Feed.tsx
import { useEffect } from 'react';

const posts = [
  'https://www.instagram.com/p/DIg_OFusGJO/',
  'https://www.instagram.com/p/DIbI8cYtKMR/?img_index=1',
 'https://www.instagram.com/p/DHrcx0hN2T6/?img_index=1',
 'https://www.instagram.com/p/C_YmwsSKKki/?img_index=1',
 'https://www.instagram.com/p/C9pw_E7tEbF/?img_index=1',
 'https://www.instagram.com/p/C7SR_EqAPIm/?img_index=1',
 'https://www.instagram.com/p/C6hMyckL6WR/?img_index=3',
 'https://www.instagram.com/p/C6bKCxeLM-X/?img_index=1',
 'https://www.instagram.com/p/C6ZcyfPLVcz/?img_index=1',

];
declare global {
    interface Window {
      instgrm?: {
        Embeds: {
          process: () => void;
        };
      };
    }
  }
  
export default function Feed() {
    useEffect(() => {
      // Inject Instagram's embed.js if needed
      if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        script.defer = true;
        script.onload = () => window.instgrm?.Embeds.process();
        document.body.appendChild(script);
      } else {
        window.instgrm?.Embeds.process();
      }
    }, []);
  
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Instagram Feed</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((url) => (
            <blockquote
              className="instagram-media mx-auto"
              data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
              data-instgrm-version="14"
              style={{ maxWidth: '540px', width: '100%', margin: '0 auto' }}
              key={url}
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                View this post on Instagram
              </a>
            </blockquote>
          ))}
        </div>
      </div>
    );
}