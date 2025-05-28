import Image from 'next/image';

export const metadata = {
  title: 'Ruis Holding - Real Estate Investment & Development',
  description: 'Ruis Holding creates lasting value through strategic real estate investments and development in Montana and California.',
};

export default function HoldingPage() {
  const portfolioItems = [
    {
      title: 'Real Estate Development',
      description: 'Strategic development of residential and commercial properties in prime locations.',
      image: '/images/montana-project.jpg',
    },
    {
      title: 'Property Management',
      description: 'Professional management of rental properties ensuring optimal returns and tenant satisfaction.',
      image: '/images/california-project.jpg',
    },
    {
      title: 'Investment Portfolio',
      description: 'Diversified investment strategy focusing on long-term value creation in real estate.',
      image: '/images/silos-living.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Ruis Holding Hero"
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
                Ruis Holding
              </h1>
              <p className="text-2xl text-white mb-8">
                Investing in Real Estate to Create Lasting Value
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              At Ruis Holding, we are committed to creating lasting value through strategic real estate investments and development. Our approach combines market expertise with a long-term vision, ensuring sustainable growth and positive impact in the communities we serve.
            </p>
            <p className="text-xl text-gray-600">
              With a focus on quality, innovation, and responsible development, we build not just properties, but legacies that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Our Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-4">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with the highest standards of ethics and transparency.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our operations and developments.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovative solutions to create sustainable and forward-thinking developments.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-4">Community</h3>
              <p className="text-gray-600">
                We are committed to making positive contributions to the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Partner With Us
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in creating lasting value<br />
            through strategic real estate investments and development.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
} 