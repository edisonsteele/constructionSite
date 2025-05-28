import Image from 'next/image';
import { notFound } from 'next/navigation';

const projects = [
  // Montana Projects
  {
    slug: 'peregrine-subdivision',
    name: 'Peregrine Subdivision',
    description: 'A premier residential development in Montana featuring luxury homes and modern amenities.',
    location: 'Kalispell, MT',
    status: '',
    image: '/images/montana-project.jpg',
  },
  {
    slug: 'whitefish-community-corridor-1840-baker',
    name: 'Whitefish Community Corridor (1840 Baker Ave)',
    description: '5 buildings, 40 residential units, 18 storage spaces, and a community gym. Scheduled to start spring of 2025.',
    location: '1840 Baker Ave, Whitefish, MT',
    status: '',
    image: '/images/silos-living.jpg',
  },
  {
    slug: 'whitefish-community-corridor-124-texas',
    name: 'Whitefish Community Corridor (124 Texas Ave)',
    description: '7 buildings, 146 residential units, community area with gym. Construction to begin Spring of 2025.',
    location: '124 Texas Ave, Whitefish, MT',
    status: '',
    image: '/images/silos-living.jpg',
  },
  {
    slug: 'the-row-in-whitefish',
    name: 'The Row in Whitefish',
    description: '14 Townhomes located in the resort community of Whitefish, MT.',
    location: 'Whitefish, MT',
    status: 'NOW AVAILABLE FOR PURCHASE!',
    image: '/images/california-project.jpg',
  },
  {
    slug: 'nucleus-ave-columbia-falls',
    name: 'Nucleus Ave. In Columbia Falls',
    description: '510 Nucleus Ave. A mixed-use project in downtown Columbia Falls, MT.',
    location: 'Columbia Falls, MT',
    status: 'NOW LEASING!',
    image: '/images/montana-project.jpg',
  },
  {
    slug: 'the-silos',
    name: 'The Silos',
    description: 'Located at 501 West Center Street in Kalispell, MT.',
    location: '501 West Center Street, Kalispell, MT',
    status: 'NOW LEASING!',
    image: '/images/silos-living.jpg',
  },
  {
    slug: '325-central-avenue',
    name: '325 Central Avenue',
    description: 'Multiuse building: commercial spaces, residential condos, and luxury vacation rentals.',
    location: '325 Central Ave, Whitefish, MT',
    status: '',
    image: '/images/california-project.jpg',
  },
  {
    slug: 'the-union-hall',
    name: 'The Union Hall',
    description: 'Revitalizing an abandoned building in Columbia Falls, MT. Commercial spaces available for lease!',
    location: 'Columbia Falls, MT',
    status: 'COMMERCIAL SPACES AVAILABLE FOR LEASE!',
    image: '/images/montana-project.jpg',
  },
  // California Projects
  {
    slug: 'peter-rios',
    name: 'Peter Rios',
    description: '',
    location: 'California',
    status: '',
    image: '/images/california-project.jpg',
  },
  {
    slug: 'santee-village-run-40-units',
    name: 'Santee Village Run (40 Units)',
    description: '40 unit apartment complex accepting applications now!',
    location: 'Santee, CA',
    status: 'NOW LEASING!',
    image: '/images/california-project.jpg',
  },
  {
    slug: 'peacock-hills',
    name: 'Peacock Hills',
    description: '64 unit apartment complex in Lakeside, CA. Breaking ground in April 2021!',
    location: 'Lakeside, CA',
    status: '',
    image: '/images/california-project.jpg',
  },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl pt-8">
        <a href="/construction" className="inline-block mb-4 text-primary font-semibold hover:underline">← Back to Projects</a>
      </div>
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.name}
              </h1>
              {project.status && (
                <span className="inline-block bg-primary text-white text-sm font-semibold px-4 py-2 rounded-md mb-4">
                  {project.status}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col min-h-[340px]">
            <h2 className="text-2xl font-bold text-primary mb-4">About this Project</h2>
            <p className="text-gray-700 mb-4 flex-1">{project.description || 'Details coming soon.'}</p>
            <div className="mt-auto">
              <div className="min-h-[28px] mb-2">
                {project.location ? (
                  <p className="text-gray-500"><span className="font-semibold">Location:</span> {project.location}</p>
                ) : (
                  <span className="inline-block" style={{ minHeight: '28px' }}></span>
                )}
              </div>
              {project.status && (
                <p className="text-accent font-semibold mb-2">{project.status}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 