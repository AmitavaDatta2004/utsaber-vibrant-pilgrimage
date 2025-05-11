
import { Phone, Hospital, Shield, AlertTriangle, BookOpen } from 'lucide-react';

const EmergencyContacts = () => {
  const emergencyContacts = [
    {
      category: "Police Stations",
      icon: Shield,
      contacts: [
        { name: "Chandannagar Police Station", number: "033-2683 XXXX", address: "G.T. Road, Near Municipality Office" },
        { name: "Women's Police Station", number: "033-2680 XXXX", address: "Barabazar, Chandannagar" },
        { name: "Traffic Control", number: "033-2685 XXXX", address: "Junction Road" }
      ]
    },
    {
      category: "Hospitals & Medical",
      icon: Hospital,
      contacts: [
        { name: "Chandannagar Sub-Divisional Hospital", number: "033-2683 XXXX", address: "Gondolpara, Chandannagar" },
        { name: "City General Hospital", number: "033-2684 XXXX", address: "Barasat Gate" },
        { name: "Red Cross First Aid Center", number: "7890XXXXXX", address: "Temporary: Strand Road (During Puja)" }
      ]
    },
    {
      category: "Fire & Disaster Management",
      icon: AlertTriangle,
      contacts: [
        { name: "Chandannagar Fire Station", number: "033-2686 XXXX", address: "Station Road, Near Railway Station" },
        { name: "Disaster Management Cell", number: "1077", address: "Sub-Divisional Office" }
      ]
    },
    {
      category: "Tourist Information",
      icon: BookOpen,
      contacts: [
        { name: "Tourist Information Center", number: "033-2683 XXXX", address: "Strand Road, Near Clock Tower" },
        { name: "Utsab Unites Help Desk", number: "7897XXXXXX", address: "Temporary: Multiple Locations (During Puja)" }
      ]
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-heading text-indigo mb-4">Emergency Contacts & Helpdesks</h2>
        <p className="text-indigo-light">
          Keep these important contact numbers handy during your visit to Chandannagar, especially during the puja 
          festival when the town witnesses large crowds. In case of emergency, do not hesitate to reach out for help.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 mb-6">
        {emergencyContacts.map((category, index) => (
          <div key={index} className="bg-cream/50 rounded-lg p-5">
            <h3 className="flex items-center gap-2 text-lg font-heading text-indigo mb-4">
              <category.icon className="w-5 h-5 text-auspicious" />
              <span>{category.category}</span>
            </h3>
            
            <div className="space-y-4">
              {category.contacts.map((contact, contactIndex) => (
                <div key={contactIndex} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-white rounded-lg border border-indigo/10">
                  <div>
                    <h4 className="font-medium text-indigo">{contact.name}</h4>
                    <p className="text-sm text-indigo-light">{contact.address}</p>
                  </div>
                  
                  <div className="mt-2 sm:mt-0">
                    <a 
                      href={`tel:${contact.number.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 px-3 py-1.5 bg-auspicious/10 text-auspicious hover:bg-auspicious/20 rounded-full text-sm transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {contact.number}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-heading text-indigo mb-4">Emergency Helpdesks (During Puja)</h3>
        
        <div className="bg-saffron/10 p-5 rounded-lg">
          <p className="text-indigo-light mb-4">
            During the Jagadhatri Puja festival, temporary helpdesks are set up at strategic locations 
            to assist visitors. These helpdesks provide information, assistance with lost-and-found items, 
            and help with emergencies.
          </p>
          
          <h4 className="font-medium text-indigo mb-2">Helpdesk Locations:</h4>
          <ul className="list-disc pl-5 text-indigo-light">
            <li>Strand Road Main Entrance (Operational 8 AM - 11 PM)</li>
            <li>Chandannagar Railway Station (Operational 6 AM - 12 AM)</li>
            <li>Laxmiganj Market Junction (Operational 10 AM - 10 PM)</li>
            <li>Barabazar Main Square (Operational 9 AM - 11 PM)</li>
          </ul>
          
          <p className="mt-4 text-sm italic text-indigo-light">
            Note: Helpdesk timings may vary. Check current operation hours upon arrival.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-cream/50 p-5 rounded-lg">
          <h3 className="text-lg font-medium text-indigo mb-3">Universal Emergency Numbers</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-indigo/10">
              <span className="text-indigo-light">Police Emergency</span>
              <span className="font-medium text-indigo">100</span>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-indigo/10">
              <span className="text-indigo-light">Ambulance</span>
              <span className="font-medium text-indigo">108</span>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-indigo/10">
              <span className="text-indigo-light">Fire Emergency</span>
              <span className="font-medium text-indigo">101</span>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-indigo/10">
              <span className="text-indigo-light">Women's Helpline</span>
              <span className="font-medium text-indigo">1098</span>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-white rounded-lg border border-indigo/10">
              <span className="text-indigo-light">Tourist Helpline</span>
              <span className="font-medium text-indigo">1363</span>
            </div>
          </div>
        </div>
        
        <div className="bg-cream/50 p-5 rounded-lg">
          <h3 className="text-lg font-medium text-indigo mb-3">Medical Services</h3>
          
          <div className="mb-4">
            <h4 className="font-medium text-indigo-light">24/7 Pharmacies:</h4>
            <ul className="list-disc pl-5 text-indigo-light">
              <li>Central Medical Store (Near Railway Station)</li>
              <li>Lifeline Pharmacy (G.T. Road Junction)</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-indigo-light">First Aid Stations (During Puja):</h4>
            <ul className="list-disc pl-5 text-indigo-light">
              <li>Strand Road (Multiple Points)</li>
              <li>Near Major Pandals</li>
              <li>At All Police Assistance Booths</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-4 border border-auspicious/30 rounded-lg bg-auspicious/5">
        <h3 className="flex items-center gap-2 font-medium text-indigo mb-2">
          <Phone className="w-5 h-5 text-auspicious" />
          <span>Pro Tip: Save These Numbers</span>
        </h3>
        <p className="text-indigo-light">
          Take a screenshot of this page or save these important numbers to your phone's contacts before 
          starting your puja tour. During emergencies, having quick access to these numbers can be crucial.
        </p>
      </div>
    </div>
  );
};

export default EmergencyContacts;
