import React, { useState } from 'react';


const ProductsForm = () => {

    const [ title, SetTitle ] = useState("");
    const [ description, SetDescription ] = useState("");
    const [ isCompleted, SetIsCompleted ] = useState(false);



    const submit = e => {
        e.preventDefault();
        const product = {
            id: Date.now(),
            title: title,
            description: description,
            isCompleted: isCompleted
        }
        console.log(product);
    }

    return (
        <div className="form_container">
        <form onSubmit={submit} >
            <div className="input_container">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={title} onChange={ e => SetTitle(e.target.value)} />
            </div>

            <div className="input_container">
            <label htmlFor="description">Description</label>
            <textarea type="text" id="description" rows="5" cols="20" value={description} onChange={ e => SetDescription(e.target.value)}/>
            </div>
                      
            
            <div className="input_container">
            <label htmlFor="isCompleted">is Completed?</label>
            <input 
            type="checkbox" 
            id="isCompleted" 
            checked={isCompleted} 
            onChange={ e => SetIsCompleted(e.target.checked)} />
            </div>

            <button className="button_form" > submit </button>

        </form>
        </div>
    );
};

export default ProductsForm;