import React from 'react';
import Dialog from 'material-ui/Dialog';

import FlatButton from 'material-ui/FlatButton';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const customContentStyle = {
  width: '50%',
  maxWidth: 'none',
};

/*
 * Product Bid List modal dialogue
 */
const ShowBids = ({ openModal, productBidList, cancelModal, getValues }) => (
  <Dialog
    title="Product Bid List"
    actions={[
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={cancelModal}
      />
    ]}
    modal={true}
    contentStyle={customContentStyle}
    open={openModal}
  >
    <div>

      <div>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Product Name</TableHeaderColumn>
              <TableHeaderColumn>First Name</TableHeaderColumn>
              <TableHeaderColumn>Last Name</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>Bid Amount</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {productBidList.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.productName}</TableRowColumn>
                <TableRowColumn>{row.firstName}</TableRowColumn>
                <TableRowColumn>{row.lastName}</TableRowColumn>
                <TableRowColumn>{row.email}</TableRowColumn>
                <TableRowColumn>{row.bidAmount!==''?'$ ' + row.bidAmount : 'NA'}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>


    </div>
  </Dialog>
);
export default ShowBids;
