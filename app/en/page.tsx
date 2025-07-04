'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EnPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Redirecting you to the main page...</p>
    </div>
  );
}
