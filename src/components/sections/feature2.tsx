import Image from 'next/image';

import { Building2 } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

type LocationType = {
  city: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  icon: typeof Building2;
};

const LOCATIONS: LocationType[] = [
  {
    city: 'Podgorica',
    name: 'Boucherie Podgorica',
    address: 'Njegoševa 12, Podgorica, Montenegro',
    phone: '+382 20 123-456',
    hours: 'Mon-Sun: 5:00 PM - 11:00 PM',
    image: '/images/locations/podgorica.webp',
    icon: Building2,
  },
  {
    city: 'Tivat',
    name: 'Boucherie Tivat',
    address: 'Porto Montenegro, Tivat, Montenegro',
    phone: '+382 32 123-456',
    hours: 'Mon-Sun: 5:30 PM - 10:30 PM',
    image: '/images/locations/tivat.webp',
    icon: Building2,
  },
  {
    city: 'Bar',
    name: 'Boucherie Bar',
    address: 'Stari Bar, Bar, Montenegro',
    phone: '+382 30 123-456',
    hours: 'Mon-Sun: 6:00 PM - 11:00 PM',
    image: '/images/locations/bar.webp',
    icon: Building2,
  },
];

export const Feature2 = () => {
  return (
    <section id="locations" className="py-16 md:py-24">
      <div className="max-w-9xl container">
        <div className="mb-8 text-left md:mb-16">
          <h2 className="font-playfair mb-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Our Locations
          </h2>
          <div className="bg-secondary h-0.5 w-20"></div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((location) => (
            <Card
              key={location.city}
              className="group relative overflow-hidden border-none bg-transparent ring-1 shadow-none"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[1/1] overflow-hidden md:aspect-[1/1]">
                  <Image
                    src={location.image}
                    alt={`${location.name} interior`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/40" />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-playfair text-center text-3xl font-bold text-white">
                      {location.city}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
