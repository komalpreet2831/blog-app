import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
        Welcome to Zeta Blog, your go-to destination for insightful articles, tips, and resources
         on a wide range of topics, from technology and travel to lifestyle and wellness. 
         Founded in 2024, Zeta Blog has quickly established itself as a trusted source of information,
          aiming to empower readers with valuable insights and inspire them to explore new ideas and
           perspectives.
           Our Mission At Zeta Blog, our mission is simple yet ambitious: to empower our readers with 
           knowledge and inspiration. In today's fast-paced world, we understand the importance of staying
            informed and connected. That's why we are committed to
          delivering high-quality, well-researched content that resonates with our diverse audience.
        </p>
        <p>
        Informative Articles: Dive deep into topics ranging from the latest technological innovations and travel destinations to wellness tips and lifestyle trends. Our team of expert writers and 
        contributors work tirelessly to bring you articles that are both 
        informative and engaging.
         Expert Insights: Benefit from the expertise of industry professionals, thought leaders, and influencers wh
      o contribute to our blog. Whether it's a tech review from a seasoned gadget guru or travel advice from a seasoned
       globetrotter, our contributors bring unique perspectives and valuable insights to our platform.
     Interactive Community: Join our growing community of like-minded individuals who share a passion for learning
   , exploring, and connecting. Engage with fellow readers, share your thoughts and experiences, and be part of a
     supportive and inclusive community that values open dialogue and mutual respect.
        </p>
        <p>
        Expert Insights: Gain access to expert perspectives from industry leaders, seasoned travelers, 
        and lifestyle influencers. Our contributors bring a wealth of knowledge and experience to the table,
         providing you with valuable insights that you won't find anywhere else.
    Interactive Community: Join our community of engaged readers who share a passion for learning, e
    xploration, and personal growth. Participate in discussions, share your own experiences, and connect
    with like-minded individuals who are on a similar journey of discovery.
        </p>
        <p>
        We invite you to explore Zeta Blog and discover the wealth of 
        information and inspiration that awaits you. Whether you're a tech enthusiast, a
         seasoned traveler, or someone looking to enhance your lifestyle, we have something for you. Feel free to Contact Us with any questions, feedback, or collaboration inquiries. 
        Thank you for being a valued member of the Zeta Blog community!
        </p>
      </div>
    </article>
  );
};

export default About;
