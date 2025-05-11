
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeaturedParaProps {
  title: string;
  description: string;
  imageSrc: string;
  accolades?: string;
  link: string;
}

const FeaturedPara = ({ title, description, imageSrc, accolades, link }: FeaturedParaProps) => {
  return (
    <div className="bg-cream rounded-xl overflow-hidden shadow-lg border border-saffron/10 hover:shadow-xl transition-all duration-300">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
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
          className="inline-flex items-center justify-center px-4 py-2 bg-saffron text-cream rounded-md hover:bg-saffron-dark transition-colors group"
        >
          <span>Learn More</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPara;
