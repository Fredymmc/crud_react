import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ( {getUsers, userSelected, selectUser} ) => {


    const { handleSubmit, register, reset } = useForm();

    const emptyUser = { email: "", 
                        password: "", 
                        first_name: "", 
                        last_name: "", 
                        birthday: "" 
                    }

    useEffect(() => {
        if (userSelected) {
          reset(userSelected);
        } else {
          reset(emptyUser);
        }
      }, [userSelected]);

    const submit = (data) => {        

        if (userSelected) {
            axios
              .put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
              .then(() => {
                getUsers();
                selectUser(null);
              });
          } else {
            axios.post("https://users-crud.academlo.tech/users/", data).then(() => {
                getUsers();
              reset(emptyUser);
            });
          }

    }

    return (
      <div className="form_container">
        <form onSubmit={handleSubmit(submit)}>
            <div className="input-container">
            <i className="fa-sharp fa-solid fa-user"></i>

                {/* <label htmlFor="first_name">First name</label> */}
                <input 
                type="text" 
                id="first_name" 
                placeholder='First name'
                {...register("first_name")} />
                {/* <label htmlFor="last_name">Last name</label> */}
                <input 
                type="text" 
                id="last_name" 
                placeholder='Last name'
                {...register("last_name")} />
                
            </div>
            <div className="input-container">
            {/* <label htmlFor="email">Email</label> */}
            <i className="fa-solid fa-envelope"></i>
                <input 
                type="email" 
                id="email" 
                placeholder='email'
                {...register("email")} />
            </div>
            <div className="input-container">
            {/* <label htmlFor="password">Password</label> */}
            <i className="fa-solid fa-unlock"></i>
                <input 
                type="password" 
                id="password" 
                placeholder='password'
                {...register("password")} />
            </div>
            <div className="input-container">
                
            </div>
            <div className="input-container">
                {/* <label htmlFor="birthday">birthday</label> */}
                <i className="fa-regular fa-calendar"></i>
                <input 
                type="date" 
                id="birthday" 
                {...register("birthday")} />
                <br />
                <button> <i className="fa-solid fa-paper-plane"></i>  Submit</button>
            </div>

        </form>
        </div>
    );
};

export default UsersForm;