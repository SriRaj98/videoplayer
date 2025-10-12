import './App.css'
import { apiPath } from './service/constants'

function App() {
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
