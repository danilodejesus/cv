import Experience from "../components/experiences/Experience";
import Main from "../components/main/Main";

function Developer(props) {

  return (
    <div className={props.cook != undefined ? 'App cook' : 'd-none'}>
      <Main></Main>

      <Experience></Experience>
    </div>
  )

}

export default Developer;