
const NewsTicker = () => {
  const updates = [
    { id: 1, text: "Barabazar pandal darshan queue moderate", time: "12:30 PM" },
    { id: 2, text: "Special Sandhya Aarti at Gondolpara in 30 mins", time: "4:30 PM" },
    { id: 3, text: "Traffic alert: Strand Road congested", time: "2:15 PM" },
    { id: 4, text: "Best illumination award ceremony tonight at Central Square", time: "5:00 PM" },
    { id: 5, text: "New food stalls open at Laxmiganj market area", time: "1:45 PM" },
  ];

  return (
    <div className="bg-indigo text-cream py-3 shadow-md relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="mr-4 flex-shrink-0 py-1 px-3 bg-auspicious text-cream rounded-md font-bold text-sm">
            UTSAB LIVE
          </div>
          
          <div className="overflow-hidden relative w-full">
            <div className="animate-[marquee_25s_linear_infinite] whitespace-nowrap flex items-center">
              {updates.map((update, index) => (
                <div key={update.id} className="inline-flex items-center">
                  <span className="text-saffron font-medium mr-1">{update.time}:</span>
                  <span className="mr-8">{update.text}</span>
                  {index < updates.length - 1 && (
                    <span className="mx-4 h-1.5 w-1.5 rounded-full bg-saffron inline-block"></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
