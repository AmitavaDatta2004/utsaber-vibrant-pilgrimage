
import { Accessibility, AccessibilityIcon, Clock } from 'lucide-react';

const AccessibilityGuide = () => {
  const accessiblePandals = [
    {
      name: "Barasat Gate Puja Committee",
      features: ["Wheelchair ramp", "Reserved viewing area", "Volunteers for assistance"],
      bestTime: "10 AM - 12 PM (Less crowded)",
      notes: "Contact organizers in advance for special assistance arrangements.",
      contact: "+91 98765 XXXXX (Coordinator)",
      location: "Near Railway Station"
    },
    {
      name: "Gondolpara Jagadhatri Club",
      features: ["Wheelchair ramp", "Accessible restroom", "Designated entry for differently-abled"],
      bestTime: "11 AM - 1 PM or after 8 PM",
      notes: "Offers guided tours for visually impaired visitors (by appointment).",
      contact: "+91 90876 XXXXX (Accessibility Coordinator)",
      location: "Gondolpara Main Road"
    },
    {
      name: "Chandannagar Central Club",
      features: ["Elevator access", "Senior citizen seating area", "Accessible pathways"],
      bestTime: "Morning hours (8 AM - 11 AM)",
      notes: "Special accessibility arrangements during arati times.",
      contact: "+91 98123 XXXXX (Help Desk)",
      location: "G.T. Road Junction"
    },
    {
      name: "Strand Road Exhibition",
      features: ["Wide pathways", "Seating areas throughout", "Ground level displays"],
      bestTime: "Weekday mornings",
      notes: "Most exhibits accessible to wheelchair users.",
      contact: "+91 76543 XXXXX (Coordinator)",
      location: "Strand Road"
    }
  ];

  const specialAssistanceServices = [
    {
      service: "Wheelchair Borrowing Service",
      description: "Limited wheelchairs available on first-come-first-served basis at the Railway Station Help Desk and Strand Road main entrance.",
      contact: "033-2680 XXXX"
    },
    {
      service: "Volunteer Assistance",
      description: "Volunteers trained to assist differently-abled visitors can be requested at any major help desk or through the Utsab Unites app.",
      contact: "+91 98765 XXXXX"
    },
    {
      service: "Special Vehicle Permits",
      description: "Vehicles carrying differently-abled visitors can obtain special access permits to reach closer to pandal entrances.",
      contact: "Traffic Police: 033-2685 XXXX"
    },
    {
      service: "Sign Language Interpretation",
      description: "Available for major ceremonies by prior arrangement (48 hours notice required).",
      contact: "+91 87654 XXXXX"
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-heading text-indigo mb-4">Accessibility Guide - Puja for All</h2>
        <p className="text-indigo-light">
          Jagadhatri Puja should be accessible to everyone. This guide provides information on 
          pandals and services that offer special accessibility features to ensure visitors with 
          diverse needs can fully participate in the celebration.
        </p>
      </div>
      
      <div className="bg-saffron/10 p-4 rounded-lg mb-6">
        <div className="flex items-start gap-3">
          <Accessibility className="w-8 h-8 text-saffron flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-medium text-indigo mb-2">Our Commitment to Accessibility</h3>
            <p className="text-indigo-light">
              Utsab Unites works with local puja organizers to promote accessibility features 
              and gather accurate information. While not all pandals have full accessibility 
              features yet, we're proud to highlight those making special efforts and to 
              encourage more inclusive practices.
            </p>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-heading text-indigo mb-4">Accessible Pandals</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {accessiblePandals.map((pandal, index) => (
          <div key={index} className="bg-cream/50 rounded-lg p-5 border border-indigo/10">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-heading text-lg text-indigo">{pandal.name}</h4>
              <span className="text-xs bg-indigo/10 px-2 py-1 rounded-full text-indigo-light">
                {pandal.location}
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-2">
                <AccessibilityIcon className="w-4 h-4 text-indigo-light mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-indigo-light">Accessible Features:</p>
                  <ul className="list-disc pl-5 text-sm text-indigo-light">
                    {pandal.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-indigo-light mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-indigo-light">Best Time to Visit:</p>
                  <p className="text-sm text-indigo-light">{pandal.bestTime}</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-indigo-light mb-3">{pandal.notes}</p>
            
            <div className="text-sm text-indigo-light">
              Contact for assistance: <span className="font-medium">{pandal.contact}</span>
            </div>
          </div>
        ))}
      </div>
      
      <h3 className="text-xl font-heading text-indigo mb-4">Special Assistance Services</h3>
      
      <div className="space-y-4 mb-8">
        {specialAssistanceServices.map((service, index) => (
          <div key={index} className="bg-cream/50 p-4 rounded-lg">
            <h4 className="font-medium text-indigo mb-2">{service.service}</h4>
            <p className="text-indigo-light mb-2">{service.description}</p>
            <p className="text-sm font-medium text-indigo-light">Contact: {service.contact}</p>
          </div>
        ))}
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-heading text-indigo mb-4">Tips for Visitors with Special Needs</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-cream/50 p-4 rounded-lg">
            <h4 className="font-medium text-indigo mb-2">For Mobility Challenges</h4>
            <ul className="list-disc pl-5 text-indigo-light">
              <li>Visit during off-peak hours to avoid crowds</li>
              <li>Contact pandals in advance to arrange for assistance</li>
              <li>Consider staying near Strand Road area where pandals are more closely located</li>
              <li>Use the wheelchair borrowing service if needed</li>
            </ul>
          </div>
          
          <div className="bg-cream/50 p-4 rounded-lg">
            <h4 className="font-medium text-indigo mb-2">For Sensory Sensitivities</h4>
            <ul className="list-disc pl-5 text-indigo-light">
              <li>Morning times generally have lower noise levels</li>
              <li>Bring noise-cancelling headphones for dhak and crowd sounds</li>
              <li>Some pandals have quieter viewing areas upon request</li>
              <li>Ask volunteers for guidance to less crowded viewing spots</li>
            </ul>
          </div>
          
          <div className="bg-cream/50 p-4 rounded-lg">
            <h4 className="font-medium text-indigo mb-2">For Visual Impairment</h4>
            <ul className="list-disc pl-5 text-indigo-light">
              <li>Request descriptive tours available at select pandals</li>
              <li>Some larger clubs offer touch-and-feel models of the pandal design</li>
              <li>Guide dogs are permitted (inform organizers in advance)</li>
              <li>Audio descriptions available through the Utsab Unites mobile app</li>
            </ul>
          </div>
          
          <div className="bg-cream/50 p-4 rounded-lg">
            <h4 className="font-medium text-indigo mb-2">For Seniors</h4>
            <ul className="list-disc pl-5 text-indigo-light">
              <li>Special seating areas available at major pandals</li>
              <li>Priority queues for darshan at most locations</li>
              <li>Rest areas marked on the Utsab Unites map</li>
              <li>Water and medical assistance points at central locations</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-4 border border-saffron/30 rounded-lg bg-saffron/5">
        <h3 className="text-lg font-medium text-indigo mb-2">Help Us Improve</h3>
        <p className="text-indigo-light mb-4">
          We're committed to making Jagadhatri Puja more accessible to everyone. If you have suggestions 
          or feedback on accessibility features, or if you'd like to report issues you encountered, 
          please share your experience with us.
        </p>
        <button className="px-4 py-2 bg-saffron text-white rounded-md hover:bg-saffron-dark transition-colors">
          Share Accessibility Feedback
        </button>
      </div>
    </div>
  );
};

export default AccessibilityGuide;
