import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const customContentStyle = {
  width: '50%',
  maxWidth: 'none',
};

const stylePersonal = {
  borderBottom: '1px solid #ccc',
  margin: "25px auto"
}
/*
 * Edit Product modal dialogue
 */
const BidProduct = ({ productName, currentbid, openModal, cancelModal, bidProduct, getValues }) => (
  <Dialog
    title="Bid Product"
    actions={[
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={cancelModal}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={bidProduct}
      />
    ]}
    modal={true}
    contentStyle={customContentStyle}
    open={openModal}
  >
    <div>
      <form >
        <div>
          <TextField
            disabled
            floatingLabelText={"Product"}
            id="outlined-read-only-input"
            fullWidth={true}
            name="productName"
            value={productName}
          />
        </div>
        <div>
          <TextField
            disabled
            floatingLabelText={"Current Bid:"}
            id="outlined-read-only-input"
            fullWidth={false}
            name="currentbid"
            style={customContentStyle}
            value={currentbid}            
          />

          <TextField
            color="success"
            style={customContentStyle}
            floatingLabelText={"Your Max Bid:"}
            fullWidth={false}
            name="bidAmount"
            onChange={(e) => { getValues(e) }}
          />
        </div>
        <div style={stylePersonal}><strong>Personal Info :</strong></div>
        <div>
          <TextField
            floatingLabelText={"First Name:"}
            fullWidth={false}
            style={customContentStyle}
            name="firstName"
            onChange={(e) => { getValues(e) }}
          />

          <TextField
            floatingLabelText={"Last Name:"}
            fullWidth={false}
            style={customContentStyle}
            name="lastName"
            onChange={(e) => { getValues(e) }}
          />
        </div>
        <div>
        
          <TextField
            floatingLabelText={"Phone:"}
            fullWidth={false}
            style={customContentStyle}
            name="phone"
            onChange={(e) => { getValues(e) }}
          />
        </div>

        <div>
          <TextField
            floatingLabelText={"Address:"}
            fullWidth={false}
            style={customContentStyle}
            name="address"
            onChange={(e) => { getValues(e) }}
          />

          <TextField
            floatingLabelText={"City:"}
            fullWidth={false}
            style={customContentStyle}
            name="city"
            onChange={(e) => { getValues(e) }}
          />
        </div>
        <div>
          <TextField
            floatingLabelText={"State:"}
            fullWidth={false}
            style={customContentStyle}
            name="state"
            onChange={(e) => { getValues(e) }}
          />

          <TextField
            floatingLabelText={"Pin:"}
            fullWidth={false}
            style={customContentStyle}
            name="pin"
            onChange={(e) => { getValues(e) }}
          />
        </div>
      </form >
    </div>
  </Dialog>
);
export default BidProduct;
