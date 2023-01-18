import React from 'react';

const ProductList = ( {productsList, deleteProduct, selectProduct} ) => {
    return (
        <div className="products-list">
            <h2>Product List</h2>
            <br />
            

            <ul>
                {productsList.map(product => (
                    <li key={product.id} >
                        <h4> {product.name} </h4>
                        <div> Category <b> {product.category} </b>   </div>
                        <div> Price <b> {product.price} </b>   </div>                        
                        <div> <b>Is Available: </b> {product.isAvailable?.toString()}</div>
                        <button 
                        className="button_d"
                        onClick={ () =>  deleteProduct(product) }
                        > Del  </button>
                        <button 
                        className="button_d"
                        onClick={ () => selectProduct(product) }
                        > Select  </button>
                    </li>
                ) )}
            </ul>
        </div>
    );
};

export default ProductList;