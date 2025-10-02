'use client';

import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        {/* Main Heading */}
        <h1 className="mb-4 text-4xl font-bold text-white/90 md:text-5xl lg:text-6xl">
          Welcome to Babi
        </h1>

        {/* Description */}
        <p className="mx-auto mb-8 max-w-2xl text-base leading-snug text-white/80 italic md:text-xl">
          Experience the authentic flavors of Montenegro at our restaurant,
          where local ingredients and traditional recipes come together in a
          warm, inviting atmosphere. Enjoy the taste of the Adriatic and the
          hospitality of the Montenegrin coast.
        </p>

        {/* Call to Action Button */}
        <Button
          variant="outline"
          size="lg"
          className="border-secondary rounded-2xl border-1 bg-transparent px-6 py-4 text-base font-semibold text-white transition-all hover:bg-white hover:text-black"
        >
          BOOK A TABLE
        </Button>
      </div>
    </section>
  );
}
