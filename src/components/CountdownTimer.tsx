
import { useState, useEffect } from 'react';

// Next Puja Date (example: November 15, 2024)
const PUJA_DATE = new Date('2024-11-15T00:00:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = PUJA_DATE.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // If Puja date has passed, you could implement logic for "Puja in progress" or reset for next year
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-indigo/5 p-6 rounded-xl border border-saffron/20 shadow-lg">
      <h3 className="text-center font-heading text-2xl text-indigo mb-6">Countdown to Jagadhatri Puja 2024</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="countdown-item">
          <span className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
      
      <div className="mt-6 text-center text-indigo-light">
        <p className="text-sm">Current Tithi: Panchami</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
