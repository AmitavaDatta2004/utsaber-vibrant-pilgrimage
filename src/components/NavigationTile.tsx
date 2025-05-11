
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
    <Link to={path} className="navigation-tile group">
      {backgroundImage && (
        <div 
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      )}
      <div className="navigation-tile-icon">
        <Icon size={48} />
      </div>
      <h3 className="font-heading text-xl text-indigo-dark mb-2">{title}</h3>
      <div className="overflow-hidden h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
        <p className="text-sm text-indigo-light">{description}</p>
      </div>
    </Link>
  );
};

export default NavigationTile;
