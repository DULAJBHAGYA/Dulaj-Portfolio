"use client";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { useState } from "react";
import blog1Image from "../assets/images/blog-dio.png";
import blog2Image from "../assets/images/blog-bloc.png";
import blog3Image from "../assets/images/blog-mongodb.png";
import blog4Image from "../assets/images/blog-NodeCRUD.png";
import blog5Image from "../assets/images/blog-AI.jpg";
import blog6Image from "../assets/images/blog-WFH.jpg";


const testimonials = [
  {
    name: "Making HTTP Requests in Flutter: Using the Dio Package",
    image: blog1Image,
    text: "In modern app development, interacting with APIs is a crucial task. Flutter, with its rich ecosystem, provides several ways to...",
    link: "https://medium.com/@dulajupananda/making-http-requests-in-flutter-using-the-dio-package-09d2af361f36",
  },
  {
    name: "Flutter BLoC State Management: A step-by-step guide",
    image: blog2Image,
    text: "In this blog post, we’re going to take a detailed look at Flutter’s BLoC (Business Logic Component) state management approach...",
    link: "https://medium.com/@dulajupananda/flutter-bloc-state-management-a-step-by-step-guide-1f1ab1c358f7",
  },
  {
    name: "Mastering MongoDB: Unleashing the Power of a Document Database",
    image: blog3Image,
    text: "MongoDB, a popular NoSQL database, has gained significant traction in recent years due to its flexibility, scalability...",
    link: "https://medium.com/@dulajupananda/simplifying-data-management-with-crud-operations-in-node-js-eb7da8ed61d9",
  },
  {
    name: "Simplifying Data Management with CRUD Operations in Node.js",
    image: blog4Image,
    text: "Node.js has become a popular platform for building efficient and scalable web applications. One essential aspect of web...",
    link: "https://medium.com/@dulajupananda/simplifying-data-management-with-crud-operations-in-node-js-eb7da8ed61d9",
  },
  {
    name: "Emerging Trends in Artificial Inteligence (AI)",
    image: blog5Image,
    text: "Artificial Intelligence (AI) has emerged as a transformative technology, revolutionizing various industries and reshaping...",
    link: "https://medium.com/@dulajupananda/emerging-trends-in-artificial-inteligence-ai-784479b5e72a",
  },
  {
    name: "The rise of remote work and its impact on the IT industry",
    image: blog6Image,
    text: "Due to the COVID-19 epidemic, there has been a significant change in how we work, with remote work now the norm for many...",
    link: "https://medium.com/@dulajupananda/the-rise-of-remote-work-and-its-impact-on-the-it-industry-30c5a39fc60c",
  },
];

export const TestimonialsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayTestimonials = showAll ? testimonials : testimonials.slice(0, 4);

  return (
    <section id="blogs">
      <div className="py-16 lg:py-24">
        <div className="container">
          <SectionHeader
            eyebrow="Blogs"
            title="Words That Reflect My Journey"
            description="Capturing experiences and lessons from my path as a developer and beyond."
          />

          <div className="mt-12 lg:mt-20 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
              {displayTestimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="md:max-w-none w-full md:p-8 hover:-rotate-3 transition duration-300"
                >
                  <div className="mb-4 -mx-6 -mt-6 md:-mx-8 md:-mt-8">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-3xl"
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                    </div>
                  </div>
                  <p className="mt-2 md:mt-4 text-sm md:text-base text-left">
                    {testimonial.text}
                  </p>

                  <div className="flex justify-end">
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-white h-10 w-full md:w-auto border border-white/15 px-6 rounded-xl font-normal inline-flex items-center justify-center gap-2 mt-4 hover:bg-white/5">
                        <span>Read More</span>
                      </button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10">
            {!showAll && testimonials.length > 4 && (
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition"
              >
                Show More
              </button>
            )}

            {showAll && (
              <button
                onClick={() => setShowAll(false)}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white font-medium transition"
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
