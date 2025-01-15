import React from "react";
import "./style.css";
import blogPost from "../../assets/blog-img/thumbs/do-and-donts.webp";
import blogPost01 from "../../assets/blog-img/thumbs/char-dham-yatra-intro.webp";
import blogPost02 from "../../assets/blog-img/thumbs/char-dham-registration.webp";

const BlogPost = ({
  imageSrc,
  altText,
  link,
  title,
  author,
  lastEdited,
  description,
  actionLink,
  actionText,
}) => {
  return (
    <div className="blog-post d-flex flex-column col-4 align-center">
      <div className="blog-image">
        <img src={imageSrc} loading="lazy" alt={altText} />
      </div>
      <div className="blog-content">
        <a href={link} className="font-black decoration-none">
          <h3>{title}</h3>
        </a>
        <h4 style={{ fontSize: "12px" }}>
          <i className="fa fa-pencil-square" aria-hidden="true"></i> Author:{" "}
          {author} | <i className="fa fa-cogs" aria-hidden="true"></i> Last
          Edited: {lastEdited}
        </h4>
        <p>{description}</p>
        <a href={actionLink} className="blog-link font-blue">
          {actionText}
        </a>
      </div>
    </div>
  );
};

const UttarakhandBlogsSection = () => {
  return (
    <section id="sec-6" className="section-6">
      <div className="container">
        <div className="row w-100 section-3-wrapper">
          <div className="col-12">
            <h2 className="text-center" style={{ fontSize: "30px" }}>
              <i className="fa fa-book" aria-hidden="true"></i> Must Read These
              Most Useful Uttarakhand Tour Articles Or Discover{" "}
              <a href="https://devbhumitourism.com/uttarakhand-travel-blogs/">
                <br />
                Uttarakhand Travel Blogs{" "}
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>{" "}
              OR{" "}
              <a href="https://devbhumitourism.com/uttarakhand-tourist-places/">
                Uttarakhand Tourist Places{" "}
                <i className="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </h2>
            <h3 className="text-center" style={{ fontSize: "20px" }}>
              Expand your knowledge from these most useful blog posts written by
              my personal hands! Hahaha!
            </h3>
            <p className="text-center">
              Our Uttarakhand travel blogs are your gateway to exploring one of
              India’s most captivating states. Whether you're an adventure
              enthusiast or a spiritual seeker, these blogs cover everything
              from trekking through the Himalayas to serene weekend getaways.
              They offer detailed Uttarakhand itineraries, tips on offbeat
              destinations, and recommendations for must-visit spots like
              Nainital, Rishikesh, and Jim Corbett National Park. Packed with
              insider knowledge, our blogs help you uncover hidden gems, explore
              local culture, and plan memorable trips. From exploring snow-clad
              peaks to soaking in the spiritual aura of Char Dham, our
              Uttarakhand blogs provide a wealth of information for travelers of
              all kinds. Devbhumi Tourism's blogs provide detailed guides, local
              tips, and hidden spots to make your Uttarakhand journey
              unforgettable.
            </p>
          </div>
        </div>

        {/* Latest Blogs */}
        <div className="row-flex w-100 blog-wrapper mt-20">
          <BlogPost
            imageSrc={blogPost02}
            altText="uttarakhand tour"
            link="https://devbhumitourism.com/how-to-register-for-char-dham-yatra/"
            title="Char Dham Registration Guide: First Step In Char Dham Planning"
            author="Lalit Mohan"
            lastEdited="05 Sep, 2024"
            description="A valid Char Dham Yatra Registration is mandatory to embark on this spiritual oddyssey. Learn how to get a valid Char Dham Yatra registration yourself with this remarkable guide for Yatra registration."
            actionLink="https://devbhumitourism.com/how-to-register-for-char-dham-yatra/"
            actionText="Char Dham Yatra Registration Process"
          />

          <BlogPost
            imageSrc={blogPost01}
            altText="uttarakhand tour package"
            link="https://devbhumitourism.com/char-dham-yatra/"
            title="Char Dham Yatra: An Intro To The Ancient Himalayan Gods"
            author="Lalit Mohan"
            lastEdited="02 Aug, 2024"
            description="One who does this quadrilateral pilgrimage circuit with complete faith gets a place in heaven, it's said like that. As curious as it is, it also involves many considerations about a well-planned Himalayan Char Dham Yatra."
            actionLink="https://devbhumitourism.com/char-dham-yatra/"
            actionText="Introducing The Char Dham Yatra"
          />

          <BlogPost
            imageSrc={blogPost}
            altText="uttarakhand tour packages"
            link="https://devbhumitourism.com/things-to-do-and-dont-during-char-dham-yatra/"
            title="Things To Do and Don't Do During A Char Dham Expedition"
            author="Lalit Mohan"
            lastEdited="10 Jul, 2024"
            description="There are really important things which you must be aware of before heading into this auspicious journey. These important points are made to ensure the safety and convenience of all the pilgrims."
            actionLink="https://devbhumitourism.com/things-to-do-and-dont-during-char-dham-yatra/"
            actionText="Do & Don't Do While Char Dham Yatra"
          />
        </div>
      </div>
    </section>
  );
};

export default UttarakhandBlogsSection;
