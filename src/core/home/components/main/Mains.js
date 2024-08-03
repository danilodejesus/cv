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
        <p>
          <strong>Danilo Viacava</strong>
        </p>
        <p className='Main-intro box-shadow'>
          I am looking for challenging opportunities in Copenhagen that allow me to apply my skills and experience in web development to contribute to the success of a dynamic company.
          <br/><br/>
          I have permission to work in Denmark and also have communication and teamwork skills, developed through collaborative projects.
          <br/><br/>
          I am motivated by the opportunity to grow professionally in an innovative and multicultural environment like Denmark.
          <br/><br/>
          Outside of work, I enjoy exercising and being with my family.
          <br/><br/>
          I am willing to relocate to Copenhagen and have the flexibility to start a new position as soon as necessary.
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