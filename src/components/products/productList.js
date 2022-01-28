import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const stylesLnk = {
  color: "blue",
  cursor: "pointer"
};

const iconStylesDelete = {
  color: 'red',
  fontSize: 25,
  cursor: 'pointer'
};
const iconStylesEdit = {
  color: 'blue',
  fontSize: 25,
  marginRight: '5px',
  cursor: 'pointer'
};



/*
 * Product List Populate here 
 */

const ProductListTable = ({ productList, currentBidData, handleEditProduct, handleDeleteProduct, handleProductDetails, handleShowBid }) => (
  <Table selectable={false}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Product Name</TableHeaderColumn>
        <TableHeaderColumn>Description</TableHeaderColumn>
        <TableHeaderColumn>Category</TableHeaderColumn>
        <TableHeaderColumn>Starting Price</TableHeaderColumn>
        <TableHeaderColumn>Bid End Date</TableHeaderColumn>       
        {(localStorage.getItem('userType') === 'seller') ?
          <TableHeaderColumn>Actions</TableHeaderColumn>
          : null}
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {productList.map((row, index) => (
        <TableRow key={index}>
          {/* <TableRowColumn> {row.id}</TableRowColumn> */}
          <TableRowColumn><Link style={stylesLnk} onClick={() => { handleProductDetails(index) }}>{row.productName}</Link></TableRowColumn>
          <TableRowColumn>{row.shortDescription}</TableRowColumn>
          <TableRowColumn>{row.category}</TableRowColumn>
          <TableRowColumn>{row.startingPrice}</TableRowColumn>
          <TableRowColumn>{row.bidEndDate}</TableRowColumn>
          
          {(localStorage.getItem('userType') === 'seller') ?
            <TableRowColumn>
              <FontIcon className="material-icons" style={iconStylesEdit} onClick={() => { handleEditProduct(index) }}>edit</FontIcon>
              <FontIcon className="material-icons" style={iconStylesDelete} onClick={() => { handleDeleteProduct(row.productId) }}>delete</FontIcon>
              <RaisedButton label="Show Bids" primary={true} onClick={() => { handleShowBid(row.productId) }} />
            </TableRowColumn>
            : null}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default ProductListTable;