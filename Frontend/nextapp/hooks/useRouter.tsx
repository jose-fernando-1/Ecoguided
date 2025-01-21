import { useRouter } from 'next/router';
import React from 'react';

const DynamicPage: React.FC = () => {
  const router = useRouter();
  const { dynamic } = router.query;

  return (
    <div>
      <h1>Dynamic Page: {dynamic}</h1>
      <p>This page is dynamically generated based on the route parameter.</p>
    </div>
  );
};

export default DynamicPage;