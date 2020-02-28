import React,{ useState } from "react";
import useForm from "react-hook-form";
import inbox from "react-icons/lib/fa/inbox";
import { addRestaurant } from '../../actions/index';
import { connect } from 'react-redux';





const AddRestaurant = (props) => {

    const {register, handleSubmit, errors, formState} = useForm();

    const zipcodeReg = /^\d{5}$/;
    const phoneRegEx = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    const urlRegEx = /^(https:\/\/|http:\/\/)?[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)+[/a-zA-Z0-9\-\.]*?$/;

    console.log(props);

        
        
    const {isSubmitting, setSubmitting} = useState(false)
    const onSubmit = (data, e) => {
        e.preventDefault();

        console.log(formState.isSubmitting);
        console.log(data,'add rest submit');
        props.addRestaurant(data).then(()=>{
            
            props.history.push(props.restaurants);
        })
    }
// restaurantName	String	REQ
// streetAddress	String  REQ
// city	            String	REQ
// zipcode	String
// phoneNumber	String
// websiteURL	String	
// restaurantPictureURL	String
    console.log("formstate:",formState);
    console.log("errors",errors);

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
                        type="text"
                        placeholder={`City ${errors.city ? "is Required" : ""} `}
                        name="city"
                        ref={register({required: true})}
                        style={{borderColor: errors.city && "red"}}
                    />
                    {errors.zipcode && <span>Zip Code Ex. 12345</span>}
                    <input 

                        className={errors.zipcode && 'add_rest_errors'}
                        type="text"
                        placeholder={`ZipCode ${errors.zipcode ? "is Required":""}`}
                        name="zipcode"
                        ref={register({required: false})}
                        style={{borderColor: errors.zipcode && "red"}}

                    />
                    {errors.phoneNumber && <span>Phone Number Ex. (111) 222-3333 | 1112223333 | 111-222-3333</span>}
                    <input

                        className={errors.phoneNumber && "add_rest_errors"}
                        type="text"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        ref={register({required: false})}
                        //ref={register({pattern: phoneRegEx})}
                        style={{borderColor: errors.phoneNumber && "red"}}

                    />
                    {errors.websiteURL && <span>Please provide valid url.</span>}
                    <input

                        className={errors.websiteURL && "add_rest_errors"}
                        type="text"
                        placeholder="Website URL"
                        name="websiteURL"
                        ref={register({required: false})}
                        //ref={register({pattern: urlRegEx})}
                        style={{borderColor: errors.websiteURL && "red"}}

  
                    />
                    {errors.restaurantPictureURL && <span>Please provide valid url.</span>}
                    <input
                        type="text"
                        placeholder="Restaurant Picture URL"
                        name="restaurantPictureURL"

                        ref={register( {required: false})}

                        //ref={register({pattern: urlRegEx})}
                        style={{borderColor: errors.restaurantPictureURL && "red"}}

                    />
                    <button disabled={formState.isSubmitting} className="rest_button" type="submit" >{formState.isSubmitting ? "Creating" : "Create"}</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {

  return {
    isFetching: state.isFetching,
    restaurants: state.restaurants
    
  };
};


    


export default connect(mapStateToProps, {addRestaurant}) (AddRestaurant);

