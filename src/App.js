import yo from './yo-.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <p className='text'>
          HELLO, I AM
          <br/>
          <strong>Danilo Viacava</strong>
          <ul className='box-shadow'>
            <li style={{display: 'none'}}>
              <p>
                Frontend Developer
              </p>
            </li>
            <li style={{display: 'none'}}>
              <p>
              Drone Pilot
              </p>
            </li>
            <li>
              <p style={{display: 'none'}}>
                New in Denmark
              </p>
              <p>
                I am looking for challenging opportunities in Copenhagen that allow me to apply my skills and experience in web development or similar activities to contribute to the success of a dynamic company.
                <br/><br/>
                I have permission to work in Denmark and also have communication and teamwork skills, developed through collaborative projects.
                <br/><br/>
                I am motivated by the opportunity to grow professionally in an innovative and multicultural environment like Denmark.
                <br/><br/>
                Outside of work, I enjoy exercising and being with my family.
                <br/><br/>
                I am willing to relocate to Copenhagen and have the flexibility to start a new position as soon as necessary.
              </p>
            </li>
          </ul>
        </p>
        <div className='img'>
          <img className='box-shadow' src={yo} width={300}/>
          <ul className='datos box-shadow'>
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
                Phone: +45 60 90 22 94 
              </p>
            </li>
            <li>
              <p>
                Email: danilojesusv@gmail.com
              </p>
            </li>
            <li>
              <p>
                Address: Tofthøjvej 18 2th, 4130
              </p>
            </li>
          </ul>
        </div>
      </header>

      <div className='experience container'>
        <div className='experience-left box-shadow'>
          <h2 className=''>Experience</h2>
          <ul>
            <li>
              <h3>Frontend Developer</h3>
              <h4>Latam Airlines</h4>
              <p>
                - Integración con APIS para crear páginas dinámicas basadas en datos de los motores de los aviónes. 
                - Trabajo en equipo con UX para un diseño limpio y responsivo.
                - Integración con cuentas de servicio de Google para login, hosting and deployment.
                - Mantenimiento diario de codigo, depuracion y resolución de conflictos.
                Stack: Angular, RxJS, GCP, Html, Css, NextJS, ReactJS, Git
              </p>
            </li>
            <li>
              <h3>Frontend Developer</h3>
              <h4>Latam Airlines</h4>
              <p>
                - Integración con APIS para crear páginas dinámicas basadas en datos de los motores de los aviónes. 
                - Trabajo en equipo con UX para un diseño limpio y responsivo.
                - Integración con cuentas de servicio de Google para login, hosting and deployment.
                - Mantenimiento diario de codigo, depuracion y resolución de conflictos.
                Stack: Angular, RxJS, GCP, Html, Css, NextJS, ReactJS, Git
              </p>
            </li>
            <li>
              <h3>Frontend Developer</h3>
              <h4>Latam Airlines</h4>
              <p>
                - Integración con APIS para crear páginas dinámicas basadas en datos de los motores de los aviónes. 
                - Trabajo en equipo con UX para un diseño limpio y responsivo.
                - Integración con cuentas de servicio de Google para login, hosting and deployment.
                - Mantenimiento diario de codigo, depuracion y resolución de conflictos.
                Stack: Angular, RxJS, GCP, Html, Css, NextJS, ReactJS, Git
              </p>
            </li>
          </ul>
        </div>
        <div className='experience-right'>
          <div className='box-shadow'>
            <h2 className=''>Skills</h2>
            <ul>
              <li>
                <p>
                  ReactJS
                </p>
              </li>
              <li>
                <p>
                  RxJS
                </p>
              </li>
              <li>
                <p>
                  Angular 16
                </p>
              </li>
              <li>
                <p>
                  TypeScript
                </p>
              </li>
              <li>
                <p>
                  Git - GitHub
                </p>
              </li>
              <li>
                <p>
                  Html5 - Css3
                </p>
              </li>
              <li>
                <p>
                  Responsive Design
                </p>
              </li>
              <li>
                <p>
                  SCRUM
                </p>
              </li>
            </ul>
          </div>

          <div className='box-shadow'>
            <h2 className=''>Languages</h2>
            <ul>
              <li>
                <p>
                  Spanish (native)
                </p>
              </li>
              <li>
                <p>
                  English
                </p>
              </li>
              <li>
                <p>
                  Dansk
                </p>
              </li>
            </ul>
          </div>

          <div className='box-shadow'>
            <h2 className=''>Courses</h2>
            <ul>
              <li>
                <p>
                  Professional JavaScript Course
                </p>
              </li>
              <li>
                <p>
                  Angular Course for the Web
                </p>
              </li>
              <li>
                <p>
                  ReactJS Course
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
