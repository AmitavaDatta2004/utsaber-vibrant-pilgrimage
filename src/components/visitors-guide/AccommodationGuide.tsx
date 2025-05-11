
import { Hotel, Star } from 'lucide-react';

const AccommodationGuide = () => {
  const accommodations = [
    {
      name: "Hotel Chandannagore",
      address: "23 G.T. Road, Near Railway Station",
      priceRange: "₹1,500-2,500",
      contact: "+91 33 2683 XXXX",
      amenities: ["AC Rooms", "Restaurant", "Wi-Fi", "Room Service"],
      description: "Centrally located budget hotel within walking distance of the railway station and major pandals."
    },
    {
      name: "River View Guest House",
      address: "12 Strand Road",
      priceRange: "₹1,800-3,000",
      contact: "+91 98765 XXXXX",
      amenities: ["AC Rooms", "River View", "Breakfast", "Wi-Fi"],
      description: "Charming guest house offering spectacular views of the Hooghly River and easy access to Strand Road pandals."
    },
    {
      name: "Heritage Inn",
      address: "56 Barasat Gate",
      priceRange: "₹2,500-4,000",
      contact: "+91 33 2685 XXXX",
      amenities: ["AC Rooms", "Restaurant", "Wi-Fi", "Parking", "Conference Room"],
      description: "Boutique hotel in a restored colonial building, offering comfortable stays with traditional Bengali hospitality."
    },
    {
      name: "Puja Special Dharamshala",
      address: "Near Laxmiganj Market",
      priceRange: "₹800-1,200",
      contact: "+91 90876 XXXXX",
      amenities: ["Fan Rooms", "Common Bathroom", "Locker", "Security"],
      description: "Basic but clean accommodation run by a local community organization during the puja season."
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-heading text-indigo mb-4">Accommodation Guide</h2>
        <p className="text-indigo-light">
          Chandannagar has limited but adequate accommodation options during the puja season. 
          We recommend booking well in advance as rooms fill up quickly during the festival period.
        </p>
      </div>
      
      <div className="bg-saffron/10 rounded-lg p-4 mb-6">
        <h3 className="flex items-center gap-2 font-medium text-indigo mb-2">
          <Hotel className="w-5 h-5 text-saffron" />
          <span>Booking Advisory</span>
        </h3>
        <ul className="list-disc pl-5 text-indigo-light">
          <li>Reserve your accommodation at least 1-2 months in advance for puja dates</li>
          <li>Expect a 20-30% price increase during the festival period</li>
          <li>Consider staying in nearby Chinsurah or Hooghly if Chandannagar is fully booked</li>
          <li>Many visitors also choose to stay in Kolkata and make a day trip</li>
        </ul>
      </div>
      
      <h3 className="text-lg font-medium text-indigo mb-4">Available Accommodations</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {accommodations.map((hotel, index) => (
          <div key={index} className="bg-cream/50 rounded-lg p-5 border border-indigo/10 hover:border-saffron/20 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-heading text-lg text-indigo">{hotel.name}</h4>
              <span className="text-sm text-saffron font-medium">{hotel.priceRange}/night</span>
            </div>
            
            <p className="text-indigo-light text-sm mb-3">{hotel.address}</p>
            <p className="text-indigo-light mb-3">{hotel.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {hotel.amenities.map((amenity, i) => (
                <span key={i} className="text-xs bg-indigo/5 text-indigo-light px-2 py-1 rounded">
                  {amenity}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-indigo-light">Contact: {hotel.contact}</span>
              <button className="text-sm text-saffron hover:text-saffron-dark flex items-center gap-1">
                <Star className="w-4 h-4" /> Bookmark
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-cream/50 rounded-lg p-5 mb-6">
        <h3 className="text-lg font-medium text-indigo mb-3">Alternative Options</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-indigo-light">Homestays:</h4>
            <p className="text-indigo-light">Several families offer rooms during the puja season. Inquire with the local tourist office for verified listings.</p>
          </div>
          
          <div>
            <h4 className="font-medium text-indigo-light">Nearby Towns:</h4>
            <p className="text-indigo-light">Consider booking accommodations in Chinsurah (7 km), Hooghly (10 km), or Serampore (15 km) with good transportation links to Chandannagar.</p>
          </div>
          
          <div>
            <h4 className="font-medium text-indigo-light">Day Visit from Kolkata:</h4>
            <p className="text-indigo-light">Many visitors choose to stay in Kolkata and make a day trip to Chandannagar, returning by late evening train.</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 border border-auspicious/30 rounded-lg bg-auspicious/5">
        <h3 className="text-lg font-medium text-indigo mb-2">Important Note</h3>
        <p className="text-indigo-light">
          Utsab Unites is not affiliated with any accommodation provider and doesn't receive commissions from bookings. 
          This information is provided as a service to visitors. We recommend confirming rates and 
          availability directly with the establishments before making travel plans.
        </p>
      </div>
    </div>
  );
};

export default AccommodationGuide;
