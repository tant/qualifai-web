'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EnPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-lg">Redirecting you to the main page...</p>
    </div>
  );
}
