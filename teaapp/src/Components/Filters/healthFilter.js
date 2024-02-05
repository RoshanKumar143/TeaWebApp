import './Filter.css'
import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL

export default function HealthBenefitFilter(props){

    const handleFilters = (event) =>{
// http://localhost:8000/menu/filters?healthId=7
        let health_id = event.target.value;
        console.log("health_id>>>",health_id)
        let healthUrl = "";
        // if(healthUrl === ""){
        //     healthUrl = `${baseUrl}/health`
        // }else{
        //     healthUrl = `${baseUrl}/menu/filters?healthId=${health_id}`
        //     console.log("ELSE>>>",`${baseUrl}/menu/filters?healthId=${health_id}`)
        // }
        if(healthUrl === ""){
            healthUrl = `${baseUrl}/menu/filters?healthId=${health_id}`
            console.log("ELSE>>>",`${baseUrl}/menu/filters?healthId=${health_id}`)
           
        }else{
            healthUrl = `${baseUrl}/health` 
        }

        axios.get(healthUrl)
        .then((res) => {props.restPerHealthId(res.data)})       
        
    }

    return(
        <div className='healthFilter'>
            <p id="header">By Health Benefit :</p>

            <div class="radio-container2" onChange={handleFilters}>

                <input type="radio" id="Tea" name="radio" value="7"/>
                <label for="Tea">Digestion</label><br/>

                <input type="radio" id="Tea" name="radio" value="1"/>
                <label for="Tea">Weight Loss Tea</label><br/>

                <input type="radio" id="Tea" name="radio" value="3"/>
                <label for="Tea">Rich Antioxidants</label><br/>

                <input type="radio" id="Tea" name="radio" value="4"/>
                <label for="Tea">Improve Eye Sight</label><br/>

                <input type="radio" id="Tea" name="radio" value="2"/>
                <label for="Tea">Lower Blood Pressure</label><br/>

                <input type="radio" id="Tea" name="radio" value="6"/>
                <label for="Tea">Boost Immune System</label><br/>

                <input type="radio" id="Tea" name="radio" value="5"/>
                <label for="Tea">Enhance Memory Booster</label><br/>

            </div>

        </div>
    )
}