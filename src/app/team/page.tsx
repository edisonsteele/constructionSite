import Image from 'next/image';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'John Ruis',
      position: 'Founder & CEO',
      bio: 'With over 20 years of experience in real estate development and construction, John leads our company with vision and expertise.',
      image: '/images/team-placeholder.jpg',
    },
    {
      name: 'Sarah Johnson',
      position: 'Chief Operations Officer',
      bio: 'Sarah oversees our day-to-day operations, ensuring excellence in project delivery and client satisfaction.',
      image: '/images/team-placeholder.jpg',
    },
    {
      name: 'Michael Chen',
      position: 'Head of Development',
      bio: 'Michael brings extensive experience in property development and market analysis to our team.',
      image: '/images/team-placeholder.jpg',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Property Manager',
      bio: 'Emily manages our portfolio of rental properties, focusing on tenant satisfaction and property maintenance.',
      image: '/images/team-placeholder.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/team-placeholder.jpg"
            alt="Meet Our Team Hero"
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

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-primary mb-2">
                    {member.name}
                  </h2>
                  <p className="text-accent font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Our Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and collaboration to achieve exceptional results.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-4">Innovation</h3>
              <p className="text-gray-600">
                We encourage creative thinking and continuous improvement in everything we do.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in our work and maintain the highest standards of quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Join Our Team
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for excellence and innovation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            View Opportunities
          </a>
        </div>
      </section>
    </div>
  );
} 