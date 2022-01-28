import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const customContentStyle = {
  width: '50%',
  maxWidth: 'none',
};
let productBid;
/*
 * Details Product modal dialogue
 */
const ProductDetails = ({ productBidList, currentBidData, handleBidProduct, handleUpdateBid, productObj, productName, shortDescription, category, startingPrice, bidEndDate, openModal, cancelModal, getValues }) => (
  //currentBid = currentBidData.filter(currentBid => currentBid.productId === productObj.productId && currentBid.email === localStorage.getItem('searchEmail')),
  productBid = productBidList.filter(productBid => productBid.productId === productObj.productId && productBid.email === localStorage.getItem('searchEmail')),
  
  <Dialog
    title="Product Details"
    actions={[
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={cancelModal}
      />,
      (localStorage.getItem('userType') === 'buyer') ?
      productBid.length > 0 ?
          <RaisedButton label="Update Bid" primary={true} onClick={() => { handleUpdateBid(productObj.productId) }} />
          :
          <RaisedButton label="Bid Now" primary={true} onClick={() => { handleBidProduct(productObj.productId) }} />
        : null
    ]}
    modal={true}
    contentStyle={customContentStyle}
    open={openModal}
  >
    <div class="col-lg-12 col-md-12">
      <div class="row">
        <div class="col-md-4 col-lg-4">
          <p class="margin-10px-left">Product Name:</p>
        </div>
        <div class="col-md-8 col-lg-8">
          <p> {productName}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-lg-4">
          <p class="margin-10px-left">Description:</p>
        </div>
        <div class="col-md-8 col-lg-8">
          <p>  {shortDescription}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-lg-4">
          <p class="margin-10px-left">Category:</p>
        </div>
        <div class="col-md-8 col-lg-8">
          <p> {category}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-lg-4">
          <p class="margin-10px-left">Starting Price:</p>
        </div>
        <div class="col-md-8 col-lg-8">
          <p> {startingPrice}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-lg-4">
          <p class="margin-10px-left">Bid End Date:</p>
        </div>
        <div class="col-md-8 col-lg-8">
          <p> {bidEndDate}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-lg-4">
          <p class="margin-10px-left">Current Bid:</p>
        </div>
        <div class="col-md-8 col-lg-8">
          <p> {productBid.filter(productBid => productBid.productId === productObj.productId).map(bid => (bid ?
            '$' + bid.bidAmount : 'NA'))}</p>
        </div>
      </div>

    </div>

  </Dialog>
);
export default ProductDetails;
