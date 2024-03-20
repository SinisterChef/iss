import Fetch from '../components/fetch';
import AstroCard from '../components/AstroCard';
import './App.css';


//map compontent

export default function App() {
  return (
    <div>
      {/* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/> */}
      <Fetch/>
      <AstroCard/>
      {/* <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script> */}
    </div>
  )
}
