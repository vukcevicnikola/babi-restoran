import Image from 'next/image';

import { FadeInSection } from '@/components/ui/fade-in-section';

export const Feature1 = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-9xl container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <FadeInSection delay={100} duration={800}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="font-playfair text-3xl font-bold tracking-tight text-white md:text-5xl">
                  About Us
                </h2>
                <div className="bg-secondary h-0.5 w-20"></div>
              </div>
              <div className="space-y-4 text-white/90">
                <p className="text-base leading-snug italic">
                  At Babi Gourmet & Wine, we believe in creating experiences,
                  not just meals. Born out of a love for fine food and
                  exceptional wine, we bring together the best of culinary
                  artistry and wine culture under one roof. Whether you’re
                  joining us for a casual lunch, an elegant dinner, or a special
                  celebration, our goal is to delight your senses and make you
                  feel at home.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Image */}
          <FadeInSection delay={300} duration={800}>
            <div className="relative">
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
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
