import './ExperienceStyles.css'

function Experience() {

  return (
    <div className={'Experience container'}>
      <div className='Experience-left box-shadow'>
        <h2 className=''>Experience</h2>
        <ul>
          <li>
            <h3>Warehouse assistant</h3>
            <h4>Mama Rosa / 2023 - 2024</h4>
            <p>
              - Daily coordination of reception, storage and distribution of products.<br/>
              - Maintenance and organization of inventory using automated management systems.<br/>
              - Order management and preparation for distribution, ensuring efficient delivery times.<br/>
              - Training and supervision of personnel in storage and security procedures.
            </p>
          </li>
          <li>
            <h3>Warehouse Manager</h3>
            <h4>The Lion Imports / 2021 - 2022</h4>
            <p>
              - Responsible for the reception, storage and distribution of automobile parts, ensuring correct organization and accessibility.<br/>
              - Implementation of the use of drones to carry out periodic inventories, reducing time and increasing the precision in stock counting.<br/>
              - Identification and labeling of parts, maintaining detailed records in inventory management systems<br/>
              - Coordination with the sales department to ensure availability of critical parts and timely delivery to customers. <br/>
              - Supervision of the status of spare parts and management of returns or claims with suppliers.
            </p>
          </li>
          <li>
            <h3>Warehouse Assistant</h3>
            <h4>Roza Náutica / 2020 - 2021</h4>
            <p>
              - Support in warehouse organization, ensuring adequate storage of spare parts according to technical specifications.<br/>
              - Use of drones to inspect hard-to-reach areas and carry out more efficient inventories.<br/>
              - Helps in preparing orders and managing shipments, ensuring compliance with delivery times.<br/>
              - Maintaining accurate records and continually updating inventory levels.<br/>
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
                Inventory Management
              </p>
            </li>
            <li>
              <p>
                Drone Technology
              </p>
            </li>
            <li>
              <p>
                Knowledge of Parts
              </p>
            </li>
            <li>
              <p>
                Efficient communication
              </p>
            </li>
            <li>
              <p>
                Management Systems
              </p>
            </li>
            <li>
              <p>
                Attention to Detai
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div> 
  )
}

export default Experience