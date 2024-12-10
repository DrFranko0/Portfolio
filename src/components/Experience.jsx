import { motion } from 'framer-motion';
import { useState } from 'react';

const tabs = ["Experience", "Education"];

const experienceData = [
  {
    title: "AI Intern",
    company: "Cognizance",
    date: "June 2024 - September 2024",
    description:
      "A Sentiment Analysis Chatbot to measure the mood and the degree of emotion using a Neural Network from Scratch.",
  },
];

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "KIIT University",
    date: "2021 - 2025",
    description:
      "Graduated with a focus on data structures, and AI/ML while contributing to open source models.",
  },
];

const TabContent = ({ data }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="space-y-8"
  >
    {data.map((item, index) => (
      <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-1">{item.title || item.degree}</h3>
        <p className="text-gray-400 mb-2">{item.company || item.institution}</p>
        <p className="text-gray-400 mb-2 italic">{item.date}</p>
        <p>{item.description}</p>
      </div>
    ))}
  </motion.div>
);

export default function Experience() {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <section id="experience" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-4 text-center"
        >
          {activeTab}
        </motion.h2>
        <p className="text-gray-400 text-center mb-8">
          A glimpse into my academic and professional journey, shaping my growth in the tech world.
        </p>
        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === tab
                  ? "bg-gray-900 text-white"
                  : "bg-gray-900 text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Content */}
        {activeTab === "Experience" ? (
          <TabContent data={experienceData} />
        ) : (
          <TabContent data={educationData} />
        )}
      </div>
    </section>
  );
}