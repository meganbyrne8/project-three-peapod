import React from 'react'
import "./ShoppingList.css"

function ShoppingList() {
    return (
        <>
        <div>
           <h1>SHOPPING LIST</h1> 
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
                <button className="create-button"><strong>Create</strong></button>
             </form>
        </div>   
        <div className="create-a-list">
            <h2>Create a List</h2>
            <p>Create a new list by entering a list name and clicking the Create button in the left panel</p>
            </div> 
        </>
    )
}


export default ShoppingList