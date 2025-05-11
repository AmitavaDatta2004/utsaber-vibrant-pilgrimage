
import { Utensils } from 'lucide-react';

const FoodTrail = () => {
  const foodSpots = [
    {
      name: "Jagaddal Mishti Bhandar",
      specialty: "Jolbhora Sandesh, Chandannagari Chom Chom",
      location: "Near Laxmiganj Market",
      description: "Over 80-year-old sweet shop famous for its unique variation of sandesh with liquid jaggery filling.",
      mustTry: "Jolbhora Sandesh"
    },
    {
      name: "Strand Dhaba",
      specialty: "Bengali Thali, Fish Curry",
      location: "Strand Road",
      description: "Riverside eatery offering authentic Bengali cuisine with a spectacular view of the Hooghly.",
      mustTry: "Posto Bora (Poppy Seed Fritters)"
    },
    {
      name: "French Colony Cafe",
      specialty: "French-Bengali Fusion, Coffee",
      location: "Near French Institute",
      description: "Quaint cafe celebrating Chandannagar's French heritage with unique fusion snacks.",
      mustTry: "Croissant with Nolen Gur (Date Palm Jaggery)"
    },
    {
      name: "Manasha Tea Stall",
      specialty: "Special Masala Tea, Muri Mixture",
      location: "Junction Road",
      description: "Popular tea stall frequented by locals for evening adda (gatherings) and puffed rice mixtures.",
      mustTry: "Lebu Cha (Lemon Tea)"
    }
  ];

  const pujaSpecials = [
    {
      dish: "Radhaballavi & Aloor Dom",
      description: "Lentil-stuffed fried bread served with spicy potato curry, a festive breakfast staple."
    },
    {
      dish: "Kosha Mangsho",
      description: "Slow-cooked mutton in rich spices, typically served during puja celebrations."
    },
    {
      dish: "Chandannagari Malpoa",
      description: "A local variation of the sweet pancake soaked in sugar syrup, often with a cardamom flavor."
    },
    {
      dish: "Narkel Diye Cholar Dal",
      description: "Bengal gram lentils cooked with coconut and spices, offered as prasad during puja."
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-heading text-indigo mb-4">Chandannagar Food Trail</h2>
        <p className="text-indigo-light">
          Beyond the dazzling lights and artistic pandals, Chandannagar offers a distinctive culinary experience that 
          blends Bengali traditions with subtle French influences from its colonial past. Here's your guide to 
          the gastronomic delights of the town, especially during Jagadhatri Puja.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {foodSpots.map((spot, index) => (
          <div key={index} className="bg-cream/50 rounded-lg p-5 border border-saffron/10">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-heading text-lg text-indigo">{spot.name}</h3>
              <span className="bg-saffron/10 text-xs px-2 py-1 rounded-full text-saffron-dark">{spot.location}</span>
            </div>
            
            <p className="text-indigo-light mb-3">{spot.description}</p>
            
            <div className="flex flex-col space-y-2">
              <div>
                <span className="text-sm font-medium text-indigo-light">Famous for:</span>
                <span className="text-sm ml-2 text-indigo-light">{spot.specialty}</span>
              </div>
              
              <div>
                <span className="text-sm font-medium text-indigo-light">Must try:</span>
                <span className="text-sm ml-2 text-indigo-light">{spot.mustTry}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-heading text-indigo mb-4">Puja Special Delicacies</h3>
        <p className="text-indigo-light mb-4">
          During Jagadhatri Puja, several special dishes become available that are either part of the 
          traditional offerings or festive specialties. Here are some you shouldn't miss:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pujaSpecials.map((item, index) => (
            <div key={index} className="bg-cream/50 p-4 rounded-lg border-l-4 border-saffron">
              <h4 className="font-medium text-indigo mb-1">{item.dish}</h4>
              <p className="text-sm text-indigo-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-heading text-indigo mb-4">Bhog Distributions</h3>
        <div className="bg-saffron/10 rounded-lg p-5">
          <p className="text-indigo-light mb-3">
            Many para clubs distribute bhog (consecrated food) during specific times of the day. This is usually 
            a complete meal consisting of khichuri (rice and lentil porridge), mixed vegetable fritters, chutney, and sweets.
          </p>
          
          <div className="flex flex-col space-y-3">
            <div>
              <h4 className="font-medium text-indigo-light">Popular Bhog Locations:</h4>
              <ul className="list-disc pl-5 text-indigo-light">
                <li>Barasat Gate Puja Committee (12 PM - 2 PM)</li>
                <li>Gondolpara Jagadhatri Club (1 PM - 3 PM)</li>
                <li>Barabazar Sammilani Club (12:30 PM - 3 PM)</li>
              </ul>
            </div>
            
            <p className="text-sm italic text-indigo-light">
              Note: Bhog is served free of charge, but distribution times may vary. Check with local organizers for exact timings.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-heading text-indigo mb-4">Food Map</h3>
        <div className="bg-gray-200 h-64 w-full rounded-lg flex items-center justify-center">
          <p className="text-gray-600">Interactive food location map coming soon</p>
        </div>
      </div>
      
      <div className="p-4 border border-saffron/50 rounded-lg bg-saffron/5">
        <h3 className="flex items-center gap-2 font-medium text-indigo mb-2">
          <Utensils className="w-5 h-5 text-saffron" />
          <span>Culinary Tips</span>
        </h3>
        <ul className="list-disc pl-5 text-indigo-light">
          <li>Most sweet shops close by 9 PM, so plan accordingly</li>
          <li>Carry cash as many small eateries don't accept cards</li>
          <li>Try the special puja edition sweets available only during this festival</li>
          <li>Street food stalls are set up along major pandal routes, offering quick snacks</li>
          <li>Restaurants get extremely crowded during lunch and dinner hours during puja days</li>
        </ul>
      </div>
    </div>
  );
};

export default FoodTrail;
