import '../Styles/ContactButton.css'
import '../Styles/Header.css'
export default function Header() {
  return (
    <header className="section-header">
      <div className="text-zone">
        <h1>
          <span className='letter'>H</span><span className='letter'>i</span><span className='letter'>,</span><br/>
          <span className='letter'>I</span><span className='letter'> a</span><span className='letter'>m</span><span className='letter'> L</span><span className='letter'>e</span><span className='letter'>o</span><span className='letter'>,</span><br/>
          <span className='letter'>W</span><span className='letter'>e</span><span className='letter'>b</span><span className='letter'> d</span><span className='letter'>e</span><span className='letter'>v</span><span className='letter'>e</span><span className='letter'>l</span><span className='letter'>o</span><span className='letter'>p</span><span className='letter'>e</span><span className='letter'>r</span>
        </h1>
        <p className="gray-text">Front-end developer</p>

        <a href="#down" className='cntbtn-wrapper'>
          <button className="contact-button">Contact me</button>
        </a>
      </div>
    </header>
  )
}
