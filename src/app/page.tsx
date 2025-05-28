import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import FadeInSection from "@/components/FadeInSection";

export const metadata = {
  title: "Ruis Holdings - Creating Legacy in Montana & California",
  description: "Ruis Holdings specializes in construction, development, and rental properties in Montana and California. Discover our featured projects and legacy.",
};

export default function Home() {
  const featuredProjects = [
    {
      imageUrl: '/images/montana-project.jpg',
      title: 'Peregrine Subdivision',
      shortDescription: 'A premier residential development in Montana featuring luxury homes and modern amenities.',
      locationTag: 'Montana' as const,
      href: '/projects/montana/peregrine',
    },
    {
      imageUrl: '/images/silos-living.jpg',
      title: 'Silos Living',
      shortDescription: 'Modern living spaces in the heart of Kalispell, Montana.',
      locationTag: 'Montana' as const,
      statusTag: 'NOW LEASING!',
      href: '/projects/silos-living',
    },
    {
      imageUrl: '/images/california-project.jpg',
      title: 'California Development',
      shortDescription: 'Premium commercial and residential properties in prime California locations.',
      locationTag: 'California' as const,
      href: '/projects/california',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <FadeInSection className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Ruis Holding - Creating Legacy"
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
                Ruis Holdings
              </h1>
              <p className="text-2xl md:text-3xl text-white mb-8">
                Creating Legacy
              </p>
              <p className="text-xl text-white mb-8">
                Specializing in construction, development, and rental properties<br />
                in Montana and California.
              </p>
              <Link
                href="/construction"
                className="btn-primary"
              >
                Explore Our Projects
              </Link>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Overview Section */}
      <FadeInSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Construction</h2>
              <p className="text-gray-600">
                Quality craftsmanship and attention to detail in every project we undertake.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Development</h2>
              <p className="text-gray-600">
                Creating lasting value through strategic real estate development.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-primary mb-4">Properties</h2>
              <p className="text-gray-600">
                Premium rental properties in prime locations across Montana and California.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Featured Projects Section */}
      <FadeInSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <FadeInSection
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                <div className="relative h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                  </div>
                  <div className="mt-4 pt-2 flex items-end min-h-[44px]">
                    <Link
                      href={project.href}
                      className="inline-block text-primary font-semibold hover:text-primary-dark transition-colors duration-200 border border-primary rounded px-4 py-2"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
