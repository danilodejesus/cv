import yo from './yo-.png';
import './App.css';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

function App(props) {

  const [isWeb, setIsWeb] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const queryParameters = window.location.pathname

  useEffect(() => {
    const isWeb = queryParameters === '/web' ? true : false
    setIsWeb(isWeb)
  }, [0])

  const menu = () => {
    console.log('red')
    setIsOpenMenu(!isOpenMenu)
    window.location = '/web'
  }
  
  return (
    <div className="App">
      <header className={!isWeb ? 'App-header container' : 'App-header container min-height-auto'}>
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
          <img className='box-shadow' onClick={menu} src={yo} width={300}/>
          <div className={isOpenMenu ? 'close' : 'close'}>
            <p>Menu 1</p>
            <p>Menu 2</p>
          </div>
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

      <div className={isWeb ? 'experience container' : 'close'}>
        <div className='experience-left box-shadow'>
          <h2 className=''>Experience</h2>
          <ul>
            <li>
              <h3>Frontend Developer</h3>
              <h4>Latam Airlines / 2022 - 2024</h4>
              <p>
                - Integration with APIS to create dynamic pages based on data from aircraft engines.. <br/>
                - Teamwork with UX for a clean and responsive design.<br/>
                - Integration with Google service accounts for login, hosting and deployment.<br/>
                - Daily code maintenance, debugging and conflict resolution.<br/>
                Stack: Angular, RxJS, GCP, Html, Css, NextJS, ReactJS, Git
              </p>
            </li>
            <li>
              <h3>Frontend Developer</h3>
              <h4>Crack The Code / 2020 - 2022</h4>
              <p>
                - Implement the second version of a payment gateway with currencies for different countries.<br/>
                - Collaborated with the UX/UI design team to improve ecommerce and BO apps, increasing conversions.<br/>
                - Daily code maintance, debugging and customer problem solving.<br/>
                Stack: JavaScript, RxJS, Html, TailwindCss, Vercel, ReactJS, Git
              </p>
            </li>
            <li>
              <h3>Frontend Developer</h3>
              <h4>USIL / 2018 - 2019</h4>
              <p>
                - Develop CRUD maintainers to manage course information.<br/>
                - Increased speed in the implementation of courses pages for students.<br/>
                - I develop my teamwork skills by working closely with 6 other developers.<br/>
                -Engineered robust API integrations, streamlining operations and reducing data processing time by 50% <br/>
                Stack: ReactJS, NextJS, GCP, Html, Css, NextJS, Git
              </p>
            </li>
            <li>
              <h3>Frontend Developer</h3>
              <h4>Alicorp / 2017 - 2018</h4>
              <p>
                - Full Stack app with Javascript (React, Node.js), SQL.<br/>
                - Cloud infrastructure: AWS, Azure.<br/>
                - Spearheaded development of high-traffic e-commerce platform, increasing conversions by 35%.<br/>
                Stack: JavaScript, Angular, NextJS, GCP, Html, Bootstrap, NextJS, Git
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
                  ReactJS - Angular 16
                </p>
              </li>
              <li>
                <p>
                  JavaScript - TypeScript
                </p>
              </li>
              <li>
                <p>
                  Html5 - Css3
                </p>
              </li>
              <li>
                <p>
                  Unit test
                </p>
              </li>
              <li>
                <p>
                  Responsive Design
                </p>
              </li>
              <li>
                <p>
                  Tailwind CSS
                </p>
              </li>
              <li>
                <p>
                  GCP - Azure
                </p>
              </li>
              <li>
                <p>
                  Git - GitHub
                </p>
              </li>
              <li>
                <p>
                  CI/CD Jenkins
                </p>
              </li>
              <li>
                <p>
                  SCRUM - Jira
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
                  Danish
                </p>
              </li>
            </ul>
          </div>

          <div className='box-shadow'>
            <h2 className=''>Courses</h2>
            <ul>
              <li>
                <p>
                  Curso de Prompt Engineering IA
                </p>
              </li>
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
