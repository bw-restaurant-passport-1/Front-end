import React,{ useState } from "react";
import useForm from "react-hook-form";
import { register } from "../../serviceWorker";
import inbox from "react-icons/lib/fa/inbox";
import {addRestaurant} from '../../actions/index';
import {connect} from 'react-redux';



const AddRestaurant = (props) => {

    const {register, handleSubmit, errors, formState} = useForm();
    const {isSubmitting, setSubmitting} = useState(false)
    const onSubmit = (data, e) => {
        e.preventDefault();
        props.addRestaurant(props.restaurants)
        props.history.push('/dashboard')
        console.log(formState.isSubmitting);
        console.log(data);
    }
// restaurantName	String	REQ
// streetAddress	String  REQ
// city	            String	REQ
// zipcode	String
// phoneNumber	String
// websiteURL	String	
// restaurantPictureURL	String

    console.log(errors);
    return (
        <div className="add_rest">
            <div className="add_rest_bg">
                &nbsp;
                {/* <img src='../../images/add-restaurant-img.jpg'/> */}
            </div>
            <div className="add_rest_container">
                <h1 className="add_rest_title">Get Started</h1>
                <form className="add_rest_form" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className={errors.restaurantName && "add_rest_errors"}
                        type="text"
                        placeholder={`Restaurant Name ${errors.restaurantName ? "is Required" : ""} `}
                        name="restaurantName"
                        ref={register({required: true})}
                        style={{borderColor: errors.restaurantName && "red"}}
                    />
                    {/* {errors.restaurantName && "Name required"} */}
                    <input
                        className={errors.streetAddress && "add_rest_errors"}
                        type="address"
                        placeholder={`Street Address ${errors.streetAddress ? "is Required" : ""} `}
                        name="streetAddress"
                        ref={register({required: true})}
                        style={{borderColor: errors.streetAddress && "red"}}
                    />
                    <input
                        className={errors.city && "add_rest_errors"}
                        type="city"
                        placeholder={`City ${errors.city ? "is Required" : ""} `}
                        name="city"
                        ref={register({required: true})}
                        style={{borderColor: errors.city && "red"}}
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
                    <button disabled={formState.isSubmitting} className="rest_button" type="submit" >Create</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps, {addRestaurant}) (AddRestaurant);