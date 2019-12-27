import React, { useState, useEffect } from "react";
import "../../styles/styles.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import FaStar from "react-icons/lib/fa/star";

const RestaurantList = () =>{


    const restaurants = [
        {        
            restaurantName: "Michael’s Food Place",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: true,
            category: "chinesse",
            city: "phoenex"
        },{
            restaurantName: "Kibuki's",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "jappanese",
            city: "phoenex"
        }, {
            restaurantName: "Koichi's",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: true,
            category: "wtf",
            city: "phoenex"
        },
        {
            restaurantName: "Tiffany's Brunch",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: true,
            category: "Breakfast",
            city: "phoenex"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        },
        {
            restaurantName: "Sam's Subs",
            restaurantPictureURL: "https://static.olocdn.net/menu/chilis/cdd356ec154236849bfe87c344ed0bde.jpg",
            rating: 3,
            been_here: false,
            category: "mexica",
            city: "hellow"
        }
    ];

    //save date that was selected to display

    //here we can filter by category, rating, city

    const [searchTerm, setSearchTerm] = useState({category: "", rating: 0, city: ""});

    // place what ever data from props to display on page.
    const [searchResults, setSearchResults] = useState(restaurants)

    useEffect(()=>{

        let searchKey = Object.keys(searchTerm).filter(key => searchTerm[key] !== "" && searchTerm[key] !== 0).toString();

        console.log("Search Key:", searchTerm[searchKey]);

        // console.log(restaurants.filter(rest => rest[SearchKey]));

        let results = [];

        if(searchKey === "") {
            results = restaurants.map(x => x);
        } else if(!isNaN(searchTerm[searchKey])) {
            results = restaurants.filter(rest => {
                return rest[searchKey] === (searchTerm[searchKey]);
            });
        } else {
            results = restaurants.filter(rest => {
                return rest[searchKey].toLowerCase().includes(searchTerm[searchKey].toLowerCase());
            });
        }

 

        /*
        switch (searchKey) {
            case = "category":
                results = restaurants.filter(rest => {
                    return rest[searchKey].toLowerCase().includes(searchTerm[searchKey].toLowerCase());
                });
                break;
        }
        */
        // if(SearchKey === "") {
        //     results = restaurants.map(x => x);
        //     console.log("Search Key empty");
        // } else if (!isNaN(SearchKey)) {
        //     console.log("Search Key is a number");
        //     results = restaurants.filter(rest => {
        //         console.log(rest)
        //         return 
        //     })
        // } else {
        //     results = restaurants.filter(rest => {
        //         console.log(searchTerm[SearchKey]);
        //         return rest[SearchKey].toLowerCase().includes(searchTerm[SearchKey].toLowerCase());
        //     })
        // }

        console.log(searchResults);

        setSearchResults(results);

    },[searchTerm])

    const handleChange = (e) => {
        e.preventDefault();
        setHover(0);
        setSearchTerm({category: "", rating: 0, city: "", [e.target.name]: e.target.value});
        
        // console.log(searchTerm,"Search Term");
    };

    const handleClickStar = (e,index) => {
        setSearchTerm({})
        setHover(index);
        // console.log(index);
        setSearchTerm({category: "", city: "", rating: index})
        // console.log(searchTerm);
    }
    
    let stars = [];

    const [HoverIdx, setHover] = useState();

    const StarRated = ({handleClick, HoverIdx, index}) => {
        return (
            <>
            {HoverIdx >= index ?
                <span onClick={e => {
                    handleClick(e,index);
                    console.log("clicked");   
                }
                }>
                    <FaStar color="gold" />
                </span> 
                :
                <span onClick={e => {
                    handleClick(e,index);
                    console.log("clicked");
                }    
                }>
                    <FaStar />
                </span>
            }
            </>
        )};



    for (let i = 0; i < 5; i++) {
        stars.push(<StarRated key={i} handleClick={handleClickStar} HoverIdx={HoverIdx} index={i + 1}/>)
    }


 



    return (
        <div className="main_container">

            <form className="rest_form">
                <legend>Filter Restaurants by:</legend>
                <label htmlFor="category">Category</label>
                <input
                    id="category"
                    type="text"
                    name="category"
                    onChange={handleChange}
                    value={searchTerm.category}
                />


                <label htmlFor="rating">Rating</label>
                <div className="star_rating">{stars}</div>


                <label htmlFor="City">City</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    onChange={handleChange}
                    value={searchTerm.city}
                />
            </form>
            
            <div >
                <div className="rest_header">
                    <h2 className="rest_title">{/* title that is being searched */}</h2>
                </div>
                {/* <h2> Title of the list of restaurants</h2> */}
                {/* Map over date to display what ever selected opton was on dashboard. */}
                <div className="restaurants_container">

                    {searchResults.length <= 0  ? 
                            <h2>Nothing was found!</h2>
                        : 
                        searchResults.map( rest => {
                            // console.log(rest);
                            return <RestaurantCard />;
                        }) 
                    }
                </div>  
            </div>

        </div>
    )
}

export default RestaurantList