import { LogoGithub, LogoLinkedin, MailOutline } from 'react-ionicons'
import '../Styles/Links.css'

export default function Links() {
  return (
    <div className='links'>
    <a href='' target="_blank">
    <MailOutline
    color={'#08fdd8'} 
    height="200px"
    width="200px"
    cssClasses={'icon'}
    />
    </a>
    <a href='https://github.com/X-e-n-o-r' target="_blank">
    <LogoGithub
    color={'#08fdd8'} 
    title={'github'}
    height="200px"
    width="200px"
    cssClasses={'icon'}
    />
    </a>
    <LogoLinkedin
    color={'#08fdd8'} 
    title={'linkdin'}
    height="200px"
    width="200px"
    cssClasses={'icon'}
    />    
    </div>
  )
}
