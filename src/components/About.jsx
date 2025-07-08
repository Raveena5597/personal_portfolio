import React, { memo, useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL, PERPLEXITY_URL } from "../constants/index";
import { useSpring, animated, config } from "react-spring";
import { SiPerplexity } from "react-icons/si";

const Anchor = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
    aria-label={`Link to ${href}`}
  >
    {children}
  </a>
);

const About = () => {
  // Fade-in effect
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  // Springy effect on image hover
  const [scale, setScale] = useState(1);
  const springProps = useSpring({
    transform: `scale(${scale})`,
    config: config.wobbly,
  });

  // Slide-up effect
  const slideUp = useSpring({
    transform: "translate3d(0,0px,0)",
    from: { transform: "translate3d(0,40px,0)" },
    delay: 200,
  });

  return (
    <animated.div
      style={fadeIn}
      id="about"
      className="container mx-auto flex flex-col items-center justify-center bg-lightDesert min-h-screen"
    >
     <animated.img
  style={{ ...springProps }}
  src="https://i.postimg.cc/ncMGRk12/photo.jpg" // Replace this path
  alt="Raveena"
  className="rounded-full w-64 h-64 border-4 border-darkDesert object-cover mb-8 mt-20"
  onMouseEnter={() => setScale(1.1)}
  onMouseLeave={() => setScale(1)}
/>
      <animated.div style={slideUp}>
  <h1 className="text-4xl font-bold text-darkDesert mb-4 text-center px-8">
    Raveena Putta
  </h1>

  <p className="text-lg text-darkDesert mb-4 text-center px-8">
    I'm Raveena, a frontend-focused software engineer with a strong foundation in React, JavaScript, and UI design. 
    With over 2 years of experience at Grow Indigo, I’ve built scalable dashboards, mobile apps, and reusable UI components 
    that power real-time experiences for thousands of users.
  </p>

  <p className="text-lg text-darkDesert mb-4 text-center px-8">
    I love turning ideas into beautiful, functional interfaces and am continuously learning through hands-on projects and the Scaler Academy. 
    When I’m not coding, you’ll find me exploring new tech trends or writing blogs to share what I learn.
  </p>

  <p className="text-lg text-darkDesert mb-4 text-center px-8">
    Let's build something great together!
  </p>

  <div className="flex justify-center items-center pb-8">
    <Anchor href="https://github.com/Raveena5597">
      <FaGithub size={32} />
    </Anchor>
    <Anchor href="https://www.linkedin.com/in/raveena-vallala-b59126126/">
      <FaLinkedin size={32} />
    </Anchor>
  </div>
</animated.div>

    </animated.div>
  );
};

export default memo(About);
