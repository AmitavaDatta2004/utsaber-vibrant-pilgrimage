
import { Link } from 'react-router-dom';
import { ArrowRight, Award, MapPin, Calendar } from 'lucide-react';

interface FeaturedParaProps {
  title: string;
  description: string;
  imageSrc: string;
  accolades?: string;
  link: string;
  year?: string;
  location?: string;
}

const FeaturedPara = ({ 
  title, 
  description, 
  imageSrc, 
  accolades, 
  link,
  year,
  location 
}: FeaturedParaProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-festival-green/10 hover:shadow-xl transition-all duration-500 group">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {accolades && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-festival-red to-festival-blue text-cream py-2 px-4 text-sm font-medium">
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-2 text-festival-cream animate-pulse" />
              <span>{accolades}</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6 bg-gradient-to-br from-white to-festival-green/5">
        <h3 className="font-heading text-2xl text-festival-green mb-3 group-hover:text-festival-red transition-colors duration-300">{title}</h3>
        
        {(location || year) && (
          <div className="flex flex-wrap gap-3 mb-3">
            {location && (
              <div className="flex items-center text-sm text-festival-blue">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{location}</span>
              </div>
            )}
            
            {year && (
              <div className="flex items-center text-sm text-festival-red">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Est. {year}</span>
              </div>
            )}
          </div>
        )}
        
        <p className="text-indigo-light mb-4 group-hover:text-indigo transition-colors duration-300">{description}</p>
        
        <div className="flex justify-between items-center">
          <Link 
            to={link}
            className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-festival-blue to-festival-green text-cream rounded-md 
                     hover:from-festival-red hover:to-festival-blue transform transition-all duration-500 group-hover:scale-105 hover:shadow-lg"
          >
            <span>Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <div className="h-8 w-8 rounded-full bg-festival-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
            <div className="h-6 w-6 rounded-full bg-festival-red/70 animate-ping absolute"></div>
            <Award className="h-4 w-4 text-festival-red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPara;
