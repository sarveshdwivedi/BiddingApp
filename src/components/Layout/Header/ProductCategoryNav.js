import React from 'react';
import { Link } from 'react-router';

import './ProductCategoryNav.css';

export default function ProductNav() {

    const rowStyle = {
        backgroundColor: '#223E6E'
    };
    const linkStyle = {
        color: 'white',
        fontWeight: 'bold',
        textDecoration: 'none'
    };

    // product categories
    const categories = [
        { text: 'Product', href: '/product' }
    ];

    const categoryNav = categories.map((category, index) =>
        <li key={index}>
            <Link to={category.href} style={linkStyle}>{category.text}</Link>
        </li>
    );

    return (
        <nav style={rowStyle}>
            <ul className="product-category-nav">
                {categoryNav}
            </ul>
            
        </nav>
    );
}