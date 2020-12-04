import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {updateUserAddress} from "../../firebase/firebase.utils"

import AddressItem from "../address-item/address-item.component";
import CustomButton from "../custom-button/custom-button.component";

import {selectCurrentUser} from "../../redux/user/user.selector";
import {updateAddressStart} from "../../redux/user/user.actions";

import "./user-address.styles.css";

class UserAddressForm extends React.Component {
    state = {
        houseNo : this.props.currentUser.address ? this.props.currentUser.address.houseNo :"",
        street : this.props.currentUser.address ? this.props.currentUser.address.street :"",
        city : this.props.currentUser.address ? this.props.currentUser.address.city :"",
        state : this.props.currentUser.address ? this.props.currentUser.address.state :"",
        zipCode : this.props.currentUser.address ? this.props.currentUser.address.zipCode :"",
        country : this.props.currentUser.address ? this.props.currentUser.address.country :"",
    }

    handleSubmit = async (event) =>{
        event.preventDefault();

        const {houseNo, street, city, state, zipCode, country} = this.state;
        const {currentUser, updateAddressStart} = this.props;
        const address = {
            houseNo, street, city, state, zipCode, country
        }

        updateAddressStart({currentUser, address});
        // alert("Address Updated")

        // try{
        //     await updateUserAddress(currentUser, address);
        //     alert("Address Updated")
        // }
        // catch(error){
        //     alert("Error in updating address")
        //     console.error(error);
        // }
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]:value})
    }

    render()
    {
        const {currentUser} = this.props;
        
        const {address} = currentUser;
        const hno = address? address.houseNo : "";
        const street = address? address.street : "";
        const city = address? address.city : "";
        const state = address? address.state : "";
        const zip = address? address.zipCode : "";
        const country = address? address.country : "";
        
        return(
            <div className="address-box">
                <form onSubmit={this.handleSubmit}>
                    <div className="address-body">
                        <AddressItem 
                            label="House No" 
                            name="houseNo" 
                            value={hno} 
                            onChange={this.handleChange}
                            />
                        <AddressItem 
                            label="Street"
                            name="street" 
                            value={street} 

                            onChange={this.handleChange}
                        />
                        <AddressItem 
                            label="City"
                            name="city"  
                            value={city} 
                            onChange={this.handleChange}
                            />
                        <AddressItem 
                            label="State" 
                            name="state" 
                            value={state}  
                            onChange={this.handleChange}
                        />
                        <AddressItem 
                            label="Zip Code"
                            name="zipCode" 
                            value={zip} 
                            onChange={this.handleChange}
                        />
                        <AddressItem 
                            label="Country"
                            name="country"
                            value={country}  
                            onChange={this.handleChange}
                        />

                    </div>
                    <div className="address-btn">
                        <CustomButton type="submit">Update Address</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
        updateAddressStart : (currentUser, address) => dispatch(updateAddressStart(currentUser, address))
})
export default connect(mapStateToProps, mapDispatchToProps)(UserAddressForm);