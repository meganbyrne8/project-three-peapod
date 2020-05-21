import React from 'react'
import "./ShoppingList.css"
import Layout from "./shared/Layout"
import create from "./create.png"
import BackMenuButton from "./ProductItemImages/BackMenuButton.png"


function ShoppingList() {
    return (
        <Layout>
        <div className="shopping-bar">
           <div className="click-back-button">
              <img src={BackMenuButton} className="back-button" />
            </div>
           <h3>Shopping List</h3> 
        </div>

        <div className="createNew">
            <p>Create New List</p>
            <form className="essentials">
            <input
                className="essentials-input"
                value="Essentials, etc."
                name="Search"
                placeholder="Search"
                type="text"
                />
                <img src={create} alt="create" className="create" />
             </form>
        </div>   

        <div className="create-a-list">
            <h2>Create a List</h2>
            <hr className="line"/>
            <br/>
            <p>Create a new list by entering a list name and </p>
            <h4>clicking the Create button in the left panel</h4>
            </div> 
        </Layout>
    )
}


export default ShoppingList