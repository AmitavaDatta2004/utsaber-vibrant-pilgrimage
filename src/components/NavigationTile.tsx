
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavigationTileProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  backgroundImage?: string;
}

const NavigationTile = ({ title, description, icon: Icon, path, backgroundImage }: NavigationTileProps) => {
  return (
    <Link to={path} className="relative block p-6 rounded-xl shadow-md bg-white border border-saffron/10 hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {backgroundImage && (
        <div 
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      )}
      <div className="relative z-10">
        <div className="flex justify-center mb-4 text-saffron group-hover:scale-110 transition-transform duration-300">
          <Icon size={48} />
        </div>
        <h3 className="font-heading text-xl text-indigo text-center mb-3">{title}</h3>
        <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          <p className="text-sm text-indigo-light text-center">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NavigationTile;
