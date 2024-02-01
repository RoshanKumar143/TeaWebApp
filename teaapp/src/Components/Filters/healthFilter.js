import './Filter.css'
// import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL

export default function HealthBenefitFilter(){

    return(
        <>
            <center><p id="Main-header">Health Benefit Filter</p></center>
            <hr />

            <div class="radio-container">

                <input type="radio" id="Tea" name="radio" value="Weight Loss Tea"/>
                <label for="Tea">Weight Loss Tea</label><br/>

                <input type="radio" id="Tea" name="radio" value="Boosts Immune System"/>
                <label for="Tea">Boost Immune System</label><br/>
            
                <input type="radio" id="Tea" name="radio" value="Rich Antioxidants"/>
                <label for="Tea">Rich Antioxidants</label><br/>
            
                <input type="radio" id="Tea" name="radio" value="Improve Eye Sight"/>
                <label for="Tea">Improve Eye Sight</label><br/>

                <input type="radio" id="Tea" name="radio" value="Enhance Memory Booster"/>
                <label for="Tea">Enhance Memory Booster</label><br/>

                <input type="radio" id="Tea" name="radio" value="Digestion"/>
                <label for="Tea">Digestion</label><br/>

                <input type="radio" id="Tea" name="radio" value="Lower Blood Pressure"/>
                <label for="Tea">Lower Blood Pressure</label><br/>
                
            </div>

        </>
    )
}