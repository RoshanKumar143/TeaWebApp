
import Header from '../Header';
import Banner from './Banner';
import Wcu from './Wcu';
import Menu from './Menu/Menu'
import ViewAll from './Viewall/viewAll';
import Payment from './Payment';
// import GeoLocation from './GeoLocation';
import Followus from './Followus'

const Home = () =>{
    return(
        <>
            <Header/>
            <Banner/>
            <Wcu/>
            <Menu/>
            <ViewAll/>
            <Payment/>
            {/* <GeoLocation/> */}
            <Followus/>
        </>
    )
}

export default Home;