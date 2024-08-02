import Image from "next/image";
import Dartmouth from '@/public/images/Dartmouth.jpeg'
import Eliza from '@/public/images/ELIZA.png'
import DeepBlue from '@/public/images/DeepBlue.jpg'
import Watson from '@/public/images/Watson.jpg'
import DeepMind from '@/public/images/Google.jpg'
import Gpt3 from '@/public/images/GPT3.png'
import Gpt4 from '@/public/images/GPT4.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";



export default function Timeline() {

  React.useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  });

  return (
    <>
    {events.map((time, index) => (
      <div
      key={index}
      className="relative max-w-[1200px] mx-auto py-40 bg-black  after:absolute after:w-[6px] after:h-full after:bg-white after:top-0 after:left-[50%] after:ml-[-3px]">
        <div className={`py-[10px] px-[50px] relative w-[50%] bg-black bg-opacity-[0.2] ${index % 2 == 0 ? 'left-container' : 'right-container'}`}>
          <div 
          className="py-5 px-[30px] bg-white relative rounded-[6px] text-[15px]"
          data-aos="fade-up"
          >
            <div 
            className={`lg:w-20 lg:h-20 w-11 h-11 rounded-full overflow-hidden z-10 absolute ${index % 2== 0 ? 'right-[-75px] top-[50px]' : 'left-[-75px] top-[50px]'}`}
            data-aos='zoom-in-down'
            data-aos-delay='200'
            >
              <Image src={time.image} alt={time.event} width={100} height={100} className={`w-full h-full object-cover `} />
            </div>
            <h2 
            className="text-xl font-bold "
            data-aos='fade-up'
            data-aos-delay='600'
            >
              {time.event}
            </h2>
            <small 
            className="font-semibold text-[1.7vh]"
            data-aos='fade-up'
            data-aos-delay='800'
            >
              {time.year}
            </small>
            <p data-aos='fade-up' data-aos-delay='1000'>{time.description}</p>
          </div>
        </div>
      </div>

    ))}
    </>
  );
};

const events = [
  { 
    year: 1956, 
    event: 'The term AI is coined at the Dartmouth Conference.',
    description: 'The Dartmouth Conference, held in the summer of 1956, is considered the founding event of artificial intelligence as a field. Organized by John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon, it was the first use of the term "artificial intelligence".',
    image: Dartmouth 
  },
  { 
    year: 1966, 
    event: 'ELIZA, the first chatbot, is created.', 
    description: 'Joseph Weizenbaum created ELIZA, a computer program that can simulate a conversation with a human. It was an early example of natural language processing (NLP).',
    image: Eliza 
  },
  { 
    year: 1997, 
    event: 'IBM\'s Deep Blue defeats world chess champion Garry Kasparov.', 
    description: 'In 1997, IBM\'s chess-playing computer, Deep Blue, defeated world champion Garry Kasparov in a six-game match. This was a significant milestone in AI development.',
    image: DeepBlue 
  },
  { 
    year: 2011, 
    event: 'IBM Watson wins Jeopardy! against former champions.', 
    description: 'IBM Watson, a question-answering computer system, competed on the quiz show Jeopardy! and defeated two of the game\'s greatest champions, Ken Jennings and Brad Rutter.',
    image: Watson 
  },
  { 
    year: 2014, 
    event: 'Google DeepMind\'s AlphaGo defeats professional Go player.', 
    description: 'In 2014, Google DeepMind\'s AlphaGo became the first AI program to defeat a professional human player at the game of Go. It later defeated world champion Lee Sedol in 2016.',
    image: DeepMind 
  },
  { 
    year: 2020, 
    event: 'OpenAI\'s GPT-3 is released.', 
    description: 'OpenAI released GPT-3, a state-of-the-art language processing AI model that can generate human-like text based on the input it receives. It has 175 billion parameters.',
    image: Gpt3
  },
  { 
    year: 2023, 
    event: 'OpenAI releases GPT-4.', 
    description: 'OpenAI released GPT-4, an even more advanced version of its predecessor, with significant improvements in understanding and generating human language.',
    image: Gpt4 
  }
];