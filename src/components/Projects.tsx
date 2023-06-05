import { TypeAnimation } from 'react-type-animation';
import '../Styles/Projects.css'

export default function Projects() {
  return (
    <section className="work-section">
      <h2 className='project-text'>
      <TypeAnimation
      sequence={[
        'My projects', // Types 'One'
        3000, // Waits 1s
        'Chess', // Deletes 'One' and types 'Two'
        3000, // Waits 2s

        'Sudoku',
        3000,
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      cursor={true}
      repeat={Infinity}
    />
      </h2>
      <div className="projects">
        <a href="https://x-e-n-o-r.github.io/ReactChess/" target="_blank">
          <div className="project">
            <div className='overlay'>
              <h3>Chess</h3>
              <p>Made with React and OOP principles</p>
            </div>
            <img className='project-image' src='chess.png' alt='chess icon' />
          </div>
        </a>
        <a href="https://x-e-n-o-r.github.io/Adventure-Game/" target="_blank">
          <div className="project">
            <div className='overlay'>
              <h3>Infernium</h3>
              <p>Simple text adventure in cyberpunk cetting</p>
            </div>
            <img className='project-image' src='adventure.png' alt='adventure game icon' />
          </div>
        </a>
        <a href="https://x-e-n-o-r.github.io/Vue-Sudoku/" target="_blank">
          <div className="project">
          <div className='overlay'>
              <h3>Sudoku</h3>
              <p>Simple sudoku game made in Vue.js</p>
            </div>
            <img className='project-image' src='sudoku(1).png' alt='download icon' />
          </div>
        </a>
      </div>
    </section>
  )
}
