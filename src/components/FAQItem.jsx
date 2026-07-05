import { Plus } from 'lucide-react';

function FAQItem({ question, answer, isOpen, onClick }) {
  const answerId = `faq-answer-${question.replace(/\s+/g, '-').toLowerCase().slice(0, 40)}`;

  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <button
        type="button"
        className="faq-question"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        {question}
        <span className="faq-icon" aria-hidden="true">
          <Plus size={16} />
        </span>
      </button>
      <div
        id={answerId}
        className="faq-answer"
        role="region"
        aria-hidden={!isOpen}
      >
        {answer}
      </div>
    </div>
  );
}

export default FAQItem;
