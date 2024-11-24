import yo from '../../../../assets/home/yo-.png';
import './MainStyles.css'

function Mains() {

  return (
    <div className={'Main container'}>
      <div className='Main-text'>
        <u>
          HELLO, I AM
        </u>
        <br/>
        <h1>
          <strong>Danilo Viacava</strong>
        </h1>
        <p className='Main-intro box-shadow'>
          Senior Frontend Developer with 6+ years of experience, specialized in ReactJS, Angular (v4-14), RxJS, Angular Material, TypeScript, CSS/Sass and responsive design.<br/><br/> Expert in SOLID principles, Clean Code, Microfrontends, monorepos and patterns such as Atomic Design and BEM. <br/><br/> Extensive experience in frontend development, testing (Jasmine, Angular Unit Testing) and teamwork under SCRUM. <br/><br/>With knowledge in software architecture and complementary experience in backend with Python and Spring Boot.
        </p>
      </div>

      <div className='Main-info'>
        <img className='Main-info-img box-shadow' src={yo} width={300} alt='Danilo Viacava'/>
        <ul className='Main-info-datos box-shadow'>
          <li>
            <p>
              Country: Perú
            </p>
          </li>
          <li>
            <p>
              Age: 30 years
            </p>
          </li>
          <li>
            <p>
              Work Permit: Available
            </p>
          </li>
          <li>
            <p>
              Phone: +45 60 90 22 94 
            </p>
          </li>
          <li>
            <p>
              Email: danilojesusv@gmail.com
            </p>
          </li>
        </ul>
      </div>
    </div>
  )

}

export default Mains