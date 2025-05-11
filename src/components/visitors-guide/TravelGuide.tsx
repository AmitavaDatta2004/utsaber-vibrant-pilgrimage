
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Train, Car, Plane } from 'lucide-react';

const TravelGuide = () => {
  const [transportTab, setTransportTab] = useState('train');
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-heading text-indigo mb-4">Reaching Chandannagar</h2>
        <p className="text-indigo-light">
          Chandannagar is well-connected to Kolkata and other major cities. Here are all the ways you can reach this historic town for the Jagadhatri Puja celebrations.
        </p>
      </div>
      
      <Tabs defaultValue="train" value={transportTab} onValueChange={setTransportTab}>
        <TabsList className="w-full flex justify-start mb-6 border-b">
          <TabsTrigger value="train" className="flex gap-2 items-center">
            <Train className="w-4 h-4" />
            <span>By Train</span>
          </TabsTrigger>
          <TabsTrigger value="road" className="flex gap-2 items-center">
            <Car className="w-4 h-4" />
            <span>By Road</span>
          </TabsTrigger>
          <TabsTrigger value="air" className="flex gap-2 items-center">
            <Plane className="w-4 h-4" />
            <span>By Air</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="train">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading text-indigo mb-2">Train Services</h3>
              <p className="text-indigo-light mb-4">
                The most popular and convenient way to reach Chandannagar is by train. Chandannagar has its own railway station (CCH) 
                on the Howrah-Burdwan Main Line of Eastern Railway.
              </p>
              
              <div className="bg-cream/50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-indigo mb-2">From Howrah Station:</h4>
                <ul className="list-disc pl-5 text-indigo-light">
                  <li>Local trains run frequently (approximately every 15-20 minutes) from Howrah to Chandannagar</li>
                  <li>Journey time: Approximately 45-60 minutes</li>
                  <li>Ticket cost: ₹10-15 for ordinary class</li>
                </ul>
              </div>
              
              <div className="bg-cream/50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-indigo mb-2">From Sealdah Station:</h4>
                <ul className="list-disc pl-5 text-indigo-light">
                  <li>Take a train to Howrah first, then connect to Chandannagar</li>
                  <li>Alternative: Take a train to Naihati Junction and then change for Chandannagar</li>
                </ul>
              </div>
              
              <p className="text-indigo-light italic mt-4">
                Note: During Puja days, trains can get extremely crowded. Consider traveling during off-peak hours 
                and purchase return tickets in advance if possible.
              </p>
              
              <div className="mt-4 p-3 border border-saffron/20 rounded-md bg-saffron/5">
                <p className="text-sm text-indigo-light">
                  For current train timings and platform information, check the 
                  <a href="https://www.irctc.co.in" target="_blank" rel="noopener noreferrer" className="text-saffron hover:underline"> IRCTC website</a> 
                  or use the NTES app.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="road">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading text-indigo mb-2">Road Connectivity</h3>
              <p className="text-indigo-light mb-4">
                Chandannagar is well-connected by road, located on Grand Trunk Road (NH-19) about 35 km north of Kolkata.
              </p>
              
              <div className="bg-cream/50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-indigo mb-2">By Bus:</h4>
                <ul className="list-disc pl-5 text-indigo-light">
                  <li>Regular bus services connect Kolkata to Chandannagar</li>
                  <li>Buses depart from Esplanade Bus Terminus in Kolkata</li>
                  <li>Journey time: 1.5-2 hours (depending on traffic)</li>
                  <li>Ticket cost: ₹30-40</li>
                </ul>
              </div>
              
              <div className="bg-cream/50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-indigo mb-2">By Private Car/Taxi:</h4>
                <ul className="list-disc pl-5 text-indigo-light">
                  <li>Take GT Road (NH-19) from Kolkata towards Burdwan</li>
                  <li>Journey time: 1-1.5 hours (depending on traffic)</li>
                  <li>Taxi fare from Kolkata: Approximately ₹800-1000</li>
                  <li>App-based cabs like Ola and Uber are also available</li>
                </ul>
              </div>
              
              <p className="text-indigo-light italic mt-4">
                Note: During Puja days, roads can get congested. Plan your journey accordingly and check for any traffic diversions.
              </p>
              
              <div className="mt-6">
                <h4 className="font-medium text-indigo mb-2">Route Map:</h4>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Interactive map will be available soon</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="air">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-heading text-indigo mb-2">Nearest Airport</h3>
              <p className="text-indigo-light mb-4">
                The nearest airport to Chandannagar is Netaji Subhas Chandra Bose International Airport (CCU) in Kolkata.
              </p>
              
              <div className="bg-cream/50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-indigo mb-2">From Kolkata Airport to Chandannagar:</h4>
                <ul className="list-disc pl-5 text-indigo-light">
                  <li>Distance: Approximately 45 km</li>
                  <li>Options to reach Chandannagar from the airport:</li>
                  <ul className="list-circle pl-5 mt-1 mb-2">
                    <li>Pre-paid taxi (available at the airport): ₹1000-1200</li>
                    <li>App-based cabs: ₹900-1100</li>
                    <li>Public transport: Take an airport bus to Howrah Station, then a local train to Chandannagar</li>
                  </ul>
                  <li>Journey time by road: 1.5-2 hours depending on traffic</li>
                </ul>
              </div>
              
              <div className="bg-saffron/10 rounded-lg p-4">
                <h4 className="font-medium text-indigo mb-2">Travel Tip:</h4>
                <p className="text-indigo-light">
                  If arriving at Kolkata airport during peak hours, consider taking the Howrah-bound bus and then connecting 
                  via train to Chandannagar, as this might be faster than road travel during congested hours.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TravelGuide;
