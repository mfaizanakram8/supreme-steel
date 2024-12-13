'use client'
import { useState } from "react";

interface AccordionItem {
  title: string;
  description: string;
}

const accordionData: AccordionItem[] = [
  {
    title: "Top End ERP Solution With Traceability",
    description: "We become more productive and successful in our different roles, and get the real-time visibility into the inner workings of our operations.",
  },
  { title: "Quality Products", description: "We become more productive and successful in our different roles, and get the real-time visibility into the inner workings of our operations." },
  { title: "Fully Equipped Warehouse With Modern Infrastructure", description: "We become more productive and successful in our different roles, and get the real-time visibility into the inner workings of our operations." },
  { title: "Inhouse Testing Services", description: "We become more productive and successful in our different roles, and get the real-time visibility into the inner workings of our operations." },
  { title: "ISO 9001:2008 Certification", description: "We become more productive and successful in our different roles, and get the real-time visibility into the inner workings of our operations." },
  { title: "We Deliver All Over UAE", description: "We become more productive and successful in our different roles, and get the real-time visibility into the inner workings of our operations." },
  { title: "Competitive Pricing", description: "We become more productive and successful in our different roles, and get the real-time visibility into the inner workings of our operations." },
  { title: "No Minimum Order", description: "We become more productive and successful in our different roles, and get the real-time visibility into the inner workings of our operations." },
];

const WhyUs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto p-4 ">
      <h2 className="text-center text-red-600 font-bold text-lg mb-6">WHY US</h2>
      <div className="hover-effect">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-100"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                <span className="font-medium text-gray-800">{item.title}</span>
              </div>
              <span className="text-red-600">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && item.description && (
              <div className="p-4 bg-gray-50 text-gray-600">{item.description}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
