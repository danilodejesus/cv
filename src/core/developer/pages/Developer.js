
function Developer(props) {

  console.log(props)

  return (
    <div className={props.isDeveloper != undefined ? 'good' : 'd-none'}>
      <h1>Hola Developer</h1>
    </div>
  )

}

export default Developer;