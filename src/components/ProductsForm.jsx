import React, { useEffect, useState } from 'react';


const ProductsForm = ( {addProduct, productSelected, updateProduct} ) => {

    const [ name, setName ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ isAvailable, setIsAvailable] = useState(false);            
    useEffect(() => {
        if (productSelected !== null) {            
            setName(productSelected.name);
            setCategory(productSelected.category);
            setPrice(productSelected.price);
            setIsAvailable(productSelected.isAvailable)
        } else {
            reset()
          }

    }, [productSelected])


    const submit = (e) => {
        e.preventDefault();
        const product = {
          id: Date.now(),
          name: name,
          category: category,
          price: price,
          isAvailable: isAvailable
        };
        if (productSelected) {
          updateProduct(product);
        } else {
          addProduct(product);
          reset()
        }
      };

    const reset = () => {
      setName("");
      setCategory("");
      setPrice("");
      setIsAvailable(false);
    }
   
    return (
        
        <form onSubmit={submit} >
            <div className="input_container">
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={ (e) => setName(e.target.value)} />
            </div>

            <div className="input_container">
            <label htmlFor="category">Category</label>
            <input 
            type="text" 
            id="category" 
            value={category} 
            onChange={ (e) => setCategory(e.target.value)} />
            </div>

            <div className="input_container">
            <label htmlFor="price">Price</label>
            <input 
            type="number" 
            id="price" 
            value={price} 
            onChange={ (e) => setPrice(e.target.value)} />
            </div>
                      
            
             <div className="input-container">
            <label htmlFor="isAvailable">Is Available? </label>
            <input
            type="checkbox"
            id="isAvailable"
            checked={isAvailable}
            onChange={(e) => setIsAvailable(e.target.checked)}  />
            </div>            

            <button className="button_form" > submit </button>

        </form>
        
    );
};

export default ProductsForm;