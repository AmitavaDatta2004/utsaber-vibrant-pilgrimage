
import { Check, X } from 'lucide-react';

const PujaEtiquette = () => {
  const dosItems = [
    {
      title: "Dress Modestly",
      description: "Wear respectful attire. For women, sarees or salwar kameez are ideal. For men, kurtas or shirts with pants are appropriate."
    },
    {
      title: "Remove Footwear",
      description: "Always remove your shoes before entering the inner sanctum of a pandal or the area where the idol is placed."
    },
    {
      title: "Maintain Queue Discipline",
      description: "Follow the designated queue lines for darshan, especially at popular pandals. This ensures everyone gets a chance to view the deity."
    },
    {
      title: "Respect Silence During Rituals",
      description: "Maintain quiet when priests are performing aarti, anjali, or other ceremonies. This is a time for prayer and concentration."
    },
    {
      title: "Ask Permission Before Photography",
      description: "While most pandals allow photography, always check if there are any restrictions, especially during rituals."
    },
  ];

  const dontsItems = [
    {
      title: "Don't Push or Create Chaos",
      description: "Even in crowded situations, maintain composure and avoid pushing or shoving others in lines."
    },
    {
      title: "Don't Touch the Idol",
      description: "Never touch the idol or decorations, no matter how tempting it might be to get a closer look."
    },
    {
      title: "Don't Litter",
      description: "Dispose of waste properly in designated bins. Keeping the pandals and surroundings clean is everyone's responsibility."
    },
    {
      title: "Don't Block Views",
      description: "Once you've had your darshan, move along to allow others their turn. Don't linger too long directly in front of the deity."
    },
    {
      title: "Don't Disrespect Local Customs",
      description: "If you're unfamiliar with certain practices, observe and follow what locals are doing rather than dismissing traditions."
    },
  ];

  const safetyTips = [
    "Keep children close at all times; crowds can be overwhelming",
    "Carry minimal valuables; use anti-theft bags or front pockets for essentials",
    "Stay hydrated but be selective about where you buy water and food",
    "Memorize local emergency numbers or save them on your phone",
    "Have a designated meeting point if traveling in a group",
    "Be aware of your surroundings, especially in crowded areas",
    "Consider visiting major pandals during mornings when crowds are thinner",
    "Carry basic medications, especially if you have specific health needs"
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-heading text-indigo mb-4">Puja Etiquette & Safety</h2>
        <p className="text-indigo-light">
          Jagadhatri Puja is both a religious occasion and a cultural festival. Understanding the proper etiquette 
          and safety measures will enhance your experience and show respect for local traditions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-heading text-indigo mb-4">
            <Check className="w-5 h-5 text-green-500" />
            <span>Do's</span>
          </h3>
          
          <div className="space-y-4">
            {dosItems.map((item, index) => (
              <div key={index} className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h4 className="font-medium text-indigo mb-1">{item.title}</h4>
                <p className="text-sm text-indigo-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="flex items-center gap-2 text-xl font-heading text-indigo mb-4">
            <X className="w-5 h-5 text-auspicious" />
            <span>Don'ts</span>
          </h3>
          
          <div className="space-y-4">
            {dontsItems.map((item, index) => (
              <div key={index} className="bg-red-50 border-l-4 border-auspicious p-4 rounded-r-lg">
                <h4 className="font-medium text-indigo mb-1">{item.title}</h4>
                <p className="text-sm text-indigo-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-heading text-indigo mb-4">Special Rituals Etiquette</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="bg-cream/50 p-4 rounded-lg">
            <h4 className="font-medium text-indigo mb-2">During Aarti</h4>
            <ul className="list-disc pl-5 text-indigo-light">
              <li>Stand respectfully, with hands folded if participating</li>
              <li>Maintain silence to honor the spiritual atmosphere</li>
              <li>Consider turning off mobile phones or setting to silent</li>
              <li>Wait for the ceremony to complete before moving away</li>
            </ul>
          </div>
          
          <div className="bg-cream/50 p-4 rounded-lg">
            <h4 className="font-medium text-indigo mb-2">During Anjali</h4>
            <ul className="list-disc pl-5 text-indigo-light">
              <li>Follow the priest's instructions for offering flowers</li>
              <li>Wait your turn patiently if there is a queue</li>
              <li>After offering, step back to allow others to participate</li>
              <li>Receive prasad (blessed food) with right hand</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-cream/50 p-4 rounded-lg mb-6">
          <h4 className="font-medium text-indigo mb-2">During Bisarjan (Immersion)</h4>
          <ul className="list-disc pl-5 text-indigo-light">
            <li>Maintain a safe distance from the water's edge during immersion</li>
            <li>Follow crowd management instructions from police and volunteers</li>
            <li>Be mindful that this is an emotional moment for devotees</li>
            <li>Photography is usually permitted but be respectful</li>
          </ul>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-heading text-indigo mb-4">Safety Tips</h3>
        <div className="bg-saffron/10 p-5 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {safetyTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="bg-saffron rounded-full p-1 mt-0.5 flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-sm text-indigo-light">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4 border border-auspicious/30 rounded-lg bg-auspicious/5">
        <h3 className="text-lg font-medium text-indigo mb-2">Special Advisory for 2024</h3>
        <p className="text-indigo-light">
          Carry your identification and keep emergency contact numbers handy. Due to increased security 
          measures, expect bag checks at major pandals. Cooperation with security personnel will ensure 
          a smooth experience for everyone.
        </p>
      </div>
    </div>
  );
};

export default PujaEtiquette;
