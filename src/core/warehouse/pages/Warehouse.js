import Experience from "../components/experiences/Experience";
import Main from "../components/main/Main";

function WareHouse(props) {

  return (
    <div className={props.warehouse != undefined ? 'App warehouse' : 'd-none'}>

      <Main></Main>

      <Experience></Experience>
    </div>
  )

}

export default WareHouse;