import React from 'react';
import './ProductSearch.css';

export default function ProductSearch({handleSearchChange, getValues}) {

    const formStyle = {
        marginTop: 12,
        marginRight: 20,
        marginLeft: 20,
        borderBottom: "1px solid #ccc"
    };
    const inputStyle = {
        paddingTop: 5,
        paddingLeft: 10,
        height: 45,
        width: 400,
        border: '1px solid #ccc',
        backgroundColor: 'white'
    };


    return (
        <form className="product-search-form" style={formStyle}>
            <input placeholder="Enter Email Id"
                style={inputStyle}
                name="searchEmail"
                onChange={(e) => { getValues(e) }}
            />
            <input type="radio" name="searchkeybtn" value="seller" onChange={(e) => { handleSearchChange(e) }} />Seller
            <input type="radio" name="searchkeybtn" value="buyer" onChange={(e) => { handleSearchChange(e) }} />Buyer
            <hr/>
        </form>
        
    )
}