import { LogoGithub, LogoLinkedin, MailOutline } from 'react-ionicons'
import '../Styles/Links.css'

export default function Links() {
  return (
    <div className='links'>
    <a href='mailto: leowebd3v@gmail.com?subject' target="_blank">
    <MailOutline
    color={'#08fdd8'} 
    height="10vw"
    width="10vw"
    cssClasses={'icon'}
    />
    </a>
    <a href='https://www.linkedin.com/in/lev-socot-12874b272/' target="_blank">
    <LogoLinkedin
    color={'#08fdd8'} 
    height="10vw"
    width="10vw"
    cssClasses={'icon2'}
    />
    </a>
    <a href='https://github.com/X-e-n-o-r' target="_blank">
    <LogoGithub
    color={'#08fdd8'} 
    height="10vw"
    width="10vw"
    cssClasses={'icon2'}
    />
    </a>
    </div>
  )
}