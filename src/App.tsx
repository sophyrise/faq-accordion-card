import mainArt from './react-icons/mainPhoto.svg'
import underArt from './react-icons/underPhoto.svg'
import FaqItems from './faq-items'

function App() {
  return (
    <div className="page-gradient">
      <img className="mainPhoto" src={mainArt} alt="Illustration1" />
      <img className="underPhoto" src={underArt} alt="Illustration2" />

      <div className="faq-card">
        <div className="faq-content">

          <h1 className="faq-title">FAQ</h1>
          <FaqItems />

        </div>

      </div>
    </div>
  )
}

export default App
