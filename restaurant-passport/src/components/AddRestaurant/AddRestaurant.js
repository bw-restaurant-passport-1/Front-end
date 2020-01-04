import React from "react";
import useFrom from "react-hook-form";
import { register } from "../../serviceWorker";
import inbox from "react-icons/lib/fa/inbox";



const AddRestaurant = (props) => {

// restaurantName	String	
// streetAddress	String
// city	            String	
// zipcode	String
// phoneNumber	String
// websiteURL	String	
// restaurantPictureURL	String

    return (
        <div className="add_rest">
            <div className="add_rest_bg">
                
            </div>
            <div className="add_rest_container">
                <h1 className="add_rest_title">Get Started</h1>
                <form className="add_rest_form">
                    <input
                        type="text"
                        placeholder="Restaurant Name"
                        name="restaurantName"
                        ref={register({required: true})}
                    />
                    <input
                        type="address"
                        placeholder="Street Address"
                        name="streetAddress"
                        ref={register()}
                    />
                    <input
                        type="city"
                        placeholder="City"
                        name="city"
                        ref={register()}
                    />
                    <input 
                        type="zipcode"
                        placeholder="Zipcode"
                        name="zipcode"
                        ref={register()}
                    />
                    <input
                        type="phone"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        ref={register()}
                    />
                    <input
                        type="url"
                        placeholder="Website URL"
                        name="websiteURL"
                        ref={register()}
                    />
                    <input
                        type="url"
                        placeholder="Restaurant Picture URL"
                        name="restaurantPictureURL"
                        reg={register()}
                    />
                    <button className="rest_button" type="submit" >Create</button>
                </form>
            </div>
        </div>
    )
}


export default AddRestaurant;