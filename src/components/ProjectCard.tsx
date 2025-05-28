import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  shortDescription: string;
  locationTag: 'Montana' | 'California';
  statusTag?: string;
  href: string;
}

const ProjectCard = ({
  imageUrl,
  title,
  shortDescription,
  locationTag,
  statusTag,
  href,
}: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-primary rounded-full">
            {locationTag}
          </span>
        </div>
        {statusTag && (
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-accent rounded-full">
              {statusTag}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{shortDescription}</p>
        <Link
          href={href}
          className="inline-block text-primary font-semibold hover:text-primary-dark transition-colors duration-200"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard; 