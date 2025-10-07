import mainArt from './react-icons/mainPhoto.svg'
import FaqItems from './faq-items'

function App() {
  return (
    <div className="page-gradient">
      <div className="faq-card">

        <div className="faq-art">
          <img src={mainArt} alt="Illustration" />
        </div>

        <div className="faq-content">

          <h1 className="faq-title">FAQ</h1>
          <FaqItems />

        </div>

      </div>
    </div>
  )
}

export default App
