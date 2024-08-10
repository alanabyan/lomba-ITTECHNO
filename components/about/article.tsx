import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutSection = () => {

  React.useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  });

  return (
    <div className=" h-[100vh] text-center items-center relative flex justify-center -left-6 md:left-20 top-[6rem] z-20 "
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="900"
     >
      <div className="absolute left-0">
        <h1 className="lg:text-5xl text-4xl font-semibold text-white ">What is AI ?</h1>
        <article className="text-white mt-5 lg:text-xl text-xl lg:px-0 px-4 w-[370px] md:min-w-80">
          AI (Artificial Intelligence) is a technology that allows computers and
          systems to perform tasks that normally require human intelligence, such
          as understanding language, recognizing images, making decisions and can
          be used to write code.
        </article>
      </div>
    </div>
  );
};

export default AboutSection;