
import { MapPin, Navigation } from 'lucide-react';

const NavigatingTown = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-heading text-indigo mb-4">Navigating Chandannagar During Puja</h2>
        <p className="text-indigo-light">
          During Jagadhatri Puja, Chandannagar transforms into a vibrant but crowded celebration zone. Here's how to navigate the town efficiently and make the most of your pandal-hopping experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-cream/50 rounded-lg p-5">
          <h3 className="flex items-center gap-2 text-lg font-medium text-indigo mb-3">
            <MapPin className="w-5 h-5 text-auspicious" />
            <span>Local Transport Options</span>
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-indigo-light">Auto-Rickshaws:</h4>
              <p className="text-indigo-light">The most convenient local transport. Shared autos run on fixed routes (₹10-20 per person) or can be hired privately.</p>
            </div>
            
            <div>
              <h4 className="font-medium text-indigo-light">E-Rickshaws:</h4>
              <p className="text-indigo-light">Environment-friendly option available on major routes. Fare: ₹10-15 per person for shared rides.</p>
            </div>
            
            <div>
              <h4 className="font-medium text-indigo-light">Cycle-Rickshaws:</h4>
              <p className="text-indigo-light">Ideal for short distances within neighborhoods. Negotiate the fare before boarding (typically ₹20-40).</p>
            </div>
            
            <div>
              <h4 className="font-medium text-indigo-light">Walking:</h4>
              <p className="text-indigo-light">The best way to experience the puja atmosphere, especially along the Strand and in central areas where pandals are closely located.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-cream/50 rounded-lg p-5">
          <h3 className="flex items-center gap-2 text-lg font-medium text-indigo mb-3">
            <Navigation className="w-5 h-5 text-auspicious" />
            <span>Pandal Hopping Routes</span>
          </h3>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-indigo-light">Strand Road Circuit:</h4>
              <p className="text-indigo-light">A 2-3 km stretch covering major pandals along the Hooghly riverfront. Start from Barasat Gate and walk north.</p>
            </div>
            
            <div>
              <h4 className="font-medium text-indigo-light">Central Market Area:</h4>
              <p className="text-indigo-light">Cluster of pandals around Laxmiganj market area, walkable in a 1 km radius.</p>
            </div>
            
            <div>
              <h4 className="font-medium text-indigo-light">Gondolpara-Barabazar Loop:</h4>
              <p className="text-indigo-light">Famous for award-winning pujas, can be covered in 2-3 hours on foot.</p>
            </div>
            
            <div>
              <h4 className="font-medium text-indigo-light">Northern Circuit:</h4>
              <p className="text-indigo-light">Less crowded but equally impressive pandals in the northern neighborhoods.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium text-indigo mb-3">Traffic Restrictions During Puja</h3>
        <div className="bg-auspicious/10 rounded-lg p-4">
          <ul className="list-disc pl-5 text-indigo-light">
            <li>Major roads near popular pandals become pedestrian-only zones from 4 PM to midnight</li>
            <li>G.T. Road sees diversions near puja mandaps - follow police signage</li>
            <li>One-way systems implemented on several streets - check local notices</li>
            <li>Strand Road typically closed for vehicles during evening hours</li>
          </ul>
          <p className="mt-3 text-indigo-light italic">Note: Traffic arrangements are updated annually - check current restrictions upon arrival.</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium text-indigo mb-3">Parking Information</h3>
        <div className="bg-cream/50 rounded-lg p-4">
          <ul className="list-disc pl-5 text-indigo-light">
            <li>Designated parking areas at Railway Station compound (limited spaces)</li>
            <li>Municipal parking near Laxmiganj Market</li>
            <li>School grounds converted to temporary parking (paid)</li>
            <li>Roadside parking prohibited on major routes during puja days</li>
          </ul>
          <p className="mt-3 text-indigo-light">Parking fee: ₹30-50 for two-wheelers, ₹70-100 for cars (for 6-8 hours)</p>
        </div>
      </div>
      
      <div className="p-4 border border-saffron/50 rounded-lg bg-saffron/5">
        <h3 className="text-lg font-medium text-indigo mb-2">Pro Tips</h3>
        <ul className="list-disc pl-5 text-indigo-light">
          <li>Download offline maps of Chandannagar before your visit</li>
          <li>Wear comfortable shoes as pandal-hopping involves significant walking</li>
          <li>Visit major pandals during weekday mornings to avoid extreme crowds</li>
          <li>Carry a water bottle and light snacks</li>
          <li>Follow the local crowd flow rather than trying to navigate against it</li>
        </ul>
      </div>
    </div>
  );
};

export default NavigatingTown;
