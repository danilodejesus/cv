import './ExperienceStyles.css'

function Experience() {

  return (
    <div className={'Experience container'}>
      <div className='Experience-left box-shadow'>
        <h2 className=''>Experience</h2>
        <ul>
          <li>
            <h3>Waiter in Restaurant</h3>
            <h4>Mama Rosa / 2023 - 2024</h4>
            <p>
              - I provided a comprehensive service to clients, from welcome to payment, ensuring a smooth and pleasant experience.<br/>
              - I took and transmitted orders accurately to kitchen and bar staff, minimizing errors and ensuring customer satisfaction.<br/>
              - I kept the dining room clean and organized, prepared tables for reservations, and managed seating arrangements to optimize customer flow.<br/>
              - Customers wrote special mentions for my good service and gave their 5-star rating for service, food and atmosphere for the Google Maps.
            </p>
          </li>
          <li>
            <h3>Waiter in Restaurant</h3>
            <h4>El Salto del Fraile / 2021 - 2022</h4>
            <p>
              - Taking orders and advising on the menu, including wine pairing recommendations.<br/>
              - Table service ensuring an exceptional culinary experience.<br/>
              - Coordination with the kitchen team to guarantee the precision and quality of the dishes served.<br/>
              - Addressed and resolved customer complaints efficiently and professionally, maintaining a high level of satisfaction. <br/>
              - Provide exceptional service to customers in a high-end restaurant, ensuring a memorable dining experience.
            </p>
          </li>
          <li>
            <h3>Waiter in Restaurant</h3>
            <h4>Roza Náutica / 2020 - 2021</h4>
            <p>
              - One business client mentioned how my proactivity in serving his table, such as refilling drinks and being attentive to his needs, made his business lunch a seamless success.<br/>
              - Several families noted how my friendly manner and ability to interact with the children made their experience relaxed and enjoyable.<br/>
              - Maintain a friendly and professional attitude even during high-pressure times.<br/>
            </p>
          </li>
          <li>
            <h3>Waiter in Hotel</h3>
            <h4>Hotel Boulevard / 2018 - 2020</h4>
            <p>
              - Service in the hotel restaurant and room service.<br/>
              - Preparation and assembly of special events and banquets.<br/>
              - Handling special guest requests and maintaining high standards of hospitality.<br/>
            </p>
          </li>
        </ul>
      </div>
      <div className='Experience-right'>
        <div className='box-shadow'>
          <h2 className=''>Skills</h2>
          <ul>
            <li>
              <p>
                Efficiency in order taking and food delivery
              </p>
            </li>
            <li>
              <p>
                Coordination during peak hours
              </p>
            </li>
            <li>
              <p>
                Attention to detail
              </p>
            </li>
            <li>
              <p>
                Efficient communication
              </p>
            </li>
            <li>
              <p>
                Speed ​and Efficiency
              </p>
            </li>
            <li>
              <p>
                Adaptability
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div> 
  )
}

export default Experience