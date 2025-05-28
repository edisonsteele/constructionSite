import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Ruis Construction - Flathead Valley, Montana & California Projects',
  description: 'Explore the Ruis Construction portfolio, based in Columbia Falls, Montana, with projects throughout the Flathead Valley and California.',
};

const montanaProjects = [
  {
    name: 'Peregrine Subdivision',
    description: 'A premier residential development in Montana featuring luxury homes and modern amenities.',
    location: 'Kalispell, MT',
    status: '',
    image: '/images/montana-project.jpg',
  },
  {
    name: 'Whitefish Community Corridor (1840 Baker Ave)',
    description: '5 buildings, 40 residential units, 18 storage spaces, and a community gym. Scheduled to start spring of 2025.',
    location: '1840 Baker Ave, Whitefish, MT',
    status: '',
    image: '/images/silos-living.jpg',
  },
  {
    name: 'Whitefish Community Corridor (124 Texas Ave)',
    description: '7 buildings, 146 residential units, community area with gym. Construction to begin Spring of 2025.',
    location: '124 Texas Ave, Whitefish, MT',
    status: '',
    image: '/images/silos-living.jpg',
  },
  {
    name: 'The Row in Whitefish',
    description: '14 Townhomes located in the resort community of Whitefish, MT.',
    location: 'Whitefish, MT',
    status: 'NOW AVAILABLE FOR PURCHASE!',
    image: '/images/california-project.jpg',
  },
  {
    name: 'Nucleus Ave. In Columbia Falls',
    description: '510 Nucleus Ave. A mixed-use project in downtown Columbia Falls, MT.',
    location: 'Columbia Falls, MT',
    status: 'NOW LEASING!',
    image: '/images/montana-project.jpg',
  },
  {
    name: 'The Silos',
    description: 'Located at 501 West Center Street in Kalispell, MT.',
    location: '501 West Center Street, Kalispell, MT',
    status: 'NOW LEASING!',
    image: '/images/silos-living.jpg',
  },
  {
    name: '325 Central Avenue',
    description: 'Multiuse building: commercial spaces, residential condos, and luxury vacation rentals.',
    location: '325 Central Ave, Whitefish, MT',
    status: '',
    image: '/images/california-project.jpg',
  },
  {
    name: 'The Union Hall',
    description: 'Revitalizing an abandoned building in Columbia Falls, MT. Commercial spaces available for lease!',
    location: 'Columbia Falls, MT',
    status: 'COMMERCIAL SPACES AVAILABLE FOR LEASE!',
    image: '/images/montana-project.jpg',
  },
];

const californiaProjects = [
  {
    name: 'Peter Rios',
    description: '',
    location: 'California',
    status: '',
    image: '/images/california-project.jpg',
  },
  {
    name: 'Santee Village Run (40 Units)',
    description: '40 unit apartment complex accepting applications now!',
    location: 'Santee, CA',
    status: 'NOW LEASING!',
    image: '/images/california-project.jpg',
  },
  {
    name: 'Peacock Hills',
    description: '64 unit apartment complex in Lakeside, CA. Breaking ground in April 2021!',
    location: 'Lakeside, CA',
    status: '',
    image: '/images/california-project.jpg',
  },
];

export default function ConstructionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/montana-project.jpg"
            alt="Ruis Construction Hero - Montana Project"
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
                Ruis Construction
              </h1>
              <p className="text-2xl text-white mb-8">
                Building Excellence, Creating Legacy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Location Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Based in Columbia Falls, Montana</h2>
          <p className="text-gray-700 mb-2">
            Also named the "Gateway to Glacier" as it is located 14 miles from Glacier National Park.
          </p>
          <p className="text-gray-700">
            Our projects span throughout the Flathead Valley and are currently underway in Columbia Falls, Whitefish, and Kalispell.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Our Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...montanaProjects, ...californiaProjects].map((project, idx) => (
              <Link
                key={idx}
                href={`/construction/${project.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/(^-|-$)/g, '')
                  .replace(/-+/g, '-') // collapse multiple dashes
                }`}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-105 focus:scale-105 outline-none"
                tabIndex={0}
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-2">{project.description}</p>
                    {project.location && (
                      <p className="text-gray-500 mb-2"><span className="font-semibold">Location:</span> {project.location}</p>
                    )}
                  </div>
                  <div className="mt-4 min-h-[44px] flex items-end">
                    {project.status ? (
                      <span className="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-md">
                        {project.status}
                      </span>
                    ) : (
                      <span className="inline-block" style={{ minHeight: '44px' }}></span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your construction needs and get a free consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
} 