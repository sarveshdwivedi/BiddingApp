import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductListTable from './productList';
import AddProduct from './addProductModal';
import EditProduct from './editProductModal';
import BidProduct from './bidProductModal';
import BidUpdate from './bidUpdateModal';
import ShowBids from './productBidList';
import ProductDetails from './productDetailsModal';
import ProductSearch from './ProductSearch';
import * as actions from '../../actions/product.action';
import { Link } from 'react-router';
import FontIcon from 'material-ui/FontIcon';

const stylesAdd = {
    float: "right",
    margin: "-41px auto",
    color: "#fff"
};
const iconStylesAdd = {
    color: 'white',
    fontSize: 25,
    marginRight: '5px',
    cursor: 'pointer'
};


/*
 * Container component Product list 
 */

class Products extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
            title: '',
            description: '',
            price: '',
            currentProductId: ''
        }
        this.handleEditProduct = this.handleEditProduct.bind(this);
        this.getValues = this.getValues.bind(this);
        this.updateProducts = this.updateProducts.bind(this);
        this.cancelModal = this.cancelModal.bind(this);
        this.handleUpdateBid = this.handleUpdateBid.bind(this);
        this.bidUpdate = this.bidUpdate.bind(this);
        localStorage.removeItem('userType')
        localStorage.removeItem('searchEmail')
    }

    componentWillMount() {
        //  this.props.productActions.getProducts();
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
    //       this.props.onStateChange();
    //     }
    //   }

    handleSearchChange = (e) => {
        let searchEmail = this.state.searchEmail ? this.state.searchEmail : null
        let userType = e.target.value ? e.target.value : 'seller'

        localStorage.setItem('userType', userType)
        localStorage.setItem('searchEmail', searchEmail)

        this.setState({
            userType: userType
        })

        this.props.productActions.getProducts(userType, searchEmail);
    }

    handleProductDetails(index) {
        let currentData = this.props.productList;
        let currentProductData = currentData[index];

        this.setState({
            prdObj: currentProductData,
            productId: currentProductData.productId,
            productName: currentProductData.productName,
            shortDescription: currentProductData.shortDescription,
            category: currentProductData.category,
            startingPrice: currentProductData.startingPrice,
            bidEndDate: currentProductData.bidEndDate,
            open: true,
            productDTS: true
        })

        this.props.productActions.showBids(currentProductData.productId);
    }

    handleAddProduct() {
        this.setState({
            open: true,
            addFrm: true
        })
    }

    handleBidProduct(productId) {
        let currentProductData = this.props.productList.filter(currentData => currentData.productId === productId);
        let currentBidData = this.props.productBidList.filter(productBid => productBid.productId === currentProductData.productId && productBid.email === localStorage.getItem('searchEmail'));

        this.setState({
            productName: currentProductData[0].productName,
            bidAmount: currentBidData.length > 0 ? currentBidData[0].bidAmount : '$00.00',
            maxBid: '',
            productId: currentProductData[0].productId,
            open: true,
            bidFrm: true,
            productDTS: false
        })
    }

    handleShowBid(productId) {
        this.props.productActions.showBids(productId);
        this.setState({ open: true, showbidsFrm: true })
    }

    handleEditProduct(index) {
        let currentData = this.props.productList;
        let currentProductData = currentData[index];

        this.setState({
            productName: currentProductData.productName,
            category: currentProductData.category,
            shortDescription: currentProductData.shortDescription,
            startingPrice: currentProductData.startingPrice,
            bidEndDate: currentProductData.bidEndDate,
            productId: currentProductData.productId,
            open: true,
            editFrm: true
        })
    }

    handleUpdateBid(productId) {
        let currentProductData = this.props.productList.filter(currentData => currentData.productId === productId);
        let currentBidData = this.props.productBidList.filter(productBid => productBid.productId === currentProductData.productId && productBid.email === localStorage.getItem('searchEmail'));

        this.setState({
            productName: currentProductData[0].productName,
            bidAmount: currentBidData.length > 0 ? currentBidData[0].bidAmount : '$00.00',
            productId: currentProductData[0].productId,
            open: true,
            editBidFrm: true,
            productDTS: false
        })
    }

    handleDeleteProduct(id) {
        this.props.productActions.deleteProduct(id);
    }

    addProducts() {

        let data = {
            "product": {
                "bidEndDate": this.state.bidEndDate,
                "category": this.state.category,
                "productName": this.state.productName,
                "shortDescription": this.state.shortDescription,
                "startingPrice": this.state.startingPrice,
                "productId": this.state.productId
            },
            "seller": {
                "address": this.state.address,
                "city": this.state.city,
                "email": localStorage.getItem('searchEmail'),
                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                "phone": this.state.phone,
                "pin": this.state.pin,
                "state": this.state.state
            }
        }

        this.props.productActions.addProduct(data);
        this.setState({ open: false, addFrm: false })
    }

    updateProducts() {
        let data = {
            productName: this.state.productName,
            category: this.state.category,
            shortDescription: this.state.shortDescription,
            startingPrice: this.state.startingPrice,
            bidEndDate: this.state.bidEndDate,
            productId: this.state.productId,
        }
        this.props.productActions.editProduct(data);
        this.setState({ open: false, editFrm: false })
    }

    bidProduct() {
        let data = {
            "address": this.state.address,
            "bidAmount": this.state.bidAmount,
            "city": this.state.city,
            "email": localStorage.getItem('searchEmail'),
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "phone": this.state.phone,
            "pin": this.state.pin,
            "productId": this.state.productId,
            "state": this.state.state,
            "productName": this.state.productName
        }
        this.props.productActions.bidProduct(data);
        this.setState({ open: false, bidFrm: false })
    }

    bidUpdate() {
        let data = {
            productId: this.state.productId,
            bidAmount: this.state.bidAmount,
        }
        this.props.productActions.bidUpdate(data);
        this.setState({ open: false, editBidFrm: false })
    }

    getValues(e) {
        this.setState({ [e.target.name]: e.target.value })

    }

    cancelModal() {
        this.setState({ open: false, addFrm: false, editFrm: false, bidFrm: false, editBidFrm: false, productDTS: false, showbidsFrm: false })
    }


    render() {
        return (
            <div>
                {(this.state.userType === "seller") ?
                    <Link style={stylesAdd} ><FontIcon className="material-icons" style={iconStylesAdd} onClick={() => { this.handleAddProduct() }}>add</FontIcon><span ></span></Link>
                    : null}

                <ProductSearch handleSearchChange={this.handleSearchChange.bind(this)} getValues={this.getValues.bind(this)} />

                {this.props.productList ? this.props.productList.length > 0 ?
                    <ProductListTable productList={this.props.productList} currentBidData={this.props.currentBidData} handleEditProduct={this.handleEditProduct.bind(this)} handleDeleteProduct={this.handleDeleteProduct.bind(this)} handleProductDetails={this.handleProductDetails.bind(this)} handleShowBid={this.handleShowBid.bind(this)} />
                    : null : null}

                <ProductDetails  productBidList={this.props.productBidList} currentBidData={this.props.currentBidData} handleBidProduct={this.handleBidProduct.bind(this)} handleUpdateBid={this.handleUpdateBid.bind(this)}
                    productObj={this.state.prdObj}
                    productName={this.state.productName}
                    shortDescription={this.state.shortDescription}
                    category={this.state.category}
                    startingPrice={this.state.startingPrice}
                    bidEndDate={this.state.bidEndDate}
                    openModal={this.state.open && this.state.productDTS}
                    cancelModal={this.cancelModal.bind(this)} />

                <AddProduct openModal={this.state.open && this.state.addFrm}
                    getValues={this.getValues.bind(this)}
                    addProducts={this.addProducts.bind(this)}
                    cancelModal={this.cancelModal.bind(this)} />

                <EditProduct openModal={this.state.open && this.state.editFrm}
                    getValues={this.getValues.bind(this)}
                    productName={this.state.productName}
                    category={this.state.category}
                    shortDescription={this.state.shortDescription}
                    startingPrice={this.state.startingPrice}
                    bidEndDate={this.state.bidEndDate}
                    updateProducts={this.updateProducts.bind(this)}
                    cancelModal={this.cancelModal.bind(this)} />

                <BidProduct openModal={this.state.open && this.state.bidFrm}
                    getValues={this.getValues.bind(this)}
                    productName={this.state.productName}
                    bidAmount={this.state.bidAmount}
                    bidProduct={this.bidProduct.bind(this)}
                    cancelModal={this.cancelModal.bind(this)} />

                <BidUpdate openModal={this.state.open && this.state.editBidFrm}
                    productName={this.state.productName}
                    bidAmount={this.state.bidAmount}
                    bidUpdate={this.bidUpdate.bind(this)}
                    getValues={this.getValues.bind(this)}
                    cancelModal={this.cancelModal.bind(this)}
                />

                <ShowBids openModal={this.state.open && this.state.showbidsFrm}
                    productBidList={this.props.productBidList}
                    cancelModal={this.cancelModal.bind(this)} />
            </div>
        )
    }
}

// this tells what action should expose on props bindActionCreators is used to
// bind all actions at once
function mapStateToProps(state, ownProps) {
    return {
        currentBidData: state.productReducer.currentBidData,
        productList: state.productReducer.productList,
        productBidList: state.productReducer.productBidList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);