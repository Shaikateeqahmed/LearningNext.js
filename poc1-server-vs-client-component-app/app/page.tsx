// app/page.tsx
import LikeButton from './LikeButton';

export default function HomePage() {
  // Executed strictly on the server before sending HTML to the user
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>POC 1: Server & Client Boundary</h1>
      
      {/* Server-rendered static content */}
      <div>
        <p>Page generated on server at: {currentTime}</p>
      </div>

      {/* Interactive client element imported into the server component */}
      <LikeButton />
    </div>
  );
}