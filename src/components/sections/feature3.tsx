import Image from 'next/image';

import { Button } from '@/components/ui/button';

export const Feature3 = () => {
  return (
    <section id="reservation" className="py-16 md:py-24">
      <div className="max-w-9xl container">
        <div className="ring-secondary/30 overflow-hidden rounded-2xl ring-1 shadow-lg">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="px-8 py-16 md:px-16 md:py-20">
              <div className="mb-6">
                <p className="text-sm font-medium tracking-wider text-white/80 uppercase">
                  Ready for an exceptional experience?
                </p>
              </div>

              <h2 className="font-playfair mb-6 text-4xl font-bold text-white/80 md:text-5xl lg:text-6xl">
                Reserve your table today.
              </h2>

              <p className="mb-8 text-lg leading-relaxed text-white/80">
                Experience the finest cuisine in an elegant atmosphere. Book
                your table now and let us create an unforgettable dining
                experience for you.
              </p>

              <div>
                <Button
                  size="lg"
                  className="bg-primary font-playfair text-lg font-semibold text-white/80"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[400px] lg:min-h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200">
                {/* Abstract geometric shapes */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/images/locations/babi.webp"
                    alt="Decorative"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Decorative lines */}
                <div className="absolute inset-0">
                  <svg
                    className="text-secondary/30 absolute top-1/3 right-20 h-32 w-32"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                  >
                    <circle cx="50" cy="50" r="2" />
                    <circle cx="50" cy="30" r="1.5" />
                    <circle cx="50" cy="70" r="1.5" />
                    <circle cx="30" cy="50" r="1.5" />
                    <circle cx="70" cy="50" r="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
