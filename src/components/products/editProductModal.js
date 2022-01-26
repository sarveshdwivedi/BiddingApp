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
const EditProduct = ({ productName, category, shortDescription, startingPrice, bidEndDate, openModal, cancelModal, updateProducts, getValues }) => (
  <Dialog
    title="Update Product Details"
    actions={[
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={cancelModal}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={updateProducts}
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
            floatingLabelText={"Product Name"}
            fullWidth={true}
            name="productName"
            value={productName}
            onChange={(e) => { getValues(e) }}
          />
        </div>
        <div>
          <TextField
            floatingLabelText={"Category"}
            fullWidth={true}
            name="category"
            value={category}
            onChange={(e) => { getValues(e) }}
          />
        </div>
        <div>
          <TextField
            floatingLabelText={"Description"}
            fullWidth={true}
            name="shortDescription"
            value={shortDescription}
            onChange={(e) => { getValues(e) }}
          />
        </div>
        <div>
          <TextField
            floatingLabelText={"Starting Price"}
            fullWidth={true}
            name="startingPrice"
            value={startingPrice}
            onChange={(e) => { getValues(e) }}
          />
        </div>
        <div>
          <TextField
            floatingLabelText={"Bid End Date"}
            fullWidth={true}
            name="bidEndDate"
            value={bidEndDate}
            onChange={(e) => { getValues(e) }}
          />
        </div>
      </form >
    </div>
  </Dialog>
);
export default EditProduct;
