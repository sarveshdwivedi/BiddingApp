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
const AddProduct = ({ openModal, cancelModal, addProducts, getValues }) => (
  <Dialog
    title="Add New Product"
    actions={[
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={cancelModal}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={addProducts}
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
            fullWidth={false}
            name="productName"
            onChange={(e) => { getValues(e) }}
          />

          <TextField
            floatingLabelText={"Category"}
            fullWidth={false}
            name="category"
            onChange={(e) => { getValues(e) }}
          />
        </div>
        <div>
          <TextField
            floatingLabelText={"Description"}
            fullWidth={true}
            name="shortDescription"
            onChange={(e) => { getValues(e) }}
          />
        </div>
        <div>
          <TextField
            floatingLabelText={"Starting Price"}
            fullWidth={false}
            name="startingPrice"
            onChange={(e) => { getValues(e) }}
          />

          <TextField
            floatingLabelText={"Bid End Date"}
            fullWidth={false}
            name="bidEndDate"
            onChange={(e) => { getValues(e) }}
          />
        </div>
        <div>
        <TextField
            floatingLabelText={"Product Id"}
            fullWidth={false}
            name="productId"
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
export default AddProduct;
