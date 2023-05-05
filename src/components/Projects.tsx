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
            <img className='project-image' src='chess.png' alt='chess icon' />
          </div>
        </a>
        <a href="mailto: abc@example.com">
          <div className="project">
            <div className='overlay'>
              <h3>Game</h3>
              <p>Simple text adventure made by me</p>
            </div>
            <img className='project-image' src='adventure.png' alt='adventure game icon' />
          </div>
        </a>
        <a href="">
          <div className="project">
          <div className='overlay'>
              <h3>Downloader</h3>
              <p>Download YouTube videos MP3</p>
            </div>
            <img className='project-image' src='download.png' alt='download icon' />
          </div>
        </a>
      </div>
    </section>
  )
}
