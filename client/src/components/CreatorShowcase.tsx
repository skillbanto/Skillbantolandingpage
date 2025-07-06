import React from 'react';
import { motion } from 'framer-motion';
import creator6 from '../assets/creators/6.png';
import creator7 from '../assets/creators/7.png';
import creator8 from '../assets/creators/8.png';
import creator9 from '../assets/creators/9.png';
import creator10 from '../assets/creators/10.png';

type Creator = {
  id: number;
  name: string;
  expertise: string;
  image: string;
  color: string;
};

type Stat = {
  id: number;
  value: string;
  description: string;
  color: string;
};

// Original creators with saved images from assets folder
const creators: Creator[] = [
  {
    id: 1,
    name: "MARYAM KHAN",
    expertise: "BEAUTY & LIFESTYLE",
    image: creator8,
    color: "blue"
  },
  {
    id: 2,
    name: "MUHAMMAD HASSAN",
    expertise: "FITNESS",
    image: creator7,
    color: "green"
  },
  {
    id: 3,
    name: "NIMRA ALI",
    expertise: "DESIGN & ART",
    image: creator6,
    color: "purple"
  },
  {
    id: 4,
    name: "MUHAMMAD RASHID",
    expertise: "PROGRAMMER",
    image: creator9,
    color: "orange"
  },
  {
    id: 5,
    name: "MUHAMMAD KAMRAN",
    expertise: "SALES & CONSULTANT",
    image: creator10,
    color: "pink"
  }
];

const stats: Stat[] = [
  {
    id: 1,
    value: "2.7K+",
    description: "ACTIVE COURSE CREATORS",
    color: "purple"
  },
  {
    id: 2,
    value: "34K+",
    description: "COURSES PUBLISHED",
    color: "pink"
  },
  {
    id: 3,
    value: "75M+",
    description: "CUSTOMERS SERVED BY OUR CREATORS",
    color: "blue"
  },
  {
    id: 4,
    value: "1000+",
    description: "MILLIONAIRES MINTED BY SKILLBANTO",
    color: "purple"
  }
];

export default function CreatorShowcase() {
  const getStatColorClasses = (color: string) => {
    const colorMap = {
      purple: "bg-purple-500",
      pink: "bg-pink-500",
      blue: "bg-blue-500",
      green: "bg-green-500",
      orange: "bg-orange-500"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  // Create extended array for seamless scrolling
  const extendedCreators = [...creators, ...creators, ...creators];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join 2700+ Thriving Creators
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            See how diverse creators are building successful online businesses and transforming their 
            passion into profitable careers.
          </p>
        </motion.div>

        {/* Dynamic Scrolling Creator Profiles */}
        <div className="relative mb-16 overflow-hidden">
          <motion.div 
            className="flex gap-6"
            animate={{
              x: [0, -1920] // Move right to left
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50, // Much slower scroll speed
                ease: "linear",
              },
            }}
            style={{ width: 'max-content' }}
          >
            {extendedCreators.map((creator, index) => (
              <motion.div
                key={`${creator.id}-${index}`}
                className="relative group flex-shrink-0"
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                <div className="relative w-56 h-72 rounded-2xl overflow-hidden shadow-lg transform group-hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={creator.image} 
                    alt={creator.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="font-bold text-lg mb-2">{creator.name}</h3>
                      <p className="text-sm text-gray-200">{creator.expertise}</p>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Scrolling Statistics Grid */}
        <div className="relative mb-12 overflow-hidden">
          <motion.div 
            className="flex gap-6"
            animate={{
              x: [-1280, 0] // Move left to right
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Much slower scroll speed
                ease: "linear",
              },
            }}
            style={{ width: 'max-content' }}
          >
            {[...stats, ...stats, ...stats].map((stat, index) => (
              <motion.div
                key={`${stat.id}-${index}`}
                className={`${getStatColorClasses(stat.color)} rounded-2xl p-6 text-white text-center shadow-lg flex-shrink-0 w-64`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm font-medium opacity-90">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  );
}