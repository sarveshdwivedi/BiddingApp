import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const customContentStyle = {
  width: '50%',
  maxWidth: 'none',
};

/*
 * Edit Product modal dialogue
 */
const BidUpdate = ({ openModal, productName, bidAmount, bidUpdate, cancelModal, getValues }) => (
  <Dialog
    title="Update Bid"
    actions={[
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={cancelModal}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={bidUpdate}
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
            floatingLabelText={"Product"}
            id="outlined-read-only-input"
            fullWidth={true}
            name="Product Name"
            value={productName}
          />
        </div>
        <div>
          <TextField
            floatingLabelText={"Your Current Bid:"}
            fullWidth={true}
            name="bidAmount"
            value={bidAmount}
            onChange={(e) => { getValues(e) }}
          />
        </div>
      </form>
    </div>
  </Dialog>
);
export default BidUpdate;
