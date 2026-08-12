// app/users/page.tsx
import Link from 'next/link';

type User = {
  id: number;
  name: string;
  email: string;
};

export default async function UsersPage() {
  // Fetch data on the server
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  // Next.js renders this JSX into HTML on the server and sends it to the browser
  return (
    <div className="p-8 max-w-2xl mx-auto font-sans">
      <h1 className="text-2xl font-bold mb-2">POC 2: Dynamic Routing and Data Fetching</h1>
      <p className="text-gray-600 mb-6">This page fetches user data from an external API and displays it.</p>
      
      <h2 className="text-xl font-semibold mb-4">Users Directory</h2>
      
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="border p-4 rounded-lg shadow-sm hover:shadow transition bg-white">
            
            {/* LINK ADDED HERE: Directs user to /users/1, /users/2, etc. */}
            <Link href={`/users/${user.id}`}>
              <strong className="text-lg font-bold text-blue-600 hover:underline cursor-pointer block">
                {user.name}
              </strong>
            </Link>

            <p className="text-gray-500 text-sm mt-1">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}