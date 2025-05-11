
import { Link } from 'react-router-dom';

interface FeaturedParaProps {
  title: string;
  description: string;
  imageSrc: string;
  accolades?: string;
  link: string;
}

const FeaturedPara = ({ title, description, imageSrc, accolades, link }: FeaturedParaProps) => {
  return (
    <div className="bg-cream rounded-xl overflow-hidden shadow-lg border border-saffron/10">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
        />
        {accolades && (
          <div className="absolute bottom-0 left-0 right-0 bg-saffron/80 text-cream py-2 px-4 text-sm font-medium">
            {accolades}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-heading text-2xl text-indigo mb-3">{title}</h3>
        <p className="text-indigo-light mb-4">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center justify-center px-4 py-2 bg-saffron text-cream rounded-md hover:bg-saffron-dark transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPara;
