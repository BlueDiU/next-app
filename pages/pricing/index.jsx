import Link from 'next/link';
import { MainLayout } from '../../components/Layouts/MainLayout';

export default function Princing() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1 className="title">
        Go to <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing{' '}
        <code className="code">pages/pricing.js</code>
      </p>
    </MainLayout>
  );
}
