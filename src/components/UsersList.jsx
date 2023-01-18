import React from 'react';
import axios from 'axios';

const UsersList = ({userList, selectUser, getUsers}) => {
    const carsListOrd = userList.sort((a, b) => a.first_name.localeCompare(b.first_name));
    
    const deleteUser = (user) => {        
        axios
          .delete(`https://users-crud.academlo.tech/users/${user.id}/`)
          .then(() => getUsers());
      };

    return (
        <div className="user-list">

            <h2 className="title_cards" >new users</h2>
            <div className="line_list"> </div>
            <ul className="card_container">
                {carsListOrd.map((user) => (
                    <li key={user.id} className="card">                        
                    <p>
                         {user.first_name} {user.last_name}
                    </p>
                    <ul>
                         <li className="email_list" >                            
                            {user.email}
                        </li>
                         <li className="birthday_list">
                            <div>
                         <i className="fa-regular fa-calendar"></i>
                            {user.birthday}
                            </div>
                            <div>
                            <button className="button-list" onClick={() => selectUser(user)}> <i className="fa-solid fa-pen-to-square icon1"> </i></button>
                            <button className="button-list" onClick={() => deleteUser(user)}> <i className="fa-solid fa-trash icon2"> </i> </button>
                            </div>
                         </li>
                        </ul>
            
                       
                    </li>
                ))
            }
         </ul>
        </div>
    );
};

export default UsersList;