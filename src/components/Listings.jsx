import { useDispatch, useSelector } from "react-redux"
import { categories } from "../data"
import "../styles/Listings.scss"
import ListingCard from "./ListingCard"
import Loader from "./Loader"
import { UseDispatch } from "react-redux"
import { useState } from "react"
import state from "../redux/state"
import { setListings} from '../redux/state';
import { useEffect } from "react"
import { baseUrl } from "../Urls"
const Listings = () => {
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState("All")
    const listings = useSelector((state) => state.listings)
    
  const getFeedListings = async () => {
    try {
      const response = await fetch(
        selectedCategory !== "All"
          ? `${baseUrl}/properties?category=${selectedCategory}`
          : `${baseUrl}/properties`,
        {
          method: "GET",
        }
      );



      
      const data = await response.json();
      dispatch(setListings({ listings: data }));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Listings Failed", err.message);
    }
  };
  useEffect(() => {
    getFeedListings();
  }, [selectedCategory]);
 console.log(listings)
  return (
    <>
     <div className="category-list">
        {categories?.map((category, index) => (
          <div
            className={`category ${category.label === selectedCategory ? "selected" : ""}`}
            key={index}
            onClick={() => setSelectedCategory(category.label)}
          >
            <div className="category_icon">{category.icon}</div>
            <p>{category.label}</p>
          </div>
        ))}
      </div>
    
    {loading ? (
        <Loader />
      ) : (
        <div className="listings">
          {listings.map(
            ({
              _id,
              creator,
              listingPhotoPaths,
              city,
              province,
              country,
              category,
              type,
              price,
              booking=false
            }) => (
              <ListingCard
                listingId={_id}
                creator={creator}
                listingPhotoPaths={listingPhotoPaths}
                city={city}
                province={province}
                country={country}
                category={category}
                type={type}
                price={price}
                booking={booking}
              />
            )
          )}
        </div>
      )}
    </>
  )
}

export default Listings