import '../Styles/Projects.css'

export default function Projects() {
  return (
    <section className="work-section">
      <h2 className='project-text'>My Projects</h2>
      <div className="projects">
        <a href="">
          <div className="project">
            <div className='overlay'>
              <h3>Chess</h3>
              <p>Made with React and OOP principles</p>
            </div>
            <img className='project-image' src='../chess.png' alt='chess icon' />
          </div>
        </a>
        <a href="">
          <div className="project">
          <div className='overlay'>
              <h3>Chess</h3>
              <p>Made with React and OOP principles</p>
            </div>
            <img className='project-image' src='../chess.png' alt='chess icon' />
          </div>
        </a>
        <a href="">
          <div className="project">
          <div className='overlay'>
              <h3>Chess</h3>
              <p>Made with React and OOP principles</p>
            </div>
            <img className='project-image' src='../chess.png' alt='chess icon' />
          </div>
        </a>
      </div>
    </section>
  )
}
