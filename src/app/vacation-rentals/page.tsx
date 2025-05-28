'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function VacationRentalsPage() {
  const featuredProperties = [
    {
      imageUrl: '/images/montana-project.jpg',
      title: 'Montana Mountain Retreat',
      description: 'Luxury mountain home with stunning views and modern amenities.',
      location: 'Kalispell, Montana',
      price: 'From $350/night',
      href: '/vacation-rentals/montana-mountain-retreat',
    },
    {
      imageUrl: '/images/california-project.jpg',
      title: 'California Coastal Villa',
      description: 'Beachfront property with panoramic ocean views.',
      location: 'Malibu, California',
      price: 'From $500/night',
      href: '/vacation-rentals/california-coastal-villa',
    },
    {
      imageUrl: '/images/silos-living.jpg',
      title: 'Downtown Loft',
      description: 'Modern urban living in the heart of the city.',
      location: 'Kalispell, Montana',
      price: 'From $200/night',
      href: '/vacation-rentals/downtown-loft',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Vacation Rentals"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Vacation Rentals
              </h1>
              <p className="text-2xl text-white mb-8">
                Experience luxury living in our premium properties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-64">
                  <Image
                    src={property.imageUrl}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {property.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{property.description}</p>
                    <div className="flex justify-between items-center mb-4 min-h-[44px]">
                      <span className="text-gray-500">{property.location}</span>
                      <span className="text-primary font-semibold">{property.price}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-2 flex items-end min-h-[44px]">
                    <Link
                      href={property.href}
                      className="block w-full text-center bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Book Your Stay
            </h2>
            <p className="text-gray-600 mb-8">
              Experience the perfect blend of comfort and luxury in our carefully curated vacation rentals. 
              Each property is designed to provide an unforgettable stay with premium amenities and 
              exceptional service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">Easy Booking</h3>
                <p className="text-gray-600">
                  Simple and secure booking process with instant confirmation
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">Premium Amenities</h3>
                <p className="text-gray-600">
                  Fully equipped properties with high-end finishes and modern conveniences
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-primary mb-4">24/7 Support</h3>
                <p className="text-gray-600">
                  Dedicated support team available around the clock
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors duration-200"
            >
              Contact Us to Book
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 