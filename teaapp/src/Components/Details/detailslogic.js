import React, {useState, useEffect} from "react";
import './details.css'
import Header from "../../Header";

import { useSearchParams, Link, useNavigate} from "react-router-dom";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL

export default function Details(){


    let [SearchParams] = useSearchParams()

    let [teaDetails, setTeaDetails] = useState('');

    //to get the restaurant data from queryParam
    let [menuId] = SearchParams.getAll('menuId');

    //sessionStorage
    let [teaId] = useState(sessionStorage.getItem('teaId'));

    let navigate = useNavigate();


    const teaDetail = async() => {
        const rData = await axios.get(`${baseUrl}/details/${Number(menuId)}`);
        setTeaDetails(rData.data[0])
        console.log(`MenuID>>>${baseUrl}/details/${Number(menuId)}`)
    }


    useEffect( () => {
        teaDetail()
    },[])



    const proceed = () => {
        // this navigate come from useNavigate
        navigate(`/placeOrder/${teaDetails.item_name}`)
    }


    const renderDetails = () => {
        return(
            <>
              <Header/>
                <div className='tileImage'>
                    <div className='imageClass'>
                        <img src={teaDetails.menu_image} alt={teaDetails.item_name}/>
                    </div>
                </div>
                <div className='tileContent'>
                    <div className='content'>
                        <h1>{teaDetails.item_name}</h1>
                        <h3>Actual-Price : {teaDetails.cost}/-</h3>
                        <h3>Offer Rs. 10/-</h3>
                        <h3 id='final-price'>Final Price = {teaDetails.cost - 10}/-</h3>
                        <h3 id='benefits'>{teaDetails.benefits}</h3>
                    </div>
                    <hr/>
                    <div className="col-md-12 buttons">
                        <Link to={`/Listing_Menu/`} className="btn btn-success" >
                        {/* <Link to={`/listing/${teaId}`} className="btn btn-success" > */}
                                Back
                        </Link> &nbsp;&nbsp;
                        <button type="button" class="btn btn-primary button" onClick={proceed} >
                            Proceed
                        </button>

                    </div>
                </div>
            </>
        )
    }




    return(
        <>
            <div className="main">
                {renderDetails()}
            </div>
        </>
    )

}