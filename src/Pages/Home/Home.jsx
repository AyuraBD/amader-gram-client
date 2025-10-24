import { Link } from 'react-router'
import Banner from '../../Components/Home/Banner';
import QuickInfoCards from '../../Components/Home/QuickInfoCards';
import Highlights from '../../Components/Home/Highlights';
import Donation from '../../Components/Home/Donation';
import Announcement from '../../Components/Home/Announcement';

const Home = () => {
  return (
    <div>
      <Banner></Banner>  
      <QuickInfoCards></QuickInfoCards>
      <Highlights></Highlights>
      <Donation></Donation>
      <Announcement></Announcement>
    </div>
  )
}

export default Home