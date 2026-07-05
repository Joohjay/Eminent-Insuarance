import { useState } from 'react';
import SectionHeading from './SectionHeading';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: 'What types of insurance do you offer?',
    answer: 'We offer motor, health, life, travel, marine, fire, business, engineering, liability, agriculture, group, and professional indemnity insurance.',
  },
  {
    question: 'How can I get an insurance quote?',
    answer: 'You can request a quote by clicking the Get Quote button, calling us, sending an email, or reaching out via WhatsApp. Our advisors will respond promptly.',
  },
  {
    question: 'How long does the claim process take?',
    answer: 'Claim processing time varies by policy type and complexity. We work closely with insurers to ensure fast, transparent, and fair settlements.',
  },
  {
    question: 'Can I customize my insurance plan?',
    answer: 'Yes. We assess your unique risks and budget to recommend and customize a plan that suits your personal or business needs.',
  },
  {
    question: 'Do you offer corporate or group insurance?',
    answer: 'Yes, we provide group medical, life, personal accident, and other employee benefit schemes for businesses of all sizes.',
  },
  {
    question: 'How do I contact customer support?',
    answer: 'You can reach us by phone at +255 781 585 781, email at eminentinsurance@hotmail.com, or WhatsApp at any time.',
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our insurance products and services."
        />
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
