import './home.css'
import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import PropertyList from '../../components/propertyList/PropertyList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className="homeContainer">
      <Featured />
      <h1 className="homeTitle">Browse by property type</h1>
      <PropertyList />
      <h1 className="homeTitle">Homes guests love</h1>
      <FeaturedProperties />
      <MailList />
      <Footer />
    </div>
  )
}

export default Home