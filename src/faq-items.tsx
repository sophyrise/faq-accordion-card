import { useState } from 'react'
import arrowDown from './react-icons/arrowDown.svg'
import arrowUp from './react-icons/arrowUp.svg'

export type FaqItem = {
  question: string
  answer: string
}

const faqs = [
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
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="faq-list">
      {faqs.map((item, i) => (
        <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            <p>{item.question}</p>
            <img src={open === i ? arrowUp : arrowDown} alt="" className="faq-icon"/>
          </button>

          {open === i && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  )
}

export default FaqItems
