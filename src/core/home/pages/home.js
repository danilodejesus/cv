import Mains from "../components/main/Mains";
import Experiences from "../components/experience/Experiences";

function Home(props) {

  return (
    <div className={props.isHome == null ? 'App' : 'd-none'}>
      <Mains></Mains>

      <Experiences></Experiences>
    </div>
  )

}

export default Home;