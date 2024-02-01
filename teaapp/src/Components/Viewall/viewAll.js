import './viewAll.css'
import { useNavigate } from 'react-router-dom';

import ViewAllDisplay from './viewAllDisplay';

export default function ViewAll(){

    const navigate = useNavigate()
    
    return(
        <div id="view-all">
            <button onClick={ () => navigate("/Listing_Menu") } id="btn"> ViewAll </button>
            {/* <ViewAllDisplay/> */}
      </div>
    )
}


