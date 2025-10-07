import { useState } from 'react'
import arrowDown from './react-icons/arrowDown.svg'
import arrowUp from './react-icons/arrowUp.svg'

export type FaqItem = {
  question: string
  answer: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How many team members can I invite?',
    answer:
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
  },
  {
    question: 'What is the maximum file upload size?',
    answer:
      'No more than 2GB. All files in your account must fit your allotted storage space.',
  },
  {
    question: 'How do I reset my password?',
    answer:
      "Click “Forgot password” from the login page and follow the instructions. If you don't receive a link, please contact support.",
  },
  {
    question: 'Can I cancel my subscription?',
    answer:
      'Yes. You can cancel at any time in your account settings. Your plan will remain active until the end of the billing period.',
  },
  {
    question: 'Do you provide additional support?',
    answer:
      'Yes, premium members receive priority email and chat support. Enterprise plans include a dedicated success manager.',
  },
]

function FaqItems() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  return (
    <ul className="faq-list" role="list">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <li key={item.question} className={`faq-row ${isOpen ? 'open' : ''}`}>
            <button
              className="faq-question"
              aria-expanded={isOpen}
              aria-controls={`answer-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <img src={isOpen ? arrowUp : arrowDown} alt="toggle" />
            </button>
            <div
              id={`answer-${index}`}
              role="region"
              className="faq-answer"
              aria-hidden={!isOpen}
            >
              {item.answer}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default FaqItems
