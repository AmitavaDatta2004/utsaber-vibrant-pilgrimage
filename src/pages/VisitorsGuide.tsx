
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Train, Car, Plane, Navigation, Hotel, Utensils, Info, Phone, MessageSquare, Accessibility } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import TravelGuide from '../components/visitors-guide/TravelGuide';
import NavigatingTown from '../components/visitors-guide/NavigatingTown';
import AccommodationGuide from '../components/visitors-guide/AccommodationGuide';
import FoodTrail from '../components/visitors-guide/FoodTrail';
import PujaEtiquette from '../components/visitors-guide/PujaEtiquette';
import EmergencyContacts from '../components/visitors-guide/EmergencyContacts';
import PujaPhrasebook from '../components/visitors-guide/PujaPhrasebook';
import AccessibilityGuide from '../components/visitors-guide/AccessibilityGuide';

const VisitorsGuide = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("travel");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const guideCategories = [
    { id: "travel", label: "Travel Options", icon: Train },
    { id: "navigate", label: "Navigating", icon: Navigation },
    { id: "accommodation", label: "Accommodation", icon: Hotel },
    { id: "food", label: "Food Trail", icon: Utensils },
    { id: "etiquette", label: "Etiquette & Safety", icon: Info },
    { id: "emergency", label: "Emergency Contacts", icon: Phone },
    { id: "phrasebook", label: "Puja Phrasebook", icon: MessageSquare },
    { id: "accessibility", label: "Accessibility", icon: Accessibility },
  ];

  return (
    <>
      {loading ? (
        <Loader onLoadComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen flex flex-col">
          <Header />
          
          <main className="flex-grow pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-indigo">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="font-heading text-4xl md:text-5xl text-cream mb-6">Visitor's Guide</h1>
                  <p className="text-cream/80 text-lg mb-8">Everything you need to plan your pilgrimage to Chandannagar's Jagadhatri Puja.</p>
                </div>
              </div>
            </section>
            
            {/* Introduction Section */}
            <section className="py-12 bg-cream">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h2 className="section-heading text-center">Plan Your Pilgrimage</h2>
                  <p className="text-indigo-light text-center mt-4 mb-8">
                    Welcome to our comprehensive guide for experiencing Chandannagar's legendary Jagadhatri Puja. 
                    Whether you're a first-time visitor or a regular pilgrim, this guide will help you navigate 
                    the festivities with ease and make the most of your experience.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Guide Categories Section */}
            <section className="py-12 bg-cream">
              <div className="container mx-auto px-4">
                <Tabs defaultValue="travel" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <div className="flex justify-center mb-8">
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {guideCategories.map((category) => (
                        <TabsTrigger 
                          key={category.id} 
                          value={category.id}
                          className="flex items-center gap-2 px-4 py-3"
                        >
                          <category.icon className="w-5 h-5" />
                          <span className="hidden sm:inline">{category.label}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 mb-12">
                    <TabsContent value="travel">
                      <TravelGuide />
                    </TabsContent>
                    
                    <TabsContent value="navigate">
                      <NavigatingTown />
                    </TabsContent>
                    
                    <TabsContent value="accommodation">
                      <AccommodationGuide />
                    </TabsContent>
                    
                    <TabsContent value="food">
                      <FoodTrail />
                    </TabsContent>
                    
                    <TabsContent value="etiquette">
                      <PujaEtiquette />
                    </TabsContent>
                    
                    <TabsContent value="emergency">
                      <EmergencyContacts />
                    </TabsContent>
                    
                    <TabsContent value="phrasebook">
                      <PujaPhrasebook />
                    </TabsContent>
                    
                    <TabsContent value="accessibility">
                      <AccessibilityGuide />
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            </section>
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
};

export default VisitorsGuide;
