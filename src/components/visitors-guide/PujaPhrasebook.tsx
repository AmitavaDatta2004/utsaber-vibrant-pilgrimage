
import { useState } from 'react';
import { Volume2 } from 'lucide-react';

const PujaPhrasebook = () => {
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  
  const phrases = [
    {
      category: "Greetings & Basics",
      expressions: [
        {
          bengali: "নমস্কার",
          romanized: "Nomoshkar",
          english: "Hello/Greetings",
          audioUrl: "#" // placeholder for actual audio URL
        },
        {
          bengali: "আপনি কেমন আছেন?",
          romanized: "Apni kemon achhen?",
          english: "How are you?",
          audioUrl: "#"
        },
        {
          bengali: "আমি ভালো আছি",
          romanized: "Ami bhalo achhi",
          english: "I am fine",
          audioUrl: "#"
        },
        {
          bengali: "ধন্যবাদ",
          romanized: "Dhonnobad",
          english: "Thank you",
          audioUrl: "#"
        },
        {
          bengali: "ক্ষমা করবেন",
          romanized: "Khoma korben",
          english: "Excuse me/Sorry",
          audioUrl: "#"
        }
      ]
    },
    {
      category: "Puja-Specific Phrases",
      expressions: [
        {
          bengali: "জগদ্ধাত্রী পুজো কখন?",
          romanized: "Jagadhatri pujo kokhon?",
          english: "When is the Jagadhatri Puja?",
          audioUrl: "#"
        },
        {
          bengali: "প্রতিমা কোথায়?",
          romanized: "Protima kothay?",
          english: "Where is the idol?",
          audioUrl: "#"
        },
        {
          bengali: "আরতি কখন শুরু হবে?",
          romanized: "Arati kokhon shuru hobe?",
          english: "When will the arati begin?",
          audioUrl: "#"
        },
        {
          bengali: "ভোগ বিতরণ কোথায়?",
          romanized: "Bhog bitoron kothay?",
          english: "Where is the bhog distribution?",
          audioUrl: "#"
        },
        {
          bengali: "পুজো দেখতে খুব সুন্দর",
          romanized: "Pujo dekhte khub sundor",
          english: "The puja looks very beautiful",
          audioUrl: "#"
        }
      ]
    },
    {
      category: "Directions & Navigation",
      expressions: [
        {
          bengali: "এটা কোন পাড়া?",
          romanized: "Eta kon para?",
          english: "Which neighborhood is this?",
          audioUrl: "#"
        },
        {
          bengali: "স্ট্র্যান্ড রোড কোথায়?",
          romanized: "Strand Road kothay?",
          english: "Where is Strand Road?",
          audioUrl: "#"
        },
        {
          bengali: "বাড়াবাজার কতদূর?",
          romanized: "Barabazar kotoduir?",
          english: "How far is Barabazar?",
          audioUrl: "#"
        },
        {
          bengali: "সোজা যান",
          romanized: "Soja jaan",
          english: "Go straight",
          audioUrl: "#"
        },
        {
          bengali: "বাঁ দিকে/ডান দিকে",
          romanized: "Baa dike/Daan dike",
          english: "Left side/Right side",
          audioUrl: "#"
        }
      ]
    },
    {
      category: "Food & Refreshments",
      expressions: [
        {
          bengali: "জলবড়া সন্দেশ কোথায় পাব?",
          romanized: "Jolbora sandesh kothay pabo?",
          english: "Where can I get Jolbhora Sandesh?",
          audioUrl: "#"
        },
        {
          bengali: "এটার দাম কত?",
          romanized: "Etar dam koto?",
          english: "How much does this cost?",
          audioUrl: "#"
        },
        {
          bengali: "খুব মিষ্টি",
          romanized: "Khub mishti",
          english: "Very sweet/delicious",
          audioUrl: "#"
        },
        {
          bengali: "একটু জল দিন",
          romanized: "Ektu jol din",
          english: "Please give me some water",
          audioUrl: "#"
        }
      ]
    }
  ];
  
  // Simulated audio playback function
  const playAudio = (phraseId: string) => {
    // In a real implementation, this would play an actual audio file
    if (playingAudio === phraseId) {
      setPlayingAudio(null);
      console.log(`Stopped playing: ${phraseId}`);
    } else {
      setPlayingAudio(phraseId);
      console.log(`Playing: ${phraseId}`);
      
      // Simulate audio ending after 2 seconds
      setTimeout(() => {
        if (playingAudio === phraseId) {
          setPlayingAudio(null);
        }
      }, 2000);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-heading text-indigo mb-4">Puja Phrasebook</h2>
        <p className="text-indigo-light">
          Enhance your experience and connect with locals by learning a few Bengali phrases. 
          This mini-phrasebook focuses on expressions useful during your visit to Chandannagar's 
          Jagadhatri Puja. Click on any phrase to hear its pronunciation.
        </p>
      </div>
      
      <div className="bg-saffron/10 p-4 rounded-lg mb-6">
        <p className="text-indigo-light italic text-sm">
          Note: Bengali is written in Bengali script, but we've provided romanized versions to help with pronunciation. 
          Even simple attempts to speak the local language are greatly appreciated by residents!
        </p>
      </div>
      
      <div className="space-y-8 mb-8">
        {phrases.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-xl font-heading text-indigo mb-4 border-b border-saffron/20 pb-2">
              {category.category}
            </h3>
            
            <div className="space-y-4">
              {category.expressions.map((phrase, phraseIndex) => {
                const phraseId = `phrase-${categoryIndex}-${phraseIndex}`;
                return (
                  <div 
                    key={phraseId}
                    className="bg-cream/50 rounded-lg p-4 hover:bg-cream transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-3 justify-between">
                      <div className="space-y-2">
                        <div className="flex items-baseline gap-2">
                          <p className="text-lg font-medium text-indigo">{phrase.bengali}</p>
                          <button
                            onClick={() => playAudio(phraseId)}
                            className={`p-1.5 rounded-full ${playingAudio === phraseId ? 'bg-saffron text-white' : 'bg-gray-100 text-indigo-light hover:bg-gray-200'}`}
                            title="Play pronunciation"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-indigo-light italic">{phrase.romanized}</p>
                        <p className="text-indigo-light">{phrase.english}</p>
                      </div>
                      
                      <div className="flex">
                        <button className="text-xs px-2 py-1 bg-saffron/10 text-saffron hover:bg-saffron/20 rounded-full transition-colors">
                          Add to Favorites
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-heading text-indigo mb-4">Numbers in Bengali</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {Array.from({ length: 10 }).map((_, index) => {
            const number = index + 1;
            const bengaliNumbers = ["১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯", "১০"];
            const romanized = ["Ek", "Dui", "Tin", "Char", "Panch", "Chhoy", "Shat", "Aat", "Noy", "Dosh"];
            
            return (
              <div key={index} className="bg-cream/50 p-3 rounded-lg text-center">
                <p className="text-xl font-medium text-indigo">{bengaliNumbers[index]}</p>
                <p className="text-sm text-indigo-light">{romanized[index]}</p>
                <p className="text-xs text-indigo-light">{number}</p>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="p-4 border border-saffron/30 rounded-lg bg-saffron/5">
        <h3 className="text-lg font-medium text-indigo mb-2">Practice Makes Perfect</h3>
        <p className="text-indigo-light">
          Don't worry about perfect pronunciation. Locals appreciate visitors making an effort to speak 
          their language and will usually respond with warmth and helpfulness. Start with simple greetings 
          like "Nomoshkar" and basic phrases like "Dhonnobad" (Thank you).
        </p>
      </div>
    </div>
  );
};

export default PujaPhrasebook;
