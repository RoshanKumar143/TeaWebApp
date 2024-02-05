import './Filter.css'
import axios from 'axios'

const baseUrl = process.env.REACT_APP_API_URL

export default function CostFilter(props){


    const handleFilter = (event) => {

        let cost = event.target.value.split('-')
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl = "";
        // http://localhost:8000/menu?lcost=10&hcost=21
        if(event.target.value === ""){
            costUrl = `${baseUrl}/menu`
            console.log(`${baseUrl}/menu`)
        }else{
            costUrl = `${baseUrl}/menu/filters?lcost=${lcost}&hcost=${hcost}`
            console.log("<<<Filter Url>>>",`${baseUrl}/menu/filters?lcost=${lcost}&hcost=${hcost}`)
        }

        axios.get(costUrl)
            .then((res) => { props.restPerCost(res.data) })
    }


    return(
        <>
            <p id="Main-header">Filter</p>
            <hr />
            <p id='header'>By Cost :</p>

            <div class="radio-container1" onChange={handleFilter}>
                <div className='radio-input'>
                    <input type="radio" id="all" name="radio" value="all"/>
                    <label for="all">All</label><br/>
                </div>
                <div className='radio-input'>
                    <input type="radio" id="10-21" name="radio" value="10-21"/>
                    <label for="0-20">0-21</label><br/>
                </div>
                <div className='radio-input'>
                    <input type="radio" id="20-51" name="radio" value="20-51"/>
                    <label for="21-50">20-51</label><br/>
                </div>
                <div className='radio-input'>
                    <input type="radio" id="50-151" name="radio" value="50-151"/>
                    <label for="51-149">50-151</label><br/>
                </div>
                <div className='radio-input'>
                    <input type="radio" id="151-250" name="radio" value="151-250"/>
                    <label for="150-300">151-250</label><br/>
                </div>
                
            </div>

        </>
    )
}