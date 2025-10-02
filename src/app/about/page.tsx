import { Feature1 } from '@/components/sections/feature1';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero spacing from navbar */}
      <div className="py-20">
        <Feature1 />
      </div>
    </div>
  );
}
