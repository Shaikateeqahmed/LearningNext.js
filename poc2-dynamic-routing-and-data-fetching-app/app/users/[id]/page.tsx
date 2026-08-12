// app/users/[id]/page.tsx
import Link from 'next/link';

type UserDetail = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
  address: {
    city: string;
    street: string;
  };
};

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Extract dynamic ID from URL parameters
  const { id } = await params;

  // Fetch individual user data on the server
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  // Styled 404 / Error State if the user doesn't exist
  if (!res.ok) {
        // throw new Error(`Failed to fetch user with ID ${id} from external API.`); OR
    return (
      <main className="min-h-screen bg-gray-50 p-8 font-sans flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center max-w-sm w-full">
          <div className="text-red-500 text-4xl mb-2">⚠️</div>
          <h1 className="text-xl font-bold text-gray-900 mb-1">User Not Found</h1>
          <p className="text-sm text-gray-500 mb-6">No user profile exists for ID #{id}.</p>
          <Link 
            href="/users" 
            className="inline-block px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition"
          >
            ← Return to Directory
          </Link>
        </div>
      </main>
    );
  }

  const user: UserDetail = await res.json();

  return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-md mx-auto">
        
        {/* Navigation Back Link */}
        <Link 
          href="/users" 
          className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition mb-6"
        >
          ← Back to Users Directory
        </Link>

        {/* Styled User Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <span className="text-xs uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full font-semibold">
              ID #{user.id}
            </span>
            <h1 className="text-2xl font-bold mt-2">{user.name}</h1>
            <p className="text-blue-100 text-sm">@{user.username}</p>
          </div>

          {/* User Information Grid */}
          <div className="p-6 space-y-5">
            
            {/* Contact Section */}
            <div className="border-b border-gray-100 pb-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                Contact Info
              </span>
              <div className="space-y-1.5 text-sm text-gray-700">
                <p><strong className="text-gray-900 font-medium">Email:</strong> {user.email}</p>
                <p><strong className="text-gray-900 font-medium">Phone:</strong> {user.phone}</p>
                <p>
                  <strong className="text-gray-900 font-medium">Website:</strong>{' '}
                  <span className="text-blue-600 font-mono">{user.website}</span>
                </p>
              </div>
            </div>

            {/* Company Section */}
            <div className="border-b border-gray-100 pb-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Company
              </span>
              <p className="text-base font-semibold text-gray-900">{user.company.name}</p>
              <p className="text-xs text-gray-500 italic mt-0.5">&quot;{user.company.catchPhrase}&quot;</p>
            </div>

            {/* Address Section */}
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Location
              </span>
              <p className="text-sm text-gray-700">
                {user.address.street}, {user.address.city}
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}