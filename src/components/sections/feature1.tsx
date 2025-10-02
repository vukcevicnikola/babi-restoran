import Image from 'next/image';

import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const Feature1 = () => {
  return (
    <section id="about" className="font-playfair py-16 md:py-24">
      <div className="max-w-9xl container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-playfair text-4xl font-semibold tracking-tight text-white md:text-5xl">
                About Us
              </h2>
              <div className="bg-secondary h-0.5 w-20"></div>
            </div>
            <div className="space-y-4 text-white/90">
              <p className="text-lg leading-snug">
                At Babi Gourmet & Wine, we believe in creating experiences, not
                just meals. Born out of a love for fine food and exceptional
                wine, we bring together the best of culinary artistry and wine
                culture under one roof. Whether you’re joining us for a casual
                lunch, an elegant dinner, or a special celebration, our goal is
                to delight your senses and make you feel at home.
              </p>
            </div>
            <div>
              <Button
                size="lg"
                className="bg-primary font-playfair text-lg font-bold text-white/80"
              >
                Book your table
                <ArrowRight />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden md:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/locations/babi-one.webp"
                alt="Our restaurant interior with elegant dining setup"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
