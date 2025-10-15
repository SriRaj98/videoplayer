import './App.css'
import { portNumber } from './service/constants'


function App() {

  const  apiPath=`http://${window.location.pathname}:${portNumber}`
  const sounrce = `${apiPath}/video`
  return (
    <>
      <video id="videoplayer" width="1300" height={702} controls muted={false} autoPlay={true}>
      <source src={sounrce} type="video/mp4" />
    </video>
    </>
  )
}

export default App
