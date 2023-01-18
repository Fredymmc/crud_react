import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import ProductsForm from './components/ProductsForm'

function App() {

  
  const productsListDefault = [
    {
      id: 1,
      name: "iphone",
      category: "smartphone",
      price: 200,
      isAvailable: true
    },
    {
      id: 2,
      name: "samsung",
      category: "smartphone",
      price: 100,
      isAvailable: true
    }

  ]

  const [ productsList, setProductslist ] = useState(productsListDefault); 
  const [ productSelected, setProductSelected ] = useState(null); 


  const addProduct = (product) => {
    // alert(product.name);
    setProductslist([...productsList, product]);    
  }

  const deleteProduct = (productDelete) => {
    const filteredProducts = productsList.filter(product => product.id !== productDelete.id)
    setProductslist(filteredProducts);    
  }

  const selectProduct = (product) => {
    setProductSelected(product);
    // setProductslist([...productsList, product]);    
  }

  const updateProduct = (product) => {
    product.id = productSelected.id;
    const index = productsList.findIndex(
      (product) => product.id === productSelected.id
    );
    productsList[index] = product;
    setProductslist([...productsList]);
    setProductSelected(null);
  };


  return (
    <div className="App">     
    
    <ProductsForm 
    addProduct={addProduct} 
    productSelected={productSelected}  
    updateProduct={updateProduct}  />
    <ProductList 
      productsList={productsList}
      deleteProduct={deleteProduct}  
      selectProduct={selectProduct}  />
    </div>
  )
}

export default App
