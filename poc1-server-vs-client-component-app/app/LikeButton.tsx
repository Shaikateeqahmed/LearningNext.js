// app/LikeButton.tsx
'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="mt-4 px-4 py-2 bg-red-400 text-white font-medium rounded-lg hover:bg-red-500 transition"
    >
      ❤️ Likes: {likes}
    </button>
  );
}