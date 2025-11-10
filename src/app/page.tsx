'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center">
      <div className="text-center">
        <p className="text-text-secondary text-lg">Redirecting to home...</p>
      </div>
    </div>
  );
}
